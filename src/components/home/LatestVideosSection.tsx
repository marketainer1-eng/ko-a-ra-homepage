import { FeaturedVideos } from "@/components/home/FeaturedVideos";
import { ActionLink } from "@/components/ui/ActionLink";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getMediaChannels, isLinkable } from "@/lib/content";

/**
 * LATEST VIDEOS.
 * content/media.ts 의 대표 영상을 사이트 안에서 바로 재생한다.
 */
export function LatestVideosSection() {
  const channel = getMediaChannels().find(({ key }) => key === "youtube");

  return (
    <Section id="videos" tone="soft">
      <SectionHeader
        eyebrow="YOUTUBE"
        title="LATEST VIDEOS"
        lead="AI 이커머스 현장의 변화를 영상으로 풀어 드립니다."
      />

      <FeaturedVideos />

      {channel && isLinkable(channel) ? (
        <div className="mt-10">
          <ActionLink href={channel.url} external>
            YOUTUBE 채널
          </ActionLink>
        </div>
      ) : null}
    </Section>
  );
}
