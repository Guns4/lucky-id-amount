import { badgeVariants } from "@/lib/ui";

export function Badge({ variant = "default", children }: { variant?: keyof typeof badgeVariants; children: React.ReactNode }) {
  return <span className={badgeVariants[variant]}>{children}</span>;
}
