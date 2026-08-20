import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { DraftNote } from "@/components/ui/DraftNote";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { projectSectionOrder } from "@/content/projects";
import { getProjects } from "@/lib/content";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

const breadcrumbs = [
  { name: "HOME", path: routes.home },
  { name: "PROJECTS", path: routes.projects },
];

export const metadata: Metadata = buildMetadata({
  title: "PROJECTS",
  description:
    "고아라(KO A RA)가 만들고 있는 프로젝트. 각 프로젝트는 WHY · PROBLEM · BUILD · RESULT · NEXT 구조로 기록합니다.",
  path: routes.projects,
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <PageHeader
        eyebrow="BUILD"
        title="PROJECTS"
        titleKo="무엇을 만들고 있는가"
        lead="공개할 수 있는 사실만 기록하고, 성과는 확인된 범위 안에서만 서술합니다."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-ivory py-20 sm:py-24 lg:py-28">
        <Container>
          {projects.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="등록된 프로젝트 없음"
              description="공개 가능한 프로젝트 정보가 확정되면 이 목록에 표시됩니다."
            />
          )}

          <div className="border-charcoal/12 mt-16 border-t pt-10">
            <p className="label-caps text-charcoal/70">
              프로젝트 상세 서술 구조
            </p>
            <ol className="mt-6 flex flex-wrap gap-2">
              {projectSectionOrder.map((section, index) => (
                <li key={section.key} className="flex items-center gap-2">
                  <span className="border-charcoal/15 text-navy inline-flex min-h-11 items-center gap-2 border bg-white px-4 py-2 text-sm">
                    <span className="label-caps text-brand">
                      {section.label}
                    </span>
                    <span className="text-charcoal/65">{section.ko}</span>
                  </span>
                  {index < projectSectionOrder.length - 1 ? (
                    <span aria-hidden="true" className="text-brand/50">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <DraftNote className="mt-14">
            현재 목록은 상세 페이지 구조 확인을 위한 placeholder 이며 draft
            상태입니다. draft 프로젝트는 noindex 처리되고 sitemap 에서
            제외됩니다.
          </DraftNote>
        </Container>
      </section>

      <JsonLd data={jsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
    </>
  );
}
