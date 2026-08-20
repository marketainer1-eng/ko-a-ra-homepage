import {
  verticalAiDomains,
  verticalAiFlow,
  verticalAiPrinciple,
} from "@/content/narrative";
import { cn } from "@/lib/cn";

/**
 * VERTICAL AI ECOSYSTEM 다이어그램.
 *
 * 통이미지가 아닌 HTML + CSS 로 구현하며, 모든 단계는 실제 텍스트다.
 * 좁은 화면에서는 자연스럽게 줄바꿈되어 가로 스크롤이 발생하지 않는다.
 */
export function VerticalAiDiagram({
  inverse = false,
  showPrinciple = true,
  className,
}: {
  inverse?: boolean;
  /** 상위 영역에서 같은 문장을 이미 노출한 경우 false 로 끈다 */
  showPrinciple?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {showPrinciple ? (
        <p
          className={cn(
            "font-serif text-lg leading-[1.6] break-keep sm:text-xl",
            inverse ? "text-white" : "text-navy",
          )}
        >
          {verticalAiPrinciple}
        </p>
      ) : null}

      <ol className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {verticalAiFlow.map((step, index) => {
          const isLast = index === verticalAiFlow.length - 1;

          return (
            <li key={step} className="flex items-center gap-2 sm:gap-2.5">
              <span
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 border px-3.5 py-2 text-sm break-keep",
                  inverse
                    ? "border-white/15 bg-white/5 text-white"
                    : "border-charcoal/15 text-navy bg-white",
                )}
              >
                <span className="label-caps text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </span>

              {!isLast ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "text-sm",
                    inverse ? "text-brand-soft/50" : "text-brand/50",
                  )}
                >
                  →
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="flex flex-col gap-3">
        <p
          className={cn(
            "label-caps",
            inverse ? "text-white/65" : "text-charcoal/62",
          )}
        >
          확장 분야 예시
        </p>
        <ul className="flex flex-wrap gap-2">
          {verticalAiDomains.map((domain) => (
            <li key={domain}>
              <span
                className={cn(
                  "inline-flex min-h-9 items-center rounded-full px-3.5 py-1.5 text-[0.8125rem]",
                  inverse
                    ? "bg-white/10 text-white/80"
                    : "bg-brand-soft text-brand",
                )}
              >
                {domain}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
