import { useState } from 'react';
import { Hash, Banknote } from 'lucide-react';
import { Header } from '@/components/Header';
import { IDGenerator } from '@/components/IDGenerator';
import { AmountGenerator } from '@/components/AmountGenerator';
import { Disclaimer } from '@/components/Disclaimer';
import { TipsSection } from '@/components/TipsSection';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

type TabType = 'id' | 'amount';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('id');
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <div className="container max-w-2xl mx-auto px-4 pb-12">
        {/* Language Toggle */}
        <div className="flex justify-end pt-4">
          <LanguageToggle />
        </div>
        
        <Header />

        {/* Tab Navigation */}
        <div className="glass-card rounded-2xl p-1.5 mb-6 flex">
          <button
            onClick={() => setActiveTab('id')}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200',
              activeTab === 'id'
                ? 'bg-primary text-primary-foreground shadow-gold'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Hash className="w-4 h-4" />
            <span>{t('idGenerator')}</span>
          </button>
          <button
            onClick={() => setActiveTab('amount')}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200',
              activeTab === 'amount'
                ? 'bg-primary text-primary-foreground shadow-gold'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Banknote className="w-4 h-4" />
            <span>{t('amountGenerator')}</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'id' ? <IDGenerator /> : <AmountGenerator />}
        </div>

        <TipsSection />
        <Disclaimer />

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LuckyGen — Number Pattern Generator
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
