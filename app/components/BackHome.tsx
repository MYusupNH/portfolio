import Link from "next/link";

export default function BackHome() {
  return (
    <Link href="/" className="back-home" aria-label="Kembali ke halaman depan">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M11 18l-6-6 6-6" />
      </svg>
      Kembali ke Beranda
    </Link>
  );
}