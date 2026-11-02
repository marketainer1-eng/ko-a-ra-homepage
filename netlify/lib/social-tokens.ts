import { createHash } from "node:crypto";
import { getStore } from "@netlify/blobs";

/**
 * Threads / Instagram 접근 토큰.
 *
 * 환경변수에 넣은 토큰을 시작값으로 쓰고, 매주 갱신한 토큰은 Netlify Blobs 에 둔다.
 * 환경변수를 새 토큰으로 바꾸면 저장된 갱신본 대신 새 토큰을 쓴다.
 */
export type SocialChannel = "threads" | "instagram";

const ENV_NAMES: Record<SocialChannel, string> = {
  threads: "THREADS_ACCESS_TOKEN",
  instagram: "INSTAGRAM_ACCESS_TOKEN",
};

const store = () => getStore("social-tokens");

const fingerprint = (token: string) =>
  createHash("sha256").update(token).digest("hex");

export async function readToken(
  channel: SocialChannel,
): Promise<string | null> {
  const envToken = process.env[ENV_NAMES[channel]]?.trim();
  if (!envToken) return null;

  const saved = (await store().get(channel, { type: "json" })) as {
    token: string;
    source: string;
  } | null;

  return saved?.source === fingerprint(envToken) ? saved.token : envToken;
}

export async function saveToken(
  channel: SocialChannel,
  token: string,
): Promise<void> {
  const envToken = process.env[ENV_NAMES[channel]]?.trim();
  if (!envToken) return;

  await store().setJSON(channel, { token, source: fingerprint(envToken) });
}
