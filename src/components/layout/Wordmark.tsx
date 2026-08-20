import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * KO A RA 워드마크.
 *
 * 브랜드 영문 표기는 반드시 siteConfig.name(= BRAND_NAME_EN) 를 사용한다.
 * 문자열을 직접 하드코딩하지 않는다.
 */
export function Wordmark({
  className,
  withDot = true,
}: {
  className?: string;
  withDot?: boolean;
}) {
  return (
    <span className={cn("wordmark inline-flex items-baseline", className)}>
      {siteConfig.name}
      {withDot ? (
        <span aria-hidden="true" className="text-brand ml-1">
          .
        </span>
      ) : null}
    </span>
  );
}
