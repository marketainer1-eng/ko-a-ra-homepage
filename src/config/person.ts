import { BRAND_NAME_EN, BRAND_NAME_KO } from "@/config/site";

/**
 * KO A RA Person Entity.
 *
 * 원칙: 확인되지 않은 사실(연도, 수상, 기관 관계, 외부 URL 등)은 넣지 않는다.
 * 값이 없는 항목은 null 또는 빈 배열로 두고, JSON-LD 출력 단계에서 제외한다.
 */

/** 기관·조직 관계. url/role 이 확정되기 전에는 Schema에 출력하지 않는다. */
export interface EntityRelation {
  /** 기관/조직명 */
  name: string;
  /** 공식 URL. 확인 전에는 null */
  url: string | null;
  /** 관계 내에서의 역할. 확인 전에는 null */
  role: string | null;
  /** 사실관계 확인 여부. true 인 항목만 JSON-LD 로 출력한다. */
  verified: boolean;
}

export interface OfficialRole {
  organization: string;
  department: string;
  title: string;
  /** 화면 노출용 전체 직함 */
  full: string;
  url: string | null;
}

export const person = {
  name: BRAND_NAME_KO,
  alternateName: BRAND_NAME_EN,

  /** 대표 포지셔닝 */
  positioning: `AI 이커머스 전문가 ${BRAND_NAME_KO}`,

  /** 대표 전문분야 */
  primaryExpertise: "AI 이커머스",

  /** 대표 전문분야 (영문 표기) */
  primaryExpertiseEn: "AI E-COMMERCE",

  /** HERO/ABOUT 공통 소개문 */
  intro:
    "쇼핑몰 창업과 이커머스 현장에서 시작해 AI가 검색·추천·마케팅·판매와 비즈니스를 " +
    "어떻게 변화시키는지 연구하고 교육합니다.",

  /** 공식 직함 */
  officialRole: {
    organization: "명지대학교",
    department: "테크노아트대학원 AI 이커머스학과",
    title: "주임교수",
    full: "명지대학교 테크노아트대학원 AI 이커머스학과 주임교수",
    url: null,
  } satisfies OfficialRole,

  /** 전문성이 형성된 배경 */
  background: ["쇼핑몰 창업", "이커머스", "온라인 마케팅"],

  /** 현재 다루는 영역 */
  currentAreas: [
    "AI 검색",
    "AI 추천",
    "AI 쇼핑 에이전트",
    "GEO",
    "AI 마케팅",
    "Vertical AI",
  ],

  /**
   * 아래 관계 데이터는 구조만 준비한다.
   * 공식 URL과 사실관계가 확인되어 verified: true 가 되기 전까지
   * JSON-LD 에 출력하지 않는다. (Phase 2에서 채운다)
   */
  sameAs: [] as string[],
  affiliation: [] as EntityRelation[],
  worksFor: [] as EntityRelation[],
  founder: [] as EntityRelation[],
  memberOf: [] as EntityRelation[],

  /** 연락 수단. 제공된 정보가 없으므로 비워 둔다. */
  contact: {
    email: null as string | null,
    /** 민감한 개인정보(주소·연락처 등)는 저장하지 않는다. */
  },
} as const;

export type Person = typeof person;
