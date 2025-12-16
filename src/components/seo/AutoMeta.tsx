import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const DEFAULT_SITE = "LuckyGen";
const DOMAIN = "https://www.luckygen.click";

const metaMap: Record<string, { title: string; description: string }> = {
  "/": {
    title: "LuckyGen – Lucky ID & Beautiful Number Generator",
    description:
      "Generate lucky IDs, beautiful numbers, and attractive numeric patterns for global users. Fast, free, and mobile-friendly.",
  },
  "/id": {
    title: "LuckyGen Indonesia – Generator ID Hoki & Nominal Cantik",
    description:
      "Generator angka hoki dan nominal cantik populer di Indonesia. Gratis, cepat, dan mudah digunakan.",
  },
  "/en": {
    title: "LuckyGen Global – Lucky Number & ID Generator",
    description:
      "Generate lucky numbers, IDs, and beautiful numeric patterns used worldwide. Free online generator.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | LuckyGen",
    description: "Privacy policy and data usage information for LuckyGen website.",
  },
  "/terms-of-service": {
    title: "Terms of Service | LuckyGen",
    description: "Terms and conditions governing the use of LuckyGen services.",
  },
  "/about-us": {
    title: "About Us | LuckyGen",
    description: "Learn more about LuckyGen, our mission, and our global tools.",
  },
  "/contact": {
    title: "Contact | LuckyGen",
    description: "Contact LuckyGen support and business inquiries.",
  },
};

export default function AutoMeta() {
  const { pathname } = useLocation();

  const meta = metaMap[pathname] || {
    title: `LuckyGen – ${pathname.replace("/", "").replace("-", " ")}`,
    description:
      "LuckyGen provides lucky number generators, ID tools, and beautiful numeric patterns for global users.",
  };

  const canonical = `${DOMAIN}${pathname === "/" ? "" : pathname}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={DEFAULT_SITE} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  );
}
