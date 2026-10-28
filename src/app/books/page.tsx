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
    "고아라(KO A RA)의 저서와 출판물. 2012년 『오픈마켓 광고 이기는 전략』부터 AI 이커머스·AI 활용 분야까지 단독·공저 도서를 소개합니다.",
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
        lead={`2012년부터 지금까지 펴낸 ${books.length}권의 단독·공저 도서입니다. 오픈마켓과 소셜 마케팅에서 시작해 AI 이커머스와 현장의 AI 활용으로 이어집니다.`}
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
