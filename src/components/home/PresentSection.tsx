import { Section, SectionHeader } from "@/components/ui/Section";
import { person } from "@/config/person";
import { expertiseAreas, presentDescription } from "@/content/narrative";

export function PresentSection() {
  return (
    <Section id="present" tone="navy">
      <SectionHeader eyebrow="PRESENT" title="WHERE I AM" inverse />

      <p className="font-display text-brand-soft mt-12 text-[clamp(1.5rem,6.4vw,4.5rem)] leading-[1.05] font-semibold tracking-[0.1em] uppercase">
        {person.primaryExpertiseEn}
      </p>

      <p className="mt-8 max-w-[46rem] text-[0.975rem] leading-[1.9] break-keep text-white/75 sm:mt-10 sm:text-base">
        {presentDescription}
      </p>

      <h3 className="label-caps text-brand-soft/80 mt-14 sm:mt-16">전문영역</h3>
      <ol className="mt-5 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseAreas.map((area) => (
          <li
            key={area.no}
            className="bg-navy flex flex-col gap-3 p-6 transition-colors hover:bg-[#0c2242] sm:gap-4 sm:p-8"
          >
            <p className="label-caps text-brand-soft">{area.no}</p>
            <h4 className="font-display text-sm leading-snug font-semibold tracking-[0.12em] text-white uppercase">
              {area.title}
            </h4>
            <p className="text-[0.875rem] leading-[1.8] break-keep text-white/60">
              {area.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
