import type { CSSProperties } from "react";
import {
  expertIpCore,
  expertIpEntryPoints,
  expertIpFormats,
  expertIpLayers,
  expertIpPrinciple,
} from "@/content/narrative";
import { cn } from "@/lib/cn";

/**
 * EXPERT IP ECOSYSTEM 다이어그램.
 *
 * 책을 시작점으로 두는 선형 구조가 아니라, 콘텐츠 형식들이 서로 전환되는
 * 순환형 구조로 표현한다. 통이미지 없이 HTML + CSS 로 구현한다.
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

export function ExpertIpDiagram({
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
    <div className={cn("flex flex-col gap-10", className)}>
      {showPrinciple ? (
        <p
          className={cn(
            "font-serif text-lg leading-[1.6] break-keep sm:text-xl",
            inverse ? "text-white" : "text-navy",
          )}
        >
          {expertIpPrinciple}
        </p>
      ) : null}

      <div className="relative mx-auto grid w-full max-w-sm grid-cols-2 gap-3 md:block md:aspect-square md:max-w-[34rem]">
        <span
          aria-hidden="true"
          className={cn(
            "hidden md:absolute md:inset-[12%] md:block md:rounded-full md:border md:border-dashed",
            inverse ? "md:border-white/25" : "md:border-brand/35",
          )}
        />

        <p
          className={cn(
            "col-span-2 flex min-h-16 items-center justify-center rounded-full px-5 py-4 text-center font-serif text-[0.95rem] leading-snug break-keep md:absolute md:top-1/2 md:left-1/2 md:size-40 md:-translate-x-1/2 md:-translate-y-1/2 md:text-base",
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
              "flex min-h-11 items-center justify-center border px-4 py-2.5 text-center text-sm break-keep md:absolute md:top-[var(--y)] md:left-[var(--x)] md:w-32 md:-translate-x-1/2 md:-translate-y-1/2",
              inverse
                ? "bg-navy border-white/20 text-white"
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
          inverse ? "text-white/55" : "text-charcoal/65",
        )}
      >
        <span aria-hidden="true" className="text-brand mr-1.5">
          ↻
        </span>
        모든 형식은 서로 전환됩니다. 시작점은 고정되어 있지 않습니다.
      </p>

      <div className="flex flex-col items-center gap-4">
        <span
          aria-hidden="true"
          className={cn(
            "text-lg",
            inverse ? "text-brand-soft/60" : "text-brand/60",
          )}
        >
          ↕
        </span>

        <p
          className={cn(
            "font-display inline-flex min-h-11 items-center px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase",
            inverse ? "bg-white/10 text-white" : "bg-brand-soft text-brand",
          )}
        >
          {expertIpLayers[0].label}
        </p>

        <span
          aria-hidden="true"
          className={cn(
            "text-lg",
            inverse ? "text-brand-soft/60" : "text-brand/60",
          )}
        >
          ↕
        </span>

        <ul className="flex flex-wrap justify-center gap-2">
          {expertIpLayers[1].items.map((item) => (
            <li key={item}>
              <span
                className={cn(
                  "inline-flex min-h-11 items-center border px-4 py-2 text-sm",
                  inverse
                    ? "border-white/20 text-white/85"
                    : "border-charcoal/15 text-navy bg-white",
                )}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <p
          className={cn(
            "label-caps",
            inverse ? "text-white/65" : "text-charcoal/62",
          )}
        >
          출발점 예시
        </p>
        <ul className="flex flex-wrap gap-2">
          {expertIpEntryPoints.map((entry) => (
            <li key={entry}>
              <span
                className={cn(
                  "inline-flex min-h-9 items-center rounded-full px-3.5 py-1.5 text-[0.8125rem]",
                  inverse
                    ? "bg-white/10 text-white/80"
                    : "bg-brand-soft text-brand",
                )}
              >
                {entry}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
