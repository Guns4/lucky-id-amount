import { useEffect, useState } from "react";

export default function NativeBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const s = document.createElement("script");
      s.src = "https://pl28261668.effectivegatecpm.com/...";
      s.async = true;
      document.body.appendChild(s);
      setLoaded(true);
    }, 2500); // delay 2.5 detik

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return null;
  return <div id="native-ad-slot" />;
}
