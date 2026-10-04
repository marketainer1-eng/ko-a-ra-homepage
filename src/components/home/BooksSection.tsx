import { BookCard } from "@/components/cards/BookCard";
import { ActionLink, ArrowLink } from "@/components/ui/ActionLink";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { getPublishedBooks } from "@/lib/content";
import { routes } from "@/lib/routes";

export function BooksSection() {
  const books = getPublishedBooks();

  return (
    <Section id="books" tone="ivory">
      <SectionHeader
        eyebrow="KNOWLEDGE"
        title="BOOKS & PUBLICATIONS"
        lead={
          <div className="flex flex-col gap-3">
            <p>
              책은 {siteConfig.name}의 전문지식과 산업 연구가 축적되는 주요 지식
              자산입니다.
            </p>
            <p>
              쇼핑몰 창업과 이커머스에서 시작해 AI 이커머스, Vertical AI, 현장의
              AI 활용과 Expert IP로 지식 영역을 확장하고 있습니다.
            </p>
          </div>
        }
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
            description="도서 목록은 정리하고 있으며, 준비되는 대로 이 영역에 표시됩니다."
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
