/**
 * 강의 현장 사진.
 *
 * 한국쇼핑몰협회 블로그의 교육 후기(Drive 보관본)에서 실제 강의 장면만 골랐다.
 * 기관명·과정명·연도는 해당 후기 글에 적힌 내용만 쓴다.
 * 사진은 public/field/ 에 4:3(900×675)으로 저장되어 있다.
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
    src: "/field/korea-univ-2022.jpg",
    alt: "고려대학교 평생교육원 최고경영자과정에서 강의하는 고아라",
    place: "고려대학교 평생교육원",
    program: "온라인 마케팅 최고경영자과정 · 네이버 쇼핑과 스마트스토어",
    year: "2022",
  },
  {
    src: "/field/hankyung-academy-2022.jpg",
    alt: "한경아카데미 브랜드 마케팅 MBA에서 강의하는 고아라",
    place: "한경아카데미",
    program: "브랜드 마케팅 MBA · 온라인 쇼핑몰 성공 노하우",
    year: "2022",
  },
  {
    src: "/field/walkerhill-2022.jpg",
    alt: "워커힐 호텔 그랜드홀 재창업 심화 워크숍 강의 현장",
    place: "워커힐 호텔 그랜드홀",
    program: "희망리턴패키지 재창업 심화 워크숍 · 스마트스토어의 이해",
    year: "2022",
  },
  {
    src: "/field/guri-2022.jpg",
    alt: "구리시 공동체 사회적경제지원센터 쇼핑몰 창업 교육 현장",
    place: "구리시 공동체 사회적경제지원센터",
    program: "쇼핑몰 창업 교육 · 트렌드·창업·마케팅",
    year: "2022",
  },
  {
    src: "/field/korea-univ-2023.jpg",
    alt: "고려대학교 평생교육원 강의실에서 마이크를 들고 강의하는 고아라",
    place: "고려대학교 평생교육원",
    program: "온라인 마케팅 최고경영자 과정 · 스마트스토어와 네이버 쇼핑",
    year: "2023",
  },
  {
    src: "/field/pangyo-2022.jpg",
    alt: "판교 소그룹 재창업 워크숍 스마트스토어 창업 교육 현장",
    place: "판교 그래비티",
    program: "희망리턴패키지 재창업 심화 워크숍 · 스마트스토어 창업",
    year: "2022",
  },
  {
    src: "/field/kosme-daegu-2022.jpg",
    alt: "중진공 대구경북연수원 청년창업사관학교 이커머스 교육 현장",
    place: "중진공 대구경북연수원 청년창업사관학교",
    program: "스타트업을 위한 쇼핑몰 창업 교육",
    year: "2022",
  },
  {
    src: "/field/gyeonggi-south-2022.jpg",
    alt: "경기남부꿈마루 쿠팡 입점 교육 현장",
    place: "경기도일자리재단 경기남부꿈마루",
    program: "쿠팡 입점 교육",
    year: "2022",
  },
];
