import type { MediaChannel, MediaItem } from "@/content/types";

/**
 * MEDIA 콘텐츠.
 *
 * 개인 홈페이지에 외부 콘텐츠 전문을 복제하지 않는다.
 * 외부 채널로 연결하는 링크 카드만 관리한다.
 *
 * 공식 URL이 제공되지 않았으므로 url 은 모두 null 이며(가짜 URL 금지),
 * verified: false 인 채널은 화면에서 "링크 준비 중" 상태로 표시된다.
 * Phase 2에서 공식 URL을 채우고 verified: true 로 바꾸면 자동으로 링크가 활성화된다.
 */
export const mediaChannels: MediaChannel[] = [
  {
    key: "korea-shoppingmall-news",
    name: "한국쇼핑몰신문",
    role: "쇼핑몰 창업 · 이커머스 · 온라인 유통",
    type: "news",
    url: null,
    verified: false,
  },
  {
    key: "ai-agent-times",
    name: "AI에이전트타임즈",
    role: "AI Agent · AI Search · GEO · Agentic Commerce",
    type: "news",
    url: null,
    verified: false,
  },
  {
    key: "professor-column",
    name: "AI 이커머스학과 교수칼럼",
    role: "AI 이커머스 교육 · 산업 관점",
    type: "column",
    url: null,
    verified: false,
  },
  {
    key: "youtube",
    name: "YouTube",
    role: "설명과 이야기",
    type: "video",
    url: null,
    verified: false,
  },
  {
    key: "threads",
    name: "Threads",
    role: "짧지만 밀도 있는 생각과 관점",
    type: "social",
    url: null,
    verified: false,
  },
  {
    key: "instagram",
    name: "Instagram",
    role: "사람 · 현장 · 프로젝트 과정",
    type: "social",
    url: null,
    verified: false,
  },
];

/**
 * HOME 하단 FOLLOW 섹션에 노출할 SNS 채널.
 * 실시간 API 연동 없이 링크 카드로만 구성한다.
 */
export const followChannelKeys = ["threads", "instagram", "youtube"] as const;

/**
 * 개별 미디어 콘텐츠(칼럼·영상·인터뷰 등).
 * 실제 게시물 정보가 제공되지 않았으므로 비워 둔다.
 */
export const mediaItems: MediaItem[] = [];
