/**
 * 사이트 URL 구조와 상단 내비게이션 정의.
 *
 * URL 구조가 바뀌면 이 파일만 수정하고,
 * 필요한 경우 next.config.ts 의 redirects() 에 301 규칙을 추가한다.
 */

export interface NavItem {
  /** 화면 노출 라벨 (영문 대문자) */
  label: string;
  href: string;
}

export const routes = {
  home: "/",
  story: "/story",
  vision: "/vision",
  books: "/books",
  projects: "/projects",
  media: "/media",
  about: "/about",
} as const;

/** 상단 메뉴 (JOURNAL/블로그는 만들지 않는다) */
export const mainNav: NavItem[] = [
  { label: "HOME", href: routes.home },
  { label: "STORY", href: routes.story },
  { label: "VISION", href: routes.vision },
  { label: "BOOKS", href: routes.books },
  { label: "PROJECTS", href: routes.projects },
  { label: "MEDIA", href: routes.media },
  { label: "ABOUT", href: routes.about },
];

export function storyPath(slug: string): string {
  return `${routes.story}/${slug}`;
}

export function bookPath(slug: string): string {
  return `${routes.books}/${slug}`;
}

export function projectPath(slug: string): string {
  return `${routes.projects}/${slug}`;
}

/** 현재 경로가 해당 내비게이션 항목에 속하는지 판단한다. */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === routes.home) {
    return pathname === routes.home;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
