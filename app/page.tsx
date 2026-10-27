
import "./globals.css";
import TransitionLink from "./components/TransitionLink";
import {
  Anton,
  Cormorant_Garamond,
  Mrs_Saint_Delafield,
} from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const cormorant = Cormorant_Garamond({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const script = Mrs_Saint_Delafield({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata = {
  title: "Portfolio",
  description: "Portofolio pribadi",
};

/* ================== DATA ================== */

const data = {
  year: "2021-2026",
  title: "PORTFOLIO",
  name: "MOH YUSUP N.H, S.Kom",
  photo: "/images/poto.png",
};

const navItems = [
  { label: "About Me", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Organization", href: "/organization" },
  { label: "Project", href: "/project" },
  { label: "Jurnal", href: "/jurnal" },
  { label: "HKI", href: "/hki" },
  { label: "Certificate", href: "/certificate" },
  { label: "Sertifikat Seminar", href: "/sertifikat-seminar" },
  { label: "Contact", href: "/contact" },
];

const marqueeItems = [
  "Education",
  "Learning Media Development",
  "Creative & Digital Content",
];

/* ================== ICON ================== */

function AsteriskIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11 2h2v7.6l6.6-3.8 1 1.7L14 11.3l6.6 3.8-1 1.7-6.6-3.8V22h-2v-9l-6.6 3.8-1-1.7L10 11.3 3.4 7.5l1-1.7L11 9.6z" />
    </svg>
  );
}

/* ================== HALAMAN UTAMA ================== */

export default function HomePage() {
  const marqueeLoop = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ];

  return (
    <main
      className={`home-page ${anton.variable} ${cormorant.variable} ${script.variable}`}
    >
      <div className="home-container">
        {/* Navbar */}
        <nav
          className="home-navbar"
          aria-label="Navigasi utama"
        >
          {navItems.map((item) => (
            <TransitionLink
              key={item.label}
              href={item.href}
              className="home-nav-item"
            >
              {item.label}
            </TransitionLink>
          ))}
        </nav>

        {/* Hero */}
        <section className="home-hero">
          <span className="home-year">{data.year}</span>

          {/* Tulisan di belakang foto */}
          <h1 className="home-title">{data.title}</h1>

          {/* Foto di depan tulisan */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.photo}
            alt={data.name}
            className="home-photo"
          />

          {/* Nama */}
          <span className="home-name">{data.name}</span>
        </section>
      </div>

      {/* Strip berjalan */}
      <div className="home-marquee">
        <div className="home-marquee-track">
          {marqueeLoop.map((text, i) => (
            <span
              key={`${text}-${i}`}
              className="home-marquee-item"
            >
              <AsteriskIcon />
              {text}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
