import Image from "next/image";
import type { MediaChannel } from "@/content/types";
import type { LatestPost } from "@/lib/latest-posts";
import { isLinkable } from "@/lib/content";
import { cn } from "@/lib/cn";

const postDate = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "medium",
  timeZone: "Asia/Seoul",
});

/**
 * 외부 채널 링크 카드.
 *
 * 공식 URL이 확인된(verified) 채널만 실제 링크로 렌더링한다.
 * 확인 전에는 "링크 준비 중" 상태로 표시하고 가짜 URL을 만들지 않는다.
 */
export function ChannelCard({
  channel,
  post,
  inverse = false,
  className,
}: {
  channel: MediaChannel;
  /** 있으면 프로필 이미지 대신 최신 게시글을 보여주고 그 글로 연결한다 */
  post?: LatestPost;
  inverse?: boolean;
  className?: string;
}) {
  const linkable = isLinkable(channel);

  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3
          className={cn(
            "font-display text-sm font-semibold tracking-[0.12em] uppercase",
            inverse ? "text-white" : "text-navy",
          )}
        >
          {channel.name}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            "text-sm transition-transform",
            linkable
              ? cn(
                  "group-hover:translate-x-0.5",
                  inverse ? "text-brand-bright" : "text-brand",
                )
              : inverse
                ? "text-white/55"
                : "text-charcoal/45",
          )}
        >
          {linkable ? "↗" : "—"}
        </span>
      </div>

      <p
        className={cn(
          "mt-3 text-sm leading-relaxed break-keep",
          inverse ? "text-white/65" : "text-charcoal/70",
        )}
      >
        {channel.role}
      </p>

      {post ? (
        <div className="mt-5 flex flex-col gap-3">
          {post.image ? (
            <div className="bg-charcoal/20 relative aspect-[4/3] overflow-hidden">
              <Image
                src={post.image}
                alt=""
                fill
                unoptimized
                referrerPolicy="no-referrer"
                sizes="(min-width: 640px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
          ) : null}
          {post.text ? (
            <p
              className={cn(
                "line-clamp-3 font-serif text-[0.9375rem] leading-snug break-keep",
                inverse ? "text-white" : "text-navy",
              )}
            >
              {post.text}
            </p>
          ) : null}
          <time
            dateTime={post.publishedAt}
            className={cn(
              "text-[0.8125rem]",
              inverse ? "text-white/60" : "text-charcoal/65",
            )}
          >
            {postDate.format(new Date(post.publishedAt))}
          </time>
        </div>
      ) : channel.preview ? (
        <Image
          src={channel.preview.src}
          alt={channel.preview.alt}
          width={channel.preview.width}
          height={channel.preview.height}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="border-charcoal/12 mt-5 block h-auto w-full border"
        />
      ) : null}

      {linkable ? (
        <p
          className={cn(
            "font-display mt-auto pt-5 text-[0.7rem] font-semibold tracking-[0.18em]",
            inverse ? "text-brand-bright" : "text-brand",
          )}
        >
          바로가기
          <span
            aria-hidden="true"
            className="ml-1.5 inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      ) : (
        <p
          className={cn(
            "label-caps mt-5",
            inverse ? "text-white/60" : "text-charcoal/65",
          )}
        >
          링크 준비 중
        </p>
      )}
    </>
  );

  const baseClass = cn(
    "group flex h-full flex-col border p-6",
    inverse ? "border-white/15" : "border-charcoal/12 bg-white",
    linkable && "transition-colors hover:border-brand",
    className,
  );

  if (linkable) {
    return (
      <a
        href={post?.url ?? channel.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {body}
      </a>
    );
  }

  return (
    <div className={baseClass} aria-disabled="true">
      {body}
    </div>
  );
}
