import "./contact.css";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";

/* ================== DATA (ubah di sini) ================== */
const owner = {
  email: "m.yusupnh06@gmail.com",
  whatsapp: "6285810656384", // format internasional, tanpa + dan tanpa spasi
};

type Item = {
  key: string;
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const items: Item[] = [
  {
    key: "email",
    label: "Email",
    value: owner.email,
    href: `mailto:${owner.email}`,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: `+${owner.whatsapp}`,
    href: `https://wa.me/${owner.whatsapp}`,
    icon: (
      <svg {...iconProps}>
        <path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z" />
        <path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .7c-.8-.4-1.6-1.2-2-2l.7-1-1-2L9 9z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://www.linkedin.com/in/username",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 11v6M8 7.5v.01M12 17v-6M12 13c0-1.5 1-2 2-2s2.5.5 2.5 2.5V17" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    value: "@m_yusup_nh",
    href: "https://www.instagram.com/username",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "lokasi",
    label: "Lokasi",
    value: "Kp kadupugur, RT025/RW009, Desa Undurus Binangun, Kec Kadudampit, Kab Sukabumi, Jawa Barat, 43153",
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

/* ================== HALAMAN ================== */
export default function ContactPage() {
  return (
    <main className="cn-page">
      <div className="cn-container">
        <Navbar />

        <h2 className="cn-heading">CONTACT</h2>
        <p className="cn-sub"></p>

        <div className="cn-grid">
          {/* Kiri: kartu kontak */}
          <div className="cn-cards">
            {items.map((it) => {
              const body = (
                <>
                  <div className="cn-card-top">
                    {it.icon}
                    {it.href && <ArrowIcon />}
                  </div>
                  <hr />
                  <span className="cn-card-label">{it.label}</span>
                  <span className="cn-card-value">{it.value}</span>
                </>
              );

              return it.href ? (
                <a
                  key={it.key}
                  className="cn-card"
                  href={it.href}
                  target={it.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  {body}
                </a>
              ) : (
                <div key={it.key} className="cn-card static">
                  {body}
                </div>
              );
            })}
          </div>

          {/* Kanan: formulir pesan */}
          <div className="cn-form-wrap">
            <h3 className="cn-form-title">Kirim Pesan</h3>
            <p className="cn-form-note">Isi formulir, lalu pilih kirim lewat WhatsApp atau email.</p>
            <ContactForm email={owner.email} whatsapp={owner.whatsapp} />
          </div>
        </div>
      </div>
    </main>
  );
}