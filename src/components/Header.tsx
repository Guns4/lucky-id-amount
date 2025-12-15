import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center py-8 sm:py-12">
      <div className="inline-flex items-center justify-center gap-2 mb-4">
        <div className="relative">
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-float" />
          <div className="absolute inset-0 blur-xl bg-primary/30 animate-pulse" />
        </div>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-3">
        <span className="gradient-text">LuckyGen</span>
      </h1>
      <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
        Generate beautiful IDs & psychological deposit amounts with lucky number patterns
      </p>
    </header>
  );
}
