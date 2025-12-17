import * as React from "react";
import { cn } from "@/lib/utils";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Toggle: React.FC<ToggleProps> = ({ className, ...props }) => {
  return <input type="checkbox" className={cn("relative inline-flex h-6 w-11 cursor-pointer rounded-full bg-muted transition-colors duration-200 checked:bg-primary", className)} {...props} />;
};
