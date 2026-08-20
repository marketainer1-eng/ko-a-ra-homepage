import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * 아직 콘텐츠가 없는 영역의 빈 상태.
 * 가짜 데이터를 채우는 대신 상태를 명확히 보여준다.
 */
export function EmptyState({
  title,
  description,
  action,
  inverse = false,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 border border-dashed p-8 sm:p-12",
        inverse ? "border-white/20" : "border-charcoal/20",
        className,
      )}
    >
      <p
        className={cn(
          "font-display text-sm font-semibold tracking-[0.16em] uppercase",
          inverse ? "text-white" : "text-navy",
        )}
      >
        {title}
      </p>
      {description ? (
        <p
          className={cn(
            "max-w-[38rem] text-[0.9rem] leading-[1.8] break-keep",
            inverse ? "text-white/65" : "text-charcoal/65",
          )}
        >
          {description}
        </p>
      ) : null}
      {action}
    </div>
  );
}
