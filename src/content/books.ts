import type { Book } from "@/content/types";

/**
 * BOOKS 콘텐츠.
 *
 * 저자·출판사·출간일·ISBN 은 각 판매처(YES24, 교보문고 eBook) 상품 페이지에서
 * 확인한 값만 기재한다. 확인되지 않은 값은 null 로 둔다.
 * 목록은 출간일 최신순으로 정렬한다.
 */
export const books: Book[] = [
  {
    slug: "hire-ai-instead-of-staff",
    title: "사장님, 이제 직원 대신 AI를 채용하세요",
    subtitle: null,
    authors: ["고아라"],
    publisher: "넥서스그룹",
    publicationDate: "2026-09-12",
    isbn: "9791122073669",
    cover: null,
    description:
      "고객 문의 답변, 상세페이지 문구, 공지문, 상담 요약처럼 매장에서 반복되는 일을 AI에게 맡기는 방법을 다룬 실무서입니다.",
    category: "AI 활용",
    externalLinks: [
      {
        label: "교보문고 eBook",
        url: "https://ebook-product.kyobobook.co.kr/dig/epd/sam/E000013692295",
      },
    ],
    status: "published",
  },
  {
    slug: "vibe-coding-for-beginners",
    title: "왕초보도 바로 할 수 있는 바이브코딩",
    subtitle: null,
    authors: ["김한준", "장도균", "고아라"],
    publisher: "넥서스그룹",
    publicationDate: "2026-09-05",
    isbn: "9791122073645",
    cover: null,
    description:
      "개발 경험이 없는 창업자와 사업자가 AI와 대화하며 필요한 도구와 서비스를 직접 만들어 보는 바이브코딩 입문서입니다.",
    category: "바이브코딩",
    externalLinks: [
      {
        label: "교보문고 eBook",
        url: "https://ebook-product.kyobobook.co.kr/dig/epd/sam/E000013571116",
      },
    ],
    status: "published",
  },
  {
    slug: "ai-for-small-business",
    title: "소상공인을 위한 AI 활용법",
    subtitle: null,
    authors: ["고아라", "이가령"],
    publisher: "이새의나무",
    publicationDate: "2026-08-28",
    isbn: "9791169021289",
    cover: null,
    description:
      "인력과 시간, 예산이 부족한 소상공인이 생성형 AI를 광고 문구, SNS 게시물, 이미지·영상 제작, 고객 응대, 데이터 분석 등 매장 운영과 마케팅에 적용하도록 돕는 실전 안내서입니다.",
    category: "AI 활용",
    externalLinks: [
      {
        label: "YES24",
        url: "https://www.yes24.com/Product/Goods/196216437",
      },
    ],
    status: "published",
  },
  {
    slug: "chatgpt-book-writing",
    title: "강의안을 책으로 바꾸는 Chat GPT 책쓰기",
    subtitle: null,
    authors: ["고아라"],
    publisher: "이새의나무",
    publicationDate: "2026-08-28",
    isbn: "9791169021265",
    cover: null,
    description:
      "강의 자료를 책으로 정리하고 싶은 강사를 위한 책쓰기 실전서입니다. 강의안을 책의 재료로 다시 보는 법부터 목차 설계, ChatGPT를 활용한 초안 작성과 퇴고, 완성된 책의 활용까지 다룹니다.",
    category: "책쓰기",
    externalLinks: [
      {
        label: "교보문고 eBook",
        url: "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013490181",
      },
    ],
    status: "published",
  },
  {
    slug: "why-ai-recommends-the-shop-next-door",
    title: "AI는 왜 옆 가게만 추천할까?",
    subtitle: null,
    authors: ["고아라"],
    publisher: "나비의활주로",
    publicationDate: "2026-08-20",
    isbn: "9791124401293",
    cover: null,
    description:
      "AI가 선택하는 브랜드의 조건과 GEO(생성형 엔진 최적화) 전략을 실제 사례와 함께 정리한 책입니다.",
    category: "AI 검색 · GEO",
    externalLinks: [
      {
        label: "YES24",
        url: "https://www.yes24.com/Product/Goods/195080837",
      },
    ],
    status: "published",
  },
  {
    slug: "fashion-shopping-mall-with-ai",
    title: "AI로 패션 쇼핑몰 창업하기",
    subtitle: null,
    authors: ["고아라", "류은경"],
    publisher: "넥서스그룹",
    publicationDate: "2026-08-17",
    isbn: "9791122073614",
    cover: null,
    description:
      "아이디어부터 브랜드 론칭까지, 고객·상품·소싱·원가·상세페이지·판매채널·운영과 세무·정산·정부지원사업까지 패션 쇼핑몰 창업의 전 과정을 정리한 책입니다.",
    category: "쇼핑몰 창업",
    externalLinks: [
      {
        label: "YES24",
        url: "https://www.yes24.com/Product/Goods/195250652",
      },
    ],
    status: "published",
  },
  {
    slug: "naver-shopping-ai-agent",
    title: "네이버 쇼핑 AI 에이전트",
    subtitle: null,
    authors: ["고아라"],
    publisher: "도서출판 등",
    publicationDate: "2026-08-15",
    isbn: "9791199962958",
    cover: null,
    description:
      "검색에서 추천으로 바뀌는 네이버 커머스에서 Agent N이 고객의 질문을 이해하고 구매·예약·방문으로 연결하는 과정을 스마트스토어·블로그·플레이스 등 채널별로 풀어낸 책입니다.",
    category: "AI 이커머스",
    externalLinks: [
      {
        label: "YES24",
        url: "https://www.yes24.com/Product/Goods/195485541",
      },
    ],
    status: "published",
  },
  {
    slug: "food-shopping-mall-with-chatgpt",
    title: "챗GPT로 식품쇼핑몰 창업하기",
    subtitle: null,
    authors: ["고아라", "정유진"],
    publisher: "도서출판 등",
    publicationDate: "2026-07-20",
    isbn: "9791199962927",
    cover: null,
    description:
      "컴퓨터나 마케팅에 익숙하지 않은 예비 창업자도 ChatGPT를 활용해 온라인 식품 쇼핑몰을 시작할 수 있도록 안내하는 창업서입니다.",
    category: "쇼핑몰 창업",
    externalLinks: [
      {
        label: "YES24",
        url: "https://www.yes24.com/Product/Goods/194853683",
      },
    ],
    status: "published",
  },
  {
    slug: "ai-fashion-brand-marketing",
    title: "AI 패션 브랜드 마케팅 입문",
    subtitle: null,
    authors: [],
    publisher: null,
    publicationDate: null,
    isbn: null,
    cover: null,
    description: null,
    category: "강의",
    externalLinks: [
      {
        label: "AI 이커머스 아카데미",
        url: "https://hkspmh.liveklass.com/",
      },
    ],
    status: "published",
  },
];
