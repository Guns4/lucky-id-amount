import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";

// Lazy load pages for better performance
const Index = lazy(() => import("@/pages/Index"));
const SeoIndex = lazy(() => import("@/pages/SeoIndex"));
const SeoPage = lazy(() => import("@/pages/SeoPage"));
const DepositGacorSEO = lazy(() => import("@/pages/DepositGacorSEO"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <LanguageProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/seo" element={<SeoIndex />} />
              <Route path="/seo/:slug" element={<SeoPage />} />
              <Route path="/lucky-amount-generator" element={<DepositGacorSEO />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
