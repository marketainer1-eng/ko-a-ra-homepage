import type { CSSProperties } from "react";
import {
  expertIpBrand,
  expertIpCore,
  expertIpFormats,
  expertIpOutcomes,
  expertIpSources,
} from "@/content/narrative";
import { cn } from "@/lib/cn";

/**
 * EXPERT IP ECOSYSTEM 다이어그램.
 *
 * 책을 출발점으로 두는 선형 구조가 아니라, 다양한 출발점(SOURCE)에서 시작한
 * 콘텐츠가 여러 형식으로 서로 전환되는 순환형 구조로 표현한다.
 * 통이미지 없이 HTML + CSS 로 구현한다.
 *
 * SOURCE (다양한 출발점) → 상호 전환되는 형식(원형) → 전문가 브랜드 → 확장
 *
 * - 모바일: 2열 그리드 (동일 DOM)
 * - md~: 원형 배치 (--x / --y 커스텀 프로퍼티로 위치 지정)
 */

const RADIUS = 38;

const positions = expertIpFormats.map((_, index) => {
  const angle =
    (-90 + index * (360 / expertIpFormats.length)) * (Math.PI / 180);
  return {
    x: `${(50 + RADIUS * Math.cos(angle)).toFixed(2)}%`,
    y: `${(50 + RADIUS * Math.sin(angle)).toFixed(2)}%`,
  };
});

function StageLabel({
  children,
  inverse,
}: {
  children: string;
  inverse: boolean;
}) {
  return (
    <p
      className={cn(
        "label-caps text-center",
        inverse ? "text-white/65" : "text-charcoal/62",
      )}
    >
      {children}
    </p>
  );
}

function StageArrow({
  inverse,
  wide = false,
}: {
  inverse: boolean;
  /** wide 레이아웃에서는 xl 부터 가로 화살표로 바뀐다 */
  wide?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block text-center text-lg leading-none",
        inverse ? "text-brand-soft/60" : "text-brand/60",
      )}
    >
      <span className={cn(wide && "xl:hidden")}>↓</span>
      {wide ? <span className="hidden xl:inline">→</span> : null}
    </span>
  );
}

export function ExpertIpDiagram({
  inverse = false,
  layout = "stacked",
  className,
}: {
  inverse?: boolean;
  /**
   * stacked: 세 단계를 세로로 쌓는다 (좁은 컬럼용)
   * wide:    xl 부터 세 단계를 가로로 나란히 둔다 (전체 폭용)
   */
  layout?: "stacked" | "wide";
  className?: string;
}) {
  const wide = layout === "wide";

  return (
    <div
      className={cn(
        "flex flex-col gap-7",
        wide &&
          "xl:grid xl:grid-cols-[1fr_auto_minmax(0,26rem)_auto_0.8fr] xl:items-center xl:gap-6",
        className,
      )}
    >
      {/* 1. SOURCE — 출발점은 다양하다 */}
      <div className="flex flex-col gap-4">
        <StageLabel inverse={inverse}>SOURCE CONTENT</StageLabel>
        <ul className="mx-auto flex max-w-[40rem] flex-wrap justify-center gap-2">
          {expertIpSources.map((source) => (
            <li key={source}>
              <span
                className={cn(
                  "inline-flex min-h-9 items-center rounded-full px-3.5 py-1.5 text-[0.8125rem]",
                  inverse
                    ? "bg-white/10 text-white/85"
                    : "bg-brand-soft text-brand",
                )}
              >
                {source}
              </span>
            </li>
          ))}
        </ul>
        <p
          className={cn(
            "text-center text-[0.8125rem] break-keep",
            inverse ? "text-white/60" : "text-charcoal/65",
          )}
        >
          출발점은 책 한 가지가 아니라 다양합니다.
        </p>
      </div>

      <StageArrow inverse={inverse} wide={wide} />

      {/* 2. CONTENT FORMATS — 서로 전환되는 형식 */}
      <div className="flex flex-col gap-5">
        <StageLabel inverse={inverse}>CONTENT FORMATS</StageLabel>

        <div className="relative mx-auto grid w-full max-w-sm grid-cols-2 gap-2.5 md:block md:aspect-square md:max-w-[30rem]">
          <span
            aria-hidden="true"
            className={cn(
              "hidden md:absolute md:inset-[12%] md:block md:rounded-full md:border md:border-dashed",
              inverse ? "md:border-white/30" : "md:border-brand/40",
            )}
          />

          <p
            className={cn(
              "col-span-2 flex min-h-14 items-center justify-center rounded-full px-5 py-3 text-center font-serif text-[0.95rem] leading-snug font-medium break-keep md:absolute md:top-1/2 md:left-1/2 md:size-36 md:-translate-x-1/2 md:-translate-y-1/2 md:text-base",
              inverse ? "bg-brand text-white" : "bg-navy text-white",
            )}
          >
            {expertIpCore}
          </p>

          {expertIpFormats.map((format, index) => (
            <span
              key={format}
              style={
                {
                  "--x": positions[index].x,
                  "--y": positions[index].y,
                } as CSSProperties
              }
              className={cn(
                "flex min-h-11 items-center justify-center border px-4 py-2.5 text-center text-sm break-keep md:absolute md:top-[var(--y)] md:left-[var(--x)] md:w-28 md:-translate-x-1/2 md:-translate-y-1/2",
                inverse
                  ? "bg-navy border-white/25 text-white"
                  : "border-charcoal/15 text-navy bg-white",
              )}
            >
              {format}
            </span>
          ))}
        </div>

        <p
          className={cn(
            "text-center text-[0.8125rem] break-keep",
            inverse ? "text-white/60" : "text-charcoal/65",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("mr-1.5", inverse ? "text-brand-soft" : "text-brand")}
          >
            ↻
          </span>
          콘텐츠는 서로 다른 형식으로 전환될 수 있습니다.
        </p>
      </div>

      <StageArrow inverse={inverse} wide={wide} />

      {/* 3. 결과 — 전문가 브랜드와 확장 */}
      <div className="flex flex-col items-center gap-5">
        <p
          className={cn(
            "inline-flex min-h-12 items-center px-7 py-3 font-serif text-base font-medium sm:text-lg",
            inverse ? "text-navy bg-white" : "bg-brand text-white",
          )}
        >
          {expertIpBrand}
        </p>

        <StageArrow inverse={inverse} />

        <ul className="flex flex-wrap justify-center gap-2">
          {expertIpOutcomes.map((item) => (
            <li key={item}>
              <span
                className={cn(
                  "inline-flex min-h-11 items-center border px-4 py-2 text-sm",
                  inverse
                    ? "border-white/25 text-white/90"
                    : "border-charcoal/15 text-navy bg-white",
                )}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
