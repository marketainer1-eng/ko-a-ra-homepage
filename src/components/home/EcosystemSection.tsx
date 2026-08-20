import { DraftNote } from "@/components/ui/DraftNote";
import { Section, SectionHeader } from "@/components/ui/Section";
import { currentEcosystem } from "@/content/narrative";

/**
 * CURRENT ECOSYSTEM.
 * 기관 나열이 아니라 역할 중심으로 보여준다.
 */
export function EcosystemSection() {
  return (
    <Section id="ecosystem" tone="white">
      <SectionHeader
        eyebrow="NOW"
        title="CURRENT ECOSYSTEM"
        lead="지금의 활동 기반을 기관 이름이 아니라 역할을 중심으로 정리했습니다."
      />

      <dl className="border-charcoal/12 bg-charcoal/12 mt-14 grid gap-px border sm:grid-cols-2 lg:grid-cols-3">
        {currentEcosystem.map((group) => (
          <div key={group.key} className="flex flex-col gap-4 bg-white p-7">
            <dt>
              <span className="font-display text-brand block text-xs font-semibold tracking-[0.16em] uppercase">
                {group.label}
              </span>
              <span className="text-charcoal/62 mt-2 block text-[0.8125rem] break-keep">
                {group.caption}
              </span>
            </dt>
            <dd>
              <ul className="flex flex-col gap-2">
                {group.entries.map((entry) => (
                  <li
                    key={entry.name}
                    className="text-navy font-serif text-base leading-snug break-keep"
                  >
                    {entry.name}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <DraftNote className="mt-12">
        각 활동의 공식 URL과 상세 역할은 확인 후 추가됩니다. 확인되기 전까지
        구조화 데이터(Schema)에는 기관 관계를 출력하지 않습니다.
      </DraftNote>
    </Section>
  );
}
