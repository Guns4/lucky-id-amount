import { Helmet } from "react-helmet-async";

interface ToolSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function ToolSchema({
  name,
  description,
  url,
}: ToolSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    operatingSystem: "Web",
    applicationCategory: "UtilityApplication",
    description,
    url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
