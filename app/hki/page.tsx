import "./hki.css";
import Navbar from "../components/Navbar";

/* ================== TIPE DATA ================== */
type Hki = {
  title: string;
  type: string;          // mis. "Hak Cipta", "Paten", "Desain Industri"
  category?: string;     // mis. "Program Komputer", "Karya Tulis"
  number: string;        // nomor pencatatan
  date: string;          // tanggal pencatatan / diterbitkan
  holder?: string;       // pemegang hak cipta
  inventors?: string;    // pencipta
  description?: string;
  image?: string;        // foto/scan surat pencatatan
  link?: string;         // link verifikasi / PDDIKTI / DJKI
  pdf?: string;          // file PDF di folder public, mis. "/hki/sertifikat-hki.pdf"
};

/* ================== DATA (ubah di sini) ================== */
const hkis: Hki[] = [
  {
    title: "SIMANIS (Sistem Informasi Surat Menyurat Desa Sukamanis",
    type: "Hak Cipta",
    category: "Program Komputer",
    number: "EC002025036994",
    date: "08 April 2025",
    holder: "Universitas Bina Sarana Informatika",
    inventors: "Siti Fauziah, Moh Yusup Nurhadi dkk",
    description:
      "Deskripsi singkat ciptaan ini: apa yang dihasilkan, kegunaannya, dan peranmu dalam pembuatannya.",
    image: "/images/hki/HKI.jpeg",
    link: "https://link-verifikasi-hki.go.id",
    pdf: "/hki/hki/HKI.pdf",
  },
];

/* ================== HALAMAN ================== */
export default function HkiPage() {
  return (
    <main className="hk-page">
      <div className="hk-container">
        <Navbar />

        <h2 className="hk-heading">HKI</h2>
        <p className="hk-sub">Hak Kekayaan Intelektual · {hkis.length} ciptaan tercatat</p>

        <div className="hk-list">
          {hkis.map((h) => (
            <article key={h.number} className="hk-card">
           {/* Surat pencatatan */}
            <div className="hk-doc">
              {h.image && (
             <img
           src={h.image}
          alt={`Surat pencatatan ${h.title}`}
          className="hk-doc-image"
               />
             )}
          </div>
              {/* Info */}
              <div className="hk-info">
                <div className="hk-tags">
                  <span className="hk-type">{h.type}</span>
                  {h.category && <span className="hk-cat">{h.category}</span>}
                </div>

                <h3 className="hk-title">{h.title}</h3>

                {/* Detail */}
                <dl className="hk-details">
                  <div>
                    <dt>Nomor Pencatatan</dt>
                    <dd>{h.number}</dd>
                  </div>
                  <div>
                    <dt>Tanggal</dt>
                    <dd>{h.date}</dd>
                  </div>
                  {h.holder && (
                    <div>
                      <dt>Pemegang Hak Cipta</dt>
                      <dd>{h.holder}</dd>
                    </div>
                  )}
                  {h.inventors && (
                    <div>
                      <dt>Pencipta</dt>
                      <dd>{h.inventors}</dd>
                    </div>
                  )}
                </dl>

                {h.description && <p className="hk-desc">{h.description}</p>}

                {/* Link (teks yang terlihat) */}
                {h.link && (
                  <div className="hk-url">
                    <span>Link verifikasi:</span>
                    <a href={h.link} target="_blank" rel="noreferrer">
                      {h.link}
                    </a>
                  </div>
                )}

                {/* Tombol */}
                <div className="hk-actions">
                  {h.link && (
                    <a className="hk-btn" href={h.link} target="_blank" rel="noreferrer">
                      Lihat Verifikasi
                    </a>
                  )}
                  {h.pdf && (
                    <a className="hk-btn ghost" href={h.pdf} target="_blank" rel="noreferrer">
                      Unduh Sertifikat
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}