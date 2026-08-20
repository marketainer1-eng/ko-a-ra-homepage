import { ExpertIpDiagram } from "@/components/diagrams/ExpertIpDiagram";
import { VerticalAiDiagram } from "@/components/diagrams/VerticalAiDiagram";
import { ActionLink } from "@/components/ui/ActionLink";
import { Section, SectionHeader } from "@/components/ui/Section";
import { futureMessage } from "@/content/narrative";
import { routes } from "@/lib/routes";

export function FutureSection() {
  return (
    <Section id="future" tone="ivory">
      <SectionHeader eyebrow="FUTURE" title="WHAT I AM BUILDING" />

      <p className="text-navy mt-8 max-w-[42rem] font-serif text-[clamp(1.125rem,2.6vw,1.625rem)] leading-[1.6] break-keep">
        {futureMessage}
      </p>

      <div className="mt-16 flex flex-col gap-16 lg:mt-20 lg:gap-24">
        <article>
          <h3 className="border-charcoal/15 flex flex-wrap items-baseline gap-3 border-t pt-6">
            <span className="label-caps text-brand">A</span>
            <span className="font-display text-navy text-[clamp(1.125rem,3.4vw,1.75rem)] font-semibold tracking-[0.1em] uppercase">
              Vertical AI Ecosystem
            </span>
          </h3>
          <VerticalAiDiagram className="mt-8" />
        </article>

        <article>
          <h3 className="border-charcoal/15 flex flex-wrap items-baseline gap-3 border-t pt-6">
            <span className="label-caps text-brand">B</span>
            <span className="font-display text-navy text-[clamp(1.125rem,3.4vw,1.75rem)] font-semibold tracking-[0.1em] uppercase">
              Expert IP Ecosystem
            </span>
          </h3>
          <ExpertIpDiagram className="mt-8" />
        </article>
      </div>

      <div className="mt-16">
        <ActionLink href={routes.vision} variant="outline">
          VIEW VISION
        </ActionLink>
      </div>
    </Section>
  );
}
