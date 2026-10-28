import type { Book } from "@/content/types";

/**
 * BOOKS 콘텐츠.
 *
 * 제목·저자·출판사·출간일·ISBN 은 각 판매처(YES24, 교보문고) 상품
 * 페이지에서 확인한 정보만 기재한다. 확인되지 않은 항목은 null 로 둔다.
 * 표지 이미지는 public/books/ 에 저장되어 있다.
 */
export const books: Book[] = [
  {
    slug: "ai-media-commerce-trend-2027",
    title: "AI 미디어 커머스 트렌드 2027",
    subtitle: null,
    authors: ["고아라", "김한준", "장도균", "정유진", "백종우", "배현진"],
    publisher: "나비의활주로",
    publicationDate: "2026-10-30",
    isbn: "9791124401422",
    cover: {
      src: "/books/ai-media-commerce-trend-2027.jpg",
      alt: "『AI 미디어 커머스 트렌드 2027』 표지",
    },
    description:
      "AI가 검색하고, 비교하고, 구매하는 시대. 2027년 시장의 새로운 규칙을 10가지 키워드로 읽고, AI가 먼저 읽고 판단하는 환경에서 브랜드가 선택받는 방법과 소상공인·1인 기업의 대응 방안을 제시한다.",
    category: "AI 트렌드",
    externalLinks: [
      {
        label: "YES24",
        url: "https://www.yes24.com/Product/Goods/198929807",
      },
    ],
    status: "published",
  },
  {
    slug: "ai-recommends-next-store",
    title: "AI는 왜 옆 가게만 추천할까?",
    subtitle: null,
    authors: ["고아라"],
    publisher: "나비의활주로",
    publicationDate: "2026-08-20",
    isbn: "9791124401293",
    cover: {
      src: "/books/ai-recommends-next-store.jpg",
      alt: "『AI는 왜 옆 가게만 추천할까?』 표지",
    },
    description:
      "AI 검색 시대, AI가 선택하는 브랜드의 조건과 GEO(생성형 엔진 최적화) 전략을 실제 사례와 함께 풀어낸 책.",
    category: "AI 마케팅 · GEO",
    externalLinks: [
      {
        label: "YES24",
        url: "https://www.yes24.com/Product/Goods/195080837",
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
    cover: {
      src: "/books/naver-shopping-ai-agent.jpg",
      alt: "『네이버 쇼핑 AI 에이전트』 표지",
    },
    description:
      "검색에서 추천으로 바뀌는 네이버 커머스. Agent N이 고객의 질문을 이해하고 구매·예약·방문으로 연결하는 과정과 스마트스토어·블로그·플레이스 대응 전략을 체계적으로 정리했다.",
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
    slug: "ai-for-small-business",
    title: "소상공인을 위한 AI 활용법",
    subtitle: "로고 매뉴얼·메뉴판 이벤트 홍보 배너까지",
    authors: ["고아라", "이가령"],
    publisher: "이새의나무",
    publicationDate: "2026-08-28",
    isbn: "9791169021289",
    cover: {
      src: "/books/ai-for-small-business.jpg",
      alt: "『소상공인을 위한 AI 활용법』 표지",
    },
    description:
      "인력·시간·예산이 부족한 소상공인이 생성형 AI를 매장 운영과 마케팅에 바로 적용하도록 돕는 실전 안내서. 광고 문구와 SNS 게시물, 이미지·영상 제작, 고객 응대, 데이터 분석까지 다룬다.",
    category: "현장 AI 활용",
    externalLinks: [
      {
        label: "YES24",
        url: "https://www.yes24.com/Product/Goods/196216437",
      },
    ],
    status: "published",
  },
  {
    slug: "chatgpt-food-shopping-mall",
    title: "챗GPT로 식품쇼핑몰 창업하기",
    subtitle: null,
    authors: ["고아라", "정유진"],
    publisher: "도서출판 등",
    publicationDate: "2026-07-20",
    isbn: "9791199962927",
    cover: {
      src: "/books/chatgpt-food-shopping-mall.jpg",
      alt: "『챗GPT로 식품쇼핑몰 창업하기』 표지",
    },
    description:
      "컴퓨터와 마케팅이 막막한 예비 창업자도 AI를 활용해 온라인 식품 쇼핑몰을 시작할 수 있도록 안내하는 창업 실전서.",
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
    slug: "ai-fashion-shopping-mall",
    title: "AI로 패션 쇼핑몰 창업하기",
    subtitle:
      "아이디어부터 브랜드 론칭까지, 패션 쇼핑몰 창업의 모든 단계를 한 권에!",
    authors: ["고아라", "류은경"],
    publisher: "넥서스그룹",
    publicationDate: "2026-08-17",
    isbn: "9791122073614",
    cover: {
      src: "/books/ai-fashion-shopping-mall.jpg",
      alt: "『AI로 패션 쇼핑몰 창업하기』 표지",
    },
    description:
      "고객·상품·소싱·원가·상세페이지·판매채널·운영 기준과 세무·정산·손익·정부지원사업까지, 패션 쇼핑몰 창업의 전 과정을 48장으로 정리했다.",
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
    slug: "hire-ai-instead-of-staff",
    title: "사장님, 이제 직원 대신 AI를 채용하세요",
    subtitle: null,
    authors: ["고아라"],
    publisher: "넥서스그룹",
    publicationDate: "2026-09-12",
    isbn: "9791122073669",
    cover: {
      src: "/books/hire-ai-instead-of-staff.jpg",
      alt: "『사장님, 이제 직원 대신 AI를 채용하세요』 표지",
    },
    description:
      "ChatGPT를 써도 일이 줄지 않는 이유에서 출발해, 고객 문의 답변·상세페이지 문구·공지문·상담 요약 같은 업무를 AI에게 제대로 맡기는 방법을 안내한다.",
    category: "현장 AI 활용",
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
    cover: {
      src: "/books/vibe-coding-for-beginners.jpg",
      alt: "『왕초보도 바로 할 수 있는 바이브코딩』 표지",
    },
    description:
      "개발을 몰라도 아이디어를 직접 서비스로 만들 수 있도록, AI와 함께하는 바이브코딩을 왕초보 눈높이에서 안내한다.",
    category: "AI 활용",
    externalLinks: [
      {
        label: "교보문고 eBook",
        url: "https://ebook-product.kyobobook.co.kr/dig/epd/sam/E000013571116",
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
    category: null,
    externalLinks: [
      {
        label: "AI 이커머스 아카데미",
        url: "https://hkspmh.liveklass.com/",
      },
    ],
    status: "published",
  },
  {
    slug: "chatgpt-book-writing-from-lectures",
    title: "강의안을 책으로 바꾸는 Chat GPT 책쓰기",
    subtitle: null,
    authors: ["고아라"],
    publisher: "이새의나무",
    publicationDate: "2026-08-28",
    isbn: "9791169021265",
    cover: {
      src: "/books/chatgpt-book-writing-from-lectures.jpg",
      alt: "『강의안을 책으로 바꾸는 Chat GPT 책쓰기』 표지",
    },
    description:
      "강의 자료는 많지만 책으로 정리하지 못한 강사를 위한 책쓰기 실전서. 강의안·수강생 질문·사례를 재료로 목차를 설계하고, ChatGPT로 초안을 쓰고 퇴고해 강의·컨설팅·브랜딩으로 연결하는 과정을 단계별로 안내한다.",
    category: "책쓰기 · Expert IP",
    externalLinks: [
      {
        label: "교보문고 eBook",
        url: "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013490181",
      },
    ],
    status: "published",
  },
];
