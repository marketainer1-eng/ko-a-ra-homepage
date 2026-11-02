/**
 * Twitter/X 카드 이미지는 Open Graph 이미지와 동일한 렌더링을 사용한다.
 */
export { default, alt, size, contentType } from "./opengraph-image";

/** 빌드 때 한 번만 생성한다 (정적 HTML 내보내기 지원) */
export const dynamic = "force-static";
