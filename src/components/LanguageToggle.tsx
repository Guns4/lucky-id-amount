import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 glass-card rounded-full p-1">
      <button
        onClick={() => setLanguage('id')}
        className={cn(
          'px-3 py-1 rounded-full text-xs font-medium transition-all duration-200',
          language === 'id'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        🇮🇩 ID
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-3 py-1 rounded-full text-xs font-medium transition-all duration-200',
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
