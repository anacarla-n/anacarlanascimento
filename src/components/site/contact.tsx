import { ArrowUp, ArrowUpRight, FileText, Github, Linkedin, Fingerprint } from "lucide-react";
import { profile } from "@/content/portfolio";
import { Reveal } from "./primitives";

const channels = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/anacarla-nascimento",
    href: profile.links.linkedin,
  },
  {
    icon: FileText,
    label: "Currículo Lattes",
    value: "lattes.cnpq.br/9249364940901293",
    href: profile.links.lattes,
  },
  { icon: Fingerprint, label: "ORCID", value: "0000-0002-0591-4384", href: profile.links.orcid },
  { icon: Github, label: "GitHub", value: "anacarla-n", href: profile.links.github },
];

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 px-5 pb-12 pt-16 md:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[image:var(--gradient-forest)] p-8 text-ivory sm:p-12 md:p-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,oklch(1_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 size-96 rounded-full bg-gold/30 blur-[110px]"
        />

        <div className="relative grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              <span>08</span>
              <span className="h-px w-10 bg-gold/60" aria-hidden />
              Contato
            </p>
            <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.04em]">
              Vamos construir algo{" "}
              <em className="font-serif font-normal italic tracking-normal text-gold">
                significativo
              </em>
              .
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/75">
              Aberta a oportunidades em docência, pesquisa, consultoria em UX/UI, IHC, modelagem de
              processos e engenharia de software segura.
            </p>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-ivory pl-6 pr-2 font-medium text-forest-deep transition-transform hover:-translate-y-0.5"
            >
              Conversar no LinkedIn
              <span className="grid size-10 place-items-center rounded-full bg-forest-deep text-ivory transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          </div>

          <ul className="space-y-2.5">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-ivory/15 bg-ivory/[0.04] p-4 backdrop-blur transition-colors hover:border-gold/60 hover:bg-ivory/10"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ivory/10 text-gold">
                    <c.icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ivory/60">
                      {c.label}
                    </span>
                    <span className="block truncate font-medium">{c.value}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-ivory/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="overflow-hidden px-5 pb-8 md:px-8">
      <p
        aria-hidden
        className="select-none text-center text-[19vw] font-medium leading-[0.85] tracking-[-0.06em] text-foreground/[0.045] md:text-[17vw]"
      >
        Ana Carla
      </p>
      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-serif text-base italic">{profile.location}</p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          Voltar ao topo <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  );
}
