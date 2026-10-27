"use client";

import {
  Children,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
  type TouchEvent,
} from "react";

type Props = { children: ReactNode; interval?: number };

export default function ProjectSlider({ children, interval = 5000 }: Props) {
  const slides = Children.toArray(children);
  const count = slides.length;

  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [playing, setPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const go = (i: number) => setIndex(((i % count) + count) % count);

  // Hormati pengaturan "kurangi animasi" milik pengguna
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  // Pindah otomatis; timer diulang setiap kali slide berganti
  useEffect(() => {
    if (!playing || hovering || count < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearTimeout(id);
  }, [index, playing, hovering, count, interval]);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    const el = e.currentTarget;
    // Di layar kecil, slide bisa digeser ke samping: jangan bentrok dengan itu
    if (start === null || el.scrollWidth > el.clientWidth) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") go(index - 1);
    if (e.key === "ArrowRight") go(index + 1);
  };

  return (
    <div
      className="pj-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Daftar project"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="pj-scroll" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="pj-stage">
          <div className="pj-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((slide, i) => (
              <div key={i} className="pj-slide" aria-hidden={i !== index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>

      {count > 1 && (
        <div className="pj-controls">
          <button type="button" className="pj-ctrl" onClick={() => go(index - 1)} aria-label="Slide sebelumnya">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>

          <div className="pj-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`pj-dot ${i === index ? "active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Ke slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>

          <button type="button" className="pj-ctrl" onClick={() => go(index + 1)} aria-label="Slide berikutnya">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>

          <button
            type="button"
            className="pj-ctrl ghost"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Hentikan slide otomatis" : "Putar slide otomatis"}
            title={playing ? "Jeda" : "Putar"}
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4.5v15l13-7.5z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}