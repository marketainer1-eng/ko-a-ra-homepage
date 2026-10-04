import { ChannelCard } from "@/components/cards/ChannelCard";
import { ArrowLink } from "@/components/ui/ActionLink";
import { DraftNote } from "@/components/ui/DraftNote";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getMediaChannels } from "@/lib/content";
import { routes } from "@/lib/routes";

/**
 * WRITING & MEDIA.
 * 외부 콘텐츠 전문을 복제하지 않고 채널 카드만 노출한다.
 */
export function MediaSection() {
  const channels = getMediaChannels().filter(
    (channel) => channel.type === "news" || channel.type === "column",
  );

  return (
    <Section id="media" tone="ivory">
      <SectionHeader
        eyebrow="MEDIA"
        title="WRITING & MEDIA"
        lead="전문 콘텐츠는 각 채널의 역할에 맞게 생산하고, 이 홈페이지에서는 그 채널들을 연결합니다."
      />

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((channel) => (
          <li key={channel.key}>
            <ChannelCard channel={channel} />
          </li>
        ))}
      </ul>

      <DraftNote className="mt-12">
        각 채널의 공식 URL이 확인되면 링크가 활성화됩니다.
      </DraftNote>

      <div className="mt-8">
        <ArrowLink href={routes.media}>ALL CHANNELS</ArrowLink>
      </div>
    </Section>
  );
}
