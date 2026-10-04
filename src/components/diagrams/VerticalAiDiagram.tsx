import { verticalAiDomains, verticalAiFlow } from "@/content/narrative";
import { cn } from "@/lib/cn";

/**
 * VERTICAL AI ECOSYSTEM 다이어그램.
 *
 * 통이미지가 아닌 HTML + CSS 로 구현하며, 모든 단계는 실제 텍스트다.
 * - 흐름: 산업 → … → 프로젝트 (직선형)
 * - 분야: 세로 기둥(Vertical) 형태의 격자
 * 좁은 화면에서는 자연스럽게 줄바꿈되어 가로 스크롤이 발생하지 않는다.
 */
export function VerticalAiDiagram({
  inverse = false,
  className,
}: {
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-10 lg:gap-12", className)}>
      <div className="flex flex-col gap-4">
        <p
          className={cn(
            "label-caps",
            inverse ? "text-white/65" : "text-charcoal/62",
          )}
        >
          FLOW
        </p>
        {/*
          모바일: 세로형 (화살표 ↓ 가 단계 사이에 놓인다)
          sm~: 가로형. 화살표를 각 단계 앞에 두어, 줄바꿈이 생겨도
               줄 끝에 화살표만 남지 않는다.
        */}
        <ol className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2.5 sm:gap-y-2.5">
          {verticalAiFlow.map((step, index) => {
            const isFirst = index === 0;

            return (
              <li
                key={step}
                className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2.5"
              >
                {!isFirst ? (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pl-4 text-sm leading-none sm:pl-0 sm:leading-normal",
                      inverse ? "text-brand-soft/50" : "text-brand/50",
                    )}
                  >
                    <span className="sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </span>
                ) : null}

                <span
                  className={cn(
                    "flex min-h-10 w-full max-w-64 items-center gap-2 border px-3.5 py-1.5 text-sm break-keep sm:inline-flex sm:min-h-11 sm:w-auto sm:max-w-none sm:py-2",
                    inverse
                      ? "border-white/15 bg-white/5 text-white"
                      : "border-charcoal/15 text-navy bg-white",
                  )}
                >
                  <span
                    className={cn(
                      "label-caps",
                      inverse ? "text-brand-soft" : "text-brand",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p
            className={cn(
              "label-caps",
              inverse ? "text-white/65" : "text-charcoal/62",
            )}
          >
            VERTICALS
          </p>
          <p
            className={cn(
              "text-[0.8125rem] leading-relaxed break-keep",
              inverse ? "text-white/65" : "text-charcoal/70",
            )}
          >
            현재 확장하거나 연구하는 분야의 예시입니다. 각 분야는 앞으로
            교육·출판·프로젝트로 확장해 나갈 Vertical 영역입니다.
          </p>
        </div>

        <ul
          className={cn(
            "grid grid-cols-3 gap-px border lg:grid-cols-9",
            inverse
              ? "border-white/12 bg-white/12"
              : "border-charcoal/12 bg-charcoal/12",
          )}
        >
          {verticalAiDomains.map((domain, index) => (
            <li
              key={domain.en}
              className={cn(
                "relative flex min-h-28 flex-col justify-between gap-5 px-3 pt-5 pb-4 sm:px-4 lg:min-h-40",
                inverse ? "bg-navy" : "bg-white",
              )}
            >
              <span
                aria-hidden="true"
                className="bg-brand absolute top-0 left-0 h-0.5 w-full"
              />
              <span
                aria-hidden="true"
                className={cn(
                  "label-caps",
                  inverse ? "text-brand-soft/80" : "text-brand",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    "font-display text-[0.625rem] leading-tight font-semibold tracking-[0.08em] uppercase sm:text-[0.6875rem] sm:tracking-[0.1em]",
                    inverse ? "text-white" : "text-navy",
                  )}
                >
                  {domain.en}
                </span>
                <span
                  className={cn(
                    "text-[0.8125rem] leading-snug break-keep",
                    inverse ? "text-white/65" : "text-charcoal/70",
                  )}
                >
                  {domain.ko}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
