import { BookCard } from "@/components/cards/BookCard";
import { ActionLink, ArrowLink } from "@/components/ui/ActionLink";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getPublishedBooks } from "@/lib/content";
import { routes } from "@/lib/routes";

export function BooksSection() {
  const books = getPublishedBooks();

  return (
    <Section id="books" tone="ivory">
      <SectionHeader
        eyebrow="KNOWLEDGE"
        title="BOOKS & PUBLICATIONS"
        lead="저서와 출판물은 확인된 정보가 준비되는 대로 등록됩니다."
      />

      <div className="mt-14">
        {books.length > 0 ? (
          <>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {books.slice(0, 4).map((book) => (
                <li key={book.slug}>
                  <BookCard book={book} />
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ArrowLink href={routes.books}>ALL BOOKS</ArrowLink>
            </div>
          </>
        ) : (
          <EmptyState
            title="준비 중"
            description="도서 제목·출판사·출간일·ISBN 등 확인된 정보가 등록되면 이 영역에 표시됩니다."
            action={
              <ActionLink href={routes.books} variant="outline">
                BOOKS
              </ActionLink>
            }
          />
        )}
      </div>
    </Section>
  );
}
