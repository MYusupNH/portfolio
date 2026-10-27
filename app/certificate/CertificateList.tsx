"use client";

import { useEffect, useState } from "react";

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
};

export default function CertificateList({ items }: { items: Certificate[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const current = open !== null ? items[open] : null;

  // Tutup dengan Esc, geser dengan panah, dan kunci scroll saat pratinjau terbuka
  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, items.length]);

  return (
    <>
      <div className="ct-grid">
        {items.map((c, i) => (
          <article key={c.title} className="ct-card">
            <button
              type="button"
              className="ct-thumb"
              onClick={() => setOpen(i)}
              aria-label={`Perbesar ${c.title}`}
              style={{ backgroundImage: `url(${c.image})` }}
            >
              <span className="ct-zoom" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
                </svg>
              </span>
            </button>

            <div className="ct-body">
              <h3 className="ct-title">{c.title}</h3>
              <p className="ct-issuer">{c.issuer}</p>

              <div className="ct-foot">
                <span className="ct-date">{c.date}</span>
                {c.link && (
                  <a className="ct-link" href={c.link} target="_blank" rel="noreferrer">
                    Lihat
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pratinjau besar */}
      {current && (
        <div
          className="ct-modal"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setOpen(null)}
        >
          <div className="ct-modal-box" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.image} alt={current.title} className="ct-modal-img" />
            <p className="ct-modal-cap">
              <b>{current.title}</b> · {current.issuer} · {current.date}
            </p>
          </div>

          <button type="button" className="ct-modal-close" onClick={() => setOpen(null)} aria-label="Tutup">
            ✕
          </button>
        </div>
      )}
    </>
  );
}