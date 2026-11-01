import type { MediaChannel, MediaItem } from "@/content/types";

/**
 * MEDIA 콘텐츠.
 *
 * 개인 홈페이지에 외부 콘텐츠 전문을 복제하지 않는다.
 * 외부 채널로 연결하는 링크 카드만 관리한다.
 *
 * 공식 URL이 확인된 채널만 url 을 채우고 verified: true 로 둔다(가짜 URL 금지).
 * verified: false 인 채널은 화면에서 "링크 준비 중" 상태로 표시된다.
 */
export const mediaChannels: MediaChannel[] = [
  {
    key: "korea-shoppingmall-news",
    name: "한국쇼핑몰신문",
    role: "쇼핑몰 창업 · 이커머스 · 온라인 유통",
    type: "news",
    url: "https://www.hkspmh.com/",
    verified: true,
    preview: {
      src: "/media-channels/hkspmh.jpg",
      alt: "한국쇼핑몰신문 홈페이지 메인 화면",
      width: 1131,
      height: 891,
    },
  },
  {
    key: "ai-agent-times",
    name: "AI에이전트타임즈",
    role: "AI Agent · AI Search · GEO · Agentic Commerce",
    type: "news",
    url: "http://aiagentimes.hosting2003.co.kr/",
    verified: true,
    preview: {
      src: "/media-channels/aiagentimes.jpg",
      alt: "AI에이전트타임즈 홈페이지 메인 화면",
      width: 1161,
      height: 889,
    },
  },
  {
    key: "professor-column",
    name: "AI 이커머스학과 교수칼럼",
    role: "AI 이커머스 교육 · 산업 관점",
    type: "column",
    url: "https://blog.naver.com/PostList.naver?blogId=hkspmh&from=postList&categoryNo=28",
    verified: true,
    preview: {
      src: "/media-channels/professor-column.jpg",
      alt: "AI 이커머스학과 교수칼럼 블로그 글 목록 화면",
      width: 936,
      height: 830,
    },
  },
  {
    key: "youtube",
    name: "YouTube",
    role: "설명과 이야기",
    type: "video",
    url: "https://www.youtube.com/@AI%EC%9D%B4%EC%BB%A4%EB%A8%B8%EC%8A%A4%EA%B5%90%EC%88%98",
    verified: true,
  },
  {
    key: "threads",
    name: "Threads",
    role: "짧지만 밀도 있는 생각과 관점",
    type: "social",
    url: "https://www.threads.com/@marketainer",
    verified: true,
    preview: {
      src: "/media-channels/threads.jpg",
      alt: "Threads 로고",
      width: 622,
      height: 229,
    },
  },
  {
    key: "instagram",
    name: "Instagram",
    role: "사람 · 현장 · 프로젝트 과정",
    type: "social",
    url: "https://www.instagram.com/aiecommerce0419",
    verified: true,
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
