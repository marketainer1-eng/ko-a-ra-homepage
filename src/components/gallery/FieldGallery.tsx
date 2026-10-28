import Image from "next/image";
import type { FieldPhoto } from "@/content/field";
import { cn } from "@/lib/cn";

/**
 * 강의 현장 사진 그리드.
 * 사진 아래에 기관 · 과정 · 연도를 캡션으로 표시한다.
 */
export function FieldGallery({
  photos,
  inverse = false,
  className,
}: {
  photos: readonly FieldPhoto[];
  inverse?: boolean;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4",
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
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
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
                {photo.place}
              </span>
              <span
                className={cn(
                  "text-[0.8125rem] leading-relaxed break-keep",
                  inverse ? "text-white/65" : "text-charcoal/65",
                )}
              >
                {photo.program} · {photo.year}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
