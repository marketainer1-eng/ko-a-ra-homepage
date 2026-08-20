import type { MetadataRoute } from "next";
import {
  getPublishedBooks,
  getPublishedProjects,
  getPublishedStories,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";
import { bookPath, projectPath, routes, storyPath } from "@/lib/routes";

/**
 * sitemap.xml
 *
 * - 고정 페이지는 모두 포함한다.
 * - 콘텐츠 상세는 status: "published" 인 항목만 포함한다.
 *   (draft 는 noindex 이므로 sitemap 에서도 제외)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: absoluteUrl(routes.home), changeFrequency: "monthly", priority: 1 },
    {
      url: absoluteUrl(routes.story),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(routes.vision),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(routes.books),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(routes.projects),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(routes.media),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(routes.about),
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];

  const storyEntries: MetadataRoute.Sitemap = getPublishedStories().map(
    (story) => ({
      url: absoluteUrl(storyPath(story.slug)),
      lastModified: story.updatedAt ?? story.publishedAt ?? undefined,
      changeFrequency: "yearly",
      priority: 0.6,
    }),
  );

  const bookEntries: MetadataRoute.Sitemap = getPublishedBooks().map(
    (book) => ({
      url: absoluteUrl(bookPath(book.slug)),
      lastModified: book.publicationDate ?? undefined,
      changeFrequency: "yearly",
      priority: 0.6,
    }),
  );

  const projectEntries: MetadataRoute.Sitemap = getPublishedProjects().map(
    (project) => ({
      url: absoluteUrl(projectPath(project.slug)),
      changeFrequency: "yearly",
      priority: 0.6,
    }),
  );

  return [...staticEntries, ...storyEntries, ...bookEntries, ...projectEntries];
}
