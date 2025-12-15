import { cn } from '@/lib/utils';
import { BeautyScore } from './BeautyScore';
import { CopyButton } from './CopyButton';

interface GeneratedItemProps {
  value: string;
  displayValue?: string;
  beautyScore: number;
  label?: string;
  highlight?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function GeneratedItem({ 
  value, 
  displayValue,
  beautyScore, 
  label, 
  highlight = false,
  className,
  style 
}: GeneratedItemProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-xl p-4 transition-all duration-300 hover:border-primary/30',
        highlight && 'border-primary/50 gold-glow animate-pulse-gold',
        className
      )}
      style={style}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          {label && (
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1 block">
              {label}
            </span>
          )}
          <div className={cn(
            'number-display truncate',
            highlight && 'beautiful-number'
          )}>
            {displayValue || value}
          </div>
          <div className="mt-2">
            <BeautyScore score={beautyScore} size="sm" />
          </div>
        </div>
        <CopyButton 
          text={value} 
          variant={highlight ? 'gold' : 'outline'}
          size="default"
          className="shrink-0"
        />
      </div>
    </div>
  );
}
