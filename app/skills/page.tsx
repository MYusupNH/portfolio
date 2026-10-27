import "./skills.css";
import Navbar from "../components/Navbar";

/* ================== DATA CURRICULUM VITAE ================== */
const cv = {
  heading: "CURRICULUM VITAE",
  qr: "/images/skills/qr.png",
  link: encodeURI("/images/skills/cv Moh Yusup Nurhadi (4).pdf"),
  buttonLines: ["Click or scan this", "to see my curriculum vitae"],
  interestTitle: "Interest & Expertise",
  interests: [
    "Web Development",
    "Artificial Intelligence",
    "Computer Vision & Deep Learning",
    "UI/UX Design",
    "Database Management",
    "Software Testing & API Testing",
  ],
};

/* ================== HARD SKILLS ================== */
const hardskills = [
  "HTML & CSS",
  "JavaScript",
  "PHP & Laravel",
  "Next.js",
  "MySQL Database",
  "REST API Development",
  "API Testing",
  "UI/UX Design",
  "Computer Vision",
  "Data Analysis",
  "Microsoft Office",
];

/* ================== SOFT SKILLS ================== */
const softskills = [
  "Komunikasi",
  "Kerja Sama dan Kolaborasi",
  "Pemecahan Masalah",
  "Berpikir Kritis",
  "Manajemen Waktu",
  "Ketelitian",
  "Kemampuan Beradaptasi",
  "Disiplin dan Tanggung Jawab",
];

/* ================== SOFTWARE & TOOLS ================== */
const software = [
  { name: "Visual Studio Code", icon: "/images/software/vscode.png" },
  { name: "Laravel", icon: "/images/software/laravel.jpg" },
  { name: "Next.js", icon: "/images/software/nextjs.jpg" },
  { name: "JavaScript", icon: "/images/software/JavaScript.jpg" },
  { name: "MySQL", icon: "/images/software/MySQL.jpg" },
  { name: "Postman", icon: "/images/software/Postman.jpg" },
  { name: "GitHub", icon: "/images/software/github.jpg" },
  { name: "Figma", icon: "/images/software/Figma.jpg" },
  { name: "Microsoft Office", icon: "/images/software/Microsoft.jpg" },
];

/* ================== KOMPONEN KECIL ================== */
function ChipGroup({ title, items, className }) {
  return (
    <div className={`sk-group ${className}`}>
      <div className="sk-label">{title}</div>

      <div className="sk-chips">
        {items.map((item) => (
          <span key={item} className="sk-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================== HALAMAN SKILLS ================== */
export default function SkillsPage() {
  return (
    <main className="sk-page">
      <div className="sk-container">
        <Navbar />
      </div>

      <section className="sk-stage">
        {/* ===== Kiri: Curriculum Vitae ===== */}
        <aside className="sk-left">
          <div className="sk-cv-head">
            <div className="sk-cv-arrow" />
            <h2 className="sk-cv-title">{cv.heading}</h2>
          </div>

          <div
            className="sk-qr"
            role="img"
            aria-label="QR code curriculum vitae"
            style={{ backgroundImage: `url(${cv.qr})` }}
          />

          <a
            href={cv.link}
            target="_blank"
            rel="noreferrer"
            className="sk-cv-btn"
          >
            {cv.buttonLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </a>

          <div className="sk-interest">
            <h3 className="sk-interest-title">{cv.interestTitle}</h3>

            <ul className="sk-interest-list">
              {cv.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ===== Kanan: Skills ===== */}
        <div className="sk-right">
          <ChipGroup title="Hard Skills" items={hardskills} className="sk-hard" />
          <ChipGroup title="Soft Skills" items={softskills} className="sk-soft" />

          <div className="sk-group sk-soft-ware">
            <div className="sk-label">Software & Tools</div>

            <div className="sk-software">
              {software.map((tool) => (
                <div key={tool.name} className="sk-tool">
                  <div
                    className="sk-tool-icon"
                    role="img"
                    aria-label={tool.name}
                    style={{ backgroundImage: `url(${tool.icon})` }}
                  />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}