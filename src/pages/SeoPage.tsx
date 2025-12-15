import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import NativeBanner from "@/components/NativeBanner";
import { openSmartlink } from "@/lib/smartlink";

const SEO_CONTENT: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    paragraphs: string[];
  }
> = {
  "angka-keberuntungan-hari-ini": {
    title: "Angka Keberuntungan Hari Ini Menurut Perhitungan Populer",
    description:
      "Cek angka keberuntungan hari ini berdasarkan pola hoki yang sering digunakan di Indonesia.",
    keywords: [
      "angka keberuntungan hari ini",
      "angka hoki hari ini",
      "angka rezeki hari ini",
    ],
    paragraphs: [
      "Banyak orang di Indonesia percaya bahwa angka keberuntungan hari ini dapat mempengaruhi rezeki dan keputusan penting.",
      "Angka hoki biasanya dihitung berdasarkan pola psikologis, tanggal, dan kebiasaan populer yang sering digunakan.",
      "Menggunakan generator angka keberuntungan dapat membantu menemukan kombinasi angka yang terasa lebih meyakinkan.",
    ],
  },

  "nominal-saldo-cantik": {
    title: "Nominal Saldo Cantik yang Dipercaya Membawa Hoki",
    description:
      "Temukan nominal saldo cantik yang sering digunakan karena terlihat rapi dan dipercaya membawa keberuntungan.",
    keywords: [
      "nominal saldo cantik",
      "saldo hoki",
      "angka cantik deposit",
    ],
    paragraphs: [
      "Nominal saldo cantik biasanya memiliki pola angka berulang atau seimbang.",
      "Banyak orang memilih nominal tertentu karena faktor psikologis dan kebiasaan.",
      "Generator saldo cantik membantu menghasilkan nominal yang terlihat rapi dan profesional.",
    ],
  },

  "angka-hoki-menurut-weton": {
    title: "Angka Hoki Menurut Weton dan Kepercayaan Populer",
    description:
      "Perhitungan angka hoki menurut weton yang sering dipercaya dalam tradisi Indonesia.",
    keywords: [
      "angka hoki weton",
      "angka keberuntungan weton",
      "angka rezeki weton",
    ],
    paragraphs: [
      "Weton sering digunakan untuk menentukan hari baik dan angka keberuntungan.",
      "Meskipun bersifat kepercayaan, banyak orang merasa lebih yakin saat menggunakan angka yang sesuai.",
      "Generator angka hoki mempermudah proses tanpa perhitungan manual.",
    ],
  },
};

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

        {/* Intro */}
        <p className="text-muted-foreground mb-6">
          {content.description}
        </p>

        {/* CONTENT */}
        <div className="space-y-4 text-sm leading-relaxed">
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 🔥 Native Ad (Hot Area – after value) */}
        <div className="my-8">
          <p className="text-xs text-muted-foreground mb-2">
            Rekomendasi
          </p>
          <NativeBanner />
        </div>

        {/* CTA ke Generator */}
        <div className="glass-card rounded-xl p-6 text-center mt-8">
          <h2 className="font-semibold mb-2">
            Coba Generator Angka Keberuntungan
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Gunakan generator untuk mendapatkan angka yang lebih meyakinkan.
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
