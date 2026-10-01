import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ease, fadeUp } from "./motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/** Fades its children up the first time they scroll into view. */
export function Reveal({ delay = 0, transition, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease, delay, ...transition }}
      {...props}
    />
  );
}

/** Card with a soft gold glow that follows the cursor (see `.spotlight` in styles.css). */
export function SpotlightCard({ className, onMouseMove, ...props }: RevealProps) {
  return (
    <Reveal
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
        onMouseMove?.(e);
      }}
      className={cn(
        "spotlight rounded-3xl border border-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-gold/50 hover:shadow-[var(--shadow-soft)]",
        className,
      )}
      {...props}
    />
  );
}

/** Serif italic accent used inside headings. */
export function Accent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <em className={cn("font-serif font-normal italic tracking-normal text-gold-ink", className)}>
      {children}
    </em>
  );
}

export function Eyebrow({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-ink">
      {index && <span>{index}</span>}
      <span className="h-px w-10 bg-gold/60" aria-hidden />
      {children}
    </p>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-[13px] text-secondary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-5 py-20 md:px-8 md:py-28", className)}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Eyebrow index={index}>{eyebrow}</Eyebrow>
            <h2 className="mt-5 text-4xl font-medium leading-[1.04] md:text-[3.5rem]">{title}</h2>
          </div>
          {intro && (
            <p className="leading-relaxed text-muted-foreground md:col-span-4 md:pb-2">{intro}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
