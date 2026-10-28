/**
 * 경력 · 강의 이력 · 이전 저서.
 *
 * 출처: 본인 제공 강사 프로필(2026). 개인정보(주민번호·연락처·주소)는 싣지 않는다.
 * 프로필 원문의 기간 표기 오류(예: "2026.04~2025.06")는 시작 연월만 남겼다.
 */

export interface CareerEntry {
  organization: string;
  /** 부서·학과 등. 없으면 null */
  unit: string | null;
  title: string;
  /** YYYY.MM~YYYY.MM 또는 YYYY.MM~현재 */
  period: string;
  field: string;
}

/** 최근 순 */
export const careerHistory: CareerEntry[] = [
  {
    organization: "AI 에이전트협회",
    unit: null,
    title: "협회장",
    period: "2026.04~현재",
    field: "운영관리",
  },
  {
    organization: "명지대학교",
    unit: "테크노아트대학원 AI 이커머스학과",
    title: "주임교수",
    period: "2025.08~현재",
    field: "AI 이커머스",
  },
  {
    organization: "한국쇼핑몰협회",
    unit: null,
    title: "협회장",
    period: "2022.03~현재",
    field: "운영관리",
  },
  {
    organization: "주식회사 넥서스그룹",
    unit: null,
    title: "대표이사",
    period: "2020.01~현재",
    field: "퍼스널 브랜딩 IP",
  },
  {
    organization: "주식회사 비즈온컴퍼니",
    unit: null,
    title: "대표",
    period: "2013.02~2020.03",
    field: "온라인 마케팅",
  },
  {
    organization: "내발꼬락",
    unit: null,
    title: "대표",
    period: "2005.02~2012.06",
    field: "온라인 판매 · 쇼핑몰 운영",
  },
];

export interface LectureEntry {
  organization: string;
  topic: string;
  period: string;
}

/** 주요 강의 이력 (최근 순) */
export const lectureHistory: LectureEntry[] = [
  {
    organization: "캐논코리아",
    topic: "AI를 활용한 디지털 마케팅",
    period: "2026.02~현재",
  },
  {
    organization: "수원새로일하기센터",
    topic: "AI 스마트스토어 쇼핑몰 창업 과정",
    period: "2026.04",
  },
  {
    organization: "중랑여성인력개발센터",
    topic: "AI E-비즈니스 소호 창업 과정",
    period: "2026.04",
  },
  {
    organization: "고양여성인력개발센터",
    topic: "쇼핑몰 창업 CEO 과정",
    period: "2025.09~현재",
  },
  {
    organization: "하남시청",
    topic: "AI 스마트스토어 쇼핑몰 창업 과정",
    period: "2025.07~2025.08",
  },
  {
    organization: "중랑여성인력개발센터",
    topic: "AI 스마트스토어 & 소호 창업 과정",
    period: "2025.04~2025.06",
  },
  {
    organization: "서초여성가족플라자",
    topic: "AI 스마트스토어 쇼핑몰 창업 과정",
    period: "2025.01~2025.03",
  },
  {
    organization: "성남산업진흥원",
    topic: "AI 스마트스토어 쇼핑몰 창업 과정",
    period: "2024.09~2024.12",
  },
  {
    organization: "소상공인연합회",
    topic: "AI 디지털 마케팅 전환 교육",
    period: "2024.03~2024.12",
  },
  {
    organization: "하남시청",
    topic: "AI 쇼핑몰 창업 과정",
    period: "2023.04~2024.09",
  },
  {
    organization: "SK 희망리턴패키지 재창업",
    topic: "온라인 마케팅",
    period: "2022.04~2022.09",
  },
  {
    organization: "하남시청",
    topic: "스마트스토어 창업과정",
    period: "2021.04~2021.09",
  },
  {
    organization: "아모레퍼시픽",
    topic: "이커머스 활용 전략 (실무)",
    period: "2020.03~2020.06",
  },
  {
    organization: "오비맥주",
    topic: "온라인 마케팅 홍보 전략",
    period: "2019.04~현재",
  },
  {
    organization: "훈장마을 교육센터",
    topic: "블로그 · 카페 · 페이스북 마케팅",
    period: "2017.01~2017.12",
  },
  {
    organization: "충북창조경제혁신센터",
    topic: "온라인 마케팅 홍보 전략",
    period: "2017.01~2017.12",
  },
  {
    organization: "고려대학교 평생교육원",
    topic: "네이버 밴드 · 카페 마케팅 전략",
    period: "2015.03~현재",
  },
  {
    organization: "카페24 교육센터",
    topic: "온라인 마케팅 전략",
    period: "2013.06~2017.01",
  },
  {
    organization: "네이버 파트너스퀘어",
    topic: "온라인 마케팅 홍보 전략",
    period: "2013.03~2018.11",
  },
  {
    organization: "11번가 판매자센터",
    topic: "오픈마켓 광고",
    period: "2011.03~2013.04",
  },
  {
    organization: "G마켓 · 옥션 판매자센터",
    topic: "오픈마켓 광고",
    period: "2009.03~2011.01",
  },
];

/** BOOKS 목록 이전의 저서 (출간 연도 순) */
export const earlierBooks: { title: string; year: string }[] = [
  { title: "오픈마켓 광고 이기는 전략", year: "2012" },
  { title: "소셜마케팅 이기는 전략", year: "2013" },
  { title: "카페 마케팅 가이드", year: "2014" },
  { title: "인스타그램 마케팅", year: "2017" },
  { title: "스마트스토어 마케팅", year: "2018" },
  { title: "자영업 트렌드 2019", year: "2018" },
];
