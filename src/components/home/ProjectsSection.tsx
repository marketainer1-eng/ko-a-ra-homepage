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
        lead="교육, 연구, 산업, 출판과 전문가 협업을 실제 프로젝트로 연결합니다."
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
            description="프로젝트 내용은 정리하고 있으며, 준비되는 대로 이 영역에 표시됩니다."
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
