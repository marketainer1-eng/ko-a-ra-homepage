import type { Metadata } from "next";
import { ChannelCard } from "@/components/cards/ChannelCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { PageHeader } from "@/components/ui/PageHeader";
import { person } from "@/config/person";
import { currentEcosystem, expertiseAreas } from "@/content/narrative";
import { getMediaChannels } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph, profilePageSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const breadcrumbs = [
  { name: "HOME", path: routes.home },
  { name: "ABOUT", path: routes.about },
];

export const metadata: Metadata = buildMetadata({
  title: "ABOUT",
  description:
    "AI 이커머스 전문가 고아라(KO A RA)의 공식 프로필. 대표 포지셔닝, 공식 직함, 전문영역, 활동 영역, 공식 외부 채널을 정리했습니다.",
  path: routes.about,
  ogType: "profile",
});

export default function AboutPage() {
  const channels = getMediaChannels();

  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        title="ABOUT"
        titleKo="현재 공식적으로 누구인가"
        lead="STORY 가 '왜 여기까지 왔는가'라면, ABOUT 은 '현재 공식적으로 누구인가'를 정리한 페이지입니다."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <Container>
          {/* 프로필 */}
          <dl className="border-charcoal/12 bg-charcoal/12 grid gap-px border sm:grid-cols-2">
            <div className="bg-white p-6">
              <dt className="label-caps text-charcoal/70">이름</dt>
              <dd className="text-navy mt-3 font-serif text-xl">
                {person.name}
              </dd>
            </div>
            <div className="bg-white p-6">
              <dt className="label-caps text-charcoal/70">영문명</dt>
              <dd className="font-display text-navy mt-3 text-xl font-semibold tracking-[0.2em] uppercase">
                {person.alternateName}
              </dd>
            </div>
            <div className="bg-white p-6">
              <dt className="label-caps text-charcoal/70">대표 포지셔닝</dt>
              <dd className="text-navy mt-3 text-base break-keep">
                {person.positioning}
              </dd>
            </div>
            <div className="bg-white p-6">
              <dt className="label-caps text-charcoal/70">공식 직함</dt>
              <dd className="text-navy mt-3 text-base leading-relaxed break-keep">
                <address className="not-italic">
                  {person.officialRole.organization}{" "}
                  {person.officialRole.department}
                  <br />
                  {person.officialRole.title}
                </address>
              </dd>
            </div>
          </dl>

          <p className="text-charcoal/85 mt-12 max-w-[42rem] text-[1.0625rem] leading-[2] break-keep">
            {person.intro}
          </p>

          {/* 전문영역 */}
          <h2 className="text-navy mt-20 flex items-center gap-3 font-serif text-xl font-medium break-keep">
            <span aria-hidden="true" className="bg-brand h-px w-8" />
            전문영역
          </h2>
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

          {/* 활동 영역 */}
          <h2 className="text-navy mt-20 flex items-center gap-3 font-serif text-xl font-medium break-keep">
            <span aria-hidden="true" className="bg-brand h-px w-8" />
            활동 영역
          </h2>
          <dl className="border-charcoal/12 bg-charcoal/12 mt-8 grid gap-px border sm:grid-cols-2 lg:grid-cols-3">
            {currentEcosystem.map((group) => (
              <div key={group.key} className="bg-white p-6">
                <dt>
                  <span className="font-display text-brand block text-xs font-semibold tracking-[0.16em] uppercase">
                    {group.label}
                  </span>
                  <span className="text-charcoal/62 mt-2 block text-[0.8125rem] break-keep">
                    {group.caption}
                  </span>
                </dt>
                <dd className="mt-4">
                  <ul className="flex flex-col gap-1.5">
                    {group.entries.map((entry) => (
                      <li
                        key={entry.name}
                        className="text-navy font-serif text-base break-keep"
                      >
                        {entry.name}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>

          <DraftNote className="mt-10">
            연도별 경력 요약과 각 기관에서의 상세 역할은 확인된 자료가 준비되면
            추가됩니다. 확인 전에는 구조화 데이터에도 출력하지 않습니다.
          </DraftNote>

          {/* 공식 외부 채널 */}
          <h2 className="text-navy mt-20 flex items-center gap-3 font-serif text-xl font-medium break-keep">
            <span aria-hidden="true" className="bg-brand h-px w-8" />
            공식 외부 채널
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => (
              <li key={channel.key}>
                <ChannelCard channel={channel} />
              </li>
            ))}
          </ul>

          <DraftNote className="mt-10">
            공식 URL이 확인되면 각 채널이 링크로 연결되고, Person 구조화
            데이터의 sameAs 에도 함께 반영됩니다.
          </DraftNote>
        </Container>
      </section>

      {/* 사이트 전역 Person/WebSite 스키마는 app/layout.tsx 에서 출력한다 */}
      <JsonLd
        data={jsonLdGraph([breadcrumbSchema(breadcrumbs), profilePageSchema()])}
      />
    </>
  );
}
