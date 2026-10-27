
import "./seminar-certificates.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Seminar Certificates | Portfolio",
  description:
    "A collection of seminar, webinar, and training certificates.",
};

const certificates = [
  {
    id: 1,
    title: "Sertifikat Computer Specialist",
    category: "SEMINAR",
    year: "2023",
    image: "/images/sertifikat/sertifikat1.jpg",
  },
  {
    id: 2,
    title: "Sertifikat Data Science",
    category: "SEMINAR",
    year: "2021",
    image: "/images/sertifikat/sertifikat2.jpg",
  },
  {
    id: 3,
    title: "Sertifikat Panitia Wisuda",
    category: "Partisipasi Kepanitiaan",
    year: "2023",
    image: "/images/sertifikat/sertifikat3.jpg",
  },
  {
    id: 4,
    title: "Seminar Pendidikan",
    category: "SEMINAR",
    year: "2022",
    image: "/images/sertifikat/sertifikat4.jpg",
  },
  {
    id: 5,
    title: "Sertifikat Penerangan Hukum",
    category: "SEMINAR",
    year: "2022",
    image: "/images/sertifikat/sertifikat5.jpg",
  },
  {
    id: 6,
    title: "Sertifikat PKKMB",
    category: "SEMINAR",
    year: "2021",
    image: "/images/sertifikat/sertifikat6.jpg",
  },
  {
    id: 7,
    title: "Workshop Photography",
    category: "SEMINAR",
    year: "2024",
    image: "/images/sertifikat/sertifikat7.jpg",
  },
  {
    id: 8,
    title: "Seminar Tematik",
    category: "SEMINAR",
    year: "2021",
    image: "/images/sertifikat/sertifikat8.jpg",
  },
  {
    id: 9,
    title: "Seminar Wajib Entrepreneur",
    category: "SEMINAR",
    year: "2021",
    image: "/images/sertifikat/sertifikat9.jpg",
  },
  {
    id: 10,
    title: "Sertifikat Panitia LKBB",
    category: "Partisipasi Kepanitiaan",
    year: "2023",
    image: "/images/sertifikat/setifikat10.jpg",
  },
];

export default function CertificatePage() {
  return (
    <main className="ct-page">
      <div className="ct-container">
        <Navbar />

        <header className="ct-header">
          <h2 className="ct-heading">Seminar Certificates</h2>
          <p className="ct-sub">
            {certificates.length} sertifikat 
          </p>
        </header>

        <div className="seminar-grid">
          {certificates.map((certificate, index) => (
            <article className="seminar-card" key={certificate.id}>
              <div className="seminar-card-visual">
                <span className="seminar-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="seminar-certificate-image"
                  loading="lazy"
                />

                <span className="seminar-category">
                  {certificate.category}
                </span>
              </div>

              <div className="seminar-card-info">
                <span className="seminar-card-year">
                  {certificate.year}
                </span>

                <h3>{certificate.title}</h3>

                <div className="seminar-card-footer">
                  <span>PARTICIPATION RECORD</span>
                  <span className="seminar-card-arrow">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="seminar-note">
          Seminar and webinar certificates documenting my
          learning activities and professional development.
        </p>
      </div>

      <footer className="seminar-footer">
        <span>MOH YUSUP NH, S.Kom.</span>
        <span>LEARN · GROW · ACHIEVE</span>
      </footer>
    </main>
  );
}
