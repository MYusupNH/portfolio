import "./certificate.css";
import Navbar from "../components/Navbar";
import CertificateList, { type Certificate } from "./CertificateList";

/* ================== DATA (tambah di sini) ================== */
const certificates: Certificate[] = [
  {
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik",
    date: "Februari 2024",
    image: "/images/certificate/setifikat2.jpg",
    link: "https://link-verifikasi-1.com", // boleh dihapus
  },
  {
    title: "Sertifikasi Analis Program",
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "Agustus 2024",
    image: "/images/certificate/serifikat1.jpg",
  },
    {
    title: "TTOEFL TEST PREDICTION",
    issuer: "WEBSTER ENGLISH COURSE",
    date: "februari 2026",
    image: "/images/certificate/sertifikat4.jpg",
  },
  {
    title: "TOEFL PREDICTION TEST",
    issuer: "Lembaga Bahasa Universitas Bina Sarana Informatika",
    date: "Maret 2025",
    image: "/images/certificate/sertifikat3.jpg",
  },

];

/* ================== HALAMAN ================== */
export default function CertificatePage() {
  return (
    <main className="ct-page">
      <div className="ct-container">
        <Navbar />

        <h2 className="ct-heading">CERTIFICATE</h2>
        <p className="ct-sub">{certificates.length} sertifikat · klik gambar untuk memperbesar</p>

        <CertificateList items={certificates} />
      </div>
    </main>
  );
}