import { ChannelCard } from "@/components/cards/ChannelCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { getFollowChannels } from "@/lib/content";

/**
 * FOLLOW KO A RA.
 * 실시간 API 연동 없이 링크 카드로만 구성한다.
 */
export function FollowSection() {
  const channels = getFollowChannels();

  return (
    <Section id="follow" tone="navy">
      <SectionHeader
        eyebrow="CHANNELS"
        title={`FOLLOW ${siteConfig.name}`}
        inverse
      />

      <ul className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
        {channels.map((channel) => (
          <li key={channel.key} className="bg-navy">
            <ChannelCard channel={channel} inverse className="border-0 p-7" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
