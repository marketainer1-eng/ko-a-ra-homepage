/**
 * YouTube 채널 공개 RSS 피드.
 *
 * API 키 없이 채널의 최근 영상(쇼츠 포함, 최대 15개)을 읽는다.
 * Netlify Function 에서도 쓰므로 `@/` 경로 별칭을 쓰지 않는다.
 */

export const YOUTUBE_CHANNEL_ID = "UCvnYkM0Q9gGR6wJxkLoLnCw";
export const LATEST_VIDEO_COUNT = 5;

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

export interface YoutubeVideo {
  id: string;
  title: string;
  /** ISO 8601 */
  publishedAt: string;
  url: string;
  thumbnail: string;
}

function decodeXml(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

/** 카드에 보일 제목에서는 #해시태그를 뺀다. */
function cleanTitle(title: string): string {
  return title.replace(/#\S+/g, "").replace(/\s+/g, " ").trim();
}

export function parseYoutubeFeed(xml: string): YoutubeVideo[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return entries.flatMap((entry) => {
    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = entry.match(/<title>([^<]*)<\/title>/)?.[1];
    const publishedAt = entry.match(/<published>([^<]+)<\/published>/)?.[1];
    if (!id || !title || !publishedAt) return [];

    return [
      {
        id,
        title: cleanTitle(decodeXml(title)),
        publishedAt,
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      },
    ];
  });
}

export async function fetchLatestVideos(
  init?: RequestInit,
): Promise<YoutubeVideo[]> {
  const response = await fetch(FEED_URL, init);
  if (!response.ok) {
    throw new Error(`YouTube feed responded ${response.status}`);
  }

  return parseYoutubeFeed(await response.text()).slice(0, LATEST_VIDEO_COUNT);
}
