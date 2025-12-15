import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Disclaimer() {
  const { t } = useLanguage();
  
  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 mt-8">
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">{t('disclaimer')}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t('disclaimerText')}
          </p>
        </div>
      </div>
    </div>
  );
}
