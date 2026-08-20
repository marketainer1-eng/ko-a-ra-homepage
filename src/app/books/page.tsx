import type { Metadata } from "next";
import { BookCard } from "@/components/cards/BookCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
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
    "고아라(KO A RA)의 저서와 출판물. 확인된 도서 정보가 등록되는 대로 순차적으로 공개됩니다.",
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
        lead="도서 정보는 제목·출판사·출간일·ISBN 등 확인된 사실만 등록합니다."
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

          <DraftNote className="mt-14">
            현재 목록은 상세 페이지 구조 확인을 위한 placeholder 이며 draft
            상태입니다. draft 도서는 noindex 처리되고 sitemap 에서 제외됩니다.
            Book 구조화 데이터는 published 상태의 도서에만 출력됩니다.
          </DraftNote>
        </Container>
      </section>

      <JsonLd data={jsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
    </>
  );
}
