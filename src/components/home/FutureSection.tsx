import { ExpertIpDiagram } from "@/components/diagrams/ExpertIpDiagram";
import { VerticalAiDiagram } from "@/components/diagrams/VerticalAiDiagram";
import { ActionLink } from "@/components/ui/ActionLink";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  expertIpPrinciple,
  futureMessage,
  verticalAiMessage,
  verticalAiPrinciple,
} from "@/content/narrative";
import { routes } from "@/lib/routes";

function SystemHeading({ no, title }: { no: string; title: string }) {
  return (
    <h3 className="border-charcoal/15 flex flex-wrap items-baseline gap-3 border-t pt-6">
      <span className="label-caps text-brand">{no}</span>
      <span className="font-display text-navy text-[clamp(1.375rem,4.2vw,2.25rem)] leading-tight font-semibold tracking-[0.08em] uppercase">
        {title}
      </span>
    </h3>
  );
}

/**
 * FUTURE — 앞으로 무엇을 만들고 있는가.
 *
 * 두 시스템을 형태로 구분한다.
 * - VERTICAL AI: 직선 흐름 + 세로 기둥 격자 (산업별 구조)
 * - EXPERT IP: 원형 순환 (지식의 상호 전환)
 *
 * 방향과 계획을 설명하는 영역이므로 달성한 사실처럼 서술하지 않는다.
 */
export function FutureSection() {
  return (
    <Section id="future" tone="ivory">
      <SectionHeader eyebrow="FUTURE" title="WHAT I AM BUILDING" />

      <p className="text-navy mt-8 max-w-[42rem] font-serif text-[clamp(1.125rem,2.6vw,1.625rem)] leading-[1.6] break-keep">
        {futureMessage}
      </p>

      <p className="font-display text-brand mt-8 text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
        VERTICAL AI × EXPERT IP
      </p>

      <div className="mt-12 flex flex-col gap-16 lg:mt-16 lg:gap-24">
        <article>
          <SystemHeading no="01" title="Vertical AI" />
          <div className="mt-6 flex max-w-[44rem] flex-col gap-3">
            <p className="text-navy font-serif text-lg leading-[1.6] font-medium break-keep sm:text-xl">
              {verticalAiPrinciple}
            </p>
            <p className="text-charcoal/78 text-[0.975rem] leading-[1.9] break-keep sm:text-base">
              {verticalAiMessage}
            </p>
          </div>
          <VerticalAiDiagram className="mt-10" />
        </article>

        <article>
          <SystemHeading no="02" title="Expert IP" />
          <p className="text-navy mt-6 max-w-[44rem] font-serif text-lg leading-[1.6] font-medium break-keep sm:text-xl">
            {expertIpPrinciple}
          </p>
          <ExpertIpDiagram
            layout="wide"
            className="border-charcoal/12 mt-10 border bg-white px-5 py-8 sm:px-8 sm:py-10"
          />
        </article>
      </div>

      <div className="mt-14 lg:mt-16">
        <ActionLink href={routes.vision} variant="outline">
          VIEW VISION
        </ActionLink>
      </div>
    </Section>
  );
}
