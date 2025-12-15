import { useState } from "react";
import { Hash, Banknote } from "lucide-react";
import { Header } from "@/components/Header";
import { IDGenerator } from "@/components/IDGenerator";
import { AmountGenerator } from "@/components/AmountGenerator";
import { Disclaimer } from "@/components/Disclaimer";
import { TipsSection } from "@/components/TipsSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import NativeBanner from "@/components/ads/NativeBanner";

type TabType = "id" | "amount";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>("id");
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <div className="container max-w-2xl mx-auto px-4 pb-12">
        {/* Language Toggle */}
        <div className="flex justify-end pt-4">
          <LanguageToggle />
        </div>

        <Header />

        {/* Value Proposition */}
        <div className="text-center mt-6 mb-4">
          <h1 className="text-xl font-semibold">
            Generate Lucky ID & Deposit Amount
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Pola angka hoki • Nomor cantik • Psikologis diterima sistem
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="glass-card rounded-2xl p-1.5 mb-6 flex">
          <button
            onClick={() => setActiveTab("id")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200",
              activeTab === "id"
                ? "bg-primary text-primary-foreground shadow-gold"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Hash className="w-4 h-4" />
            <span>🎯 Lucky ID Generator</span>
          </button>

          <button
            onClick={() => setActiveTab("amount")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200",
              activeTab === "amount"
                ? "bg-primary text-primary-foreground shadow-gold"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Banknote className="w-4 h-4" />
            <span>💰 Deposit Amount Generator</span>
          </button>
        </div>

        {/* Generator */}
        <div className="animate-fade-in">
          {activeTab === "id" ? <IDGenerator /> : <AmountGenerator />}
        </div>

        {/* Native Ad - HOT AREA */}
        <div className="my-8">
          <p className="text-xs text-muted-foreground text-center mb-2">
            Sponsored Content
          </p>
          <NativeBanner />
        </div>

        {/* Trust & Retention */}
        <TipsSection />
        <Disclaimer />

        <div className="mt-10 text-center">
  <a
    href="/lucky-amount-generator"
    className="text-sm text-primary hover:underline"
  >
    Lucky Amount Generator Indonesia →
  </a>
</div>


        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LuckyGen — Lucky Number Pattern Tool
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
