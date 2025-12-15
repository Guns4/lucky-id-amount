import { Lightbulb, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function TipsSection() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const tips = [
    {
      title: t('tip1Title'),
      content: t('tip1Content'),
    },
    {
      title: t('tip2Title'),
      content: t('tip2Content'),
    },
    {
      title: t('tip3Title'),
      content: t('tip3Content'),
    },
  ];

  return (
    <div className="mt-12 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground">{t('tipsTitle')}</h2>
      </div>
      
      <div className="grid gap-2">
        {tips.map((tip, index) => (
          <button
            key={index}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className={cn(
              'glass-card rounded-lg p-4 text-left w-full transition-all duration-300',
              'hover:border-primary/30',
              expandedIndex === index && 'border-primary/50'
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{tip.title}</span>
              <ChevronRight 
                className={cn(
                  'w-4 h-4 text-muted-foreground transition-transform duration-200',
                  expandedIndex === index && 'rotate-90 text-primary'
                )} 
              />
            </div>
            {expandedIndex === index && (
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed animate-fade-in">
                {tip.content}
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
