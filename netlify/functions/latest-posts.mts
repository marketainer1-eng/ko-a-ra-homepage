import { readToken } from "../lib/social-tokens";
import {
  fetchInstagramPost,
  fetchThreadsPost,
  fetchYoutubePost,
  type LatestPost,
  type LatestPosts,
} from "../../src/lib/latest-posts";

/** 한 채널이 실패해도 나머지는 보여준다. 실패한 채널은 프로필 이미지로 남는다. */
async function settle(
  load: () => Promise<LatestPost | null>,
): Promise<LatestPost | null> {
  try {
    return await load();
  } catch {
    return null;
  }
}

async function withToken(
  channel: "threads" | "instagram",
  load: (token: string) => Promise<LatestPost | null>,
): Promise<LatestPost | null> {
  const token = await readToken(channel);
  return token ? load(token) : null;
}

/**
 * 채널별 최신 게시글. 브라우저가 외부 API를 직접 읽을 수 없고 토큰도 숨겨야 해서
 * 이 함수가 대신 읽는다. Netlify CDN 에 1시간 캐시하고, 오류 시 하루 더 쓴다.
 */
export default async function handler(): Promise<Response> {
  const [youtube, threads, instagram] = await Promise.all([
    settle(fetchYoutubePost),
    settle(() => withToken("threads", fetchThreadsPost)),
    settle(() => withToken("instagram", fetchInstagramPost)),
  ]);
  const posts: LatestPosts = { youtube, threads, instagram };

  return Response.json(posts, {
    headers: {
      "Cache-Control": "public, max-age=300",
      "Netlify-CDN-Cache-Control":
        "public, durable, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

export const config = { path: "/api/latest-posts" };
