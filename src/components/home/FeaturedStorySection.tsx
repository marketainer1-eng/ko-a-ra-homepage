import { StoryCard } from "@/components/cards/StoryCard";
import { ArrowLink } from "@/components/ui/ActionLink";
import { DraftNote } from "@/components/ui/DraftNote";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getFeaturedStories } from "@/lib/content";
import { routes } from "@/lib/routes";

export function FeaturedStorySection() {
  const stories = getFeaturedStories();

  return (
    <Section id="story" tone="white">
      <SectionHeader
        eyebrow="STORY"
        title="FEATURED STORY"
        lead="지금의 방향에 이르기까지의 기록입니다."
      />

      <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {stories.map((story, index) => (
          <li key={story.slug}>
            <StoryCard story={story} index={index} />
          </li>
        ))}
      </ul>

      <DraftNote className="mt-12">
        세 편의 글은 제목과 URL만 확정된 상태이며, 원고는 준비 중입니다.
      </DraftNote>

      <div className="mt-8">
        <ArrowLink href={routes.story}>ALL STORIES</ArrowLink>
      </div>
    </Section>
  );
}
