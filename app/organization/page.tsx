import "./organization.css";
import Navbar from "../components/Navbar";

/* ================== DATA (ubah di sini) ================== */
const organizations = [
  {
    org: "HIMAIF ",
    period: "Jan - Des 2023",
    unit: "Prodi INFORMATIKA",
    division: "Divisi Koordinator Kewirausahaan",
    duties: [
      "Membantu merencanakan dan mempersiapkan berbagai kegiatan serta acara mahasiswa yang diselenggarakan oleh HIMAIF.",
      "Berkoordinasi dengan anggota divisi dan panitia untuk mendukung persiapan kegiatan.",
      "Membantu menyiapkan kebutuhan perlengkapan dan operasional acara.",
      "Berpartisipasi dalam evaluasi kegiatan bersama anggota panitia setelah acara selesai.",
      "Menjalin komunikasi dan kerja sama dengan anggota himpunan untuk mencapai tujuan kegiatan.",
    ],
    screenshot: "/images/hima.jpeg",
    document: "/images/1.jpeg",
    caption: "Koordinasi dan Pelaksanaan Kegiatan Mahasiswa",
  },
];

/* ================== HALAMAN ================== */
export default function OrganizationPage() {
  return (
    <main className="org-page">
      <div className="org-container">
        <Navbar />
      </div>

      <div className="org-scroll">
        {organizations.map((o) => (
          <section key={o.org} className="org-stage">
            <h2 className="org-heading">ORGANIZATION</h2>

            {/* Pill organisasi + periode */}
            <div className="org-period">
              <span className="org-play" aria-hidden="true" />
              <span>{o.period}</span>
            </div>
            <div className="org-name">{o.org}</div>

            <p className="org-unit">{o.unit}</p>

            {/* Kartu deskripsi */}
            <div className="org-card">
              <h3 className="org-card-title">{o.division}</h3>
              <ul className="org-duties">
                {o.duties.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>

            {/* Gambar bukti kegiatan */}
            <div
              className="org-shot"
              role="img"
              aria-label="Screenshot pengelolaan berkas"
              style={{ backgroundImage: `url(${o.screenshot})` }}
            />
            <div
              className="org-doc"
              role="img"
              aria-label="Dokumen berita acara"
              style={{ backgroundImage: `url(${o.document})` }}
            />

            <div className="org-caption">
              <span>{o.caption}</span>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}