/**
 * PAST → PRESENT → FUTURE 서사 데이터.
 *
 * 모든 항목은 실제 HTML 텍스트로 렌더링된다.
 * (통이미지로 만들지 않는다 — SEO/GEO/접근성/반응형을 위해)
 *
 * 연도·성과·수치는 확인된 정보가 없으므로 넣지 않는다.
 * 미래의 방향(FUTURE)을 이미 달성한 사실처럼 서술하지 않는다.
 */

/* ------------------------------------------------------------------ *
 * PAST — WHERE I STARTED
 * ------------------------------------------------------------------ */

/** PAST 메인 메시지: 출발점 */
export const pastOrigin = "온라인 판매와 쇼핑몰 창업 현장에서 시작했습니다.";

/** PAST 메인 메시지: 확장 과정 */
export const pastExpansion =
  "온라인 마케팅과 이커머스 교육으로 영역을 확장하며 온라인이 유통의 보조 채널에서 " +
  "산업의 중심으로 이동하는 과정을 현장에서 경험해왔습니다.";

/** PAST → PRESENT 로 넘어가는 연결 문장 */
export const pastToPresent =
  "그리고 지금은 AI가 다시 한번 이커머스의 검색·추천·마케팅·판매 구조를 바꾸고 있다고 보고 있습니다.";

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

export const presentDescription =
  "쇼핑몰 창업과 이커머스 현장에서 축적한 경험을 기반으로 AI가 검색·추천·마케팅·판매·콘텐츠와 " +
  "기업 운영을 어떻게 변화시키는지 연구하고 교육하고 있습니다.";

export interface ExpertiseArea {
  no: string;
  /** 영문 표기(대문자) */
  title: string;
  /** 한글 설명 */
  description: string;
  /**
   * BOOKS / PROJECTS / MEDIA 콘텐츠와 연결하기 위한 참조(slug 배열).
   * 연결할 실제 데이터가 생기면 채운다. 비어 있으면 링크를 만들지 않는다.
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
 *
 * 각 기관은 독립된 Entity 이며, 여기에는 KO A RA 와의 실제 관계만 기록한다.
 * (기관을 하위 브랜드처럼 묶지 않는다)
 *
 * 화면 표시와 Schema 출력은 분리되어 있다.
 * - relation / description: 화면 표시용
 * - url / verified: 공식 URL과 관계가 검증된 뒤에만 채운다.
 *   검증 전에는 Schema.org(founder / affiliation / worksFor 등)로 출력하지 않는다.
 * ------------------------------------------------------------------ */

export interface EcosystemEntry {
  name: string;
  /** 소속 상위 기관 (예: 대학·대학원). 없으면 null */
  parent: string | null;
  /** 기관·활동에 대한 설명. 제공된 정보가 없으면 null */
  description: string | null;
  /** KO A RA 와의 관계(화면 표시용). 제공된 정보가 없으면 null */
  relation: string | null;
  /** 공식 URL. 확인 전에는 null (가짜 URL을 만들지 않는다) */
  url: string | null;
  /** 공식 URL과 관계가 검증되었는지. true 가 되기 전에는 Schema에 출력하지 않는다. */
  verified: boolean;
}

export interface EcosystemGroup {
  key: string;
  /** 역할 중심 라벨(영문) */
  label: string;
  /** 역할 설명(한글) */
  caption: string;
  /** organization: 독립 기관 / activity: 기관이 아닌 활동 유형 */
  kind: "organization" | "activity";
  entries: EcosystemEntry[];
}

function organization(
  name: string,
  options: Partial<Omit<EcosystemEntry, "name">> = {},
): EcosystemEntry {
  return {
    name,
    parent: null,
    description: null,
    relation: null,
    url: null,
    verified: false,
    ...options,
  };
}

export const currentEcosystem: EcosystemGroup[] = [
  {
    key: "education",
    label: "EDUCATION",
    caption: "대학원 교육",
    kind: "organization",
    entries: [
      organization("AI 이커머스학과", {
        parent: "명지대학교 테크노아트대학원",
        relation: "주임교수",
      }),
    ],
  },
  {
    key: "professional-education",
    label: "PROFESSIONAL EDUCATION",
    caption: "실무 · 전문가 교육",
    kind: "organization",
    entries: [
      organization("AI 이커머스 아카데미", {
        description: "AI 이커머스 실무 및 전문가 교육",
      }),
    ],
  },
  {
    key: "industry",
    label: "INDUSTRY",
    caption: "산업 · 협회",
    kind: "organization",
    entries: [
      organization("한국쇼핑몰협회", { relation: "설립" }),
      organization("AI 에이전트협회", { relation: "설립" }),
      organization("한국버티컬AI협회", { relation: "설립" }),
      organization("크리에이터 커머스 협회", { relation: "설립" }),
    ],
  },
  {
    key: "research",
    label: "RESEARCH",
    caption: "연구",
    kind: "organization",
    entries: [organization("AI 미디어 커머스 연구소")],
  },
  {
    key: "media",
    label: "MEDIA",
    caption: "산업 미디어",
    kind: "organization",
    entries: [organization("한국쇼핑몰신문"), organization("AI에이전트타임즈")],
  },
  {
    key: "knowledge",
    label: "KNOWLEDGE",
    caption: "지식 활동",
    kind: "activity",
    entries: [
      organization("저서"),
      organization("연구"),
      organization("강의"),
      organization("프로젝트"),
    ],
  },
];

/** ABOUT 의 기관 관계 표시 순서 (기관이 아닌 KNOWLEDGE 는 제외) */
export const organizationGroupOrder = [
  "education",
  "industry",
  "research",
  "professional-education",
  "media",
] as const;

/* ------------------------------------------------------------------ *
 * FUTURE — WHAT I AM BUILDING
 * ------------------------------------------------------------------ */

export const futureMessage =
  "산업의 변화를 먼저 보고, 앞으로 필요한 교육과 지식, 전문가와 조직을 하나의 생태계로 연결합니다.";

/** VISION 페이지 INTRO */
export const visionIntro =
  "다음 방향은 하나의 전문분야를 개인에게만 축적하는 것이 아니라, " +
  "산업과 전문가가 함께 성장할 수 있는 구조를 만드는 것입니다.";

/**
 * 두 시스템의 내부링크 준비.
 * 연결 대상이 published 상태일 때만 화면에 링크로 노출한다.
 */
export interface VisionSystem {
  key: "vertical-ai" | "expert-ip";
  no: string;
  title: string;
  related: { projects: string[]; stories: string[] };
}

export const visionSystems: VisionSystem[] = [
  {
    key: "vertical-ai",
    no: "01",
    title: "VERTICAL AI ECOSYSTEM",
    related: { projects: [], stories: ["why-vertical-ai"] },
  },
  {
    key: "expert-ip",
    no: "02",
    title: "EXPERT IP ECOSYSTEM",
    related: { projects: [], stories: [] },
  },
];

/* ----------------------- 01. VERTICAL AI -------------------------- */

export const verticalAiPrinciple =
  "AI는 모든 산업에 같은 방식으로 적용되지 않습니다.";

export const verticalAiMessage =
  "각 산업의 상품, 고객, 유통, 마케팅, 업무와 현장의 특성에 맞는 AI 활용 방법이 필요합니다.";

/** VISION 페이지 상세 설명 */
export const verticalAiDetail: string[] = [
  "패션에는 패션의 상품·고객·유통·마케팅 구조가 있고, 뷰티에는 뷰티의 구조가 있습니다. " +
    "식품, 농식품, 펫, 시니어, 리빙, 수면·웰니스, 크리에이터 분야 역시 다릅니다.",
  "그래서 산업별로 AI 활용, 창업, 마케팅, 교육, 출판, 전문가, 프로젝트를 연결하는 " +
    "Vertical AI 생태계를 구축하고 있습니다.",
];

/** 한국버티컬AI협회를 만든 목적 */
export const verticalAiAssociationNote =
  "한국버티컬AI협회를 만든 목적도 분야별로 AI를 특화하고, " +
  "산업별 교육·콘텐츠·출판·전문가 활동을 연결하기 위한 것입니다.";

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

export interface VerticalDomain {
  /** 영문 표기(대문자) */
  en: string;
  /** 한글 표기 */
  ko: string;
}

/**
 * 현재 확장 또는 연구하는 분야 (예시).
 * 단순 태그가 아니라 향후 교육·출판·프로젝트가 확장되는 Vertical 영역이다.
 */
export const verticalAiDomains: VerticalDomain[] = [
  { en: "FASHION", ko: "패션" },
  { en: "BEAUTY", ko: "뷰티" },
  { en: "FOOD", ko: "식품" },
  { en: "AGRICULTURE", ko: "농식품" },
  { en: "PET", ko: "펫" },
  { en: "SENIOR", ko: "시니어" },
  { en: "LIVING", ko: "리빙" },
  { en: "SLEEP & WELLNESS", ko: "수면 · 웰니스" },
  { en: "CREATOR", ko: "크리에이터" },
];

/* ------------------------ 02. EXPERT IP --------------------------- */

export const expertIpPrinciple =
  "전문가의 지식과 경험은 하나의 콘텐츠에서 끝날 필요가 없습니다.";

/** VISION 페이지 상세 설명 */
export const expertIpDetail: string[] = [
  "전문가가 이미 가지고 있는 지식과 경험은 여러 형태의 콘텐츠와 교육 자산으로 확장될 수 있습니다.",
  "중요한 것은 어디에서 시작했느냐가 아니라, 전문지식이 서로 연결되고 지속적으로 활용되는 구조를 만드는 것입니다.",
];

/** 형식 전환의 예 (출발점은 책이 아닐 수 있다) */
export const expertIpConversions: { from: string; to: string }[] = [
  { from: "PPT", to: "책" },
  { from: "YouTube 영상", to: "칼럼" },
  { from: "SNS에서 시작한 생각", to: "책의 한 장" },
];

/** 반대로 한 권의 책이 확장될 수 있는 형태 */
export const expertIpBookExpansion: string[] = [
  "영상",
  "SNS",
  "오디오",
  "인강",
  "강의",
  "컨설팅",
  "프로젝트",
];

/** 순환 구조의 중심 */
export const expertIpCore = "전문지식 · 경험";

/** 콘텐츠의 출발점은 다양하다 (책이 유일한 출발점이 아니다) */
export const expertIpSources: string[] = [
  "전문지식",
  "경험",
  "PPT",
  "강의",
  "책",
  "칼럼",
  "SNS",
  "블로그",
  "YouTube",
  "프로젝트",
  "인터뷰",
];

/** 서로 전환되는 콘텐츠 형식 (선형 순서가 아니라 상호 전환) */
export const expertIpFormats: string[] = [
  "책",
  "칼럼",
  "SNS",
  "영상",
  "오디오",
  "인강",
];

/** 콘텐츠 전환의 결과 */
export const expertIpBrand = "전문가 브랜드";

/** 전문가 브랜드에서 확장되는 활동 */
export const expertIpOutcomes: string[] = [
  "강의",
  "컨설팅",
  "프로젝트",
  "협업",
];
