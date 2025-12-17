<<<<<<< HEAD
import { useEffect, useRef } from "react";
import { SMARTLINK_URL } from "@/lib/smartlink";

export function useExitSmartlink() {
  const triggered = useRef(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10 && !triggered.current) {
        triggered.current = true;
        window.open(SMARTLINK_URL, "_blank");
      }
    };

    document.addEventListener("mouseout", handler);
    return () => document.removeEventListener("mouseout", handler);
  }, []);
}
=======
import { useEffect, useRef } from "react";
import { SMARTLINK_URL } from "@/lib/smartlink";

export function useExitSmartlink() {
  const triggered = useRef(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 10 && !triggered.current) {
        triggered.current = true;
        window.open(SMARTLINK_URL, "_blank");
      }
    };

    document.addEventListener("mouseout", handler);
    return () => document.removeEventListener("mouseout", handler);
  }, []);
}
>>>>>>> 97c73a6 (update)
