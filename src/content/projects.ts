import type { Project } from "@/content/types";

/**
 * PROJECTS 콘텐츠.
 *
 * 실제 프로젝트 내용과 성과는 제공되지 않았으므로 임의로 작성하지 않는다.
 *
 * 아래 항목은 상세 페이지 템플릿(WHY / PROBLEM / BUILD / RESULT / NEXT)을
 * 확인하기 위한 **placeholder** 이며 status: "draft" 이므로
 * noindex + sitemap 제외로 처리된다.
 * Phase 2에서 실제 데이터로 교체하거나 배열에서 삭제하면 된다.
 */
export const projects: Project[] = [
  {
    slug: "placeholder-project",
    title: "PLACEHOLDER — 프로젝트 정보 준비 중",
    summary: "프로젝트 내용은 Phase 2에서 등록됩니다.",
    status: "draft",
    phase: null,
    sections: {
      why: null,
      problem: null,
      build: null,
      result: null,
      next: null,
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
