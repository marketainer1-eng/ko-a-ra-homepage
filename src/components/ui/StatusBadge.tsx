import type { ContentStatus } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * 콘텐츠 상태 배지.
 * draft 는 "준비 중" 임을 명확히 표시한다 (noindex 대상).
 */
export function StatusBadge({
  status,
  inverse = false,
  className,
}: {
  status: ContentStatus;
  inverse?: boolean;
  className?: string;
}) {
  const isDraft = status === "draft";

  return (
    <span
      className={cn(
        "label-caps inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
        isDraft
          ? inverse
            ? "border-white/25 text-white/60"
            : "border-charcoal/20 text-charcoal/65"
          : inverse
            ? "border-brand-soft/40 text-brand-soft"
            : "border-brand/30 bg-brand-soft text-brand",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          isDraft ? "bg-charcoal/30" : "bg-brand",
          isDraft && inverse && "bg-white/40",
        )}
      />
      {isDraft ? "DRAFT" : "PUBLISHED"}
    </span>
  );
}
