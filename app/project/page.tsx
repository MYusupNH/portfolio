
import "./project.css";
import Navbar from "../components/Navbar";
import ProjectSlider from "./ProjectSlider";

/* ================== TIPE DATA ================== */
type Website = {
  name: string;
  category: string;
  description: string;
  screenshot: string;
  tech: string[];
  url: string;
  repo?: string;
};

/* ================== DATA PROJECT ================== */
const websites: Website[] = [
  {
    name: "Website Desa Sukamanis",
    category: "Web Development",
    description:
      "Mengembangkan website desa untuk mendukung penyampaian informasi dan pelayanan administrasi secara digital. Proyek ini berfokus pada penyajian informasi desa dan pengelolaan data agar lebih mudah diakses oleh masyarakat.",
    screenshot: "/images/project/sukamanis.jpeg",
     tech: ["Laravel", "PHP", "MySQL"],
    url: "https://desa-sukamanis.com/",
  },
  {
    name: "Website SDN 1 Gunungbatu",
    category: "Web Development",
    description:
      "Membangun website sekolah sebagai media informasi digital yang menyajikan profil sekolah, berita, galeri, dan informasi pendidikan untuk membantu masyarakat mengenal lingkungan sekolah.",
    screenshot: "/images/project/sd.jpeg",
    tech: ["Next.js", "React", "CSS"],
    url: "https://sdn1-gunung-batu.com/",
  },
  {
    name: "Website Desa Pangumbahan",
    category: "Web Development",
    description:
      "Mengembangkan website desa untuk menyajikan informasi profil, berita, galeri, dan potensi desa. Website ini dirancang untuk membantu penyampaian informasi desa serta memudahkan pengelolaan konten.",
    screenshot: "/images/project/pangumbahan.jpeg",
    tech: ["Laravel", "PHP", "MySQL"],
    url: "https://desa-pangumbahan.com/",
  },
  {
    name: "Website Desa Undrus Binangun",
    category: "Personal Project",
    description:
      "Mengembangkan website resmi desa sebagai sarana penyediaan informasi publik dan mendukung digitalisasi administrasi desa. Website ini dilengkapi dengan fitur profil desa, berita, galeri, potensi desa, autentikasi pengguna, serta dashboard admin untuk mengelola konten website.",
    screenshot: "/images/project/undrus.jpeg",
    tech: ["Next.js", "TypeScript", "CSS"],
    url: "",
  },
];

/* ================== BANTUAN ================== */
const hostOf = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

/* Membagi project menjadi 2 project per slide */
function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];

  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }

  return out;
}

/* ================== KARTU PROJECT ================== */
function WebsiteCard({
  site,
  side,
}: {
  site: Website;
  side: "left" | "right";
}) {
  return (
    <article className={`pj-card ${side}`}>
      {/* Mockup browser */}
      <div className="pj-card-browser">
        <div className="pj-card-bar">
          <i style={{ background: "#ff5f57" }} />
          <i style={{ background: "#febc2e" }} />
          <i style={{ background: "#28c840" }} />

          <span>{hostOf(site.url)}</span>
        </div>

        <div
          className="pj-card-shot"
          role="img"
          aria-label={`Tampilan ${site.name}`}
          style={{
            backgroundImage: `url("${site.screenshot}")`,
          }}
        />
      </div>

      {/* Informasi project */}
      <div className="pj-card-info">
        <div className="pj-card-head">
          <h3 className="pj-card-name">{site.name}</h3>

          <span className="pj-web-cat">{site.category}</span>
        </div>

        <p className="pj-card-desc">{site.description}</p>

        {/* Teknologi */}
        <div className="pj-web-tech">
          {site.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {/* Tombol */}
        <div className="pj-web-actions">
          <a
            className="pj-btn"
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Kunjungi Website
          </a>

          {site.repo && (
            <a
              className="pj-btn ghost"
              href={site.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ================== SLIDE PROJECT ================== */
function PairSlide({ sites }: { sites: Website[] }) {
  return (
    <>
      <h2 className="pj-heading">PROJECT</h2>

      {sites.length > 1 && (
        <div
          className="pj-divider"
          style={{ left: "50%" }}
        />
      )}

      {sites.map((site, index) => (
        <WebsiteCard
          key={site.name}
          site={site}
          side={index === 0 ? "left" : "right"}
        />
      ))}
    </>
  );
}

/* ================== HALAMAN PROJECT ================== */
export default function ProjectPage() {
  const pairs = chunk(websites, 2);

  return (
    <main className="pj-page">
      <div className="pj-container">
        <Navbar />
      </div>

      <ProjectSlider interval={6000}>
        {pairs.map((sites) => (
          <PairSlide
            key={sites.map((site) => site.name).join("|")}
            sites={sites}
          />
        ))}
      </ProjectSlider>
    </main>
  );
}
