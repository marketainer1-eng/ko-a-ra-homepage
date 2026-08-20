import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getBookBySlug, getBooks } from "@/lib/content";
import { bookSchema, breadcrumbSchema, jsonLdGraph } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { bookPath, routes } from "@/lib/routes";

export function generateStaticParams() {
  return getBooks().map((book) => ({ slug: book.slug }));
}

export async function generateMetadata(
  props: PageProps<"/books/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const book = getBookBySlug(slug);

  if (!book) {
    return buildMetadata({
      title: "BOOKS",
      description: "요청한 도서를 찾을 수 없습니다.",
      path: bookPath(slug),
      noindex: true,
    });
  }

  return buildMetadata({
    title: book.title,
    description: book.description ?? `${book.title} — 도서 정보 준비 중입니다.`,
    path: bookPath(book.slug),
    noindex: book.status !== "published",
  });
}

export default async function BookDetailPage(
  props: PageProps<"/books/[slug]">,
) {
  const { slug } = await props.params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const breadcrumbs = [
    { name: "HOME", path: routes.home },
    { name: "BOOKS", path: routes.books },
    { name: book.title, path: bookPath(book.slug) },
  ];

  const facts: { term: string; value: string | null; dateTime?: string }[] = [
    { term: "저자", value: book.authors.join(", ") || null },
    { term: "출판사", value: book.publisher },
    {
      term: "출간일",
      value: book.publicationDate,
      dateTime: book.publicationDate ?? undefined,
    },
    { term: "ISBN", value: book.isbn },
    { term: "분류", value: book.category },
  ];

  const knownFacts = facts.filter((fact) => fact.value !== null);

  return (
    <>
      <PageHeader
        eyebrow="BOOK"
        title={book.title}
        titleKo={book.subtitle ?? undefined}
        titleFont="serif"
        breadcrumbs={breadcrumbs}
        meta={<StatusBadge status={book.status} inverse />}
      />

      <article className="bg-ivory py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
            {/* 표지 이미지가 확정되면 next/image 로 교체한다 */}
            <div
              aria-hidden="true"
              className="border-charcoal/20 flex aspect-3/4 w-full max-w-xs items-center justify-center border border-dashed bg-white"
            >
              <span className="label-caps text-charcoal/62">COVER</span>
            </div>

            <div>
              {knownFacts.length > 0 ? (
                <dl className="border-charcoal/12 bg-charcoal/12 grid gap-px border sm:grid-cols-2">
                  {knownFacts.map((fact) => (
                    <div key={fact.term} className="bg-white p-5">
                      <dt className="label-caps text-charcoal/70">
                        {fact.term}
                      </dt>
                      <dd className="text-navy mt-2 text-sm break-keep">
                        {fact.dateTime ? (
                          <time dateTime={fact.dateTime}>{fact.value}</time>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="border-charcoal/20 text-charcoal/70 border border-dashed p-6 text-sm leading-[1.9] break-keep">
                  저자·출판사·출간일·ISBN 등 확인된 도서 정보가 아직 없습니다.
                  정보가 확정되면 이 영역에 표시되고, published 상태가 되면 Book
                  구조화 데이터도 함께 출력됩니다.
                </p>
              )}

              {book.description ? (
                <p className="text-charcoal/85 mt-10 text-[1.0625rem] leading-[2] break-keep">
                  {book.description}
                </p>
              ) : null}

              {book.externalLinks.length > 0 ? (
                <ul className="mt-10 flex flex-wrap gap-3">
                  {book.externalLinks.map((link) =>
                    link.url ? (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-charcoal/20 text-navy hover:border-brand hover:text-brand inline-flex min-h-11 items-center border px-5 py-2.5 text-sm transition-colors"
                        >
                          {link.label}
                          <span aria-hidden="true" className="ml-2">
                            ↗
                          </span>
                        </a>
                      </li>
                    ) : null,
                  )}
                </ul>
              ) : null}
            </div>
          </div>

          <DraftNote className="mt-14">
            이 페이지는 도서 상세 템플릿 확인용 placeholder 입니다. 실제 도서
            정보(제목, ISBN, 출간일 등)는 확인된 자료로만 등록합니다.
          </DraftNote>

          <div className="border-charcoal/12 mt-12 border-t pt-8">
            <ArrowLink href={routes.books}>ALL BOOKS</ArrowLink>
          </div>
        </Container>
      </article>

      <JsonLd
        data={jsonLdGraph([breadcrumbSchema(breadcrumbs), bookSchema(book)])}
      />
    </>
  );
}
