import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { education } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Accent, Section, SpotlightCard } from "./primitives";

export function Education() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <Section
      id="formacao"
      index="03"
      eyebrow="Formação acadêmica"
      title={
        <>
          Uma linha do tempo de <Accent>aprendizado contínuo</Accent>.
        </>
      }
      intro="Do técnico integrado ao doutorado em andamento: computação, processos de negócio e inovação."
    >
      <div className="relative">
        {/* Track + scroll-linked fill, centred in the gap between the date column and the cards. */}
        <div
          aria-hidden
          className="absolute bottom-3 left-[11px] top-3 w-px bg-border md:left-[224px]"
        />
        <motion.div
          aria-hidden
          style={{ scaleY: fill }}
          className="absolute bottom-3 left-[11px] top-3 w-px origin-top bg-gradient-to-b from-gold via-gold to-forest md:left-[224px]"
        />

        <ol ref={listRef} className="space-y-5">
          {education.map((d) => (
            <li key={d.title} className="relative pl-10 md:grid md:grid-cols-[200px_1fr] md:pl-0">
              <span
                aria-hidden
                className={cn(
                  "absolute left-[5px] top-1 size-[13px] rounded-full border-[3px] border-background md:left-[218px] md:top-8",
                  d.ongoing ? "bg-gold ring-4 ring-gold/25" : "bg-forest",
                )}
              />
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold-ink md:pt-8 md:text-right">
                {d.period}
              </p>
              <SpotlightCard className="mt-3 p-6 md:ml-12 md:mt-0 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-medium leading-snug md:text-2xl">{d.title}</h3>
                  {d.ongoing && (
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold-ink">
                      Em andamento
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.institution}</p>
                <p className="mt-4 leading-relaxed text-foreground/80">{d.detail}</p>
              </SpotlightCard>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
