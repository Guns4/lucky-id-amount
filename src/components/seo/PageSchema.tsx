import { Helmet } from "react-helmet-async";

interface PageSchemaProps {
  name: string;
  description: string;
  url: string;
}

export default function PageSchema({
  name,
  description,
  url,
}: PageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
