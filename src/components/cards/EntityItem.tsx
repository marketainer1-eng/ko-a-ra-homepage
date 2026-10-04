import type { EcosystemEntry } from "@/content/narrative";
import { isLinkable } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * 독립 기관(Entity) 한 건과 KO A RA 의 관계를 표시한다.
 *
 * - 기관명은 공식 URL이 검증된 경우에만 링크로 렌더링한다. (가짜 링크 금지)
 * - 관계(relation)는 제공된 사실이 있을 때만 표시한다.
 */
export function EntityItem({
  entry,
  className,
}: {
  entry: EcosystemEntry;
  className?: string;
}) {
  const name = (
    <span className="text-navy font-serif text-base leading-snug font-medium break-keep sm:text-[1.0625rem]">
      {entry.name}
    </span>
  );

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {entry.parent ? (
        <span className="text-charcoal/65 text-[0.8125rem] leading-snug break-keep">
          {entry.parent}
        </span>
      ) : null}

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        {isLinkable(entry) ? (
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand underline-offset-4 hover:underline"
          >
            {name}
          </a>
        ) : (
          name
        )}

        {entry.relation ? (
          <span className="border-brand/40 text-brand inline-flex items-center border px-2 py-0.5 text-[0.75rem] leading-none font-medium">
            <span className="sr-only">관계: </span>
            {entry.relation}
          </span>
        ) : null}
      </div>

      {entry.description ? (
        <span className="text-charcoal/70 text-[0.8125rem] leading-relaxed break-keep">
          {entry.description}
        </span>
      ) : null}
    </div>
  );
}
