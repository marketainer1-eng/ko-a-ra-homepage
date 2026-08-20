import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Story } from "@/content/types";
import { storyPath } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function StoryCard({
  story,
  index,
  className,
}: {
  story: Story;
  index?: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group border-charcoal/15 hover:border-brand flex h-full flex-col border-t pt-6 transition-colors",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        {typeof index === "number" ? (
          <p className="label-caps text-brand">
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : (
          <span />
        )}
        <StatusBadge status={story.status} />
      </div>

      <h3 className="text-navy mt-5 font-serif text-xl leading-snug font-medium break-keep sm:text-2xl">
        <Link
          href={storyPath(story.slug)}
          className="group-hover:text-brand transition-colors"
        >
          {story.title}
        </Link>
      </h3>

      <p className="text-charcoal/70 mt-3 flex-1 text-sm leading-[1.8] break-keep">
        {story.summary}
      </p>

      <p className="font-display text-brand mt-6 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
        READ
        <span
          aria-hidden="true"
          className="ml-2 inline-block transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </p>
    </article>
  );
}
