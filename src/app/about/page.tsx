import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ChannelCard } from "@/components/cards/ChannelCard";
import { EntityItem } from "@/components/cards/EntityItem";
import { FieldGallery } from "@/components/gallery/FieldGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { PageHeader } from "@/components/ui/PageHeader";
import { person } from "@/config/person";
import { siteConfig } from "@/config/site";
import { careerHistory, earlierBooks, lectureHistory } from "@/content/career";
import { fieldPhotos } from "@/content/field";
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
    "교육·산업·연구·미디어 연계기관, 공식 외부 채널을 정리했습니다.",
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
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-ivory py-16 sm:py-24 lg:py-28">
        <Container>
          {/* 프로필 소개 */}
          <section aria-labelledby="about-intro">
            <SubHeading id="about-intro">소개</SubHeading>
            <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,17rem)_1fr] md:items-start lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
              <figure className="border-charcoal/12 relative aspect-[4/5] w-full max-w-xs overflow-hidden border bg-white md:max-w-none">
                <Image
                  src={person.photo.src}
                  alt={person.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 272px, 320px"
                  className="object-cover object-[50%_20%]"
                />
              </figure>
              <div className="flex max-w-[46rem] flex-col gap-5">
                <p className="text-navy font-serif text-[clamp(1.125rem,2.6vw,1.5rem)] leading-[1.7] font-medium break-keep">
                  {person.profile[0]}
                </p>
                <p className="text-charcoal/85 text-base leading-[1.95] break-keep sm:text-[1.0625rem]">
                  {person.profile[1]}
                </p>
              </div>
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
              <FactRow term="Other Roles · 겸직">
                <FactList items={person.otherRoles} />
              </FactRow>
              <FactRow term="Education · 학력">
                {person.education.school} {person.education.major}{" "}
                {person.education.degree}
                <span className="text-charcoal/60 ml-2 text-[0.875rem]">
                  {person.education.graduated} 졸업
                </span>
              </FactRow>
              <FactRow term="Experience · 경력">{person.experience}</FactRow>
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

          {/* 경력 */}
          <section aria-labelledby="about-career" className="mt-16 lg:mt-20">
            <SubHeading id="about-career">경력</SubHeading>
            <ol className="border-charcoal/12 bg-charcoal/12 mt-8 grid gap-px border">
              {careerHistory.map((entry) => (
                <li
                  key={`${entry.organization}-${entry.period}`}
                  className="grid gap-2 bg-white px-5 py-5 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-6 sm:px-7"
                >
                  <span className="text-charcoal/65 text-sm tabular-nums">
                    {entry.period}
                  </span>
                  <span className="text-navy font-serif text-base font-medium break-keep">
                    {entry.organization}
                    {entry.unit ? (
                      <span className="text-charcoal/70 ml-2 font-sans text-sm font-normal">
                        {entry.unit}
                      </span>
                    ) : null}
                    <span className="text-brand ml-2 font-sans text-sm">
                      {entry.title}
                    </span>
                  </span>
                  <span className="text-charcoal/62 text-[0.8125rem] break-keep">
                    {entry.field}
                  </span>
                </li>
              ))}
            </ol>
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

          {/* 강의 현장 */}
          <section aria-labelledby="about-field" className="mt-16 lg:mt-20">
            <SubHeading id="about-field">강의 현장</SubHeading>
            <p className="text-charcoal/70 mt-5 max-w-[40rem] text-sm leading-[1.8] break-keep">
              명지대학교 AI 이커머스학과 강의실과 산업 포럼 무대에서 AI
              이커머스를 가르치고 나누는 현장입니다.
            </p>
            <FieldGallery photos={fieldPhotos} className="mt-8" />
          </section>

          {/* 주요 강의 이력 */}
          <section aria-labelledby="about-lectures" className="mt-16 lg:mt-20">
            <SubHeading id="about-lectures">주요 강의 이력</SubHeading>
            <ul className="border-charcoal/12 bg-charcoal/12 mt-8 grid gap-px border sm:grid-cols-2">
              {lectureHistory.map((lecture) => (
                <li
                  key={`${lecture.organization}-${lecture.period}`}
                  className="flex flex-col gap-1 bg-white px-5 py-4 sm:px-6"
                >
                  <span className="text-charcoal/62 text-[0.8125rem] tabular-nums">
                    {lecture.period}
                  </span>
                  <span className="text-navy font-serif text-[0.9375rem] font-medium break-keep">
                    {lecture.organization}
                  </span>
                  <span className="text-charcoal/70 text-[0.8125rem] break-keep">
                    {lecture.topic}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* 저서 이력 */}
          <section aria-labelledby="about-books" className="mt-16 lg:mt-20">
            <SubHeading id="about-books">저서 이력</SubHeading>
            <p className="text-charcoal/70 mt-5 max-w-[40rem] text-sm leading-[1.8] break-keep">
              2012년 첫 저서 이후 오픈마켓·소셜·카페·인스타그램·스마트스토어
              마케팅을 거쳐 AI 이커머스로 저술 영역을 넓혀 왔습니다. 2025년 이후
              저서는 BOOKS에서 볼 수 있습니다.
            </p>
            <ol className="mt-6 flex flex-wrap gap-2">
              {earlierBooks.map((book) => (
                <li
                  key={book.title}
                  className="border-charcoal/15 inline-flex min-h-9 items-center gap-2 border bg-white px-3 py-1.5 text-[0.875rem]"
                >
                  <span className="text-charcoal/60 tabular-nums">
                    {book.year}
                  </span>
                  <span className="text-navy break-keep">『{book.title}』</span>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <ActionLink href={routes.books} variant="outline">
                BOOKS
              </ActionLink>
            </div>
          </section>

          {/* 연계기관 */}
          <section
            aria-labelledby="about-organizations"
            className="mt-16 lg:mt-20"
          >
            <SubHeading id="about-organizations">연계기관</SubHeading>
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
