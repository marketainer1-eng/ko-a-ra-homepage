import { ProjectCard } from "@/components/cards/ProjectCard";
import { ActionLink, ArrowLink } from "@/components/ui/ActionLink";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getPublishedProjects } from "@/lib/content";
import { routes } from "@/lib/routes";

export function ProjectsSection() {
  const projects = getPublishedProjects();

  return (
    <Section id="projects" tone="white">
      <SectionHeader
        eyebrow="BUILD"
        title="PROJECTS"
        lead="만들고 있는 것과 만들어 온 것을 WHY · PROBLEM · BUILD · RESULT · NEXT 구조로 기록합니다."
      />

      <div className="mt-14">
        {projects.length > 0 ? (
          <>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ArrowLink href={routes.projects}>ALL PROJECTS</ArrowLink>
            </div>
          </>
        ) : (
          <EmptyState
            title="준비 중"
            description="공개할 수 있는 프로젝트 정보가 확정되면 이 영역에 표시됩니다."
            action={
              <ActionLink href={routes.projects} variant="outline">
                PROJECTS
              </ActionLink>
            }
          />
        )}
      </div>
    </Section>
  );
}
