import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import NativeBanner from "@/components/ads/NativeBanner";
import { openSmartlink } from "@/lib/smartlink";

/* =========================
   🔹 AUTO SEO GENERATOR
========================= */

// Base keyword Indonesia (high intent)
const SEO_KEYWORDS = [
  "angka keberuntungan",
  "angka hoki",
  "angka rezeki",
  "nominal saldo cantik",
  "angka hoki weton",
  "angka hoki berdasarkan tanggal lahir",
  "angka hoki populer",
  "id generator",
  "pola gacor",
  "Situs gacor",
];

// Long-tail modifier (natural)
const SEO_MODIFIERS = [
  "hari ini",
  "terbaru",
  "paling dicari",
  "versi indonesia",
  "menurut kepercayaan",
  "yang sering dipakai",
  "populer",
];

// Auto-generate SEO pages
function generateSeoPages() {
  const pages: Record<
    string,
    {
      title: string;
      description: string;
      keywords: string[];
      paragraphs: string[];
    }
  > = {};

  SEO_KEYWORDS.forEach((keyword) => {
    SEO_MODIFIERS.forEach((modifier) => {
      const slug = `${keyword} ${modifier}`
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");

      pages[slug] = {
        title: `${keyword} ${modifier} – Generator Angka Populer Indonesia`,
        description: `Cari ${keyword} ${modifier}? Gunakan pola angka populer yang sering dipercaya dan digunakan di Indonesia.`,
        keywords: [
          `${keyword} ${modifier}`,
          keyword,
          `${keyword} indonesia`,
        ],
        paragraphs: [
          `${keyword} ${modifier} sering dipercaya memiliki pengaruh terhadap keputusan dan keberuntungan.`,
          `Di Indonesia, banyak orang memilih angka tertentu berdasarkan kebiasaan, psikologi, dan kepercayaan populer.`,
          `Menggunakan generator angka membantu mendapatkan kombinasi yang terlihat lebih rapi dan meyakinkan.`,
          `Meskipun tidak bersifat pasti, pola angka sering digunakan untuk meningkatkan rasa percaya diri.`,
        ],
      };
    });
  });
  return pages;
}

// 🔥 AUTO CONTENT
const SEO_CONTENT = generateSeoPages();

/* =========================
   PAGE COMPONENT
========================= */

export default function SeoPage() {
  const { slug } = useParams();
  const content = SEO_CONTENT[slug || ""];

  if (!content) {
    return (
      <div className="container max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-xl font-semibold mb-4">
          Halaman tidak ditemukan
        </h1>
        <Link to="/" className="text-primary hover:underline">
          Kembali ke Generator
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container max-w-2xl mx-auto px-4 pb-16">
        <Header />

        {/* SEO Title */}
        <h1 className="text-2xl font-bold mt-6 mb-4">
          {content.title}
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-6">
          {content.description}
        </p>

        {/* CONTENT */}
        <div className="space-y-4 text-sm leading-relaxed">
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 🔥 Native Ad – HOT AREA */}
        <div className="my-8">
          <p className="text-xs text-muted-foreground mb-2">
            Rekomendasi
          </p>
          <NativeBanner />
        </div>

        {/* CTA Generator */}
        <div className="glass-card rounded-xl p-6 text-center mt-8">
          <h2 className="font-semibold mb-2">
            Gunakan Generator Angka Populer
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Dapatkan kombinasi angka yang terlihat lebih rapi dan meyakinkan.
          </p>

          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium"
          >
            Generate Sekarang →
          </Link>
        </div>

        {/* 💰 Smartlink Fallback */}
        <div className="text-center mt-8">
          <button
            onClick={openSmartlink}
            className="text-xs text-muted-foreground hover:text-primary"
          >
            🎁 Lihat rekomendasi populer hari ini →
          </button>
        </div>
      </div>
    </div>
  );
}