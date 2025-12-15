import { useState, useCallback } from "react";
import {
  Shuffle,
  Settings2,
  Zap,
  Banknote,
  Sparkles
} from "lucide-react";
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
  type GeneratedAmount
} from "@/lib/generators";
import { cn } from "@/lib/utils";

export function AmountGenerator() {
  const { t } = useLanguage();

  const [results, setResults] = useState<GeneratedAmount[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Options
  const [category, setCategory] = useState<AmountCategory["type"]>("lucky");
  const [minAmount, setMinAmount] = useState("50000");
  const [maxAmount, setMaxAmount] = useState("1000000");
  const [includeDecimals, setIncludeDecimals] = useState(false);
  const [bulkCount, setBulkCount] = useState(5);

  const CATEGORIES: {
    value: AmountCategory["type"];
    label: string;
    icon: string;
  }[] = [
    { value: "lucky", label: "Lucky", icon: "🍀" },
    { value: "unique-odd", label: "Unique", icon: "✨" },
    { value: "psychological", label: "Psychology", icon: "🧠" },
    { value: "round-beautiful", label: "Premium", icon: "💎" },
    { value: "balanced", label: "Balanced", icon: "⚖️" }
  ];

  const PRESET_LABELS: Record<string, string> = {
    lucky: "Lucky Deposit",
    psychological: "Psychological",
    subtle: "Aman & Natural",
    premium: "VIP Round"
  };

  const formatInputAmount = (value: string) => {
    const num = value.replace(/\D/g, "");
    return num ? parseInt(num).toLocaleString("id-ID") : "";
  };

  const generate = useCallback(() => {
    // Clarity tracking
    if (typeof window !== "undefined" && (window as any).clarity) {
      (window as any).clarity("event", "generate_amount_click");
    }

    setIsGenerating(true);

    setTimeout(() => {
      const min = parseInt(minAmount.replace(/\D/g, "")) || 50000;
      const max = parseInt(maxAmount.replace(/\D/g, "")) || 1000000;

      const amounts = generateMultipleAmounts(
        {
          minAmount: min,
          maxAmount: max,
          category,
          includeDecimals
        },
        bulkCount
      );

      setResults(amounts);
      setIsGenerating(false);
    }, 300);
  }, [category, minAmount, maxAmount, includeDecimals, bulkCount]);

  const applyPreset = (presetId: string) => {
    const preset = AMOUNT_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    setCategory(preset.category);

    if (presetId === "premium") {
      setMinAmount("500000");
      setMaxAmount("5000000");
    }

    if (presetId === "subtle") {
      setMinAmount("100000");
      setMaxAmount("500000");
    }

    generate();
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
            {PRESET_LABELS[preset.id] || preset.label}
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
              "glass-card rounded-lg p-3 text-center transition-all",
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
              Minimum Deposit
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                Rp
              </span>
              <Input
                value={formatInputAmount(minAmount)}
                onChange={(e) => setMinAmount(e.target.value)}
                className="pl-10 font-mono"
                placeholder="50,000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">
              Maximum Deposit
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                Rp
              </span>
              <Input
                value={formatInputAmount(maxAmount)}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="pl-10 font-mono"
                placeholder="1,000,000"
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
            {showSettings ? "Hide" : "Advanced"}
          </Button>

          <div className="flex items-center gap-2">
            <Label className="text-xs text-muted-foreground">
              Total Results
            </Label>
            <Input
              type="number"
              value={bulkCount}
              onChange={(e) =>
                setBulkCount(
                  Math.min(10, Math.max(1, parseInt(e.target.value) || 5))
                )
              }
              className="w-16 font-mono text-center"
              min={1}
              max={10}
            />
          </div>
        </div>

        {/* Advanced Settings */}
        {showSettings && (
          <div className="mt-4 pt-4 border-t border-border animate-fade-in">
            <div className="flex items-center gap-2">
              <Switch
                checked={includeDecimals}
                onCheckedChange={setIncludeDecimals}
              />
              <Label className="text-sm">
                Include Decimal (contoh: 888.88)
              </Label>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <Button
        variant="gold"
        size="xl"
        onClick={generate}
        disabled={isGenerating}
        className="w-full text-lg"
      >
        {/* 🔥 Native Ad - Hot Click Zone */}
<div className="mt-4 mb-2">
  <p className="text-[10px] text-muted-foreground text-center mb-1">
    Sponsored
  </p>
  <NativeBanner />
</div>

        {isGenerating ? (
          <Shuffle className="w-5 h-5 animate-spin" />
        ) : (
          <Sparkles className="w-5 h-5" />
        )}
        <span className="ml-2">Generate Nominal Gacor</span>
      </Button>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3 animate-fade-in">
          <h3 className="text-sm text-muted-foreground">
            Nominal siap pakai (psikologis & hoki)
          </h3>
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
                style={{ animationDelay: `${index * 50}ms` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
