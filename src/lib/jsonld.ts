import { person, type EntityRelation } from "@/config/person";
import { siteConfig } from "@/config/site";
import type { Book, Project, Story } from "@/content/types";
import { absoluteUrl } from "@/lib/metadata";
import { bookPath, projectPath, storyPath } from "@/lib/routes";

/**
 * 구조화 데이터(JSON-LD).
 *
 * 원칙: **검증되지 않은 사실은 Schema에 넣지 않는다.**
 * - 기관 관계(affiliation/worksFor/founder/memberOf)와 sameAs 는
 *   verified 플래그가 true 인 항목만 출력한다.
 * - draft 콘텐츠는 Schema를 출력하지 않는다.
 */

export type JsonLdObject = Record<string, unknown>;

export const PERSON_ID = `${siteConfig.url}/#person`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

function organizationRefs(
  relations: readonly EntityRelation[],
): JsonLdObject[] {
  return relations
    .filter((relation) => relation.verified && relation.name)
    .map((relation) => ({
      "@type": "Organization",
      name: relation.name,
      ...(relation.url ? { url: relation.url } : {}),
    }));
}

function omitEmpty(value: JsonLdObject): JsonLdObject {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === null || entry === undefined) return false;
      if (Array.isArray(entry) && entry.length === 0) return false;
      return true;
    }),
  );
}

/** Person — 사이트 전역 엔티티 */
export function personSchema(): JsonLdObject {
  const knowsAbout = Array.from(
    new Set([
      person.primaryExpertise,
      ...person.background,
      ...person.currentAreas,
    ]),
  );

  return omitEmpty({
    "@type": "Person",
    "@id": PERSON_ID,
    name: person.name,
    alternateName: person.alternateName,
    description: person.intro,
    // 제공된 공식 직함(문자열)만 출력한다.
    // 기관 관계 객체는 공식 URL/사실관계 확인 후 verified 처리되면 자동으로 포함된다.
    jobTitle: person.officialRole.full,
    knowsAbout,
    url: absoluteUrl("/"),
    mainEntityOfPage: absoluteUrl("/about"),
    sameAs: person.sameAs,
    affiliation: organizationRefs(person.affiliation),
    worksFor: organizationRefs(person.worksFor),
    memberOf: organizationRefs(person.memberOf),
    founder: organizationRefs(person.founder),
  });
}

/** WebSite — 사이트 엔티티 */
export function webSiteSchema(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: `${siteConfig.nameKo}(${siteConfig.name}) 공식 홈페이지`,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "ko-KR",
    publisher: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };
}

/** ProfilePage — ABOUT 페이지 */
export function profilePageSchema(): JsonLdObject {
  return {
    "@type": "ProfilePage",
    "@id": `${absoluteUrl("/about")}#profilepage`,
    url: absoluteUrl("/about"),
    name: `ABOUT — ${siteConfig.nameKo}(${siteConfig.name})`,
    inLanguage: "ko-KR",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
  };
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

/** BreadcrumbList */
export function breadcrumbSchema(entries: BreadcrumbEntry[]): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(entry.path),
    })),
  };
}

/**
 * Book — published 상태이고 실제 정보가 있는 경우에만 출력한다.
 * (제목만 있는 placeholder 는 Schema로 내보내지 않는다)
 */
export function bookSchema(book: Book): JsonLdObject | null {
  if (book.status !== "published") return null;

  return omitEmpty({
    "@type": "Book",
    "@id": `${absoluteUrl(bookPath(book.slug))}#book`,
    name: book.title,
    url: absoluteUrl(bookPath(book.slug)),
    author:
      book.authors.length > 0
        ? book.authors.map((name) => ({ "@type": "Person", name }))
        : [{ "@id": PERSON_ID }],
    publisher: book.publisher
      ? { "@type": "Organization", name: book.publisher }
      : null,
    datePublished: book.publicationDate,
    isbn: book.isbn,
    description: book.description,
    inLanguage: "ko-KR",
  });
}

/** Article — published 상태의 STORY 에만 출력한다. */
export function storySchema(story: Story): JsonLdObject | null {
  if (story.status !== "published") return null;

  return omitEmpty({
    "@type": "Article",
    "@id": `${absoluteUrl(storyPath(story.slug))}#article`,
    headline: story.title,
    url: absoluteUrl(storyPath(story.slug)),
    author: { "@id": PERSON_ID },
    datePublished: story.publishedAt,
    dateModified: story.updatedAt ?? story.publishedAt,
    inLanguage: "ko-KR",
    isPartOf: { "@id": WEBSITE_ID },
  });
}

/** CreativeWork — published 상태의 PROJECT 에만 출력한다. */
export function projectSchema(project: Project): JsonLdObject | null {
  if (project.status !== "published") return null;

  return omitEmpty({
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(projectPath(project.slug))}#project`,
    name: project.title,
    url: absoluteUrl(projectPath(project.slug)),
    creator: { "@id": PERSON_ID },
    description: project.summary,
    inLanguage: "ko-KR",
  });
}

/** 여러 스키마를 하나의 @graph 문서로 합친다. */
export function jsonLdGraph(nodes: (JsonLdObject | null)[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter((node): node is JsonLdObject => node !== null),
  };
}
