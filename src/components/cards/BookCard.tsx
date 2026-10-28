import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/content/types";
import { getBookAuthorship } from "@/lib/content";
import { bookPath } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function BookCard({
  book,
  className,
}: {
  book: Book;
  className?: string;
}) {
  const authorship = getBookAuthorship(book);

  return (
    <article
      className={cn(
        "group border-charcoal/12 hover:border-brand relative flex h-full flex-col gap-5 border bg-white p-5 transition-colors sm:p-6",
        className,
      )}
    >
      <div className="bg-ivory relative flex aspect-3/4 w-full items-center justify-center overflow-hidden">
        {book.cover ? (
          <Image
            src={book.cover.src}
            alt={book.cover.alt}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain p-3 drop-shadow-[0_6px_14px_rgba(0,0,0,0.14)] transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <span
            aria-hidden="true"
            className="label-caps text-charcoal/62 border-charcoal/20 flex h-full w-full items-center justify-center border border-dashed"
          >
            COVER
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          {book.publicationDate ? (
            <time
              dateTime={book.publicationDate}
              className="label-caps text-charcoal/65"
            >
              {book.publicationDate}
            </time>
          ) : null}
          {authorship ? (
            <span className="border-brand/40 text-brand inline-flex items-center border px-2 py-0.5 text-[0.75rem] leading-none font-medium">
              {authorship}
            </span>
          ) : null}
        </div>

        <h3 className="text-navy mt-3 font-serif text-lg leading-snug font-medium break-keep">
          <Link
            href={bookPath(book.slug)}
            className="group-hover:text-brand transition-colors after:absolute after:inset-0"
          >
            {book.title}
          </Link>
        </h3>

        {book.subtitle ? (
          <p className="text-charcoal/70 mt-2 line-clamp-2 text-sm leading-relaxed break-keep">
            {book.subtitle}
          </p>
        ) : null}

        {book.publisher ? (
          <p className="text-charcoal/65 mt-auto pt-4 text-[0.8125rem]">
            <span className="sr-only">출판사: </span>
            {book.publisher}
          </p>
        ) : null}
      </div>
    </article>
  );
}
