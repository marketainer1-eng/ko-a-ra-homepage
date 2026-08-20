import type { Book } from "@/content/types";

/**
 * BOOKS 콘텐츠.
 *
 * 실제 저서 정보(제목, 출판사, 출간일, ISBN 등)는 제공되지 않았으므로
 * 임의로 생성하지 않는다.
 *
 * 아래 항목은 상세 페이지 템플릿을 확인하기 위한 **placeholder** 이며
 * status: "draft" 이므로 noindex + sitemap 제외로 처리된다.
 * Phase 2에서 실제 데이터로 교체하거나 배열에서 삭제하면 된다.
 */
export const books: Book[] = [
  {
    slug: "placeholder-book",
    title: "PLACEHOLDER — 도서 정보 준비 중",
    subtitle: null,
    authors: [],
    publisher: null,
    publicationDate: null,
    isbn: null,
    cover: null,
    description: null,
    category: null,
    externalLinks: [],
    status: "draft",
  },
];
