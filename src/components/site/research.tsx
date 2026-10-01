import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import {
  outreach,
  publicationKinds,
  publications,
  type PublicationKind,
} from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Accent, Chip, Eyebrow, Reveal, Section } from "./primitives";

type Filter = PublicationKind | "all";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Tudo" },
  { key: "periodico", label: "Periódicos" },
  { key: "capitulo", label: "Capítulos" },
  { key: "orientacao", label: "Orientações" },
  { key: "apresentacao", label: "Apresentações" },
];

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

/** Wraps the first accent-insensitive match of `query` in a <mark>. */
function highlight(text: string, query: string): ReactNode {
  if (!query) return text;
  let folded = "";
  const origin: number[] = [];
  for (let i = 0; i < text.length; i++) {
    for (const ch of normalize(text[i])) {
      folded += ch;
      origin.push(i);
    }
  }
  const at = folded.indexOf(query);
  if (at < 0) return text;
  const start = origin[at];
  const end = origin[at + query.length - 1] + 1;
  return (
    <>
      {text.slice(0, start)}
      <mark className="rounded-sm bg-gold/30 px-0.5 text-foreground">{text.slice(start, end)}</mark>
      {text.slice(end)}
    </>
  );
}

function Publications() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const q = normalize(query.trim());

  const results = useMemo(
    () =>
      publications
        .filter((p) => filter === "all" || p.kind === filter)
        .filter(
          (p) =>
            !q || normalize(`${p.title} ${p.authors ?? ""} ${p.venue ?? ""} ${p.year}`).includes(q),
        )
        .sort((a, b) => b.year - a.year),
    [filter, q],
  );

  return (
    <Reveal className="rounded-[2rem] border border-border bg-card p-2 shadow-[var(--shadow-soft)] md:p-3">
      <div className="flex flex-col gap-3 rounded-[1.5rem] bg-secondary/60 p-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-1" role="group" aria-label="Filtrar por tipo">
          {filters.map((f) => {
            const count =
              f.key === "all"
                ? publications.length
                : publications.filter((p) => p.kind === f.key).length;
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "relative isolate inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition-colors",
                  active ? "text-background" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="pub-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-foreground"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                  />
                )}
                {f.label}
                <span className="font-mono text-[11px] opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
        <label className="relative block lg:w-80">
          <span className="sr-only">Buscar na produção científica</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título, tema ou ano…"
            className="h-11 w-full rounded-full border border-border bg-background pl-11 pr-10 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Limpar busca"
              className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </label>
      </div>

      <p className="sr-only" aria-live="polite">
        {results.length} {results.length === 1 ? "resultado" : "resultados"}
      </p>

      <ul className="px-3 md:px-5">
        <AnimatePresence initial={false} mode="popLayout">
          {results.map((p) => (
            <motion.li
              layout
              key={`${p.kind}-${p.year}-${p.title}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-2 border-b border-border py-5 last:border-0 md:grid-cols-[72px_1fr_auto] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-sm text-gold-ink">{p.year}</span>
              <div>
                <h3 className="text-[17px] font-medium leading-snug tracking-tight">
                  {highlight(p.title, q)}
                </h3>
                {(p.authors || p.venue) && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {[p.authors, p.venue]
                      .filter((s): s is string => !!s)
                      .map((s, i) => (
                        <span key={s}>
                          {i > 0 && " · "}
                          {highlight(s, q)}
                        </span>
                      ))}
                  </p>
                )}
              </div>
              <Chip className="w-fit whitespace-nowrap text-xs">{publicationKinds[p.kind]}</Chip>
            </motion.li>
          ))}
        </AnimatePresence>
        {results.length === 0 && (
          <li className="py-16 text-center text-muted-foreground">
            Nenhum resultado para “{query}”.
          </li>
        )}
      </ul>
    </Reveal>
  );
}

function Outreach() {
  return (
    <div className="mt-24">
      <Reveal className="mb-10">
        <Eyebrow>Extensão & impacto</Eyebrow>
        <h3 className="mt-5 max-w-2xl text-3xl font-medium leading-tight md:text-[2.75rem]">
          Tecnologia como <Accent>ferramenta de inclusão</Accent>.
        </h3>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {outreach.map((o, i) => {
          const dark = i < 3;
          return (
            <Reveal
              key={o.title}
              delay={i * 0.06}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1",
                dark
                  ? "bg-[image:var(--gradient-forest)] text-ivory"
                  : "border border-border bg-card",
              )}
            >
              <p
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.2em]",
                  dark ? "text-gold" : "text-gold-ink",
                )}
              >
                {o.tag}
              </p>
              <h4 className="mt-4 text-xl font-medium leading-snug">{o.title}</h4>
              <p className={cn("mt-1 text-xs", dark ? "text-ivory/65" : "text-muted-foreground")}>
                {o.period}
              </p>
              <p
                className={cn(
                  "mt-4 flex-1 text-sm leading-relaxed",
                  dark ? "text-ivory/80" : "text-muted-foreground",
                )}
              >
                {o.text}
              </p>
              {o.href && (
                <a
                  href={o.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold after:absolute after:inset-0"
                >
                  Saiba mais
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

export function Research() {
  return (
    <Section
      id="pesquisa"
      index="04"
      eyebrow="Pesquisa & produção científica"
      title={
        <>
          Publicações, orientações e <Accent>produção técnica</Accent>.
        </>
      }
      intro="Filtre por tipo ou busque por tema — a busca ignora acentos e destaca o trecho encontrado."
    >
      <Publications />
      <Outreach />
    </Section>
  );
}
