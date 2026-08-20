import { ActionLink } from "@/components/ui/ActionLink";
import { DraftNote } from "@/components/ui/DraftNote";
import { Section } from "@/components/ui/Section";
import { person } from "@/config/person";
import { routes } from "@/lib/routes";

export function AboutCtaSection() {
  return (
    <Section id="about-cta" tone="white">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="label-caps text-brand">ABOUT</p>
          <p className="text-navy mt-6 max-w-[34rem] font-serif text-[clamp(1.375rem,4vw,2.25rem)] leading-[1.4] font-medium break-keep">
            {person.positioning}
          </p>
          <p className="text-charcoal/65 mt-5 max-w-[34rem] text-sm leading-[1.8] break-keep">
            공식 프로필, 전문영역, 활동 영역은 ABOUT 페이지에서 확인할 수
            있습니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <ActionLink href={routes.about}>ABOUT</ActionLink>
          <ActionLink href={routes.media} variant="outline">
            MEDIA
          </ActionLink>
        </div>
      </div>

      <DraftNote className="mt-12">
        공식 연락 채널은 확정되면 이 영역에 추가됩니다.
      </DraftNote>
    </Section>
  );
}
