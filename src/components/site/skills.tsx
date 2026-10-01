import { Code2, GraduationCap, Palette, Workflow } from "lucide-react";
import { events, skillGroups } from "@/content/portfolio";
import { Accent, Chip, Reveal, Section, SpotlightCard } from "./primitives";

const icons = { eng: Code2, ux: Palette, edu: GraduationCap, bpm: Workflow };

export function Skills() {
  return (
    <Section
      id="competencias"
      index="06"
      eyebrow="Competências & especialidades"
      title={
        <>
          Áreas de domínio <Accent>técnico e acadêmico</Accent>.
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.key];
          return (
            <SpotlightCard key={g.key} delay={(i % 2) * 0.08} className="group p-8 md:p-10">
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-forest text-ivory transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-10 text-2xl font-medium md:text-[1.75rem]">{g.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Chip key={it}>{it}</Chip>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
}

export function Events() {
  const years = [...new Set(events.map((e) => e.year))].sort((a, b) => b - a);
  return (
    <Section
      id="eventos"
      index="07"
      eyebrow="Eventos & reconhecimentos"
      title={
        <>
          Participação e <Accent>organização</Accent> de eventos acadêmicos.
        </>
      }
    >
      <Reveal className="border-t border-border">
        {years.map((year) => (
          <div
            key={year}
            className="grid gap-3 border-b border-border py-7 md:grid-cols-[200px_1fr] md:gap-10"
          >
            <p className="font-serif text-4xl italic leading-none text-gold-ink">{year}</p>
            <ul className="space-y-3">
              {events
                .filter((e) => e.year === year)
                .map((e) => (
                  <li
                    key={e.title}
                    className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2"
                  >
                    <span className="text-lg tracking-tight">{e.title}</span>
                    <Chip className="text-xs">{e.role}</Chip>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
