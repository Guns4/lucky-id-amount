import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BeautyScoreProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const labels = ['', 'Basic', 'Nice', 'Beautiful', 'Very Beautiful', 'Perfect'];

export function BeautyScore({ score, maxScore = 5, size = 'md', showLabel = true }: BeautyScoreProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxScore }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              sizeClasses[size],
              'transition-all duration-200',
              i < score
                ? 'fill-primary text-primary drop-shadow-[0_0_4px_hsl(43_96%_56%/0.6)]'
                : 'text-muted-foreground/30'
            )}
          />
        ))}
      </div>
      {showLabel && (
        <span className={cn(
          'text-muted-foreground font-medium',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-sm',
          size === 'lg' && 'text-base',
          score >= 4 && 'text-primary'
        )}>
          {labels[score] || ''}
        </span>
      )}
    </div>
  );
}
