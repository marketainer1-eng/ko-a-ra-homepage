import { EntityItem } from "@/components/cards/EntityItem";
import { ArrowLink } from "@/components/ui/ActionLink";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { currentEcosystem } from "@/content/narrative";
import { routes } from "@/lib/routes";

/**
 * CURRENT ECOSYSTEM.
 *
 * 현재 어떤 역할과 영역에서 활동하는지를 보여준다.
 * 각 기관은 독립된 Entity 이므로 하위 브랜드처럼 묶지 않고,
 * 역할 영역별로 기관명과 실제 관계만 나란히 표시한다.
 */
export function EcosystemSection() {
  return (
    <Section id="ecosystem" tone="white">
      <SectionHeader
        eyebrow="NOW"
        title="CURRENT ECOSYSTEM"
        lead={`현재 활동하고 있는 역할과 영역입니다. 각 기관은 독립된 조직이며, 여기에는 ${siteConfig.name}와의 관계만 표시합니다.`}
      />

      <dl className="border-charcoal/12 bg-charcoal/12 mt-12 grid gap-px border sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {currentEcosystem.map((group) => (
          <div
            key={group.key}
            className="flex flex-col gap-5 bg-white p-6 sm:p-7"
          >
            <dt>
              <span className="font-display text-brand block text-xs font-semibold tracking-[0.16em] uppercase">
                {group.label}
              </span>
              <span className="text-charcoal/62 mt-2 block text-[0.8125rem] break-keep">
                {group.caption}
              </span>
            </dt>
            <dd>
              {group.kind === "organization" ? (
                <ul className="flex flex-col gap-4">
                  {group.entries.map((entry) => (
                    <li key={entry.name}>
                      <EntityItem entry={entry} />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {group.entries.map((entry) => (
                    <li
                      key={entry.name}
                      className="text-navy font-serif text-base font-medium break-keep sm:text-[1.0625rem]"
                    >
                      {entry.name}
                    </li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <ArrowLink href={routes.about}>ABOUT · 기관과의 관계</ArrowLink>
      </div>
    </Section>
  );
}
