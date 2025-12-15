import { useState, useCallback } from "react";
import {
  Sparkles,
  Shuffle,
  Settings2,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { GeneratedItem } from "./GeneratedItem";
import { useLanguage } from "@/contexts/LanguageContext";

interface WindowWithClarity extends Window {
  clarity?: (event: string, data: string) => void;
}
import {
  generateMultipleIDs,
  ID_PRESETS,
  type IDPattern,
  type GeneratedID,
} from "@/lib/generators";
import { cn } from "@/lib/utils";

/* ✅ FIX: default import */
import NativeBanner from "@/components/ads/NativeBanner";

import { openSmartlink } from "@/lib/smartlink";

export function IDGenerator() {
  const { t } = useLanguage();

  const [results, setResults] = useState<GeneratedID[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Required
  const [siteName, setSiteName] = useState("");

  // Options
  const [length, setLength] = useState(6);
  const [pattern, setPattern] = useState<IDPattern>("lucky-combo");
  const [favoriteNumbers, setFavoriteNumbers] = useState("7,8,9");
  const [excludeNumbers, setExcludeNumbers] = useState("4");
  const [includeLetters, setIncludeLetters] = useState(true);
  const [customName, setCustomName] = useState("");
  const [bulkCount, setBulkCount] = useState(5);
  const [numberSuffixLength, setNumberSuffixLength] = useState(2);
  const [useUppercase, setUseUppercase] = useState(true);
  const [includeBirthYear, setIncludeBirthYear] = useState(false);
  const [birthYear, setBirthYear] = useState("");

  const PATTERNS: { value: IDPattern; label: string; icon: string }[] = [
    { value: "lucky-combo", label: "Lucky Combo", icon: "Naga88" },
    { value: "custom-prefix", label: "Custom Name", icon: "You77" },
    { value: "repeating", label: "Repeating", icon: "888" },
    { value: "ascending", label: "Ascending", icon: "123" },
    { value: "descending", label: "Descending", icon: "987" },
    { value: "mirror", label: "Mirror", icon: "696" },
    { value: "double-pairs", label: "Pairs", icon: "1122" },
  ];

  const generate = useCallback(() => {
    if (!siteName.trim()) return;

    if (typeof window !== "undefined" && (window as WindowWithClarity).clarity) {
      (window as WindowWithClarity).clarity("event", "generate_id_click");
    }

    setIsGenerating(true);

    setTimeout(() => {
      const favorites = favoriteNumbers
        .split(",")
        .map((n) => parseInt(n.trim()))
        .filter((n) => !isNaN(n));

      const excluded = excludeNumbers
        .split(",")
        .map((n) => parseInt(n.trim()))
        .filter((n) => !isNaN(n));

      const ids = generateMultipleIDs(
        {
          length,
          pattern,
          favoriteNumbers: favorites,
          excludeNumbers: excluded,
          includeLetters,
          prefix:
            pattern === "custom-prefix"
              ? customName || "Lucky"
              : undefined,
          numberSuffixLength,
          useUppercase,
          birthYear: includeBirthYear ? birthYear : undefined,
        },
        bulkCount
      );

      setResults(ids);
      setIsGenerating(false);
    }, 300);
  }, [
    siteName,
    length,
    pattern,
    favoriteNumbers,
    excludeNumbers,
    includeLetters,
    customName,
    bulkCount,
    numberSuffixLength,
    useUppercase,
    includeBirthYear,
    birthYear,
  ]);

  const isSiteNameValid = siteName.trim().length > 0;

  return (
    <div className="space-y-6">
      {/* Site Name */}
      <div className="glass-card rounded-xl p-4 border-primary/30">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-5 h-5 text-primary" />
          <Label className="font-semibold">
            Platform Name <span className="text-destructive">*</span>
          </Label>
        </div>
        <Input
          value={siteName}
          onChange={(e) =>
            setSiteName(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))
          }
          placeholder="Contoh: LuckySlot"
          className="font-mono text-lg"
          maxLength={20}
        />
      </div>

      {/* Presets */}
      <div className="flex flex-wrap gap-2">
        {ID_PRESETS.map((preset) => (
          <Button
            key={preset.id}
            size="sm"
            variant="outline"
            disabled={!isSiteNameValid}
            onClick={() => {
              setPattern(preset.pattern);
              generate();
            }}
          >
            <Zap className="w-3 h-3 mr-1" />
            {preset.label}
          </Button>
        ))}
      </div>

      {/* Pattern */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
        {PATTERNS.map((p) => (
          <button
            key={p.value}
            onClick={() => setPattern(p.value)}
            className={cn(
              "glass-card rounded-lg p-3 text-center transition",
              pattern === p.value && "border-primary gold-glow"
            )}
          >
            <div className="font-mono text-lg font-semibold text-primary">
              {p.icon}
            </div>
            <div className="text-xs text-muted-foreground">{p.label}</div>
          </button>
        ))}
      </div>

      {/* Native Ad */}
      <div className="mt-6 mb-3">
        <p className="text-[10px] text-muted-foreground text-center mb-1">
          Sponsored
        </p>
        <NativeBanner />
      </div>

      {/* CTA */}
      <Button
        variant="gold"
        size="xl"
        onClick={generate}
        disabled={!isSiteNameValid || isGenerating}
        className="w-full text-lg"
      >
        {isGenerating ? (
          <Shuffle className="w-5 h-5 animate-spin" />
        ) : (
          <Sparkles className="w-5 h-5" />
        )}
        <span className="ml-2">
          {!isSiteNameValid
            ? "Masukkan Nama Platform"
            : "Generate ID Gacor Sekarang"}
        </span>
      </Button>

      {results.length > 0 && (
        <>
          <div className="space-y-3">
            {results.map((r, i) => (
              <GeneratedItem
                key={`${r.value}-${i}`}
                value={r.value}
                beautyScore={r.beautyScore}
                label={r.pattern}
                highlight={i === 0}
              />
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={openSmartlink}
              className="text-xs text-muted-foreground hover:text-primary transition"
            >
              🎁 Lihat rekomendasi saldo populer hari ini →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
