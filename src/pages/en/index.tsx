import React, { useState, Suspense } from "react";
import { Hash, Banknote } from "lucide-react";
import { Header } from "@/components/Header";
import { IDGenerator } from "@/components/IDGenerator";
import { AmountGenerator } from "@/components/AmountGenerator";
import { TipsSection } from "@/components/TipsSection";
import { Disclaimer } from "@/components/Disclaimer";
import { LanguageToggle } from "@/components/LanguageToggle";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const NativeBanner = dynamic(() => import("@/components/ads/NativeBanner"), { ssr: false });

type TabType = "id" | "amount";

export default function EnglishHome() {
  const [activeTab, setActiveTab] = useState<TabType>("id");

  return (
    <div className="min-h-screen">
      <div className="container max-w-2xl mx-auto px-4 pb-12">
        <div className="flex justify-end pt-4">
          <LanguageToggle />
        </div>

        <Header />

        <div className="text-center mt-6 mb-4">
          <h1 className="text-xl font-semibold">Generate Lucky ID & Deposit Amount</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Lucky number patterns • Beautiful IDs • System-friendly
          </p>
        </div>

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

        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          {activeTab === "id" ? <IDGenerator /> : <AmountGenerator />}
        </Suspense>

        <div className="my-8 text-center">
          <p className="text-xs text-muted-foreground mb-2">Sponsored Content</p>
          <NativeBanner />
        </div>

        <TipsSection />
        <Disclaimer />

        <footer className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LuckyGen — Lucky Number Pattern Tool
          </p>
        </footer>
      </div>
    </div>
  );
}
