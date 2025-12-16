import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "@/pages/Index";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <LanguageProvider>
          <Index />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
