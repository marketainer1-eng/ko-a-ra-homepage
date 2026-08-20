import { pastTimeline } from "@/content/narrative";
import { cn } from "@/lib/cn";

/**
 * PAST 타임라인.
 *
 * 이미지가 아닌 HTML + CSS 로 구현한다.
 * - 모바일/태블릿: 세로 레일
 * - 데스크톱(lg~): 가로 레일 6단
 * 동일한 DOM 을 유지한 채 CSS 로만 방향을 바꾼다.
 */
export function PastTimeline() {
  const steps = pastTimeline;

  return (
    <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-4">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li key={step.id} className="relative pl-10 lg:pt-10 lg:pl-0">
            {!isLast ? (
              <span
                aria-hidden="true"
                className="bg-charcoal/15 absolute top-6 -bottom-8 left-[7px] w-px lg:top-[7px] lg:-right-4 lg:bottom-auto lg:left-6 lg:h-px lg:w-auto"
              />
            ) : null}

            <span
              aria-hidden="true"
              className={cn(
                "absolute top-1.5 left-0 size-4 rounded-full border-2 lg:top-0",
                isLast ? "border-brand bg-brand" : "border-brand bg-ivory",
              )}
            />

            <p className="label-caps text-brand">
              {String(index + 1).padStart(2, "0")}
            </p>

            <p className="text-navy mt-2.5 font-serif text-lg leading-snug font-medium break-keep sm:text-xl lg:text-[1.0625rem]">
              {step.label}
            </p>

            {step.period ? (
              <time className="text-charcoal/65 mt-1 block text-sm">
                {step.period}
              </time>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
