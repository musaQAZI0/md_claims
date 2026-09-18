import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string };

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  return <Link href={href} className={`button button-${variant} ${className}`}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}
