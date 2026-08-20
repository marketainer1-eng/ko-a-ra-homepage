import type { Story } from "@/content/types";

/**
 * STORY 콘텐츠.
 *
 * Phase 1에서는 제목과 URL 구조만 확정하고, 실제 원고는 작성하지 않는다.
 * (Phase 2에서 원고를 받아 body/publishedAt/status 를 채운다.)
 */
export const DRAFT_PLACEHOLDER = "원고 준비 중입니다." as const;

export const stories: Story[] = [
  {
    slug: "ai-ecommerce-department",
    title: "AI 이커머스학과를 만들기까지",
    summary: DRAFT_PLACEHOLDER,
    status: "draft",
    publishedAt: null,
    updatedAt: null,
    body: [],
  },
  {
    slug: "why-i-build-organizations",
    title: "왜 나는 필요한 조직을 먼저 만드는가",
    summary: DRAFT_PLACEHOLDER,
    status: "draft",
    publishedAt: null,
    updatedAt: null,
    body: [],
  },
  {
    slug: "why-vertical-ai",
    title: "왜 Vertical AI인가",
    summary: DRAFT_PLACEHOLDER,
    status: "draft",
    publishedAt: null,
    updatedAt: null,
    body: [],
  },
];

/** HOME의 FEATURED STORY 에 노출할 slug 순서 */
export const featuredStorySlugs: string[] = [
  "ai-ecommerce-department",
  "why-i-build-organizations",
  "why-vertical-ai",
];
