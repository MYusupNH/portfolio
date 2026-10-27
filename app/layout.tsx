
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moh. Yusup Nurhadi | Portfolio",
  description:
    "Portofolio Moh. Yusup Nurhadi, lulusan S1 Informatika Universitas Bina Sarana Informatika.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <div className="page-transition-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
