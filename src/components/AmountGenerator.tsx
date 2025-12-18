import { useState, useCallback } from "react";
import { Shuffle, Settings2, Zap, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { GeneratedItem } from "./GeneratedItem";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  generateMultipleAmounts,
  AMOUNT_PRESETS,
  type AmountCategory,
  type GeneratedAmount,
} from "@/lib/generators";
import { cn } from "@/lib/utils";
import { openSmartlink } from "@/lib/smartlink";

export function AmountGenerator() {
  const { t } = useLanguage();

  const [results, setResults] = useState<GeneratedAmount[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Options
  const [category, setCategory] =
    useState<AmountCategory["type"]>("lucky");
  const [minAmount, setMinAmount] = useState("50000");
  const [maxAmount, setMaxAmount] = useState("1000000");
  const [includeDecimals, setIncludeDecimals] = useState(false);
  const bulkCount = 3; // Fixed to 3 for quality tiers: Perfect, Medium, Low

  const CATEGORIES: {
    value: AmountCategory["type"];
    label: string;
    icon: React.ReactNode;
  }[] = [
    { value: "lucky", label: t("lucky"), icon: "🍀" },
    { value: "unique-odd", label: t("uniqueOdd"), icon: "✨" },
    { value: "psychological", label: t("psychological"), icon: "🧠" },
    { value: "round-beautiful", label: t("roundBeautiful"), icon: "💎" },
    { value: "balanced", label: t("balanced"), icon: "⚖️" },
  ];

  const PRESETS_LABELS: Record<string, string> = {
    lucky: t("luckyDeposit"),
    psychological: t("psychological"),
    subtle: t("subtleSafe"),
    premium: t("premiumRound"),
  };

  // 🔥 Generate with micro-delay (CTR & monetization friendly)
  const generate = useCallback(() => {
    setIsGenerating(true);

    setTimeout(() => {
      const min = parseInt(minAmount.replace(/\D/g, "")) || 50000;
      const max = parseInt(maxAmount.replace(/\D/g, "")) || 1000000;

      const amounts = generateMultipleAmounts(
        {
          minAmount: min,
          maxAmount: max,
          category,
          includeDecimals,
        },
        bulkCount
      );

      setResults(amounts);
      setIsGenerating(false);
    }, 500);
  }, [category, minAmount, maxAmount, includeDecimals, bulkCount]);

  const applyPreset = (presetId: string) => {
    const preset = AMOUNT_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    setCategory(preset.category);

    if (presetId === "premium") {
      setMinAmount("500000");
      setMaxAmount("5000000");
    } else if (presetId === "subtle") {
      setMinAmount("100000");
      setMaxAmount("500000");
    }

    generate();
  };

  const formatInputAmount = (value: string) => {
    const num = value.replace(/\D/g, "");
    return num ? parseInt(num).toLocaleString("id-ID") : "";
  };

  return (
    <div className="space-y-6">
      {/* Presets */}
      <div className="flex flex-wrap gap-2">
        {AMOUNT_PRESETS.map((preset) => (
          <Button
            key={preset.id}
            variant="outline"
            size="sm"
            onClick={() => applyPreset(preset.id)}
            className="text-xs"
          >
            <Zap className="w-3 h-3 mr-1" />
            {PRESETS_LABELS[preset.id] || preset.label}
          </Button>
        ))}
      </div>

      {/* Category Selection */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            onClick={() => setCategory(c.value)}
            className={cn(
              "glass-card rounded-lg p-3 text-center transition-all duration-200 hover:border-primary/50",
              category === c.value && "border-primary gold-glow"
            )}
          >
            <div className="text-2xl mb-1">{c.icon}</div>
            <div className="text-xs text-muted-foreground">{c.label}</div>
          </button>
        ))}
      </div>

      {/* Range Controls */}
      <div className="glass-card rounded-xl p-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">
              {t("minimum")}
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                Rp
              </span>
              <Input
                value={formatInputAmount(minAmount)}
                onChange={(e) => setMinAmount(e.target.value)}
                className="pl-10 font-mono"
                placeholder="50.000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">
              {t("maximum")}
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                Rp
              </span>
              <Input
                value={formatInputAmount(maxAmount)}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="pl-10 font-mono"
                placeholder="1.000.000"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSettings(!showSettings)}
          >
            <Settings2 className="w-4 h-4 mr-2" />
            {showSettings ? t("hide") : t("more")}
          </Button>

          <div className="flex items-center gap-2">
            <Label className="text-xs text-muted-foreground">
              {t("results")}: 3 (Perfect, Medium, Low)
            </Label>
          </div>
        </div>

        {showSettings && (
          <div className="mt-4 pt-4 border-t border-border animate-fade-in">
            <div className="flex items-center gap-2">
              <Switch
                checked={includeDecimals}
                onCheckedChange={setIncludeDecimals}
              />
              <Label className="text-sm">
                {t("includeDecimals")}
              </Label>
            </div>
          </div>
        )}
      </div>

      {/* 🔥 PRIMARY CTA */}
      <Button
        variant="gold"
        size="xl"
        onClick={generate}
        disabled={isGenerating}
        className="w-full"
      >
        {isGenerating ? (
          <Shuffle className="w-5 h-5 animate-spin" />
        ) : (
          <Banknote className="w-5 h-5" />
        )}
        <span className="ml-2">🎯 Generate Lucky Amount Sekarang</span>
      </Button>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              {t("generatedAmounts")}
            </h3>
            <span className="text-xs text-muted-foreground">
              {results.length} {t("results")}
            </span>
          </div>

          <div className="grid gap-3">
            {results.map((result, index) => (
              <GeneratedItem
                key={`${result.value}-${index}`}
                value={result.value.toString()}
                displayValue={result.formatted}
                beautyScore={result.beautyScore}
                label={result.category}
                highlight={index === 0}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 60}ms` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 💰 Smartlink Fallback (RPM Booster) */}
      {results.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={openSmartlink}
            className="text-xs text-muted-foreground hover:text-primary transition"
          >
            🎁 Lihat rekomendasi saldo populer hari ini →
          </button>
        </div>
      )}

      {/* 🔗 SEO Internal Link */}
      <div className="mt-10 text-center">
        <a
          href="/lucky-amount-generator"
          className="text-sm text-primary hover:underline"
        >
          Lucky Amount Generator Indonesia →
        </a>
      </div>
    </div>
  );
}
