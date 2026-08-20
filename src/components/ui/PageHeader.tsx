import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import type { BreadcrumbEntry } from "@/lib/jsonld";
import { cn } from "@/lib/cn";

/**
 * 하위 페이지 공통 헤더.
 * 페이지당 의미 있는 H1 을 1개만 두기 위해 이 컴포넌트에서 h1 을 렌더링한다.
 */
export function PageHeader({
  eyebrow,
  title,
  titleKo,
  lead,
  breadcrumbs,
  meta,
  size = "default",
  titleFont = "display",
}: {
  eyebrow?: string;
  /** 주 제목 */
  title: string;
  /** 한글 보조 제목 (h1 안에 함께 포함된다) */
  titleKo?: string;
  lead?: ReactNode;
  breadcrumbs: BreadcrumbEntry[];
  meta?: ReactNode;
  size?: "narrow" | "default" | "wide";
  /**
   * display: 영문 대문자 디스플레이 (섹션 페이지)
   * serif:   한글 제목용 세리프 (STORY/BOOKS/PROJECTS 상세 페이지)
   */
  titleFont?: "display" | "serif";
}) {
  return (
    <header className="bg-navy border-b border-white/10 pt-28 pb-16 text-white sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <Container size={size}>
        <Breadcrumbs items={breadcrumbs} inverse className="mb-10" />

        {eyebrow ? (
          <p className="label-caps text-brand-soft/80 mb-5">{eyebrow}</p>
        ) : null}

        <h1
          className={cn(
            "flex flex-col gap-4 text-white",
            titleKo ? "max-w-[52rem]" : "",
          )}
        >
          <span
            className={
              titleFont === "serif"
                ? "font-serif text-[clamp(1.5rem,4.6vw,2.75rem)] leading-[1.35] font-medium break-keep"
                : "font-display text-[clamp(2rem,7vw,4.25rem)] leading-[1.02] font-semibold tracking-[0.02em] uppercase"
            }
          >
            {title}
          </span>
          {titleKo ? (
            <span className="font-serif text-[clamp(1.125rem,3.2vw,1.75rem)] leading-[1.5] font-medium break-keep text-white/85">
              {titleKo}
            </span>
          ) : null}
        </h1>

        {lead ? (
          <div className="mt-8 max-w-[46rem] text-[0.975rem] leading-[1.85] break-keep text-white/70 sm:text-base">
            {lead}
          </div>
        ) : null}

        {meta ? <div className="mt-8">{meta}</div> : null}
      </Container>
    </header>
  );
}
