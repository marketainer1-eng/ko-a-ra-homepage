import Link from "next/link";
import type { BreadcrumbEntry } from "@/lib/jsonld";
import { cn } from "@/lib/cn";

/**
 * 시각적 breadcrumb.
 * 구조화 데이터(BreadcrumbList)는 각 페이지에서 breadcrumbSchema() 로 함께 출력한다.
 */
export function Breadcrumbs({
  items,
  inverse = false,
  className,
}: {
  items: BreadcrumbEntry[];
  inverse?: boolean;
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="label-caps flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span
                  aria-current="page"
                  className={inverse ? "text-white/60" : "text-charcoal/65"}
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className={cn(
                      "transition-colors",
                      inverse
                        ? "text-brand-soft hover:text-white"
                        : "text-brand hover:text-navy",
                    )}
                  >
                    {item.name}
                  </Link>
                  <span
                    aria-hidden="true"
                    className={inverse ? "text-white/55" : "text-charcoal/62"}
                  >
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
