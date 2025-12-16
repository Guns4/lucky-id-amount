import { useState, lazy, Suspense } from "react";
import { Hash, Banknote } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { TipsSection } from "@/components/TipsSection";
import { Disclaimer } from "@/components/Disclaimer";
import { LanguageToggle } from "@/components/LanguageToggle";
import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";
import AutoHreflang from "@/components/seo/AutoHreflang";
import PageSchema from "@/components/seo/PageSchema";

const IDGenerator = lazy(() => import("@/components/IDGenerator"));
const AmountGenerator = lazy(() => import("@/components/AmountGenerator"));
const NativeBanner = lazy(() => import("@/components/ads/NativeBanner"));

type TabType = "id" | "amount";

export default function IndonesianHome() {
  const [activeTab, setActiveTab] = useState<TabType>("id");

  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang="id" />
        <title>Generator ID Hoki & Nominal Cantik | LuckyGen</title>
        <meta
          name="description"
          content="Generator angka keberuntungan, ID hoki, dan nominal cantik populer di Indonesia. Gratis dan mudah digunakan." />
        <link rel="canonical" href="https://www.luckygen.click/id" />
      </Helmet>

      <AutoHreflang />
      <PageSchema
        name="LuckyGen – Generator ID & Nominal Hoki"
        description="Generator angka hoki dan nominal cantik populer di Indonesia."
        url="https://www.luckygen.click/id"
      />

      <div className="container max-w-2xl mx-auto px-4 pb-12">
        <div className="flex justify-end pt-4">
          <LanguageToggle />
        </div>

        <Header />

        <div className="text-center mt-6 mb-4">
          <h1 className="text-xl font-semibold">
            Generator ID Hoki & Nominal Deposit
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Pola angka hoki • Nominal cantik
          </p>
        </div>

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
            <Hash className="w-4 h-4" /> ID Hoki
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
            <Banknote className="w-4 h-4" /> Nominal Deposit
          </button>
        </div>

        <Suspense fallback={<div className="text-center py-6">Memuat...</div>}>
          {activeTab === "id" ? <IDGenerator /> : <AmountGenerator />}
        </Suspense>

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
