import type { Story } from "@/content/types";

/**
 * STORY 콘텐츠.
 *
 * 제목·URL·카드 요약만 확정된 상태이며, 상세 원고는 Phase 2-C에서 작성한다.
 * 원고가 준비되면 body/publishedAt 을 채우고 status 를 published 로 바꾼다.
 */
export const stories: Story[] = [
  {
    slug: "ai-ecommerce-department",
    title: "AI 이커머스학과를 만들기까지",
    summary:
      "기존 전자상거래·유통·e비즈니스의 언어를 넘어 현재의 산업 변화를 더 정확하게 설명하는 학과를 만들고 싶었던 과정.",
    status: "draft",
    publishedAt: null,
    updatedAt: null,
    body: [],
  },
  {
    slug: "why-i-build-organizations",
    title: "왜 나는 필요한 조직을 먼저 만드는가",
    summary:
      "현재의 일을 정리하기 위해 조직을 만드는 것이 아니라, 앞으로 필요한 교육·산업·전문가 생태계를 미리 설계하는 이유.",
    status: "draft",
    publishedAt: null,
    updatedAt: null,
    body: [],
  },
  {
    slug: "why-vertical-ai",
    title: "왜 Vertical AI인가",
    summary:
      "AI를 하나의 범용 기술로만 보지 않고 패션·뷰티·식품·시니어 등 각 산업에 특화해 적용해야 한다고 생각하는 이유.",
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
