import { useEffect, useRef } from "react";

export default function NativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // cegah load ulang
    if (containerRef.current.childNodes.length > 0) return;

    // buat script
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://pl28261675.effectivegatecpm.com/cbd23b4bd83d763695438a74499ae29d/invoke.js";

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      style={{
        margin: "24px auto",
        textAlign: "center",
        maxWidth: "100%",
      }}
    >
      <div
        id="container-cbd23b4bd83d763695438a74499ae29d"
        ref={containerRef}
      />
    </div>
  );
}
