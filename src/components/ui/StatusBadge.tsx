import type { ContentStatus } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * 콘텐츠 상태 배지.
 * draft 는 "준비 중" 임을 명확히 표시한다 (noindex 대상).
 * upcoming 은 공개 상태(published)이면서 아직 출간 전인 책에 쓴다.
 */
export function StatusBadge({
  status,
  upcoming = false,
  inverse = false,
  className,
}: {
  status: ContentStatus;
  upcoming?: boolean;
  inverse?: boolean;
  className?: string;
}) {
  const isDraft = status === "draft";
  const isMuted = isDraft || upcoming;

  return (
    <span
      className={cn(
        "label-caps inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
        upcoming
          ? inverse
            ? "border-dashed border-white/30 text-white/85"
            : "border-charcoal/25 text-charcoal/75 border-dashed bg-white"
          : isDraft
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
          isMuted ? (inverse ? "bg-white/40" : "bg-charcoal/30") : "bg-brand",
        )}
      />
      {upcoming ? "출간예정" : isDraft ? "DRAFT" : "PUBLISHED"}
    </span>
  );
}
