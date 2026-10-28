/**
 * 강의 현장 사진.
 *
 * - 기관 출강: 한국쇼핑몰협회 블로그 교육 후기(Drive 보관본, 2024~2025)
 * - 명지대학교 AI 이커머스학과 1기 강의(2025, 학과 홈페이지 자료 폴더)
 * - 『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼(2026-10-24)
 * 기관마다 1장씩만 싣고, 마스크를 쓴 사진과 학생 이름이 드러나는 사진은 쓰지 않는다.
 * 기관명·과정명은 후기 글과 사진 속 현수막에 적힌 내용만 쓴다.
 * 사진은 public/field/ 에 4:3(1200×900)으로 저장되어 있다.
 */
export interface FieldPhoto {
  src: string;
  alt: string;
  /** 기관·장소 */
  place: string;
  /** 과정·강의 주제 */
  program: string;
  year: string;
}

export const fieldPhotos: FieldPhoto[] = [
  {
    src: "/field/mju-lecture-podium-2025.jpg",
    alt: "명지대학교 AI 이커머스학과 강의실에서 강의하는 고아라",
    place: "명지대학교 테크노아트대학원",
    program: "AI 이커머스학과 1기 강의",
    year: "2025",
  },
  {
    src: "/field/hanam-city-2025.jpg",
    alt: "하남시청 AI 스마트스토어 쇼핑몰 창업 과정에서 강의하는 고아라",
    place: "하남시청",
    program: "AI 스마트스토어 쇼핑몰 창업 과정 · 빅데이터를 활용한 시장조사",
    year: "2025",
  },
  {
    src: "/field/forum-stage-2026.jpg",
    alt: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼 무대",
    place: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼",
    program: "포럼 개회",
    year: "2026",
  },
  {
    src: "/field/goyang-women-coupang-2025.jpg",
    alt: "고양여성인력개발센터 온라인쇼핑몰창업 CEO 실무과정 강의 현장",
    place: "고양여성인력개발센터",
    program: "온라인쇼핑몰창업 CEO 실무과정 · 쿠팡 입점과 운영",
    year: "2025",
  },
  {
    src: "/field/bucheon-women-2024.jpg",
    alt: "부천여성인력개발센터 쇼핑몰 창업 특강 현장",
    place: "부천여성인력개발센터",
    program: "쇼핑몰 창업 특강 · 기초 이커머스 교육",
    year: "2024",
  },
];
