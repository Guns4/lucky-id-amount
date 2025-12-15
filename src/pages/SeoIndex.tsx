import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import NativeBanner from "@/components/NativeBanner";

const SEO_KEYWORDS = [
  "angka keberuntungan",
  "angka hoki",
  "angka rezeki",
  "nominal saldo cantik",
  "angka hoki weton",
  "angka hoki berdasarkan tanggal lahir",
  "angka hoki populer",
];

const SEO_MODIFIERS = [
  "hari ini",
  "terbaru",
  "paling dicari",
  "versi indonesia",
  "menurut kepercayaan",
  "yang sering dipakai",
  "populer",
];

function generateSlugs() {
  const slugs: string[] = [];
  SEO_KEYWORDS.forEach((k) => {
    SEO_MODIFIERS.forEach((m) => {
      slugs.push(
        `${k} ${m}`
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-")
      );
    });
  });
  return slugs;
}

const SLUGS = generateSlugs();

export default function SeoIndex() {
  return (
    <div className="min-h-screen">
      <div className="container max-w-2xl mx-auto px-4 pb-16">
        <Header />

        <h1 className="text-2xl font-bold mt-6 mb-3">
          Artikel Angka Keberuntungan & Saldo Cantik Indonesia
        </h1>

        <p className="text-sm text-muted-foreground mb-6">
          Kumpulan artikel angka hoki, nominal cantik, dan perhitungan populer
          yang sering digunakan di Indonesia.
        </p>

        {/* 🔥 Native Banner – HOT ZONE */}
        <div className="my-6">
          <NativeBanner />
        </div>

        <div className="grid gap-3 text-sm">
          {SLUGS.map((slug) => (
            <Link
              key={slug}
              to={`/seo/${slug}`}
              className="glass-card rounded-lg p-3 hover:border-primary transition"
            >
              🔢 {slug.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
