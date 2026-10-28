import type { Metadata } from "next";
import { BookCard } from "@/components/cards/BookCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { getBooks } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const breadcrumbs = [
  { name: "HOME", path: routes.home },
  { name: "BOOKS", path: routes.books },
];

export const metadata: Metadata = buildMetadata({
  title: "BOOKS",
  description:
    "고아라(KO A RA)의 저서와 출판물. AI 이커머스, GEO, 쇼핑몰 창업, 소상공인 AI 활용, 책쓰기까지 현장의 지식을 담은 책들.",
  path: routes.books,
});

export default function BooksPage() {
  const books = getBooks();

  return (
    <>
      <PageHeader
        eyebrow="KNOWLEDGE"
        title="BOOKS"
        titleKo="저서와 출판물"
        lead="AI 이커머스와 쇼핑몰 창업, 현장의 AI 활용과 Expert IP까지 — 현장에서 축적한 지식을 책으로 정리합니다."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <Container>
          {books.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {books.map((book) => (
                <li key={book.slug}>
                  <BookCard book={book} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="등록된 도서 없음"
              description="확인된 도서 정보가 등록되면 이 목록에 표시됩니다."
            />
          )}
        </Container>
      </section>

      <JsonLd data={jsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
    </>
  );
}
