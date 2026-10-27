import "./jurnal.css";
import Navbar from "../components/Navbar";

/* ================== TIPE DATA ================== */
type Journal = {
  title: string;
  journal: string;       // nama jurnal
  year: string;
  volume?: string;       // mis. "Vol. 10, No. 2"
  authors?: string;
  abstract?: string;
  cover?: string;        // gambar halaman pertama artikel
  index?: string;        // mis. "SINTA 3", "Scopus Q3"
  doi?: string;          // link DOI
  link?: string;         // link artikel di website jurnal
  pdf?: string;          // file PDF di folder public, mis. "/jurnal/artikel-1.pdf"
};

/* ================== DATA (ubah di sini) ================== */
const journals: Journal[] = [
  {
    title: "Judul Artikel Jurnal Pertama",
    journal: "Deteksi Kelelahan Pengemudi Menggunakan YOLOv11 dan CNN Berbasis Facial Landmark",
    year: "2026",
    volume: "Vol.14 No.1 Maret 2026",
    authors: "Denny Pribadi1, Moh. Yusup Nurhadi2, Apip Supiandi3",
    abstract:
      "Penelitian ini mengembangkan sistem deteksi kelelahan pengemudi secara waktu nyata menggunakan YOLOv11 untuk mendeteksi wajah dan mata serta CNN untuk mengklasifikasikan kondisi mengantuk berdasarkan 68 titik penanda wajah (facial landmarks). Penelitian menggunakan 2.200 citra wajah yang diproses melalui normalisasi, augmentasi data, dan ekstraksi fitur menggunakan pustaka dlib. Hasil pengujian menunjukkan model YOLOv11 mencapai precision 92,9%, recall 93,1%, dan mAP50 97,4%, sedangkan model CNN memperoleh akurasi 75,65% dan skor F1 74,55%. Sistem ini berpotensi membantu mendeteksi kelelahan pengemudi dan memberikan peringatan dini untuk meningkatkan keselamatan berkendara.",
    cover: "/images/jurnal/jurnal1.jpeg",
    index: "SINTA 4",
    doi: "https://doi.org/10.31294/swabumi.v14i1.14007",
    link: "https://jurnal.bsi.ac.id/index.php/swabumi/article/view/14007/3362",
    pdf: "/images/jurnal/jurnal1.pdf",
  },
  {
    title: "Judul Artikel Jurnal Kedua",
    journal: "Analisis Perbandingan Efektifitas White-Box Testing dan Black-Box Testing",
    year: "2022",
    volume: "Vol.2 No.1 Juli 2022",
    authors: "Dede Wintana 1, Denny Pribadi 2, Moh Yusup Nurhadi3",
    abstract:
      "Penelitian ini bertujuan membandingkan efektivitas black-box testing dan white-box testing berdasarkan efisiensi waktu pengujian serta frekuensi penggunaannya. Metode yang digunakan adalah pengujian dan perbandingan waktu pelaksanaan kedua metode, termasuk waktu persiapan dan proses eksekusinya. Hasil penelitian menunjukkan bahwa black-box testing lebih efisien untuk pengujian dengan frekuensi rendah, sedangkan white-box testing lebih efisien untuk pengujian berulang dengan frekuensi tinggi.",
    cover: "/images/jurnal/jurnal2.jpeg",
    index: "SINTA 4",
    doi: "https://doi.org/10.31294/larik.v2i1.1382",
    link: "https://jurnal.bsi.ac.id/index.php/larik/article/view/1382/900",
  },
];

/* ================== HALAMAN ================== */
export default function JurnalPage() {
  return (
    <main className="jr-page">
      <div className="jr-container">
        <Navbar />

        <h2 className="jr-heading">JURNAL</h2>
        <p className="jr-sub">{journals.length} artikel ilmiah yang telah dipublikasikan</p>

        <div className="jr-list">
          {journals.map((j) => (
            <article key={j.title} className="jr-card">
              {/* Cover */}
              <div
                className="jr-cover"
                role="img"
                aria-label={`Cover ${j.title}`}
                style={j.cover ? { backgroundImage: `url(${j.cover})` } : undefined}
              />

              {/* Info */}
              <div className="jr-info">
                <div className="jr-tags">
                  <span className="jr-year">{j.year}</span>
                  {j.index && <span className="jr-index">{j.index}</span>}
                  {j.volume && <span className="jr-volume">{j.volume}</span>}
                </div>

                <h3 className="jr-title">{j.title}</h3>
                <p className="jr-journal">{j.journal}</p>
                {j.authors && <p className="jr-authors">{j.authors}</p>}
                {j.abstract && <p className="jr-abstract">{j.abstract}</p>}

                {/* Link jurnal (teks yang terlihat) */}
                {(j.link || j.doi) && (
                  <div className="jr-urls">
                    {j.link && (
                      <p>
                        <span>Link artikel:</span>
                        <a href={j.link} target="_blank" rel="noreferrer">
                          {j.link}
                        </a>
                      </p>
                    )}
                    {j.doi && (
                      <p>
                        <span>DOI:</span>
                        <a href={j.doi} target="_blank" rel="noreferrer">
                          {j.doi}
                        </a>
                      </p>
                    )}
                  </div>
                )}

                {/* Tombol */}
                <div className="jr-actions">
                  {j.link && (
                    <a className="jr-btn" href={j.link} target="_blank" rel="noreferrer">
                      Baca Artikel
                    </a>
                  )}
                  {j.pdf && (
                    <a className="jr-btn ghost" href={j.pdf} target="_blank" rel="noreferrer">
                      Unduh PDF
                    </a>
                  )}
                  {j.doi && (
                    <a className="jr-btn ghost" href={j.doi} target="_blank" rel="noreferrer">
                      DOI
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