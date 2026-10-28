import { FieldGallery } from "@/components/cards/FieldGallery";
import { ArrowLink } from "@/components/ui/ActionLink";
import { fieldPhotos, HOME_FIELD_PHOTO_COUNT } from "@/content/field";
import { routes } from "@/lib/routes";

/**
 * HOME — IN THE FIELD · 강의 현장.
 *
 * PAST 섹션 안에서 타임라인 바로 다음, PRESENT 로 이어지는 연결 문장 앞에 놓인다.
 * (독립 섹션이 아니라 PastSection 내부 블록이다.)
 * 사진 4장만 보여주고 나머지는 ABOUT 의 강의 현장(#about-field)으로 연결한다.
 */
export function FieldHighlights() {
  return (
    <div className="mt-14 lg:mt-20">
      <p className="label-caps text-brand">IN THE FIELD · 강의 현장</p>
      <FieldGallery
        photos={fieldPhotos.slice(0, HOME_FIELD_PHOTO_COUNT)}
        columns={4}
        className="mt-6"
      />
      <div className="mt-8">
        <ArrowLink href={`${routes.about}#about-field`}>
          MORE IN ABOUT
        </ArrowLink>
      </div>
    </div>
  );
}
