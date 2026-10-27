
import "./about.css";
import Navbar from "../components/Navbar";

/* ================== DATA PROFIL ================== */
const profile = {
  greeting: "Halo, perkenalkan!",
  name: "MOH. YUSUP NURHADI",
  badge: "Web Developer",
  tag: "AI Enthusiast",
  photo: "/images/pas poto.png",
  bio: [
    "Saya Moh. Yusup Nurhadi, lulusan **S1 Informatika** dari Universitas Bina Sarana Informatika dengan IPK **3,83**. Saya memiliki ketertarikan pada **pengembangan web**, **kecerdasan buatan (Artificial Intelligence)**, dan **pengolahan data**. Selama perkuliahan, saya telah mengembangkan beberapa proyek website dan sistem informasi serta melakukan penelitian di bidang kecerdasan buatan. Saya merupakan pribadi yang teliti, bertanggung jawab, dan memiliki semangat untuk terus belajar serta mengembangkan kemampuan dalam menerapkan teknologi untuk menyelesaikan berbagai permasalahan.",
  ],
};

/* ================== KONTAK ================== */
type ContactType = "email" | "linkedin" | "instagram" | "whatsapp";

const contacts: {
  type: ContactType;
  label: string;
  href: string;
}[] = [
  {
    type: "email",
    label: "m.yusupnh06@gmail.com",
    href: "mailto:m.yusupnh06@gmail.com",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/m-yusup-nur-hadi-b74a9a3b2",
  },
  {
    type: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/m_yusup_nh",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/62810656384",
  },
];

/* ================== TEKS BERJALAN ================== */
const marqueeItems = [
  "Web Development",
  "Artificial Intelligence",
  "Data Processing",
];

/* ================== PROPERTI IKON ================== */
const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ================== IKON KONTAK ================== */
const icons: Record<ContactType, React.ReactNode> = {
  email: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),

  linkedin: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v6M8 7.5v.01M12 17v-6M12 13c0-1.5 1-2 2-2s2.5.5 2.5 2.5V17" />
    </svg>
  ),

  instagram: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </svg>
  ),

  whatsapp: (
    <svg {...iconProps}>
      <path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z" />
      <path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .7c-.8-.4-1.6-1.2-2-2l.7-1-1-2L9 9z" />
    </svg>
  ),
};

/* ================== IKON PANAH ================== */
function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

/* ================== IKON BINTANG ================== */
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

/* ================== FORMAT TEKS TEBAL ================== */
function renderBold(text: string) {
  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index}>{part}</strong>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

/* ================== HALAMAN ABOUT ================== */
export default function AboutPage() {
  const marqueeLoop = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ];

  return (
    <main className="about-page">
      <div className="about-container">
        <Navbar />

        <section id="about" className="about-hero">
          {/* FOTO PROFIL */}
          <div className="about-photo-wrap">
            <div className="about-blob" />

            <img
              src={profile.photo}
              alt={profile.name}
              className="about-photo"
            />

            <span className="about-badge">{profile.badge}</span>
            <span className="about-tag">{profile.tag}</span>
          </div>

          {/* INFORMASI PROFIL */}
          <div className="about-intro">
            <div className="about-greeting">
              <i className="about-handle tl" />
              <i className="about-handle tr" />
              <i className="about-handle bl" />
              <i className="about-handle br" />

              {profile.greeting}
            </div>

            <h1 className="about-name">{profile.name}</h1>

            <div className="about-bio">
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{renderBold(paragraph)}</p>
              ))}
            </div>

            <div className="about-connect">
              <span>💬 LET&apos;S CONNECT‼️</span>
            </div>

            {/* KARTU KONTAK */}
            <div className="about-cards">
              {contacts.map((contact) => {
                const isMail = contact.type === "email";

                return (
                  <a
                    key={contact.type}
                    href={contact.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    className="about-card"
                    aria-label={contact.label}
                  >
                    <div className="about-card-top">
                      {icons[contact.type]}
                      <ArrowIcon />
                    </div>

                    <hr />

                    <span className="about-card-link">
                      {contact.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* TEKS BERJALAN */}
      <div className="about-marquee">
        <div className="about-marquee-track">
          {marqueeLoop.map((text, index) => (
            <span key={index} className="about-marquee-item">
              <AsteriskIcon />
              {text}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
