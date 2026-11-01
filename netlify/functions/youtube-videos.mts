import { fetchLatestVideos } from "../../src/lib/youtube";

/**
 * 채널 최근 영상 목록.
 *
 * 브라우저는 YouTube 피드를 직접 읽을 수 없어(CORS) 이 함수가 대신 읽는다.
 * Netlify CDN 에 1시간 캐시하고, 피드 장애 시에는 받아 둔 응답을 하루 더 쓴다.
 */
export default async function handler(): Promise<Response> {
  try {
    const videos = await fetchLatestVideos();

    return Response.json(
      { videos },
      {
        headers: {
          "Cache-Control": "public, max-age=300",
          "Netlify-CDN-Cache-Control":
            "public, durable, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return Response.json(
      { videos: [] },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}

export const config = { path: "/api/youtube-videos" };
