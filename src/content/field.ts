/**
 * 강의 현장 사진.
 *
 * - 명지대학교 AI 이커머스학과 1기 강의(2025, 학과 홈페이지 자료 폴더)
 * - 『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼(2026-10-24)
 * 학생 이름이 드러나는 사진(신입생 환영 현수막 등)은 쓰지 않는다.
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
    src: "/field/forum-stage-2026.jpg",
    alt: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼 무대",
    place: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼",
    program: "포럼 개회",
    year: "2026",
  },
  {
    src: "/field/mju-lecture-gesture-2025.jpg",
    alt: "마이크를 들고 설명하는 고아라",
    place: "명지대학교 테크노아트대학원",
    program: "AI 이커머스학과 1기 강의",
    year: "2025",
  },
  {
    src: "/field/forum-hall-2026.jpg",
    alt: "출간 기념 포럼 객석 전경",
    place: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼",
    program: "객석 전경",
    year: "2026",
  },
  {
    src: "/field/mju-lecture-wide-2025.jpg",
    alt: "원우들이 앉은 강의실 앞에서 강의하는 고아라",
    place: "명지대학교 테크노아트대학원",
    program: "AI 이커머스학과 1기 강의",
    year: "2025",
  },
  {
    src: "/field/forum-talk-2026.jpg",
    alt: "포럼 무대에서 발표하는 모습",
    place: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼",
    program: "트렌드 발표",
    year: "2026",
  },
  {
    src: "/field/mju-lecture-future-2025.jpg",
    alt: "YOUR FUTURE BEGINS HERE 문구 앞에서 강의하는 고아라",
    place: "명지대학교 테크노아트대학원",
    program: "AI 이커머스학과 1기 강의",
    year: "2025",
  },
  {
    src: "/field/forum-authors-2026.jpg",
    alt: "『AI 미디어 커머스 트렌드 2027』 공동 저자 6인 기념 촬영",
    place: "『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼",
    program: "공동 저자 6인",
    year: "2026",
  },
];
