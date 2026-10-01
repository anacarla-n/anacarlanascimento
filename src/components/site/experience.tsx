import { experience } from "@/content/portfolio";
import { Accent, Chip, Section, SpotlightCard } from "./primitives";

export function Experience() {
  return (
    <Section
      id="experiencia"
      index="05"
      eyebrow="Atuação profissional"
      title={
        <>
          Da iniciação científica à <Accent>análise de sistemas</Accent> em ambientes
          governamentais.
        </>
      }
    >
      <div className="space-y-4">
        {experience.map((job, i) => {
          const current = job.period.includes("Atual");
          return (
            <SpotlightCard
              key={job.organization}
              delay={i * 0.04}
              className="grid gap-6 p-7 md:grid-cols-[200px_1fr] md:gap-10 md:p-10"
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold-ink">
                  {job.period}
                </p>
                {current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Cargo atual
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-medium leading-tight md:text-[1.75rem]">
                  {job.organization}
                </h3>
                <ol className="mt-6 space-y-7 border-l border-border pl-6">
                  {job.roles.map((r) => (
                    <li key={r.title} className="relative">
                      <span
                        aria-hidden
                        className="absolute -left-[29.5px] top-[7px] size-2.5 rounded-full border-2 border-card bg-gold"
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="text-lg font-medium tracking-tight">{r.title}</h4>
                        <span className="font-mono text-xs text-muted-foreground">{r.period}</span>
                      </div>
                      <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                        {r.text}
                      </p>
                    </li>
                  ))}
                </ol>
                {job.stack && (
                  <div className="mt-7 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <Chip key={s} className="font-mono text-xs">
                        {s}
                      </Chip>
                    ))}
                  </div>
                )}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
}
