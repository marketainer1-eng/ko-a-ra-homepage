import { FollowChannels } from "@/components/home/FollowChannels";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { getFollowChannels } from "@/lib/content";

/**
 * FOLLOW KO A RA.
 * 채널별 최신 게시글을 FollowChannels 가 불러온다.
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

      <FollowChannels channels={channels} />
    </Section>
  );
}
