/**
 * ABOUT 경력 · 강의 이력 · 이전 저서.
 *
 * 화면 표시 순서 그대로(최근 → 과거) 기재한다.
 * 기간 표기는 "YYYY.MM~YYYY.MM" 또는 "YYYY.MM~현재" 형식을 따른다.
 */

/** 경력 타임라인 항목 */
export interface CareerEntry {
  /** 기간 */
  period: string;
  /** 기관/회사명 */
  organization: string;
  /** 소속 부서·학과. 없으면 null */
  department: string | null;
  /** 직함 */
  role: string;
  /** 담당 분야 */
  field: string;
}

export const careerHistory: CareerEntry[] = [
  {
    period: "2026.04~현재",
    organization: "AI 에이전트협회",
    department: null,
    role: "협회장",
    field: "운영관리",
  },
  {
    period: "2025.08~현재",
    organization: "명지대학교",
    department: "테크노아트대학원 AI 이커머스학과",
    role: "주임교수",
    field: "AI 이커머스",
  },
  {
    period: "2022.03~현재",
    organization: "한국쇼핑몰협회",
    department: null,
    role: "협회장",
    field: "운영관리",
  },
  {
    period: "2020.01~현재",
    organization: "주식회사 넥서스그룹",
    department: null,
    role: "대표이사",
    field: "퍼스널 브랜딩 IP",
  },
  {
    period: "2013.02~2020.03",
    organization: "주식회사 비즈온컴퍼니",
    department: null,
    role: "대표",
    field: "온라인 마케팅",
  },
  {
    period: "2005.02~2012.06",
    organization: "내발꼬락",
    department: null,
    role: "대표",
    field: "온라인 판매 · 쇼핑몰 운영",
  },
];

/** 주요 강의 이력 항목 */
export interface LectureEntry {
  /** 기간 */
  period: string;
  /** 강의 기관 */
  organization: string;
  /** 과정명 */
  course: string;
}

export const lectureHistory: LectureEntry[] = [
  {
    period: "2026.02~현재",
    organization: "캐논코리아",
    course: "AI를 활용한 디지털 마케팅",
  },
  {
    period: "2026.04",
    organization: "수원새로일하기센터",
    course: "AI 스마트스토어 쇼핑몰 창업 과정",
  },
  {
    period: "2026.04",
    organization: "중랑여성인력개발센터",
    course: "AI E-비즈니스 소호 창업 과정",
  },
  {
    period: "2025.09~현재",
    organization: "고양여성인력개발센터",
    course: "쇼핑몰 창업 CEO 과정",
  },
  {
    period: "2025.07~2025.08",
    organization: "하남시청",
    course: "AI 스마트스토어 쇼핑몰 창업 과정",
  },
  {
    period: "2025.04~2025.06",
    organization: "중랑여성인력개발센터",
    course: "AI 스마트스토어 & 소호 창업 과정",
  },
  {
    period: "2025.01~2025.03",
    organization: "서초여성가족플라자",
    course: "AI 스마트스토어 쇼핑몰 창업 과정",
  },
  {
    period: "2024.09~2024.12",
    organization: "성남산업진흥원",
    course: "AI 스마트스토어 쇼핑몰 창업 과정",
  },
  {
    period: "2024.03~2024.12",
    organization: "소상공인연합회",
    course: "AI 디지털 마케팅 전환 교육",
  },
  {
    period: "2023.04~2024.09",
    organization: "하남시청",
    course: "AI 쇼핑몰 창업 과정",
  },
  {
    period: "2022.04~2022.09",
    organization: "SK 희망리턴패키지 재창업",
    course: "온라인 마케팅",
  },
  {
    period: "2021.04~2021.09",
    organization: "하남시청",
    course: "스마트스토어 창업과정",
  },
  {
    period: "2020.03~2020.06",
    organization: "아모레퍼시픽",
    course: "이커머스 활용 전략 (실무)",
  },
  {
    period: "2019.04~현재",
    organization: "오비맥주",
    course: "온라인 마케팅 홍보 전략",
  },
  {
    period: "2017.01~2017.12",
    organization: "훈장마을 교육센터",
    course: "블로그 · 카페 · 페이스북 마케팅",
  },
  {
    period: "2017.01~2017.12",
    organization: "충북창조경제혁신센터",
    course: "온라인 마케팅 홍보 전략",
  },
  {
    period: "2015.03~현재",
    organization: "고려대학교 평생교육원",
    course: "네이버 밴드 · 카페 마케팅 전략",
  },
  {
    period: "2013.06~2017.01",
    organization: "카페24 교육센터",
    course: "온라인 마케팅 전략",
  },
  {
    period: "2013.03~2018.11",
    organization: "네이버 파트너스퀘어",
    course: "온라인 마케팅 홍보 전략",
  },
  {
    period: "2011.03~2013.04",
    organization: "11번가 판매자센터",
    course: "오픈마켓 광고",
  },
  {
    period: "2009.03~2011.01",
    organization: "G마켓 · 옥션 판매자센터",
    course: "오픈마켓 광고",
  },
];

/**
 * BOOKS 상세 페이지가 없는 이전 저서 (ABOUT 저서 이력 하단에 표시).
 * 최근 저서는 content/books.ts 의 데이터를 출간일 역순으로 사용한다.
 */
export interface EarlierBook {
  /** 출간 연도 */
  year: string;
  title: string;
}

export const earlierBooks: EarlierBook[] = [
  { year: "2018", title: "자영업 트렌드 2019" },
  { year: "2018", title: "스마트스토어 마케팅" },
  { year: "2017", title: "인스타그램 마케팅" },
  { year: "2014", title: "카페 마케팅 가이드" },
  { year: "2013", title: "소셜마케팅 이기는 전략" },
  { year: "2012", title: "오픈마켓 광고 이기는 전략" },
];

/** ABOUT 저서 이력 소개문 */
export const bookHistoryIntro =
  "최근 저서부터 2012년 첫 저서까지입니다. 오픈마켓·소셜·카페· " +
  "인스타그램·스마트스토어 마케팅을 거쳐 AI 이커머스로 저술 영역을 넓혀 왔습니다.";
