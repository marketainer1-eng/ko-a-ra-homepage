import type { MediaChannel } from "@/content/types";
import { isLinkable } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * 외부 채널 링크 카드.
 *
 * 공식 URL이 확인된(verified) 채널만 실제 링크로 렌더링한다.
 * 확인 전에는 "링크 준비 중" 상태로 표시하고 가짜 URL을 만들지 않는다.
 */
export function ChannelCard({
  channel,
  inverse = false,
  className,
}: {
  channel: MediaChannel;
  inverse?: boolean;
  className?: string;
}) {
  const linkable = isLinkable(channel);

  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3
          className={cn(
            "font-display text-sm font-semibold tracking-[0.12em] uppercase",
            inverse ? "text-white" : "text-navy",
          )}
        >
          {channel.name}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            "text-sm transition-transform",
            linkable
              ? "text-brand group-hover:translate-x-0.5"
              : inverse
                ? "text-white/55"
                : "text-charcoal/45",
          )}
        >
          {linkable ? "↗" : "—"}
        </span>
      </div>

      <p
        className={cn(
          "mt-3 text-sm leading-relaxed break-keep",
          inverse ? "text-white/65" : "text-charcoal/70",
        )}
      >
        {channel.role}
      </p>

      {!linkable ? (
        <p
          className={cn(
            "label-caps mt-5",
            inverse ? "text-white/60" : "text-charcoal/65",
          )}
        >
          링크 준비 중
        </p>
      ) : null}
    </>
  );

  const baseClass = cn(
    "group flex h-full flex-col border p-6",
    inverse ? "border-white/15" : "border-charcoal/12 bg-white",
    linkable && "transition-colors hover:border-brand",
    className,
  );

  if (linkable) {
    return (
      <a
        href={channel.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {body}
      </a>
    );
  }

  return (
    <div className={baseClass} aria-disabled="true">
      {body}
    </div>
  );
}
