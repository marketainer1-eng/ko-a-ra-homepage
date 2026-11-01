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
      className="block transition-opacity hover:opacity-90"
    >
      {children}
    </a>
  );
}
