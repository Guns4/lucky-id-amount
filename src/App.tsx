import React from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "@/pages/index";

const App = () => {
  return (
    <LanguageProvider>
      <Index />
    </LanguageProvider>
  );
};

export default App;
