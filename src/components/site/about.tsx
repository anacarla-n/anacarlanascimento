import { HeartHandshake, Quote } from "lucide-react";
import { focusAreas } from "@/content/portfolio";
import { Accent, Chip, Reveal, Section, SpotlightCard } from "./primitives";

export function About() {
  return (
    <Section
      id="sobre"
      index="01"
      eyebrow="Sobre mim"
      title={
        <>
          Trajetória dedicada à <Accent>ciência</Accent>, ao ensino e à engenharia de software.
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-6">
        <SpotlightCard className="p-8 md:col-span-4 md:row-span-2 md:p-10">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Mestra em Ciência da Computação com ênfase em Engenharia de Software pela{" "}
              <strong className="font-medium text-foreground">
                Universidade Federal de Sergipe (UFS)
              </strong>
              , especialista MBA em Gerenciamento de Processos de Negócios (BPM) e em Gestão de
              Tecnologia da Informação pela FAVENI, e bacharel em Sistemas de Informação pelo IFS —
              Campus Lagarto.
            </p>
            <p>
              Minha pesquisa transita por{" "}
              <strong className="font-medium text-foreground">modelagem de processos (BPMN)</strong>
              ,{" "}
              <strong className="font-medium text-foreground">
                sistemas de informação executivos
              </strong>
              , gestão do conhecimento e documentação de processos e sistemas.
            </p>
            <p>
              Na docência, dedico-me à formação de profissionais críticos em UX/UI, IHC, Modelagem
              de Sistemas, Modelagem de Processos, IXD e Desenvolvimento de Software Seguro.
            </p>
          </div>
        </SpotlightCard>

        <Reveal
          delay={0.08}
          className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-forest)] p-8 text-ivory md:col-span-2"
        >
          <div
            aria-hidden
            className="absolute -bottom-16 -right-16 size-48 rounded-full border border-ivory/15"
          />
          <div
            aria-hidden
            className="absolute -bottom-8 -right-8 size-32 rounded-full border border-ivory/15"
          />
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            <span className="size-1.5 animate-pulse rounded-full bg-gold motion-reduce:animate-none" />
            Em andamento
          </p>
          <h3 className="mt-5 text-2xl font-medium leading-tight">
            Doutorado em Ciência da Propriedade Intelectual
          </h3>
          <p className="mt-3 text-sm text-ivory/75">
            Universidade Federal de Sergipe · 2024 — Atual
          </p>
        </Reveal>

        <SpotlightCard delay={0.12} className="flex flex-col justify-between p-8 md:col-span-2">
          <Quote className="size-6 text-gold-ink" aria-hidden />
          <p className="mt-8 font-serif text-[1.75rem] italic leading-[1.15]">
            Conectar rigor acadêmico à prática profissional.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-8 md:col-span-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Áreas de atuação
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {focusAreas.map((a) => (
              <Chip key={a}>{a}</Chip>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard delay={0.08} className="p-8 md:col-span-3">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-gold/15 text-gold-ink">
              <HeartHandshake className="size-5" />
            </span>
            <h3 className="text-xl font-medium">Mulheres na computação</h3>
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Coordenou o Meninas Digitais — Regional (2018–2019) e hoje coordena a LICODE — Ladies in
            Code na UNIT, aproximando meninas e mulheres da tecnologia.
          </p>
        </SpotlightCard>
      </div>
    </Section>
  );
}
