import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Phase 1 안내 노트.
 *
 * 아직 확정되지 않은 정보(연도, 원고, 링크 등)를 임의로 채우지 않고
 * 무엇이 비어 있는지 명시하기 위한 컴포넌트다.
 * 실제 데이터가 채워지면 해당 위치에서 제거하면 된다.
 */
export function DraftNote({
  children,
  inverse = false,
  className,
}: {
  children: ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "border-l-2 py-1 pl-4 text-[0.8125rem] leading-relaxed break-keep",
        inverse
          ? "border-brand-soft/40 text-white/55"
          : "border-brand/40 text-charcoal/65",
        className,
      )}
    >
      {children}
    </p>
  );
}
