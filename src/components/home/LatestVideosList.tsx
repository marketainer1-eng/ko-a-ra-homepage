"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { YoutubeVideo } from "@/lib/youtube";

const dateFormat = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "medium",
  timeZone: "Asia/Seoul",
});

/**
 * 최근 영상 카드.
 *
 * 빌드 때 받은 목록을 먼저 보여주고, 방문 시 Netlify Function 으로 최신 목록을
 * 다시 읽어 바꾼다. 함수가 없거나 실패하면 빌드 때 목록을 그대로 둔다.
 */
export function LatestVideosList({ initial }: { initial: YoutubeVideo[] }) {
  const [videos, setVideos] = useState(initial);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/youtube-videos", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { videos?: YoutubeVideo[] } | null) => {
        if (data?.videos?.length) setVideos(data.videos);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  if (videos.length === 0) return null;

  return (
    <ul className="mt-12 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
      {videos.map((video) => (
        <li key={video.id}>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-navy relative aspect-video overflow-hidden">
              <Image
                src={video.thumbnail}
                alt=""
                fill
                unoptimized
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform group-hover:scale-[1.03]"
              />
            </div>
            <p className="text-navy group-hover:text-brand mt-3 line-clamp-2 font-serif text-[0.9375rem] leading-snug font-medium break-keep transition-colors">
              {video.title}
            </p>
            <time
              dateTime={video.publishedAt}
              className="text-charcoal/65 mt-1.5 block text-[0.8125rem]"
            >
              {dateFormat.format(new Date(video.publishedAt))}
            </time>
          </a>
        </li>
      ))}
    </ul>
  );
}
