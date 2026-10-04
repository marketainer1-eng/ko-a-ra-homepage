import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ChannelCard } from "@/components/cards/ChannelCard";
import { EntityItem } from "@/components/cards/EntityItem";
import { JsonLd } from "@/components/seo/JsonLd";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { PageHeader } from "@/components/ui/PageHeader";
import { person } from "@/config/person";
import { siteConfig } from "@/config/site";
import {
  currentEcosystem,
  expertiseAreas,
  organizationGroupOrder,
} from "@/content/narrative";
import { getMediaChannels } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph, profilePageSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const breadcrumbs = [
  { name: "HOME", path: routes.home },
  { name: "ABOUT", path: routes.about },
];

export const metadata: Metadata = buildMetadata({
  title: "ABOUT · 공식 프로필",
  description:
    `AI 이커머스 전문가 ${siteConfig.nameKo}(${siteConfig.name})의 공식 프로필. ` +
    "명지대학교 테크노아트대학원 AI 이커머스학과 주임교수로서의 공식 직함, 전문영역, " +
    "교육·산업·연구·미디어 기관과의 관계, 공식 외부 채널을 정리했습니다.",
  path: routes.about,
  ogType: "profile",
});

function SubHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="text-navy flex items-center gap-3 font-serif text-xl font-medium break-keep sm:text-[1.375rem]"
    >
      <span aria-hidden="true" className="bg-brand h-px w-8 shrink-0" />
      {children}
    </h2>
  );
}

function FactRow({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 bg-white px-5 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-7 sm:py-6">
      <dt className="label-caps text-charcoal/70 leading-[1.6] sm:pt-1.5">
        {term}
      </dt>
      <dd className="text-navy text-base leading-relaxed break-keep">
        {children}
      </dd>
    </div>
  );
}

function FactList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="border-charcoal/15 inline-flex min-h-8 items-center border px-3 py-1 text-[0.875rem] leading-snug"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * ABOUT — 현재 공식적으로 누구이며 어떤 전문영역에서 활동하는가.
 *
 * STORY 가 "왜 지금의 방향에 이르렀는가"를 다룬다면,
 * ABOUT 은 현재 시점의 공식 기준정보(Fact)를 구조화해 보여준다.
 * 핵심 정보는 문단에만 두지 않고 dl/dt/dd 로 항목화한다.
 */
export default function AboutPage() {
  const channels = getMediaChannels();
  const organizationGroups = organizationGroupOrder
    .map((key) => currentEcosystem.find((group) => group.key === key))
    .filter((group) => group !== undefined);

  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        title="ABOUT"
        titleKo={person.positioning}
        lead="현재 공식적으로 누구이며, 어떤 전문영역에서 활동하는지를 정리한 기준 정보입니다."
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-ivory py-16 sm:py-24 lg:py-28">
        <Container>
          {/* 프로필 소개 */}
          <section aria-labelledby="about-intro">
            <SubHeading id="about-intro">소개</SubHeading>
            <div className="mt-8 flex max-w-[46rem] flex-col gap-5">
              <p className="text-navy font-serif text-[clamp(1.125rem,2.6vw,1.5rem)] leading-[1.7] font-medium break-keep">
                {person.profile[0]}
              </p>
              <p className="text-charcoal/85 text-base leading-[1.95] break-keep sm:text-[1.0625rem]">
                {person.profile[1]}
              </p>
            </div>
          </section>

          {/* 공식 기준정보 */}
          <section aria-labelledby="about-profile" className="mt-16 lg:mt-20">
            <SubHeading id="about-profile">공식 프로필</SubHeading>
            <dl className="border-charcoal/12 bg-charcoal/12 mt-8 grid gap-px border">
              <FactRow term="Name · 이름">
                <span className="font-serif text-xl font-medium">
                  {person.name}
                </span>
              </FactRow>
              <FactRow term="English Name · 영문명">
                <span className="font-display text-xl font-semibold tracking-[0.2em] uppercase">
                  {person.alternateName}
                </span>
              </FactRow>
              <FactRow term="Positioning · 포지셔닝">
                {person.positioningLabel}
              </FactRow>
              <FactRow term="Official Role · 공식 직함">
                <address className="not-italic">
                  {person.officialRole.lines[0]}
                  <br />
                  {person.officialRole.lines[1]}
                </address>
              </FactRow>
              <FactRow term="Primary Expertise · 대표 전문분야">
                {person.primaryExpertise}
                <span className="text-charcoal/60 ml-2 text-[0.875rem]">
                  AI E-Commerce
                </span>
              </FactRow>
              <FactRow term="Background · 배경">
                <FactList items={person.background} />
              </FactRow>
              <FactRow term="Current Areas · 현재 영역">
                <FactList items={person.currentAreas} />
              </FactRow>
            </dl>
          </section>

          {/* 전문영역 */}
          <section aria-labelledby="about-expertise" className="mt-16 lg:mt-20">
            <SubHeading id="about-expertise">전문영역</SubHeading>
            <ol className="border-charcoal/12 bg-charcoal/12 mt-8 grid gap-px border sm:grid-cols-2 lg:grid-cols-3">
              {expertiseAreas.map((area) => (
                <li key={area.no} className="bg-white p-6">
                  <p className="label-caps text-brand">{area.no}</p>
                  <h3 className="font-display text-navy mt-3 text-sm font-semibold tracking-[0.12em] uppercase">
                    {area.title}
                  </h3>
                  <p className="text-charcoal/70 mt-3 text-sm leading-[1.8] break-keep">
                    {area.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* 기관과의 관계 */}
          <section
            aria-labelledby="about-organizations"
            className="mt-16 lg:mt-20"
          >
            <SubHeading id="about-organizations">기관과의 관계</SubHeading>
            <p className="text-charcoal/75 mt-6 max-w-[46rem] text-[0.975rem] leading-[1.85] break-keep">
              아래 기관들은 각각 독립된 조직입니다. {siteConfig.name}와의 관계만
              영역별로 정리했습니다.
            </p>

            <dl className="border-charcoal/12 bg-charcoal/12 mt-8 grid gap-px border">
              {organizationGroups.map((group) => (
                <div
                  key={group.key}
                  className="grid gap-4 bg-white px-5 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-7"
                >
                  <dt>
                    <span className="font-display text-brand block text-xs leading-[1.5] font-semibold tracking-[0.16em] uppercase">
                      {group.label}
                    </span>
                    <span className="text-charcoal/62 mt-1.5 block text-[0.8125rem] break-keep">
                      {group.caption}
                    </span>
                  </dt>
                  <dd>
                    <ul className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
                      {group.entries.map((entry) => (
                        <li key={entry.name}>
                          <EntityItem entry={entry} />
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>

            <DraftNote className="mt-8">
              관계가 표시되지 않은 기관의 역할과 각 기관의 공식 링크는 확인 후
              추가합니다.
            </DraftNote>
          </section>

          {/* 공식 외부 채널 */}
          <section aria-labelledby="about-channels" className="mt-16 lg:mt-20">
            <SubHeading id="about-channels">공식 외부 채널</SubHeading>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {channels.map((channel) => (
                <li key={channel.key}>
                  <ChannelCard channel={channel} />
                </li>
              ))}
            </ul>
          </section>

          {/* STORY / VISION 으로의 연결 */}
          <section
            aria-labelledby="about-next"
            className="border-charcoal/12 mt-16 border-t pt-10 lg:mt-20"
          >
            <h2 id="about-next" className="label-caps text-brand">
              NEXT
            </h2>
            <p className="text-navy mt-5 max-w-[40rem] font-serif text-lg leading-[1.7] break-keep sm:text-xl">
              왜 지금의 방향에 이르렀는지는 STORY에서, 앞으로 무엇을 만들고
              있는지는 VISION에서 이어집니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={routes.story}>STORY</ActionLink>
              <ActionLink href={routes.vision} variant="outline">
                VISION
              </ActionLink>
            </div>
          </section>
        </Container>
      </div>

      {/* 사이트 전역 Person/WebSite 스키마는 app/layout.tsx 에서 출력한다 */}
      <JsonLd
        data={jsonLdGraph([breadcrumbSchema(breadcrumbs), profilePageSchema()])}
      />
    </>
  );
}
