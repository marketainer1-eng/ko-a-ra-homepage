import { PastTimeline } from "@/components/diagrams/PastTimeline";
import { DraftNote } from "@/components/ui/DraftNote";
import { Section, SectionHeader } from "@/components/ui/Section";

export function PastSection() {
  return (
    <Section id="past" tone="ivory" divider>
      <SectionHeader
        eyebrow="PAST"
        title="WHERE I STARTED"
        lead="AI에서 시작한 사람이 아니라, 쇼핑몰 창업과 이커머스 현장에서 출발해 산업의 변화를 따라온 사람입니다."
      />

      <div className="mt-14 lg:mt-20">
        <PastTimeline />
      </div>

      <DraftNote className="mt-14">
        각 단계의 연도와 세부 이력은 확인된 정보가 준비되면 추가됩니다.
      </DraftNote>
    </Section>
  );
}
