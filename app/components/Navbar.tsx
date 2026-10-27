
"use client";

import "./navbar.css";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";

const navItems = [
  { label: "About Me", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Organization", href: "/organization" },
  { label: "Project", href: "/project" },
  { label: "Jurnal", href: "/jurnal" },
  { label: "HKI", href: "/hki" },
  { label: "Certificate", href: "/certificate" },
 { label: "Seminar Certificates", href: "/sertifikat-seminar" },
  { label: "Contact", href: "/contact" },
];

function HomeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="site-navbar" aria-label="Navigasi utama">
      <TransitionLink
        href="/"
        aria-label="Beranda"
        className={`site-nav-home ${
          pathname === "/" ? "active" : ""
        }`}
      >
        <HomeIcon />
      </TransitionLink>

      <div className="site-nav-menu">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={`site-nav-item ${
                isActive ? "active" : ""
              }`}
            >
              {item.label}
            </TransitionLink>
          );
        })}
      </div>
    </nav>
  );
}
