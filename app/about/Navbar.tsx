"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="site-navbar" aria-label="Navigasi utama">
      {!isHome && (
        <Link href="/" className="site-nav-home" aria-label="Kembali ke beranda" title="Kembali ke beranda">
          <HomeIcon />
        </Link>
      )}

      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`site-nav-item ${pathname === item.href ? "active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}