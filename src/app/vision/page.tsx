import type { Metadata } from "next";
import { ExpertIpDiagram } from "@/components/diagrams/ExpertIpDiagram";
import { VerticalAiDiagram } from "@/components/diagrams/VerticalAiDiagram";
import { JsonLd } from "@/components/seo/JsonLd";
import { ActionLink } from "@/components/ui/ActionLink";
import { DraftNote } from "@/components/ui/DraftNote";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { futureMessage } from "@/content/narrative";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const breadcrumbs = [
  { name: "HOME", path: routes.home },
  { name: "VISION", path: routes.vision },
];

export const metadata: Metadata = buildMetadata({
  title: "VISION",
  description:
    "Vertical AI Ecosystem 과 Expert IP Ecosystem — 고아라(KO A RA)가 만들고 있는 두 개의 생태계 구조를 소개합니다.",
  path: routes.vision,
});

export default function VisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="FUTURE"
        title="VISION"
        titleKo="무엇을 만들고 있는가"
        lead={futureMessage}
        breadcrumbs={breadcrumbs}
        size="wide"
      />

      <Section tone="ivory" size="wide">
        <SectionHeader
          eyebrow="A"
          title="Vertical AI Ecosystem"
          lead="AI는 모든 산업에 같은 방식으로 적용되지 않습니다. 산업마다 필요한 전문화의 경로가 다릅니다."
        />
        <VerticalAiDiagram className="mt-14" showPrinciple={false} />
      </Section>

      <Section tone="white" size="wide" divider>
        <SectionHeader
          eyebrow="B"
          title="Expert IP Ecosystem"
          lead="전문가의 지식과 경험은 하나의 콘텐츠에서 끝나지 않고, 형식을 바꾸며 순환합니다."
        />
        <ExpertIpDiagram className="mt-14" showPrinciple={false} />
      </Section>

      <Section tone="navy" size="wide">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-caps text-brand-soft/80">NEXT</p>
            <p className="mt-6 max-w-[38rem] font-serif text-[clamp(1.25rem,3.4vw,2rem)] leading-[1.5] font-medium break-keep text-white">
              두 생태계가 어떻게 연결되는지는 STORY 와 PROJECTS 에서 이어집니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionLink href={routes.story} inverse>
              STORY
            </ActionLink>
            <ActionLink href={routes.projects} variant="outline" inverse>
              PROJECTS
            </ActionLink>
          </div>
        </div>

        <DraftNote className="mt-12" inverse>
          이 페이지는 구조와 레이아웃 중심의 Phase 1 버전입니다. 세부 설명은
          확정된 내용으로 이어서 채웁니다.
        </DraftNote>
      </Section>

      <JsonLd data={jsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
    </>
  );
}
