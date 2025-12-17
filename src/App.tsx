import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";

// ===== GLOBAL SEO =====
import AutoMeta from "@/components/seo/AutoMeta";
import GlobalSchema from "@/components/seo/GlobalSchema";

// ===== PAGES =====
import EnglishHome from "@/pages/En";
import IndonesianHome from "@/pages/Id";

// ===== LEGAL (Adsense Required) =====
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfService from "@/pages/legal/TermsOfService";
import AboutUs from "@/pages/legal/AboutUs";
import Contact from "@/pages/legal/Contact";

// ===== LAZY =====
const SeoIndex = lazy(() => import("@/pages/SeoIndex"));
const SeoPage = lazy(() => import("@/pages/SeoPage"));
const DepositGacorSEO = lazy(() => import("@/pages/DepositGacorSEO"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// ===== FALLBACK =====
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center text-sm opacity-70">
    Loading…
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>

            {/* ===== GLOBAL SEO ===== */}
            <AutoMeta />
            <GlobalSchema />

            <Suspense fallback={<PageLoader />}>
              <Routes>

                {/* ===== MAIN ROUTES ===== */}
                <Route path="/" element={<EnglishHome />} />
                <Route path="/en" element={<EnglishHome />} />
                <Route path="/id" element={<IndonesianHome />} />

                {/* ===== SEO CONTENT ===== */}
                <Route path="/seo" element={<SeoIndex />} />
                <Route path="/seo/:slug" element={<SeoPage />} />
                <Route
                  path="/lucky-amount-generator"
                  element={<DepositGacorSEO />}
                />

                {/* ===== LEGAL ===== */}
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
    </HelmetProvider>
  );
}
