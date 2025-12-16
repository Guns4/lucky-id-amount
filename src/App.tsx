import React from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "@/pages/Index";

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <Index />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
