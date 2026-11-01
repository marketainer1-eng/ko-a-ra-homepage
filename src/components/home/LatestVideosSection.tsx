import { LatestVideosList } from "@/components/home/LatestVideosList";
import { ActionLink } from "@/components/ui/ActionLink";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getMediaChannels, isLinkable } from "@/lib/content";
import { fetchLatestVideos, type YoutubeVideo } from "@/lib/youtube";

/**
 * LATEST VIDEOS.
 * YouTube 채널의 최근 영상 5개(쇼츠 포함). 빌드가 피드를 못 읽어도 멈추지 않는다.
 */
export async function LatestVideosSection() {
  const initial = await fetchLatestVideos({ cache: "force-cache" }).catch(
    (): YoutubeVideo[] => [],
  );
  const channel = getMediaChannels().find(({ key }) => key === "youtube");

  return (
    <Section id="videos" tone="soft">
      <SectionHeader
        eyebrow="YOUTUBE"
        title="LATEST VIDEOS"
        lead="AI 이커머스 현장의 변화를 영상으로 풀어 드립니다."
      />

      <LatestVideosList initial={initial} />

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
