import { BookOpen, GraduationCap, Lightbulb, ShieldCheck } from "lucide-react";
import { pedagogy, teaching } from "@/content/portfolio";
import { Accent, Reveal, Section, SpotlightCard } from "./primitives";

export function Teaching() {
  const [featured, ...others] = teaching;
  const icons = [ShieldCheck, BookOpen];

  return (
    <Section
      id="docencia"
      index="02"
      eyebrow="Experiência docente"
      title={
        <>
          Formando profissionais na <Accent>graduação</Accent> e na pós-graduação.
        </>
      }
      intro="Disciplinas de Engenharia de Software e Sistemas de Informação com foco em UX/UI, IHC, modelagem e desenvolvimento seguro."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-forest)] p-8 text-ivory md:p-12 lg:col-span-3">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 size-80 rounded-full bg-gold/20 blur-[90px]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-ivory/10 text-gold">
                  <GraduationCap className="size-6" />
                </span>
                <span className="rounded-full border border-ivory/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory/80">
                  {featured.period}
                </span>
              </div>
              <h3 className="mt-8 text-3xl font-medium leading-tight md:text-4xl">
                {featured.institution}
              </h3>
              <p className="mt-3 text-gold">{featured.role}</p>
              <p className="mt-2 max-w-sm text-ivory/75">{featured.scope}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ivory/60">
                Disciplinas
              </p>
              <ol className="mt-4 grid sm:grid-cols-2 sm:gap-x-8">
                {featured.subjects.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-4 border-b border-ivory/15 py-3.5 text-[15px]"
                  >
                    <span className="font-mono text-xs text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        {others.map((t, i) => {
          const Icon = icons[i] ?? BookOpen;
          return (
            <SpotlightCard key={t.institution} delay={i * 0.08} className="flex flex-col p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-2xl bg-forest text-ivory">
                  <Icon className="size-5" />
                </span>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {t.period}
                </span>
              </div>
              <h3 className="mt-7 text-2xl font-medium leading-tight">{t.institution}</h3>
              <p className="mt-2 text-sm font-medium text-gold-ink">{t.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.scope}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {t.subjects.map((s) => (
                  <li key={s} className="flex gap-2.5 text-[15px]">
                    <span className="text-gold-ink" aria-hidden>
                      ›
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          );
        })}

        <Reveal
          delay={0.16}
          className="flex flex-col rounded-3xl bg-accent p-8 text-accent-foreground"
        >
          <span className="grid size-11 place-items-center rounded-2xl bg-background/60 text-gold-ink">
            <Lightbulb className="size-5" />
          </span>
          <h3 className="mt-7 text-2xl font-medium leading-tight">Metodologias & resultados</h3>
          <ul className="mt-6 space-y-5">
            {pedagogy.map((p) => (
              <li key={p.title}>
                <p className="font-medium">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed opacity-80">{p.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
