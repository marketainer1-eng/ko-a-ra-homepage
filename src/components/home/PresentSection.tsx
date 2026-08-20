import { Section, SectionHeader } from "@/components/ui/Section";
import { person } from "@/config/person";
import { expertiseAreas } from "@/content/narrative";

export function PresentSection() {
  return (
    <Section id="present" tone="navy">
      <SectionHeader eyebrow="PRESENT" title="WHERE I AM" inverse />

      <p className="font-display text-brand-soft mt-12 text-[clamp(1.5rem,6.4vw,4.5rem)] leading-[1.05] font-semibold tracking-[0.1em] uppercase">
        {person.primaryExpertiseEn}
      </p>

      <p className="mt-10 max-w-[46rem] text-[0.975rem] leading-[1.9] break-keep text-white/75 sm:text-base">
        쇼핑몰 창업과 이커머스 현장에서 축적한 경험을 기반으로, AI가
        검색·추천·마케팅·판매·콘텐츠와 기업 운영을 어떻게 변화시키는지 연구하고
        교육합니다.
      </p>

      <ol className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseAreas.map((area) => (
          <li
            key={area.no}
            className="bg-navy flex flex-col gap-4 p-7 transition-colors hover:bg-[#0c2242] sm:p-8"
          >
            <p className="label-caps text-brand-soft">{area.no}</p>
            <h3 className="font-display text-sm leading-snug font-semibold tracking-[0.12em] text-white uppercase">
              {area.title}
            </h3>
            <p className="text-[0.875rem] leading-[1.8] break-keep text-white/60">
              {area.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
