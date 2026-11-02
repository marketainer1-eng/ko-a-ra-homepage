import { featuredVideos } from "@/content/media";
import { cn } from "@/lib/cn";

/**
 * 사이트 안에서 바로 재생하는 대표 영상.
 * 데스크톱에서는 세로 쇼츠 왼쪽, 가로 영상 2개를 오른쪽에 쌓아 높이를 맞춘다.
 */
export function FeaturedVideos() {
  return (
    <ul className="mt-12 grid max-w-[54rem] gap-6 sm:grid-cols-[1fr_1.58fr] sm:grid-rows-2">
      {featuredVideos.map((video) => (
        <li key={video.id} className={cn(video.vertical && "sm:row-span-2")}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={cn(
              "bg-navy block w-full border-0",
              video.vertical
                ? "mx-auto aspect-[9/16] h-auto max-w-xs sm:h-full sm:max-w-none"
                : "aspect-video",
            )}
          />
        </li>
      ))}
    </ul>
  );
}
