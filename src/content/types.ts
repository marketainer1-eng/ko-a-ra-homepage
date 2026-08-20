/**
 * 콘텐츠 데이터 타입.
 *
 * UI 컴포넌트는 이 타입에만 의존한다.
 * 향후 CMS(헤드리스 CMS, MDX, DB 등)를 연결하더라도
 * 동일한 타입을 반환하는 로더만 교체하면 UI 변경 없이 대응할 수 있다.
 */

/**
 * 콘텐츠 공개 상태.
 * - draft: 화면에는 보이지만 noindex, sitemap 제외
 * - published: index, sitemap 포함
 */
export type ContentStatus = "draft" | "published";

export interface ExternalLink {
  label: string;
  /** 확인된 URL이 없으면 null (가짜 URL을 만들지 않는다) */
  url: string | null;
}

export interface Story {
  slug: string;
  title: string;
  /** 목록/카드용 요약. 원고 확정 전에는 placeholder */
  summary: string;
  status: ContentStatus;
  /** ISO 8601 (YYYY-MM-DD). 확정 전에는 null */
  publishedAt: string | null;
  updatedAt: string | null;
  /** 본문. Phase 2에서 실제 원고를 채운다. */
  body: string[];
}

export interface Book {
  slug: string;
  title: string;
  subtitle: string | null;
  authors: string[];
  publisher: string | null;
  /** ISO 8601 (YYYY-MM-DD). 확정 전에는 null */
  publicationDate: string | null;
  isbn: string | null;
  /** 표지 이미지 경로. 없으면 null → placeholder 렌더링 */
  cover: { src: string; alt: string } | null;
  description: string | null;
  category: string | null;
  externalLinks: ExternalLink[];
  status: ContentStatus;
}

/** 프로젝트 상세 서술 구조: WHY / PROBLEM / BUILD / RESULT / NEXT */
export interface ProjectSections {
  why: string | null;
  problem: string | null;
  build: string | null;
  result: string | null;
  next: string | null;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  /** 진행 상태 라벨(예: 준비 중). 확정 전에는 null */
  phase: string | null;
  sections: ProjectSections;
}

export type MediaType = "column" | "news" | "video" | "social" | "interview";

export interface MediaItem {
  title: string;
  /** 채널명(매체/플랫폼) */
  channel: string;
  type: MediaType;
  /** ISO 8601 (YYYY-MM-DD). 확정 전에는 null */
  date: string | null;
  description: string | null;
  /** 확인된 URL이 없으면 null */
  externalUrl: string | null;
  /** URL과 사실관계가 확인된 항목만 true */
  verified: boolean;
}

/** 외부 채널(매체/SNS) 카드 */
export interface MediaChannel {
  key: string;
  /** 채널명 */
  name: string;
  /** 채널의 성격 */
  role: string;
  type: MediaType;
  /** 확인된 URL이 없으면 null */
  url: string | null;
  verified: boolean;
}
