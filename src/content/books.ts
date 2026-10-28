import type { Book } from "@/content/types";

/**
 * BOOKS 콘텐츠.
 *
 * 제목·부제·저자·출판사는 표지에 인쇄된 내용을 기준으로 등록했다.
 * 출간일은 연도만 확인되어 YYYY 형식으로 둔다.
 * 표지에서 판독되지 않은 출판사, ISBN, 소개글은 임의로 만들지 않고 null 로 둔다.
 *
 * 배열 순서가 화면 노출 순서다. (최신 출간 순)
 */

const KO_A_RA = "고아라";

function cover(slug: string, title: string) {
  return { src: `/images/books/${slug}.webp`, alt: `${title} 표지` };
}

function book(
  entry: Pick<Book, "slug" | "title" | "subtitle" | "authors" | "publisher"> & {
    year: string;
  },
): Book {
  return {
    slug: entry.slug,
    title: entry.title,
    subtitle: entry.subtitle,
    authors: entry.authors,
    publisher: entry.publisher,
    publicationDate: entry.year,
    isbn: null,
    cover: cover(entry.slug, entry.title),
    description: null,
    category: null,
    externalLinks: [],
    status: "published",
  };
}

export const books: Book[] = [
  book({
    slug: "ai-media-commerce-trend-2027",
    title: "AI 미디어 커머스 트렌드 2027",
    subtitle:
      "AI가 먼저 읽고 판단하는 시대에, 내 브랜드는 어떻게 선택받을 것인가?",
    authors: [KO_A_RA, "김한준", "장도균", "정유진", "백종우", "배현진"],
    publisher: "나비의활주로",
    year: "2026",
  }),
  book({
    slug: "ai-fashion-brand-marketing",
    title: "AI 패션 브랜드 마케팅 입문",
    subtitle:
      "AI와 플랫폼 시대, 첫 고객에게 발견되고 선택되는 패션 브랜드 실행서",
    authors: [KO_A_RA, "최인후"],
    publisher: "주식회사 넥서스그룹",
    year: "2026",
  }),
  book({
    slug: "why-ai-recommends-next-door",
    title: "AI는 왜 옆 가게만 추천할까?",
    subtitle: "ChatGPT, Gemini, Claude가 먼저 말하는 브랜드의 비밀",
    authors: [KO_A_RA],
    publisher: "나비의활주로",
    year: "2026",
  }),
  book({
    slug: "hire-ai-instead-of-staff",
    title: "사장님, 이제 직원 대신 AI를 채용하세요",
    subtitle: "혼자 일하는 사장님을 위한 나만의 AI 업무 비서 만들기",
    authors: [KO_A_RA],
    publisher: "주식회사 넥서스그룹",
    year: "2026",
  }),
  book({
    slug: "naver-shopping-ai-agent",
    title: "네이버 쇼핑 AI 에이전트",
    subtitle: "스마트스토어·네이버 플레이스 Agent N 실전 전략",
    authors: [KO_A_RA],
    publisher: null,
    year: "2026",
  }),
  book({
    slug: "ai-fashion-shopping-mall",
    title: "AI로 패션 쇼핑몰 창업하기",
    subtitle:
      "아이디어부터 네이밍 론칭까지, 패션 쇼핑몰 창업의 모든 단계를 한 권에",
    authors: [KO_A_RA, "류은경"],
    publisher: "주식회사 넥서스그룹",
    year: "2026",
  }),
  book({
    slug: "chatgpt-book-writing",
    title: "강의안을 책으로 바꾸는 ChatGPT 책쓰기",
    subtitle: "강의·원고·PPT·노트가 한 권의 책으로 완성되는 실전 가이드",
    authors: [KO_A_RA],
    publisher: "인생의나무",
    year: "2026",
  }),
  book({
    slug: "vibe-coding-for-beginners",
    title: "왕초보도 바로 할 수 있는 바이브코딩",
    subtitle: "1인 창업부터 마케팅까지",
    authors: ["김한준", "장도균", KO_A_RA],
    publisher: "주식회사 넥서스그룹",
    year: "2026",
  }),
  book({
    slug: "ai-for-small-business-2026",
    title: "소상공인을 위한 AI 활용법",
    subtitle:
      "로고 매뉴얼·메뉴판·이벤트 홍보 배너까지, AI로 만들고 운영하는 실전 마케팅",
    authors: [KO_A_RA, "이가령"],
    publisher: "인생의나무",
    year: "2026",
  }),
  book({
    slug: "chatgpt-food-shopping-mall",
    title: "챗GPT로 식품쇼핑몰 창업하기",
    subtitle:
      "초보자도 쉽게 시작하는 — 상품소싱·상세페이지·인증·마케팅·배송·자동화까지",
    authors: [KO_A_RA, "정유진"],
    publisher: null,
    year: "2026",
  }),
  book({
    slug: "ai-for-small-business-2025",
    title: "소상공인을 위한 AI 활용법",
    subtitle:
      "블로그 글쓰기부터 인스타그램 마케팅까지, AI로 간편하게 해결하는 스마트한 마케팅 전략",
    authors: [KO_A_RA],
    publisher: "WEMAKEBOOK",
    year: "2025",
  }),
  book({
    slug: "self-employment-trend-2019",
    title: "자영업 트렌드 2019",
    subtitle: "판의 변화, 영리한 겁쟁이가 살아남는다",
    authors: ["허건", "이정훈", "손상희", KO_A_RA, "임나경", "박성채"],
    publisher: "미래의창",
    year: "2018",
  }),
  book({
    slug: "smartstore-marketing",
    title: "스마트스토어 마케팅",
    subtitle: "개편된 검색엔진에 맞춘 네이버쇼핑 상위 노출 로직의 비밀",
    authors: [KO_A_RA],
    publisher: "라온북",
    year: "2018",
  }),
  book({
    slug: "instagram-marketing",
    title: "혼자서도 할 수 있는 인스타그램 마케팅",
    subtitle: null,
    authors: [KO_A_RA, "황유경"],
    publisher: "메카피아",
    year: "2017",
  }),
  book({
    slug: "cafe-marketing-guide",
    title: "카페 마케팅 가이드",
    subtitle: "네이버 카페 키우기의 정석과 꼼수",
    authors: [KO_A_RA],
    publisher: "비즈북스",
    year: "2014",
  }),
  book({
    slug: "social-marketing-strategy",
    title: "소셜마케팅 이기는 전략",
    subtitle: "온라인 판매자가 꼭 알아야 할",
    authors: [KO_A_RA],
    publisher: "비즈북스",
    year: "2013",
  }),
  book({
    slug: "open-market-ad-strategy",
    title: "오픈마켓 광고 이기는 전략",
    subtitle: "레드오션의 빅 마켓에서 승자로 살아남는 법",
    authors: [KO_A_RA],
    publisher: "비즈북스",
    year: "2012",
  }),
];
