/**
 * 사이트 전역 설정.
 *
 * 브랜드 영문 표기는 사용자/검색엔진에 노출되는 모든 영역에서
 * 반드시 이 상수(`BRAND_NAME_EN`)를 통해 사용한다.
 * 하드코딩된 다른 표기(KO ARA, KOARA, GO A RA 등)를 쓰지 않는다.
 * 저장소명·패키지명·slug 같은 기술 식별자만 예외로 둔다.
 */
export const BRAND_NAME_EN = "KO A RA" as const;

/** 사용자 노출용 브랜드 한글 표기 */
export const BRAND_NAME_KO = "고아라" as const;

/** 화면·metadata에서 함께 노출할 때 사용하는 결합 표기 */
export const BRAND_NAME_COMBINED =
  `${BRAND_NAME_KO}(${BRAND_NAME_EN})` as const;

function stripTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

const LOCAL_FALLBACK_URL = "http://localhost:3000";

/**
 * Netlify 가 빌드 시 주입하는 URL.
 *
 * - Production 배포(CONTEXT=production): URL (사이트 대표 주소)
 * - Deploy Preview / Branch deploy: DEPLOY_PRIME_URL (해당 배포의 주소)
 */
function resolveNetlifyUrl(): string | null {
  const primaryUrl = process.env.URL?.trim();
  const deployUrl = process.env.DEPLOY_PRIME_URL?.trim();

  if (process.env.CONTEXT === "production") {
    return primaryUrl || deployUrl || null;
  }
  return deployUrl || primaryUrl || null;
}

/**
 * 배포 URL 해석 순서.
 *
 * 1. NEXT_PUBLIC_SITE_URL (직접 지정한 확정 도메인)
 * 2. Netlify 자동 주입 값 (Production → URL, Preview → DEPLOY_PRIME_URL)
 * 3. 개발 환경 fallback (localhost)
 *
 * canonical · Open Graph · sitemap.xml · robots.txt · JSON-LD 는 모두
 * 이 값(siteConfig.url) 하나를 기준으로 생성한다.
 * 모든 페이지가 정적 생성되므로 이 값은 빌드 시점에 확정된다.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return stripTrailingSlash(explicit);
  }

  // 브라우저 번들에서는 NEXT_PUBLIC_ 이외의 값을 읽을 수 없다.
  // 클라이언트 컴포넌트는 url 을 사용하지 않으므로 여기서 멈춘다.
  if (typeof window !== "undefined") {
    return LOCAL_FALLBACK_URL;
  }

  const netlifyUrl = resolveNetlifyUrl();
  if (netlifyUrl) {
    return stripTrailingSlash(netlifyUrl);
  }

  // localhost fallback 은 개발 환경에서만 허용한다.
  // 배포 빌드(Netlify/CI)에서 기준 URL 을 알 수 없으면 빌드를 중단한다.
  if (process.env.NETLIFY === "true" || process.env.CI) {
    throw new Error(
      "[site] 배포 URL 을 확인할 수 없습니다. NEXT_PUBLIC_SITE_URL 을 설정하세요.",
    );
  }

  if (process.env.NODE_ENV === "production") {
    console.warn(
      "[site] NEXT_PUBLIC_SITE_URL 이 설정되지 않아 localhost 로 폴백합니다. " +
        "(로컬 빌드 확인용. 배포 환경에서는 허용되지 않습니다.)",
    );
  }

  return LOCAL_FALLBACK_URL;
}

export const siteConfig = {
  /** 사용자 노출용 브랜드 영문명 */
  name: BRAND_NAME_EN,
  /** 사용자 노출용 브랜드 한글명 */
  nameKo: BRAND_NAME_KO,
  /** HOME 기본 title */
  title: `${BRAND_NAME_COMBINED} | AI 이커머스 전문가`,
  /** 하위 페이지 title 템플릿 */
  titleTemplate: `%s | ${BRAND_NAME_COMBINED}`,
  /** HOME 기본 description */
  description:
    `AI 이커머스 전문가 ${BRAND_NAME_COMBINED}의 공식 홈페이지. ` +
    "쇼핑몰 창업과 이커머스 현장에서 시작해 AI 검색·추천·쇼핑 에이전트·GEO·AI 마케팅·Vertical AI로 " +
    "확장해온 전문성과 프로젝트, 저서, 미디어 활동, 그리고 앞으로의 비전을 소개합니다.",
  /** 기본 로케일 (html lang 속성) */
  locale: "ko",
  /** Open Graph 로케일 */
  ogLocale: "ko_KR",
  /** 배포 URL (환경변수 기반) */
  url: resolveSiteUrl(),
} as const;

export type SiteConfig = typeof siteConfig;
