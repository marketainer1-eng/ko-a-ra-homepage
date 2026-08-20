import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "quiet";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[2px] px-6 py-3 " +
  "font-display text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors";

const variantClass: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-[#0f47b4]",
  outline:
    "border border-charcoal/25 text-navy hover:border-brand hover:text-brand",
  quiet: "text-brand hover:text-[#0f47b4]",
};

const inverseVariantClass: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-[#2f6ce4]",
  outline: "border border-white/30 text-white hover:border-brand-soft",
  quiet: "text-brand-soft hover:text-white",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  inverse = false,
  external = false,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  inverse?: boolean;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const classes = cn(
    base,
    inverse ? inverseVariantClass[variant] : variantClass[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

/** 화살표가 붙는 텍스트 링크 (카드 하단 등) */
export function ArrowLink({
  href,
  children,
  inverse = false,
  className,
}: {
  href: string;
  children: ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group font-display inline-flex min-h-11 items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors",
        inverse ? "text-brand-soft hover:text-white" : "text-brand",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
