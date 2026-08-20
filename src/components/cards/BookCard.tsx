import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Book } from "@/content/types";
import { bookPath } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function BookCard({
  book,
  className,
}: {
  book: Book;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group border-charcoal/12 hover:border-brand flex h-full flex-col gap-5 border bg-white p-5 transition-colors sm:p-6",
        className,
      )}
    >
      {/*
        표지 이미지가 확정되면 이 영역에 next/image 를 넣는다.
        (WebP/AVIF 대응은 next/image 가 자동 처리한다)
      */}
      <div
        aria-hidden="true"
        className="border-charcoal/20 bg-ivory flex aspect-3/4 w-full items-center justify-center border border-dashed"
      >
        <span className="label-caps text-charcoal/62">COVER</span>
      </div>

      <div className="flex flex-1 flex-col">
        <StatusBadge status={book.status} className="self-start" />

        <h3 className="text-navy mt-4 font-serif text-lg leading-snug font-medium break-keep">
          <Link
            href={bookPath(book.slug)}
            className="group-hover:text-brand transition-colors"
          >
            {book.title}
          </Link>
        </h3>

        {book.subtitle ? (
          <p className="text-charcoal/70 mt-2 text-sm leading-relaxed break-keep">
            {book.subtitle}
          </p>
        ) : null}

        <dl className="text-charcoal/65 mt-4 flex flex-col gap-1 text-[0.8125rem]">
          {book.publisher ? (
            <div className="flex gap-2">
              <dt className="text-charcoal/65">출판사</dt>
              <dd>{book.publisher}</dd>
            </div>
          ) : null}
          {book.publicationDate ? (
            <div className="flex gap-2">
              <dt className="text-charcoal/65">출간</dt>
              <dd>
                <time dateTime={book.publicationDate}>
                  {book.publicationDate}
                </time>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </article>
  );
}
