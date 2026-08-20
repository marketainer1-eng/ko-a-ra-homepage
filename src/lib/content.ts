import { books } from "@/content/books";
import { mediaChannels, followChannelKeys } from "@/content/media";
import { projects } from "@/content/projects";
import { featuredStorySlugs, stories } from "@/content/stories";
import type {
  Book,
  ContentStatus,
  MediaChannel,
  Project,
  Story,
} from "@/content/types";

/**
 * 콘텐츠 접근 계층.
 *
 * 페이지 컴포넌트는 콘텐츠 파일을 직접 import 하지 않고 이 함수들만 사용한다.
 * 향후 CMS 연결 시 이 파일의 구현만 교체하면 된다.
 */

function isPublished<T extends { status: ContentStatus }>(item: T): boolean {
  return item.status === "published";
}

/* ----------------------------- STORY ----------------------------- */

export function getStories(): Story[] {
  return stories;
}

export function getPublishedStories(): Story[] {
  return stories.filter(isPublished);
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getFeaturedStories(): Story[] {
  return featuredStorySlugs
    .map((slug) => getStoryBySlug(slug))
    .filter((story): story is Story => Boolean(story));
}

/* ------------------------------ BOOK ------------------------------ */

export function getBooks(): Book[] {
  return books;
}

export function getPublishedBooks(): Book[] {
  return books.filter(isPublished);
}

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

/* ---------------------------- PROJECT ----------------------------- */

export function getProjects(): Project[] {
  return projects;
}

export function getPublishedProjects(): Project[] {
  return projects.filter(isPublished);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/* ----------------------------- MEDIA ------------------------------ */

export function getMediaChannels(): MediaChannel[] {
  return mediaChannels;
}

export function getFollowChannels(): MediaChannel[] {
  return followChannelKeys
    .map((key) => mediaChannels.find((channel) => channel.key === key))
    .filter((channel): channel is MediaChannel => Boolean(channel));
}

/** URL이 확인된 채널만 실제 링크로 렌더링한다. */
export function isLinkable(channel: {
  url: string | null;
  verified: boolean;
}): channel is { url: string; verified: true } {
  return channel.verified && typeof channel.url === "string";
}
