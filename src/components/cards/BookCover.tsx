import type { ReactNode } from "react";
import type { Book } from "@/content/types";

/** coverLink 가 있는 책은 표지를 눌러 판매 페이지로 이동한다. */
export function BookCover({
  book,
  children,
}: {
  book: Book;
  children: ReactNode;
}) {
  if (!book.coverLink) return children;

  return (
    <a
      href={book.coverLink.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`『${book.title}』 ${book.coverLink.label}에서 보기`}
      className="group/cover relative block w-full max-w-xs"
    >
      {children}
      <span
        aria-hidden="true"
        className="bg-navy/90 group-hover/cover:bg-brand absolute right-2 bottom-2 inline-flex items-center gap-1 px-2.5 py-1.5 text-[0.75rem] font-medium text-white transition-colors"
      >
        {book.coverLink.label}
        <span>↗</span>
      </span>
    </a>
  );
}
