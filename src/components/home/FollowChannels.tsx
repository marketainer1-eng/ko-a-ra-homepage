"use client";

import { useEffect, useState } from "react";
import { ChannelCard } from "@/components/cards/ChannelCard";
import type { MediaChannel } from "@/content/types";
import type { LatestPost, LatestPosts } from "@/lib/latest-posts";

/**
 * FOLLOW 카드.
 *
 * 프로필 이미지 카드를 먼저 보여주고, 최신 글을 받은 채널만 그 글로 바꾼다.
 * 함수가 없거나 계정이 연결되지 않은 채널은 프로필 이미지가 그대로 남는다.
 */
export function FollowChannels({ channels }: { channels: MediaChannel[] }) {
  const [posts, setPosts] = useState<Partial<LatestPosts>>({});

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/latest-posts", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : {}))
      .then((data: Partial<LatestPosts>) => setPosts(data))
      .catch(() => {});

    return () => controller.abort();
  }, []);

  return (
    <ul className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
      {channels.map((channel) => {
        const post: LatestPost | null | undefined =
          posts[channel.key as keyof LatestPosts];

        return (
          <li key={channel.key} className="bg-navy">
            <ChannelCard
              channel={channel}
              post={post ?? undefined}
              inverse
              className="border-0 p-7"
            />
          </li>
        );
      })}
    </ul>
  );
}
