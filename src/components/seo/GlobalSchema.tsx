import { Helmet } from "react-helmet-async";

export default function GlobalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.luckygen.click/#website",
        url: "https://www.luckygen.click/",
        name: "LuckyGen",
        description:
          "LuckyGen is a global lucky number and amount generator platform.",
        publisher: {
          "@id": "https://www.luckygen.click/#organization",
        },
        inLanguage: ["en", "id"],
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.luckygen.click/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.luckygen.click/#organization",
        name: "LuckyGen",
        url: "https://www.luckygen.click/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.luckygen.click/favicon.ico",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@luckygen.click",
          availableLanguage: ["en", "id"],
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
