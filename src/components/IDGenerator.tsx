import { useState, useCallback } from 'react';
import { Sparkles, Shuffle, Settings2, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { GeneratedItem } from './GeneratedItem';
import { 
  generateMultipleIDs, 
  ID_PRESETS,
  type IDPattern,
  type GeneratedID 
} from '@/lib/generators';
import { cn } from '@/lib/utils';

const PATTERNS: { value: IDPattern; label: string; icon: string }[] = [
  { value: 'lucky-combo', label: 'Names', icon: 'Naga88' },
  { value: 'custom-prefix', label: 'Custom', icon: 'You77' },
  { value: 'repeating', label: 'Repeating', icon: '888' },
  { value: 'ascending', label: 'Ascending', icon: '123' },
  { value: 'descending', label: 'Descending', icon: '987' },
  { value: 'mirror', label: 'Mirror', icon: '696' },
  { value: 'double-pairs', label: 'Pairs', icon: '1122' },
];

const NUMBER_SUFFIX_OPTIONS = [
  { value: 2, label: '2 digits' },
  { value: 3, label: '3 digits' },
  { value: 4, label: '4 digits' },
];

export function IDGenerator() {
  const [results, setResults] = useState<GeneratedID[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Required: Site name
  const [siteName, setSiteName] = useState('');
  
  // Options
  const [length, setLength] = useState(6);
  const [pattern, setPattern] = useState<IDPattern>('lucky-combo');
  const [favoriteNumbers, setFavoriteNumbers] = useState('7,8,9');
  const [excludeNumbers, setExcludeNumbers] = useState('4');
  const [includeLetters, setIncludeLetters] = useState(true);
  const [customName, setCustomName] = useState('');
  const [bulkCount, setBulkCount] = useState(5);
  const [numberSuffixLength, setNumberSuffixLength] = useState(2);
  const [useUppercase, setUseUppercase] = useState(true);
  const [includeBirthYear, setIncludeBirthYear] = useState(false);
  const [birthYear, setBirthYear] = useState('');

  const generate = useCallback(() => {
    if (!siteName.trim()) {
      return;
    }
    
    setIsGenerating(true);
    
    // Small delay for animation effect
    setTimeout(() => {
      const favorites = favoriteNumbers
        .split(',')
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n) && n >= 0 && n <= 9);
      
      const excluded = excludeNumbers
        .split(',')
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n) && n >= 0 && n <= 9);
      
      const ids = generateMultipleIDs({
        length,
        pattern,
        favoriteNumbers: favorites,
        excludeNumbers: excluded,
        includeLetters,
        prefix: pattern === 'custom-prefix' ? (customName || 'Lucky') : undefined,
        numberSuffixLength,
        useUppercase,
        birthYear: includeBirthYear && birthYear ? birthYear : undefined,
      }, bulkCount);
      
      setResults(ids);
      setIsGenerating(false);
    }, 300);
  }, [length, pattern, favoriteNumbers, excludeNumbers, includeLetters, customName, bulkCount, siteName, numberSuffixLength, useUppercase, includeBirthYear, birthYear]);

  const applyPreset = (presetId: string) => {
    const preset = ID_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setPattern(preset.pattern);
      if (presetId === 'vip') {
        setFavoriteNumbers('8,9');
        setLength(8);
      } else if (presetId === 'safe') {
        setIncludeLetters(false);
        setLength(6);
      }
      generate();
    }
  };

  const isSiteNameValid = siteName.trim().length > 0;

  return (
    <div className="space-y-6">
      {/* Site Name Input - Required */}
      <div className="glass-card rounded-xl p-4 border-primary/30">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-5 h-5 text-primary" />
          <Label htmlFor="siteName" className="text-sm font-semibold">Site / Platform Name</Label>
          <span className="text-xs text-destructive">*required</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">Enter the name of the site/platform you're registering on (e.g., Pragmatic, PGSoft, Olympus)</p>
        <Input
          id="siteName"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
          placeholder="e.g. Pragmatic, Olympus, Slot88"
          className="font-mono text-lg"
          maxLength={20}
        />
      </div>

      {/* Presets */}
      <div className="flex flex-wrap gap-2">
        {ID_PRESETS.map((preset) => (
          <Button
            key={preset.id}
            variant="outline"
            size="sm"
            onClick={() => applyPreset(preset.id)}
            className="text-xs"
            disabled={!isSiteNameValid}
          >
            <Zap className="w-3 h-3 mr-1" />
            {preset.label}
          </Button>
        ))}
      </div>

      {/* Pattern Selection */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
        {PATTERNS.map((p) => (
          <button
            key={p.value}
            onClick={() => setPattern(p.value)}
            className={cn(
              'glass-card rounded-lg p-3 text-center transition-all duration-200 hover:border-primary/50',
              pattern === p.value && 'border-primary gold-glow'
            )}
          >
            <div className="font-mono text-sm sm:text-lg font-semibold text-primary">{p.icon}</div>
            <div className="text-xs text-muted-foreground mt-1">{p.label}</div>
          </button>
        ))}
      </div>

      {/* Custom Name Input - shown when custom-prefix is selected */}
      {pattern === 'custom-prefix' && (
        <div className="glass-card rounded-xl p-4 animate-fade-in">
          <Label htmlFor="customName" className="text-sm font-medium">Your Custom Name</Label>
          <p className="text-xs text-muted-foreground mb-3">Enter your name or nickname, lucky numbers will be added automatically</p>
          <Input
            id="customName"
            value={customName}
            onChange={(e) => setCustomName(e.target.value.replace(/[^a-zA-Z]/g, '').slice(0, 10))}
            placeholder="e.g. Dewa, Raja, YourName"
            className="font-mono text-lg"
            maxLength={10}
          />
        </div>
      )}

      {/* Quick Controls */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div>
              <Label className="text-xs text-muted-foreground">ID Length</Label>
              <div className="font-mono text-xl font-semibold text-foreground">{length}</div>
            </div>
            <Slider
              value={[length]}
              onValueChange={([v]) => setLength(v)}
              min={4}
              max={12}
              step={1}
              className="w-32"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSettings(!showSettings)}
          >
            <Settings2 className="w-4 h-4 mr-2" />
            {showSettings ? 'Hide' : 'More'}
          </Button>
        </div>

        {/* Number Suffix Length */}
        <div className="mb-4">
          <Label className="text-xs text-muted-foreground mb-2 block">Number Suffix</Label>
          <div className="flex gap-2">
            {NUMBER_SUFFIX_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setNumberSuffixLength(opt.value)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
                  numberSuffixLength === opt.value 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Settings */}
        {showSettings && (
          <div className="grid gap-4 pt-4 border-t border-border animate-fade-in">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="favorites" className="text-xs">Favorite Numbers</Label>
                <Input
                  id="favorites"
                  value={favoriteNumbers}
                  onChange={(e) => setFavoriteNumbers(e.target.value)}
                  placeholder="7,8,9"
                  className="font-mono"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="exclude" className="text-xs">Exclude Numbers</Label>
                <Input
                  id="exclude"
                  value={excludeNumbers}
                  onChange={(e) => setExcludeNumbers(e.target.value)}
                  placeholder="4"
                  className="font-mono"
                />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Switch
                  id="uppercase"
                  checked={useUppercase}
                  onCheckedChange={setUseUppercase}
                />
                <Label htmlFor="uppercase" className="text-sm">UPPERCASE Output</Label>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch
                  id="letters"
                  checked={includeLetters}
                  onCheckedChange={setIncludeLetters}
                />
                <Label htmlFor="letters" className="text-sm">Include Letters</Label>
              </div>
            </div>

            {/* Birth Year Option */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Switch
                  id="birthYear"
                  checked={includeBirthYear}
                  onCheckedChange={setIncludeBirthYear}
                />
                <Label htmlFor="birthYear" className="text-sm">Include Birth Year</Label>
              </div>
              {includeBirthYear && (
                <Input
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="e.g. 1990, 88, 99"
                  className="font-mono w-32"
                  maxLength={4}
                />
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Label className="text-xs text-muted-foreground">Generate Count</Label>
              <Input
                type="number"
                value={bulkCount}
                onChange={(e) => setBulkCount(Math.min(10, Math.max(1, parseInt(e.target.value) || 5)))}
                className="w-16 font-mono text-center"
                min={1}
                max={10}
              />
            </div>
          </div>
        )}
      </div>

      {/* Generate Button */}
      <Button
        variant="gold"
        size="xl"
        onClick={generate}
        disabled={isGenerating || !isSiteNameValid}
        className="w-full"
      >
        {isGenerating ? (
          <Shuffle className="w-5 h-5 animate-spin" />
        ) : (
          <Sparkles className="w-5 h-5" />
        )}
        <span className="ml-2">
          {!isSiteNameValid ? 'Enter Site Name First' : 'Generate IDs'}
        </span>
      </Button>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              Generated IDs for <span className="text-primary font-semibold">{siteName}</span>
            </h3>
            <span className="text-xs text-muted-foreground">{results.length} results</span>
          </div>
          <div className="grid gap-3">
            {results.map((result, index) => (
              <GeneratedItem
                key={`${result.value}-${index}`}
                value={result.value}
                beautyScore={result.beautyScore}
                label={result.pattern}
                highlight={index === 0}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
