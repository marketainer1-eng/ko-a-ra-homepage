import type { Metadata } from "next";
import { ExpertIpDiagram } from "@/components/diagrams/ExpertIpDiagram";
import { VerticalAiDiagram } from "@/components/diagrams/VerticalAiDiagram";
import { JsonLd } from "@/components/seo/JsonLd";
import { ActionLink, ArrowLink } from "@/components/ui/ActionLink";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import {
  expertIpBookExpansion,
  expertIpConversions,
  expertIpDetail,
  expertIpPrinciple,
  verticalAiAssociationNote,
  verticalAiDetail,
  verticalAiMessage,
  verticalAiPrinciple,
  visionIntro,
  visionSystems,
  type VisionSystem,
} from "@/content/narrative";
import { getProjectBySlug, getStoryBySlug } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { projectPath, routes, storyPath } from "@/lib/routes";

const breadcrumbs = [
  { name: "HOME", path: routes.home },
  { name: "VISION", path: routes.vision },
];

export const metadata: Metadata = buildMetadata({
  title: "VISION · Vertical AI와 Expert IP",
  description:
    `${siteConfig.nameKo}(${siteConfig.name})가 만들고 있는 두 개의 구조. ` +
    "산업별로 AI 활용·창업·마케팅·교육·출판·전문가·프로젝트를 연결하는 Vertical AI Ecosystem과, " +
    "전문가의 지식과 경험을 여러 형태의 콘텐츠와 교육 자산으로 확장하는 Expert IP Ecosystem을 소개합니다.",
  path: routes.vision,
});

/**
 * 시스템과 연결된 STORY / PROJECT 링크.
 * published 상태인 콘텐츠만 노출한다. (draft · 미존재 대상은 링크를 만들지 않는다)
 */
function RelatedLinks({
  system,
  inverse = false,
}: {
  system: VisionSystem;
  inverse?: boolean;
}) {
  const links = [
    ...system.related.stories
      .map((slug) => getStoryBySlug(slug))
      .filter((story) => story?.status === "published")
      .map((story) => ({ href: storyPath(story!.slug), label: story!.title })),
    ...system.related.projects
      .map((slug) => getProjectBySlug(slug))
      .filter((project) => project?.status === "published")
      .map((project) => ({
        href: projectPath(project!.slug),
        label: project!.title,
      })),
  ];

  if (links.length === 0) return null;

  return (
    <ul className="mt-8 flex flex-col gap-1">
      {links.map((link) => (
        <li key={link.href}>
          <ArrowLink href={link.href} inverse={inverse}>
            {link.label}
          </ArrowLink>
        </li>
      ))}
    </ul>
  );
}

/**
 * VISION — 앞으로 무엇을 만들고 있는가.
 *
 * 두 시스템을 "왜 이 구조를 만드는가" 중심으로 설명한다.
 * 방향과 계획을 다루는 페이지이므로 달성한 사실처럼 서술하지 않는다.
 */
export default function VisionPage() {
  const [verticalAi, expertIp] = visionSystems;

  return (
    <>
      <PageHeader
        eyebrow="FUTURE · VISION"
        title="WHAT I AM BUILDING"
        lead={`${siteConfig.name}의 ${visionIntro}`}
        breadcrumbs={breadcrumbs}
        size="wide"
      />

      {/* 두 개의 중심 시스템 */}
      <nav
        aria-label="두 개의 중심 시스템"
        className="border-charcoal/10 border-b bg-white"
      >
        <ol className="mx-auto grid w-full max-w-[88rem] px-5 sm:grid-cols-2 sm:px-8 lg:px-12">
          {visionSystems.map((system, index) => (
            <li
              key={system.key}
              className={
                index === 0
                  ? "border-charcoal/10 border-b sm:border-r sm:border-b-0"
                  : ""
              }
            >
              <a
                href={`#${system.key}`}
                className="group flex min-h-20 items-center gap-4 py-5 sm:px-6 sm:first:pl-0"
              >
                <span className="label-caps text-brand">{system.no}</span>
                <span className="font-display text-navy group-hover:text-brand text-[0.8125rem] font-semibold tracking-[0.14em] uppercase transition-colors sm:text-sm">
                  {system.title}
                </span>
                <span
                  aria-hidden="true"
                  className="text-brand/60 ml-auto transition-transform group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 01. VERTICAL AI ECOSYSTEM — 직선 흐름 + 세로 기둥 */}
      <Section id={verticalAi.key} tone="ivory" size="wide">
        <SectionHeader eyebrow={verticalAi.no} title={verticalAi.title} />

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-navy font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.55] font-medium break-keep">
              {verticalAiPrinciple}
            </p>
            <p className="text-charcoal/80 text-base leading-[1.9] break-keep">
              {verticalAiMessage}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {verticalAiDetail.map((paragraph) => (
              <p
                key={paragraph}
                className="text-charcoal/80 text-base leading-[1.9] break-keep"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <VerticalAiDiagram className="mt-12 lg:mt-16" />

        <p className="border-brand text-navy mt-12 max-w-[46rem] border-l-2 py-1 pl-5 text-[0.975rem] leading-[1.85] break-keep sm:text-base">
          {verticalAiAssociationNote}
        </p>

        <RelatedLinks system={verticalAi} />
      </Section>

      {/* 02. EXPERT IP ECOSYSTEM — 원형 순환 */}
      <Section id={expertIp.key} tone="navy" size="wide">
        <SectionHeader eyebrow={expertIp.no} title={expertIp.title} inverse />

        <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.55] font-medium break-keep text-white">
                {expertIpPrinciple}
              </p>
              <p className="text-base leading-[1.9] break-keep text-white/75">
                {expertIpDetail[0]}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="label-caps text-brand-soft/80">전환의 예</h3>
              <ul className="flex flex-col border-t border-white/12">
                {expertIpConversions.map((conversion) => (
                  <li
                    key={conversion.from}
                    className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-white/12 py-3.5 text-[0.9375rem] break-keep text-white"
                  >
                    <span>{conversion.from}</span>
                    <span className="sr-only">에서</span>
                    <span aria-hidden="true" className="text-brand-soft/70">
                      →
                    </span>
                    <span>{conversion.to}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="label-caps text-brand-soft/80">
                반대로, 한 권의 책에서
              </h3>
              <ul className="flex flex-wrap gap-2">
                {expertIpBookExpansion.map((item) => (
                  <li
                    key={item}
                    className="inline-flex min-h-9 items-center border border-white/20 px-3.5 py-1.5 text-[0.8125rem] text-white/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="border-brand-soft/60 border-l-2 py-1 pl-5 text-[0.975rem] leading-[1.85] break-keep text-white sm:text-base">
              {expertIpDetail[1]}
            </p>

            <RelatedLinks system={expertIp} inverse />
          </div>

          <ExpertIpDiagram
            inverse
            className="border border-white/12 px-5 py-8 sm:px-8 sm:py-10 lg:self-start"
          />
        </div>
      </Section>

      {/* 연결 */}
      <Section tone="white" size="wide">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-caps text-brand">VERTICAL AI × EXPERT IP</p>
            <p className="text-navy mt-6 max-w-[40rem] font-serif text-[clamp(1.25rem,3.4vw,2rem)] leading-[1.5] font-medium break-keep">
              산업은 Vertical AI로, 전문가는 Expert IP로. 두 구조는 산업과
              전문가가 함께 성장하는 하나의 방향을 향합니다.
            </p>
            <p className="text-charcoal/70 mt-5 max-w-[40rem] text-sm leading-[1.85] break-keep">
              이 방향에 이르게 된 이유는 STORY에서, 실제로 진행하는 일은
              PROJECTS에서 이어집니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionLink href={routes.story}>STORY</ActionLink>
            <ActionLink href={routes.projects} variant="outline">
              PROJECTS
            </ActionLink>
            <ActionLink href={routes.about} variant="outline">
              ABOUT
            </ActionLink>
          </div>
        </div>
      </Section>

      <JsonLd data={jsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
    </>
  );
}
