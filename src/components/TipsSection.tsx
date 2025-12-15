import { Lightbulb, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const tips = [
  {
    title: 'Why is 8 considered lucky?',
    content: 'In many Asian cultures, 8 (八, bā) sounds similar to "prosperity" or "wealth" (發, fā). This phonetic similarity has made 8 one of the most sought-after lucky numbers.'
  },
  {
    title: 'Natural-looking deposits',
    content: 'Amounts like 97,500 or 103,000 appear more natural than round numbers. They suggest calculated top-ups rather than preset amounts.'
  },
  {
    title: 'Mirror IDs are memorable',
    content: 'Palindrome patterns like 1221 or 6996 are easier to remember because your brain only needs to memorize half the sequence.'
  },
  {
    title: 'Avoid common patterns',
    content: 'While 123456 looks attractive, it\'s one of the most commonly used sequences. Consider less obvious patterns that still look premium.'
  },
];

export function TipsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="mt-12 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h2 className="font-semibold text-foreground">Tips & Insights</h2>
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
