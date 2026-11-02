import type { Project } from "@/content/types";

/**
 * PROJECTS 콘텐츠.
 *
 * 확인된 운영 계획과 사실만 기록한다. 아직 열리지 않은 행사·출간·시상 등의
 * 성과는 임의로 작성하지 않고, 해당 섹션은 null(내용 준비 중)로 둔다.
 *
 * 섹션 본문의 줄바꿈 문자는 화면에서 그대로 줄바꿈으로 표시된다.
 */
export const projects: Project[] = [
  {
    slug: "ai-ecommerce-conference",
    title: "상반기 AI E-commerce Conference",
    summary:
      "지금 이커머스 현장에서 AI가 어떻게 활용되고 있고, 무엇을 실제로 적용할 수 있는지를 " +
      "조사·사례·솔루션으로 정리하는 AI 이커머스학과의 상반기 연례 컨퍼런스입니다.",
    status: "published",
    phase: "ANNUAL · 상반기",
    sections: {
      why:
        "행사 자체보다 매년 축적되는 산업 지식과 결과물을 만드는 것이 목적입니다.\n" +
        "산업·소비자 조사와 기업·브랜드 현장 파악으로 관찰하고, 사례·인터뷰·리포트로 기록해 " +
        "AI 이커머스 산업의 현재를 남깁니다.",
      problem:
        "지금 이커머스 현장에서 AI는 어떻게 활용되고 있고, 무엇을 실제로 적용할 수 있는지를 묻습니다.",
      build:
        "RESEARCH | 리서치 기관과 함께하는 산업·소비자 조사와 산업군별 주요 지표 발표\n" +
        "CASE | 기업·브랜드의 실제 AI 활용 사례와 전문가 인터뷰\n" +
        "SOLUTION | 이커머스에 도움이 되는 AI 서비스 솔루션 소개·시연\n" +
        "AWARDS | 조사 결과를 바탕으로 한 산업군별 신뢰 브랜드 발굴·시상\n" +
        "조사·사례·인터뷰·솔루션 결과는 산업 리포트·간행물·책으로 출간합니다.\n" +
        "원우들은 산업·소비자 조사, 기업·전문가 인터뷰, 브랜드·사례 발굴, AI 솔루션 조사, " +
        "프로젝트 기획·운영에 참여자이자 공동 생산자로 함께합니다.",
      result: null,
      next:
        "컨퍼런스의 조사와 사례는 하반기 AI Media Commerce Trend Forum의 트렌드 연구로 이어지고, " +
        "다음 해 산업 조사에서 전망을 다시 확인합니다. " +
        "참여한 결과가 각자의 이름으로 남도록 연구 → 출판 → 발표 → 콘텐츠 → 커리어로 연결합니다.",
    },
  },
  {
    slug: "ai-media-commerce-trend-forum",
    title: "하반기 AI Media Commerce Trend Forum",
    summary:
      "지금 나타나는 변화가 다음 해 어디로 이어질지를 연구하고 발표하는 트렌드 포럼으로, " +
      "매년 『AI 미디어 커머스 트렌드』 출간과 연계합니다.",
    status: "published",
    phase: "ANNUAL · 하반기",
    sections: {
      why:
        "행사 자체보다 매년 축적되는 산업 지식과 결과물을 만드는 것이 목적입니다.\n" +
        "다음 해 핵심 변화와 트렌드를 연구해 전망하고, 다음 해 산업 조사에서 그 전망을 다시 확인하며 " +
        "산업 지식 자산을 쌓아 갑니다.",
      problem: "지금 나타나는 변화는 다음 해 어디로 이어질 것인지를 묻습니다.",
      build:
        "TREND | 다음 해를 이끌 핵심 트렌드 연구·발표\n" +
        "INSIGHT | 변화의 원인과 산업·소비자 영향 해석\n" +
        "FORECAST | 다음 해 전망과 기업·개인의 대응 제안\n" +
        "DISCUSSION | 저자·전문가 발표와 패널토크·Q&A\n" +
        "매년 『AI 미디어 커머스 트렌드』 출간과 연계합니다.\n" +
        "원우들은 트렌드 연구·원고 집필, 발표·패널, 칼럼·콘텐츠 제작, 프로젝트 기획·운영에 " +
        "참여자이자 공동 생산자로 함께합니다.",
      result:
        "출간 | 『AI 미디어 커머스 트렌드 2027』(나비의활주로) — " +
        "고아라·김한준·장도균·정유진·백종우·배현진 공저. 하반기 트렌드 연구의 결과를 책으로 펴냈습니다.\n" +
        "포럼 | 2026년 10월 24일, 『AI 미디어 커머스 트렌드 2027』 출간 기념 포럼 — " +
        "저자들이 2027년 트렌드를 발표하고, 사인회와 함께 독자·업계 관계자를 만났습니다.",
      next:
        "포럼의 전망은 다음 해 상반기 AI E-commerce Conference의 산업 조사에서 다시 확인합니다. " +
        "연구 → 책·간행물 → 컨퍼런스 → 포럼 → 콘텐츠 → 다시 연구로 이어지는 순환을 통해, " +
        "원우들의 전문성과 성장이 학과의 지식 자산과 함께 축적되도록 합니다.",
    },
  },
];

/** 프로젝트 상세 서술 섹션의 표시 순서와 라벨 */
export const projectSectionOrder = [
  { key: "why", label: "WHY", ko: "왜 시작했는가" },
  { key: "problem", label: "PROBLEM", ko: "어떤 문제를 다루는가" },
  { key: "build", label: "BUILD", ko: "무엇을 만들었는가" },
  { key: "result", label: "RESULT", ko: "무엇이 달라졌는가" },
  { key: "next", label: "NEXT", ko: "다음은 무엇인가" },
] as const;

export type ProjectSectionKey = (typeof projectSectionOrder)[number]["key"];
