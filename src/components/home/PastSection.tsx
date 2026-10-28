import { PastTimeline } from "@/components/diagrams/PastTimeline";
import { FieldGallery } from "@/components/gallery/FieldGallery";
import { ArrowLink } from "@/components/ui/ActionLink";
import { Section, SectionHeader } from "@/components/ui/Section";
import { fieldPhotos } from "@/content/field";
import { pastExpansion, pastOrigin, pastToPresent } from "@/content/narrative";
import { routes } from "@/lib/routes";

/**
 * PAST — 어디에서 시작했는가.
 *
 * 출발점 → 확장 과정 → 타임라인 → 강의 현장 → (PRESENT 로 이어지는 연결 문장) 순으로 읽힌다.
 * 연도는 확인된 정보가 없으므로 표시하지 않는다.
 */
export function PastSection() {
  return (
    <Section id="past" tone="ivory" divider>
      <SectionHeader eyebrow="PAST" title="WHERE I STARTED" />

      <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <p className="text-navy font-serif text-[clamp(1.25rem,3.4vw,1.875rem)] leading-[1.5] font-medium break-keep">
          {pastOrigin}
        </p>
        <p className="text-charcoal/78 max-w-[34rem] text-[0.975rem] leading-[1.9] break-keep sm:text-base lg:pt-2">
          {pastExpansion}
        </p>
      </div>

      <div className="mt-14 lg:mt-20">
        <PastTimeline />
      </div>

      <div className="mt-14 lg:mt-20">
        <p className="label-caps text-brand">IN THE FIELD · 강의 현장</p>
        <FieldGallery photos={fieldPhotos.slice(0, 4)} className="mt-6" />
        <div className="mt-8">
          <ArrowLink href={`${routes.about}#about-field`}>
            MORE IN ABOUT
          </ArrowLink>
        </div>
      </div>

      <p className="border-brand text-navy mt-14 max-w-[44rem] border-l-2 py-1 pl-5 font-serif text-[clamp(1.0625rem,2.4vw,1.375rem)] leading-[1.65] break-keep lg:mt-20">
        {pastToPresent}
      </p>
    </Section>
  );
}
