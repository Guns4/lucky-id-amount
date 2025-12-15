import { Shield, AlertCircle } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="glass-card rounded-xl p-4 sm:p-6 mt-8">
      <div className="flex items-start gap-3">
        <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">Important Notice</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This website is a utility tool for generating random numbers and patterns. 
            It is not affiliated with any gambling platforms or gaming websites. 
            Generated numbers do not guarantee any specific outcomes. 
            Please gamble responsibly and only where it is legal in your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
