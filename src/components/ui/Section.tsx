import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export type SectionTone = "ivory" | "white" | "navy" | "soft";

const toneClass: Record<SectionTone, string> = {
  ivory: "bg-ivory text-charcoal",
  white: "bg-white text-charcoal",
  navy: "bg-navy text-white",
  soft: "bg-brand-soft text-charcoal",
};

export function Section({
  id,
  tone = "ivory",
  divider = false,
  size = "default",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  /** 같은 톤이 이어질 때 얇은 구분선을 넣는다 */
  divider?: boolean;
  size?: "narrow" | "default" | "wide";
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-24 lg:py-32",
        toneClass[tone],
        divider &&
          (tone === "navy"
            ? "border-t border-white/10"
            : "border-charcoal/10 border-t"),
        className,
      )}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

/**
 * 섹션 헤더.
 * eyebrow(영문 라벨) + h2(영문 대문자 디스플레이) + 한글 리드 문장.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  inverse = false,
  align = "left",
  headingId,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  inverse?: boolean;
  align?: "left" | "center";
  headingId?: string;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "label-caps",
            inverse ? "text-brand-soft/80" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={headingId}
        className={cn(
          "font-display text-[clamp(1.75rem,5.2vw,3.25rem)] leading-[1.08] font-semibold tracking-[0.02em] uppercase",
          inverse ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>

      {lead ? (
        <div
          className={cn(
            "max-w-[46rem] text-[0.975rem] leading-[1.85] break-keep sm:text-base",
            align === "center" && "mx-auto",
            inverse ? "text-white/75" : "text-charcoal/75",
          )}
        >
          {lead}
        </div>
      ) : null}
    </header>
  );
}
