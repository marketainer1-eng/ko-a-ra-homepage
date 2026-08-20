/**
 * PAST → PRESENT → FUTURE 서사 데이터.
 *
 * 모든 항목은 실제 HTML 텍스트로 렌더링된다.
 * (통이미지로 만들지 않는다 — SEO/GEO/접근성/반응형을 위해)
 *
 * 연도·성과·수치는 확인된 정보가 없으므로 넣지 않는다.
 */

/* ------------------------------------------------------------------ *
 * PAST — WHERE I STARTED
 * ------------------------------------------------------------------ */

export interface TimelineStep {
  id: string;
  label: string;
  /** 연도. 확인 전에는 null (임의로 채우지 않는다) */
  period: string | null;
}

export const pastTimeline: TimelineStep[] = [
  { id: "online-selling", label: "온라인 판매", period: null },
  { id: "shopping-mall", label: "쇼핑몰 창업", period: null },
  { id: "online-marketing", label: "온라인 마케팅", period: null },
  { id: "ecommerce-education", label: "이커머스 교육", period: null },
  { id: "industry-association", label: "산업·협회 활동", period: null },
  { id: "ai-ecommerce", label: "AI × E-Commerce", period: null },
];

/* ------------------------------------------------------------------ *
 * PRESENT — WHERE I AM
 * ------------------------------------------------------------------ */

export interface ExpertiseArea {
  no: string;
  /** 영문 표기(대문자) */
  title: string;
  /** 한글 설명 */
  description: string;
  /**
   * 향후 BOOKS / PROJECTS / MEDIA 콘텐츠와 연결하기 위한 참조.
   * slug 배열로 관리하며, Phase 2에서 채운다.
   */
  related: {
    books: string[];
    projects: string[];
    media: string[];
  };
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    no: "01",
    title: "AI E-COMMERCE",
    description: "AI와 이커머스의 결합",
    related: { books: [], projects: [], media: [] },
  },
  {
    no: "02",
    title: "E-COMMERCE STARTUP",
    description: "쇼핑몰 창업 · 온라인 판매 · 브랜드 창업",
    related: { books: [], projects: [], media: [] },
  },
  {
    no: "03",
    title: "AI SEARCH & AGENT",
    description: "AI 검색 · AI 추천 · AI 쇼핑 에이전트",
    related: { books: [], projects: [], media: [] },
  },
  {
    no: "04",
    title: "GEO & AI MARKETING",
    description: "AI 시대의 검색 · 발견 · 신뢰 · 마케팅",
    related: { books: [], projects: [], media: [] },
  },
  {
    no: "05",
    title: "VERTICAL AI",
    description: "산업별 · 분야별 AI 전문화",
    related: { books: [], projects: [], media: [] },
  },
  {
    no: "06",
    title: "EXPERT IP",
    description: "전문가의 지식과 경험을 콘텐츠 · 교육 · 시장으로 연결",
    related: { books: [], projects: [], media: [] },
  },
];

/* ------------------------------------------------------------------ *
 * CURRENT ECOSYSTEM
 * ------------------------------------------------------------------ */

export interface EcosystemEntry {
  name: string;
  /** 공식 URL. 확인 전에는 null */
  url: string | null;
  /** 해당 활동에서의 역할. 확인 전에는 null (Schema에 출력하지 않는다) */
  role: string | null;
  verified: boolean;
}

export interface EcosystemGroup {
  key: string;
  /** 역할 중심 라벨(영문) */
  label: string;
  /** 역할 설명(한글) */
  caption: string;
  entries: EcosystemEntry[];
}

export const currentEcosystem: EcosystemGroup[] = [
  {
    key: "education",
    label: "EDUCATION",
    caption: "대학원 정규 교육",
    entries: [
      { name: "AI 이커머스학과", url: null, role: null, verified: false },
    ],
  },
  {
    key: "professional-education",
    label: "PROFESSIONAL EDUCATION",
    caption: "실무 전문 교육",
    entries: [
      { name: "AI 이커머스 아카데미", url: null, role: null, verified: false },
    ],
  },
  {
    key: "industry",
    label: "INDUSTRY",
    caption: "산업 현장과의 연결",
    entries: [{ name: "협회 활동", url: null, role: null, verified: false }],
  },
  {
    key: "research",
    label: "RESEARCH",
    caption: "연구와 실험",
    entries: [
      {
        name: "AI 미디어 커머스 연구소",
        url: null,
        role: null,
        verified: false,
      },
    ],
  },
  {
    key: "media",
    label: "MEDIA",
    caption: "산업 미디어",
    entries: [
      { name: "한국쇼핑몰신문", url: null, role: null, verified: false },
      { name: "AI에이전트타임즈", url: null, role: null, verified: false },
    ],
  },
  {
    key: "knowledge",
    label: "KNOWLEDGE",
    caption: "지식의 축적과 확산",
    entries: [
      { name: "저서", url: null, role: null, verified: false },
      { name: "교재", url: null, role: null, verified: false },
      { name: "연구", url: null, role: null, verified: false },
      { name: "강의", url: null, role: null, verified: false },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * FUTURE — WHAT I AM BUILDING
 * ------------------------------------------------------------------ */

export const futureMessage =
  "산업의 변화를 먼저 보고, 앞으로 필요한 교육과 지식, 전문가와 조직을 하나의 생태계로 연결합니다.";

/** A. VERTICAL AI ECOSYSTEM */
export const verticalAiPrinciple =
  "AI는 모든 산업에 같은 방식으로 적용되지 않습니다.";

export const verticalAiFlow: string[] = [
  "산업",
  "AI 특화",
  "AI 활용",
  "창업",
  "마케팅",
  "교육",
  "출판",
  "전문가",
  "프로젝트",
];

/** 향후 확장 분야 예시 (확정된 계획이 아니라 예시) */
export const verticalAiDomains: string[] = [
  "패션",
  "뷰티",
  "시니어",
  "식품",
  "펫",
  "크리에이터",
  "기타",
];

/** B. EXPERT IP ECOSYSTEM */
export const expertIpPrinciple =
  "전문가의 지식과 경험은 하나의 콘텐츠에서 끝날 필요가 없습니다.";

/** 순환 구조의 중심 */
export const expertIpCore = "전문가의 지식 · 경험";

/** 서로 전환되는 콘텐츠 형식 (선형 순서가 아니라 상호 전환) */
export const expertIpFormats: string[] = [
  "책",
  "칼럼",
  "SNS",
  "영상",
  "오디오",
  "인강",
];

/** 콘텐츠의 출발점은 다양할 수 있다 */
export const expertIpEntryPoints: string[] = [
  "책",
  "칼럼",
  "SNS",
  "YouTube",
  "강의안",
  "프로젝트",
  "인터뷰",
  "영상",
  "오디오",
];

/** 콘텐츠 순환이 만들어내는 층위 */
export const expertIpLayers: { label: string; items: string[] }[] = [
  { label: "권위와 브랜드", items: [] },
  { label: "확장", items: ["강의", "컨설팅", "프로젝트", "협업"] },
];
