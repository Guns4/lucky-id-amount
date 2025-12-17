import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "destructive" | "success" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({ className, variant = "default", size = "md", ...props }) => {
  const variantClasses = {
    default: "bg-muted text-muted-foreground",
    destructive: "bg-destructive text-destructive-foreground",
    success: "bg-success text-success-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span className={cn("inline-flex items-center rounded-full font-medium", variantClasses[variant], sizeClasses[size], className)} {...props} />
  );
};
