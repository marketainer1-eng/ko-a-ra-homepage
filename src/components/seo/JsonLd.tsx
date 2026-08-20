import type { JsonLdObject } from "@/lib/jsonld";

/**
 * JSON-LD 삽입 컴포넌트.
 * `<` 를 이스케이프해 스크립트 조기 종료를 방지한다.
 */
export function JsonLd({ data }: { data: JsonLdObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
