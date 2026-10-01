import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, GraduationCap, Linkedin, Sparkles } from "lucide-react";
import portrait from "@/assets/ana-portrait.webp";
import { education, focusAreas, profile, publications, teaching } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ease, fadeUp } from "./motion";
import { Accent } from "./primitives";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const stats = [
  {
    value: new Date().getFullYear() - 2013,
    label: "anos desde a iniciação científica no CNPq",
  },
  { value: teaching.length, label: "instituições de ensino onde lecionou" },
  { value: education.length, label: "formações, do técnico ao doutorado" },
  {
    value: publications.filter((p) => p.kind === "apresentacao").length,
    label: "trabalhos apresentados em eventos",
  },
];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

function OrbitBadge() {
  return (
    <div className="absolute -left-3 top-8 size-28 sm:-left-10 sm:size-32" aria-hidden>
      <div className="relative grid size-full place-items-center rounded-full border border-border bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 size-full">
          <defs>
            <path id="orbit-path" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
          </defs>
          <text className="fill-foreground font-mono text-[8.2px] uppercase tracking-[0.12em]">
            <textPath href="#orbit-path">{"Engenharia de Software · UX/UI · IHC · "}</textPath>
          </text>
        </svg>
        <Sparkles className="size-5 text-gold-ink" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pt-40">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -right-48 -top-48 size-[620px] rounded-full bg-gold/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute -left-56 top-64 size-[520px] rounded-full bg-forest/20 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 py-1.5 pl-2.5 pr-4 text-[13px] text-muted-foreground backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Docente na UNIT · Analista de Sistemas no SergipeTec
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-[clamp(3rem,8.4vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.045em]"
          >
            Ana Carla
            <br />
            <Accent className="pr-[0.08em]">do Nascimento</Accent> Santos
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 font-mono text-[12px] uppercase tracking-[0.18em] text-gold-ink"
          >
            Mestra em Ciência da Computação · Doutoranda na UFS
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Docente, pesquisadora e analista de sistemas. Atuo na interseção entre{" "}
            <strong className="font-medium text-foreground">Engenharia de Software</strong>,{" "}
            <strong className="font-medium text-foreground">UX/UI</strong>,{" "}
            <strong className="font-medium text-foreground">IHC</strong> e{" "}
            <strong className="font-medium text-foreground">Desenvolvimento Seguro</strong>,
            conectando rigor acadêmico à prática profissional.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-foreground pl-5 pr-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Linkedin className="size-4" />
              Conectar no LinkedIn
              <span className="grid size-9 place-items-center rounded-full bg-background/15 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
            <a
              href={profile.links.lattes}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card/70 px-5 text-sm font-medium backdrop-blur transition-colors hover:border-gold"
            >
              Currículo Lattes
            </a>
            <a
              href={profile.links.orcid}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-1.5 rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ORCID <ArrowUpRight className="size-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full rounded-b-[2.5rem] border border-gold/60 sm:translate-x-5 sm:translate-y-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-muted shadow-[var(--shadow-elegant)]">
            <img
              src={portrait}
              alt="Retrato de Ana Carla do Nascimento Santos"
              width={1000}
              height={1500}
              fetchPriority="high"
              className="size-full object-cover object-[50%_22%]"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest-deep/85 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ivory/75">
                {profile.location}
              </p>
              <p className="mt-1 text-sm">UFS · IFS · UNIT · Estácio · SergipeTec</p>
            </div>
          </div>

          <OrbitBadge />

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease }}
            className="absolute -right-2 bottom-28 flex items-center gap-3 rounded-2xl border border-border bg-background/85 p-3 pr-5 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:-right-10"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-forest text-ivory">
              <GraduationCap className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-medium">Mestra em Ciência da Computação</span>
              <span className="block text-xs text-muted-foreground">UFS · 2023</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.dl
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:mt-24 md:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="flex flex-col-reverse justify-end bg-card/85 p-6 backdrop-blur md:p-8"
          >
            <dt className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</dt>
            <dd className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              <CountUp to={s.value} />
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}

export function Marquee() {
  return (
    <div className="marquee-wrap relative overflow-hidden border-y border-border bg-card/60 py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {focusAreas.map((area, i) => (
              <li
                key={area}
                className="flex items-center gap-10 whitespace-nowrap pr-10 text-2xl tracking-tight md:text-3xl"
              >
                <span className={cn(i % 2 ? "font-serif italic" : "font-medium")}>{area}</span>
                <span className="text-lg text-gold" aria-hidden>
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
