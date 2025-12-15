import { useState, useCallback } from "react";
import {
  Sparkles,
  Shuffle,
  Settings2,
  Zap,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { GeneratedItem } from "./GeneratedItem";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  generateMultipleIDs,
  ID_PRESETS,
  type IDPattern,
  type GeneratedID
} from "@/lib/generators";
import { cn } from "@/lib/utils";

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
    { value: "double-pairs", label: "Pairs", icon: "1122" }
  ];

  const NUMBER_SUFFIX_OPTIONS = [
    { value: 2, label: "2 digits" },
    { value: 3, label: "3 digits" },
    { value: 4, label: "4 digits" }
  ];

  const generate = useCallback(() => {
    if (!siteName.trim()) return;

    // Clarity event tracking
    if (typeof window !== "undefined" && (window as any).clarity) {
      (window as any).clarity("event", "generate_id_click");
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
          prefix: pattern === "custom-prefix" ? customName || "Lucky" : undefined,
          numberSuffixLength,
          useUppercase,
          birthYear: includeBirthYear ? birthYear : undefined
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
    birthYear
  ]);

  const isSiteNameValid = siteName.trim().length > 0;

  return (
    <div className="space-y-6">
      {/* Site Name */}
      <div className="glass-card rounded-xl p-4 border-primary/30">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-5 h-5 text-primary" />
          <Label className="font-semibold">Platform Name</Label>
          <span className="text-xs text-destructive">*</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Masukkan nama platform untuk membuat ID yang terlihat profesional & hoki
        </p>
        <Input
          value={siteName}
          onChange={(e) =>
            setSiteName(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))
          }
          placeholder="Contoh: LuckySlot"
          className="font-mono text-lg"
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

      {/* Controls */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Label className="text-xs">ID Length</Label>
            <div className="font-mono text-xl">{length}</div>
          </div>
          <Slider
            value={[length]}
            min={4}
            max={12}
            step={1}
            onValueChange={([v]) => setLength(v)}
            className="w-32"
          />
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowSettings(!showSettings)}
          >
            <Settings2 className="w-4 h-4 mr-1" />
            {showSettings ? "Hide" : "More"}
          </Button>
        </div>

        {showSettings && (
          <div className="grid gap-4 pt-4 border-t animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <Input
                value={favoriteNumbers}
                onChange={(e) => setFavoriteNumbers(e.target.value)}
                placeholder="Favorite numbers"
              />
              <Input
                value={excludeNumbers}
                onChange={(e) => setExcludeNumbers(e.target.value)}
                placeholder="Exclude numbers"
              />
            </div>

            <div className="flex items-center gap-3">
              <Switch
                checked={includeLetters}
                onCheckedChange={setIncludeLetters}
              />
              <Label>Include Letters</Label>
            </div>

            <div className="flex items-center gap-3">
              <Switch
                checked={useUppercase}
                onCheckedChange={setUseUppercase}
              />
              <Label>Uppercase Output</Label>
            </div>
          </div>
        )}
      </div>

      {/* CTA BUTTON */}
      <Button
        variant="gold"
        size="xl"
        onClick={generate}
        disabled={!isSiteNameValid || isGenerating}
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
        <span className="ml-2">
          {!isSiteNameValid
            ? "Masukkan Nama Platform"
            : "Generate ID Gacor Sekarang"}
        </span>
      </Button>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3 animate-fade-in">
          <h3 className="text-sm text-muted-foreground">
            ID Gacor untuk{" "}
            <span className="text-primary font-semibold">{siteName}</span>
          </h3>
          <div className="grid gap-3">
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
        </div>
      )}
    </div>
  );
}
