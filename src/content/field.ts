/**
 * 강의 현장 (IN THE FIELD) 사진.
 *
 * 사진은 public/field/ 에 저장되어 있다. (원본 4:3 비율)
 * ABOUT 에는 전체를, HOME PAST 섹션에는 앞의 4장만 노출한다.
 */
export interface FieldPhoto {
  /** 이미지 경로 (public/field/) */
  src: string;
  /** 대체 텍스트 */
  alt: string;
  /** 현장(기관·행사)명 */
  title: string;
  /** 과정·세션 설명 */
  caption: string;
  /** 연도 */
  year: string;
}

export const fieldPhotos: FieldPhoto[] = [
  {
    src: "/field/mju-lecture-podium-2025.jpg",
    alt: "명지대학교 AI 이커머스학과 강의실에서 강의하는 고아라",
    title: "명지대학교 테크노아트대학원",
    caption: "AI 이커머스학과 1기 강의",
    year: "2025",
  },
  {
    src: "/field/seoul-bigdata-forum-2026.jpg",
    alt: "2026 서울 빅데이터 포럼 패널 토론에 참여한 고아라",
    title: "2026 서울 빅데이터 포럼",
    caption: "패널 토론",
    year: "2026",
  },
  {
    src: "/field/hanam-city-2025.jpg",
    alt: "하남시청 AI 스마트스토어 쇼핑몰 창업 과정에서 강의하는 고아라",
    title: "하남시청",
    caption: "AI 스마트스토어 쇼핑몰 창업 과정 · 빅데이터를 활용한 시장조사",
    year: "2025",
  },
  {
    src: "/field/forum-stage-2026.jpg",
    alt: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼 무대",
    title: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼",
    caption: "포럼 개회",
    year: "2026",
  },
  {
    src: "/field/goyang-women-coupang-2025.jpg",
    alt: "고양여성인력개발센터 온라인쇼핑몰창업 CEO 실무과정 강의 현장",
    title: "고양여성인력개발센터",
    caption: "온라인쇼핑몰창업 CEO 실무과정 · 쿠팡 입점과 운영",
    year: "2025",
  },
  {
    src: "/field/bucheon-women-2024.jpg",
    alt: "부천여성인력개발센터 쇼핑몰 창업 특강 현장",
    title: "부천여성인력개발센터",
    caption: "쇼핑몰 창업 특강 · 기초 이커머스 교육",
    year: "2024",
  },
];

/** ABOUT 강의 현장 섹션 소개문 */
export const fieldIntro =
  "지자체·여성인력개발센터의 창업 교육부터 대학원 강의, 산업 포럼 발표와 패널까지 " +
  "AI 이커머스를 가르치고 나누는 현장입니다.";

/** HOME 에 노출하는 사진 수 */
export const HOME_FIELD_PHOTO_COUNT = 4;
