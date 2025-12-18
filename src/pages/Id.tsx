import { useState, lazy, Suspense } from "react";
import { Hash, Banknote } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Header } from "@/components/Header";
import { TipsSection } from "@/components/TipsSection";
import { Disclaimer } from "@/components/Disclaimer";
import { LanguageToggle } from "@/components/LanguageToggle";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

// ===== SEO =====
import AutoHreflang from "@/components/seo/AutoHreflang";
import PageSchema from "@/components/seo/PageSchema";
import ToolSchema from "@/components/seo/ToolSchema";
import FaqSchema from "@/components/seo/FaqSchema";

// ===== Lazy loaded components =====
const IDGenerator = lazy(() => import("@/components/IDGenerator"));
const AmountGenerator = lazy(() => import("@/components/AmountGenerator"));
const NativeBanner = lazy(() => import("@/components/ads/NativeBanner"));

type TabType = "id" | "amount";

export default function IndonesianHome() {
  const [activeTab, setActiveTab] = useState<TabType>("id");

  return (
    <div className="min-h-screen">
      {/* ================= SEO META ================= */}
      <Helmet>
        <html lang="id" />
        <title>Generator Lucky ID & Nominal Cantik | LuckyGen Indonesia</title>
        <meta
          name="description"
          content="Generator Lucky ID, angka hoki, dan nominal saldo cantik populer di Indonesia. Gratis, cepat, dan tanpa login."
        />
        <link rel="canonical" href="https://www.luckygen.click/id/" />
      </Helmet>

      {/* ================= HREFLANG ================= */}
      <AutoHreflang />

      {/* ================= SCHEMA ================= */}
      <PageSchema
        name="LuckyGen Indonesia"
        description="Generator Lucky ID dan Nominal Cantik online untuk pengguna Indonesia"
        url="https://www.luckygen.click/id/"
      />

      <ToolSchema
        name="Generator Lucky ID & Nominal Cantik"
        description="Alat online untuk menghasilkan ID hoki dan nominal saldo cantik populer di Indonesia"
        url="https://www.luckygen.click/id/"
      />

      <FaqSchema
        items={[
          {
            question: "Apa itu Lucky ID?",
            answer:
              "Lucky ID adalah pola angka tertentu yang dipercaya membawa keberuntungan dan sering digunakan sebagai ID akun atau nomor transaksi.",
          },
          {
            question: "Apa itu nominal cantik?",
            answer:
              "Nominal cantik adalah angka saldo atau deposit dengan pola unik seperti kembar, berurutan, atau simetris.",
          },
          {
            question: "Apakah LuckyGen gratis digunakan?",
            answer:
              "Ya. LuckyGen 100% gratis dan dapat digunakan tanpa registrasi atau login.",
          },
          {
            question: "Apakah hasil generator ini acak?",
            answer:
              "Hasil dihasilkan secara acak berdasarkan pola populer yang sering digunakan oleh pengguna.",
          },
        ]}
      />

      {/* ================= CONTENT ================= */}
      <div className="container max-w-2xl mx-auto px-4 pb-12">
        <div className="flex justify-end pt-4">
          <LanguageToggle />
        </div>

        <Header />

        <div className="text-center mt-6 mb-4">
          <h1 className="text-xl font-semibold">
            Generator Lucky ID & Nominal Cantik
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Angka hoki • Nominal saldo cantik • Pola populer Indonesia
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div className="glass-card rounded-2xl p-1.5 mb-6 flex">
          <button
            onClick={() => setActiveTab("id")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all",
              activeTab === "id"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            )}
          >
            <Hash className="w-4 h-4" /> Lucky ID
          </button>

          <button
            onClick={() => setActiveTab("amount")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all",
              activeTab === "amount"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            )}
          >
            <Banknote className="w-4 h-4" /> Nominal Cantik
          </button>
        </div>

        {/* ================= GENERATOR ================= */}
        <Suspense fallback={<div className="text-center py-6">Memuat…</div>}>
          {activeTab === "id" ? <IDGenerator /> : <AmountGenerator />}
        </Suspense>

        {/* ================= ADS ================= */}
        <div className="my-8">
          <Suspense fallback={null}>
            <NativeBanner />
          </Suspense>
        </div>

        <TipsSection />
        <Disclaimer />
        <Footer />
      </div>
    </div>
  );
}
