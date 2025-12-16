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
    <div className="w-full max-w-md mx-auto my-4 px-2">
      <div className="glass-card rounded-xl p-3 border border-border/30">
        <p className="text-[10px] text-muted-foreground/60 text-center mb-2 uppercase tracking-wider">
          Sponsored
        </p>
        <div
          id="container-cbd23b4bd83d763695438a74499ae29d"
          ref={containerRef}
          className="min-h-[50px] flex items-center justify-center overflow-hidden"
        />
      </div>
    </div>
  );
}
