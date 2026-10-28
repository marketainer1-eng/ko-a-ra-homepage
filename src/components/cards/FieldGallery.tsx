import Image from "next/image";
import type { FieldPhoto } from "@/content/field";
import { cn } from "@/lib/cn";

/**
 * 강의 현장 사진 갤러리.
 *
 * ABOUT(3열)과 HOME PAST 섹션(4열)에서 함께 사용한다.
 * 사진은 4:3 비율로 잘라 보여주고, 캡션은 "현장명 / 과정 · 연도" 순으로 표기한다.
 */
export function FieldGallery({
  photos,
  columns = 3,
  inverse = false,
  className,
}: {
  photos: readonly FieldPhoto[];
  /** lg 이상에서의 열 수 */
  columns?: 3 | 4;
  /** 어두운 배경 위에 놓일 때 */
  inverse?: boolean;
  className?: string;
}) {
  const sizes =
    columns === 4
      ? "(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
      : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw";

  return (
    <ul
      className={cn(
        "grid gap-x-6 gap-y-8 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
        className,
      )}
    >
      {photos.map((photo) => (
        <li key={photo.src}>
          <figure>
            <div className="bg-charcoal/5 relative aspect-[4/3] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex flex-col gap-1">
              <span
                className={cn(
                  "font-serif text-[0.9375rem] leading-snug font-medium break-keep",
                  inverse ? "text-white" : "text-navy",
                )}
              >
                {photo.title}
              </span>
              <span
                className={cn(
                  "text-[0.8125rem] leading-relaxed break-keep",
                  inverse ? "text-white/60" : "text-charcoal/65",
                )}
              >
                {photo.caption}
                {" · "}
                {photo.year}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
