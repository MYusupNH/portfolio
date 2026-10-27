
import "./education.css";
import Navbar from "../components/Navbar";

/* ================== DATA PENDIDIKAN ================== */

const edu = {
  heading: "EDUCATION",
  logo: "/images/education/logo.png",
  major: "S1 Informatika",
  campus: "Universitas Bina Sarana Informatika",
  gpa: "IPK 3,83/4,00",
  period: "2021 - 2025",

  thesisLabel: "Undergraduate Thesis Project",

  thesisLines: [
    "DETEKSI KELELAHAN PADA PENGEMUDI MOBIL BERDASARKAN FACIAL LANDMARK",
    "MENGGUNAKAN YOLOv11 & CNN",
    "(CONVOLUTIONAL NEURAL NETWORK)",
  ],

  tags: [
    "YOLOv11",
    "CNN",
    "Computer Vision",
    "Deteksi real-time",
    "Prototipe website",
  ],

  laptop: "/images/education/laptop.png",
  caption: "Research & Development | Educational Media",
};

/* ================== DATA KOLASE FOTO ================== */

type Cell = {
  src: string;
  alt: string;
  size: "big" | "tall" | "one";
  focus?: string;
};

const collage: Cell[] = [
  {
    src: "/images/education/1234.jpeg",
    alt: "Foto wisuda bersama",
    size: "big",
    focus: "center 30%",
  },
  {
    src: "/images/education/123.jpeg",
    alt: "Foto wisuda",
    size: "tall",
    focus: "center 30%",
  },
  {
    src: "/images/education/12345.jpeg",
    alt: "Foto seminar",
    size: "one",
    focus: "center 35%",
  },
  {
    src: "/images/education/123456.jpeg",
    alt: "Foto seminar",
    size: "one",
    focus: "center 35%",
  },
];

/* ================== BANTUAN ================== */

const bg = (src: string) => `url("${encodeURI(src)}")`;

function CapIcon() {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="#e8890c"
      aria-hidden="true"
    >
      <path d="M24 2 2 11l22 9 22-9L24 2z" />
      <path d="M11 17v7c0 3 6 6 13 6s13-3 13-6v-7l-13 5-13-5z" />
      <rect x="43" y="12" width="2" height="14" />
      <circle cx="44" cy="27" r="2.4" />
    </svg>
  );
}

/* ================== HALAMAN EDUCATION ================== */

export default function EducationPage() {
  return (
    <main className="edu-page">
      <div className="edu-container">
        <Navbar />

        <h2 className="edu-heading">
          <CapIcon />
          <span>{edu.heading}</span>
        </h2>

        <div className="edu-layout">
          {/* Kiri: informasi pendidikan dan penelitian */}

          <section className="edu-text">
            <div className="edu-head">
              <div
                className="edu-logo"
                role="img"
                aria-label="Logo kampus"
                style={{
                  backgroundImage: bg(edu.logo),
                }}
              />

              <div className="edu-info">
                <p className="edu-major">{edu.major}</p>
                <p className="edu-campus">{edu.campus}</p>
                <p className="edu-gpa">{edu.gpa}</p>
              </div>

              <span className="edu-year">{edu.period}</span>
            </div>

            <div className="edu-line" />

            <div className="edu-thesis">
              <p className="edu-thesis-label">
                {edu.thesisLabel}
              </p>

              <p className="edu-thesis-title">
                {edu.thesisLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>

              <div className="edu-tags">
                {edu.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Gambar media penelitian */}

            <figure className="edu-laptop">
              <div
                className="edu-laptop-img"
                role="img"
                aria-label={edu.caption}
                style={{
                  backgroundImage: bg(edu.laptop),
                }}
              />

              <figcaption>{edu.caption}</figcaption>
            </figure>
          </section>

          {/* Kanan: kolase empat foto */}

          <section
            className="edu-collage"
            aria-label="Dokumentasi pendidikan"
          >
            {collage.map((photo) => (
              <div
                key={photo.src}
                className={`edu-cell ${photo.size}`}
                role="img"
                aria-label={photo.alt}
                style={{
                  backgroundImage: bg(photo.src),
                  backgroundPosition: photo.focus ?? "center",
                }}
              />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
