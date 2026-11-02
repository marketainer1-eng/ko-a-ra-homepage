/**
 * 채널별 최신 게시글 1개.
 *
 * - YouTube: 공개 RSS 피드 (쇼츠 포함, 키 불필요)
 * - Threads / Instagram: Meta 공식 API (계정별 접근 토큰 필요)
 *
 * Netlify Function 에서도 쓰므로 `@/` 경로 별칭을 쓰지 않는다.
 * 토큰은 서버에서만 쓰며 응답이나 로그에 남기지 않는다.
 */

const YOUTUBE_CHANNEL_ID = "UCvnYkM0Q9gGR6wJxkLoLnCw";
const YOUTUBE_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
const THREADS_API = "https://graph.threads.com/v1.0";
const INSTAGRAM_API = "https://graph.instagram.com/v26.0";

export interface LatestPost {
  url: string;
  text: string;
  image: string | null;
  /** ISO 8601 */
  publishedAt: string;
}

export type LatestPosts = Record<
  "youtube" | "threads" | "instagram",
  LatestPost | null
>;

function decodeXml(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

/** 카드에 보일 글에서는 #해시태그를 빼고 공백을 정리한다. */
function cleanText(text: string): string {
  return text.replace(/#\S+/g, "").replace(/\s+/g, " ").trim();
}

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as T;
}

export function parseYoutubeFeed(xml: string): LatestPost | null {
  const entry = xml.match(/<entry>[\s\S]*?<\/entry>/)?.[0];
  const id = entry?.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
  const title = entry?.match(/<title>([^<]*)<\/title>/)?.[1];
  const publishedAt = entry?.match(/<published>([^<]+)<\/published>/)?.[1];
  if (!id || !title || !publishedAt) return null;

  return {
    url: `https://www.youtube.com/watch?v=${id}`,
    text: cleanText(decodeXml(title)),
    image: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    publishedAt,
  };
}

export async function fetchYoutubePost(): Promise<LatestPost | null> {
  const response = await fetch(YOUTUBE_FEED_URL);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return parseYoutubeFeed(await response.text());
}

interface ThreadsMedia {
  media_type: string;
  text?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp: string;
}

export function pickThreadsPost(items: ThreadsMedia[]): LatestPost | null {
  // 리포스트와 저작권 표시로 링크가 없는 글은 건너뛴다.
  const item = items.find(
    ({ media_type, permalink }) => media_type !== "REPOST_FACADE" && permalink,
  );
  if (!item?.permalink) return null;

  return {
    url: item.permalink,
    text: cleanText(item.text ?? ""),
    image:
      item.thumbnail_url ??
      (item.media_type === "IMAGE" ? (item.media_url ?? null) : null),
    publishedAt: item.timestamp,
  };
}

export async function fetchThreadsPost(
  token: string,
): Promise<LatestPost | null> {
  const fields = "media_type,text,media_url,thumbnail_url,permalink,timestamp";
  const { data } = await getJson<{ data: ThreadsMedia[] }>(
    `${THREADS_API}/me/threads?fields=${fields}&limit=10&access_token=${encodeURIComponent(token)}`,
  );
  return pickThreadsPost(data);
}

interface InstagramMedia {
  media_type: string;
  caption?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

export function pickInstagramPost(items: InstagramMedia[]): LatestPost | null {
  const item = items[0];
  if (!item) return null;

  return {
    url: item.permalink,
    text: cleanText(item.caption ?? ""),
    image: item.thumbnail_url ?? item.media_url ?? null,
    publishedAt: item.timestamp,
  };
}

export async function fetchInstagramPost(
  token: string,
): Promise<LatestPost | null> {
  const fields =
    "media_type,caption,media_url,thumbnail_url,permalink,timestamp";
  const { data } = await getJson<{ data: InstagramMedia[] }>(
    `${INSTAGRAM_API}/me/media?fields=${fields}&limit=1&access_token=${encodeURIComponent(token)}`,
  );
  return pickInstagramPost(data);
}

/** 토큰 유효기간(60일)을 새로 시작한다. 발급 24시간 뒤부터 가능하다. */
export async function refreshToken(
  channel: "threads" | "instagram",
  token: string,
): Promise<string> {
  const base =
    channel === "threads"
      ? "https://graph.threads.com/refresh_access_token?grant_type=th_refresh_token"
      : "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token";
  const { access_token } = await getJson<{ access_token: string }>(
    `${base}&access_token=${encodeURIComponent(token)}`,
  );
  return access_token;
}
