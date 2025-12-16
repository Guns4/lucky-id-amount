import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";

// ===== Home Pages (language specific) =====
import EnglishHome from "@/pages/en";
import IndonesianHome from "@/pages/id";

// ===== Legal Pages (eager load: small & SEO critical) =====
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfService from "@/pages/legal/TermsOfService";
import AboutUs from "@/pages/legal/AboutUs";
import Contact from "@/pages/legal/Contact";
import GlobalSchema from "@/components/seo/GlobalSchema";

// ===== Lazy-loaded SEO / Utility Pages =====
const SeoIndex = lazy(() => import("@/pages/SeoIndex"));
const SeoPage = lazy(() => import("@/pages/SeoPage"));
const DepositGacorSEO = lazy(() => import("@/pages/DepositGacorSEO"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// ===== Simple fallback loader (prevents runtime error) =====
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center text-sm opacity-70">
    Loading…
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <GlobalSchema />
        <LanguageProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* ===== Language Routes ===== */}
              {/* Default global landing: EN */}
              <Route path="/" element={<EnglishHome />} />
              <Route path="/en" element={<EnglishHome />} />
              <Route path="/id" element={<IndonesianHome />} />

              {/* ===== SEO Pages ===== */}
              <Route path="/seo" element={<SeoIndex />} />
              <Route path="/seo/:slug" element={<SeoPage />} />
              <Route path="/lucky-amount-generator" element={<DepositGacorSEO />} />

              {/* ===== Legal Pages (Adsense required) ===== */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />

              {/* ===== 404 ===== */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
