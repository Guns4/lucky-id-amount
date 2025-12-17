import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.luckygen.click";

export default function AutoHreflang() {
  const { pathname } = useLocation();

  // remove /en or /id prefix
  const cleanPath = pathname.replace(/^\/(en|id)/, "");

  const enUrl = `${SITE_URL}/en${cleanPath}`;
  const idUrl = `${SITE_URL}/id${cleanPath}`;

  return (
    <Helmet>
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="id" href={idUrl} />
    </Helmet>
  );
}
