import { readToken, saveToken, type SocialChannel } from "../lib/social-tokens";
import { refreshToken } from "../../src/lib/latest-posts";

const CHANNELS: SocialChannel[] = ["threads", "instagram"];

/** 60일 토큰이 만료되지 않도록 매주 갱신한다. 토큰 값은 로그에 남기지 않는다. */
export default async function handler(): Promise<void> {
  for (const channel of CHANNELS) {
    try {
      const token = await readToken(channel);
      if (token) await saveToken(channel, await refreshToken(channel, token));
      console.log(`${channel}: ${token ? "refreshed" : "not connected"}`);
    } catch {
      console.error(`${channel}: refresh failed`);
    }
  }
}

export const config = { schedule: "@weekly" };
