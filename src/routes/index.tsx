import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  Mail, Linkedin, ExternalLink, GraduationCap, Briefcase, BookOpen,
  Award, Users, Code2, Palette, Shield, Workflow, Building2, Calendar,
  ArrowUpRight, Sparkles, FileText,
} from "lucide-react";
import portraitAsset from "@/assets/ana-portrait.jpg.asset.json";
const portrait = portraitAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Carla do Nascimento Santos — Engenharia de Software, UX & IHC" },
      { name: "description", content: "Portfólio acadêmico e profissional de Ana Carla do Nascimento Santos: Mestra em Ciência da Computação, docente e pesquisadora em Engenharia de Software, UX/UI, IHC e Desenvolvimento Seguro." },
      { property: "og:title", content: "Ana Carla do Nascimento Santos" },
      { property: "og:description", content: "Docente, pesquisadora e analista de sistemas — Engenharia de Software, UX/UI, IHC e Desenvolvimento Seguro." },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Index,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto scroll-mt-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mb-14"
      >
        <div className="flex items-center gap-3 text-[color:var(--gold)] uppercase tracking-[0.25em] text-xs font-medium mb-4">
          <span className="h-px w-8 bg-[color:var(--gold)]" />
          {eyebrow}
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-foreground max-w-3xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function Nav() {
  const links = [
    ["sobre", "Sobre"],
    ["docencia", "Docência"],
    ["formacao", "Formação"],
    ["pesquisa", "Pesquisa"],
    ["experiencia", "Experiência"],
    ["competencias", "Competências"],
    ["contato", "Contato"],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-wide">
          Ana Carla <span className="text-[color:var(--gold)]">·</span> Santos
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="http://lattes.cnpq.br/9249364940901293"
          target="_blank" rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-[color:var(--gold)]/40 text-foreground hover:bg-[color:var(--gold)]/10 transition"
        >
          Lattes <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }} aria-hidden />
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 items-center relative">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="flex items-center gap-3 text-[color:var(--gold)] uppercase tracking-[0.3em] text-xs font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Portfólio Acadêmico & Profissional
          </div>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] text-foreground">
            Ana Carla<br />
            <span className="italic text-[color:var(--gold)]">do Nascimento</span> Santos
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-light max-w-xl">
            Mestra em Ciência da Computação · Docente · Analista de Sistemas
          </p>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl leading-relaxed">
            Atuo na interseção entre <strong className="text-foreground">Engenharia de Software</strong>,
            {" "}<strong className="text-foreground">UX/UI</strong>,{" "}
            <strong className="text-foreground">IHC</strong> e{" "}
            <strong className="text-foreground">Desenvolvimento Seguro</strong>, com trajetória
            consolidada em modelagem de processos, pesquisa científica e ensino na graduação e pós-graduação.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--navy)] text-[color:var(--primary-foreground)] hover:opacity-90 transition shadow-[var(--shadow-soft)]">
              <Mail className="w-4 h-4" /> Entrar em contato
            </a>
            <a href="http://lattes.cnpq.br/9249364940901293" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:border-[color:var(--gold)] transition">
              <FileText className="w-4 h-4" /> Currículo Lattes
            </a>
            <a href="https://orcid.org/0000-0002-0591-4384" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:border-[color:var(--gold)] transition">
              ORCID <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] border border-[color:var(--gold)]/40" aria-hidden />
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={portrait} alt="Retrato profissional de Ana Carla do Nascimento Santos"
              width={768} height={960} className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[color:var(--navy-deep)]/80 to-transparent text-[color:var(--primary-foreground)]">
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">Sergipe · Brasil</div>
              <div className="text-sm mt-1">UFS · IFS · UNIT · SergipeTec</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <Section id="sobre" eyebrow="Sobre Mim" title="Trajetória dedicada à ciência, ao ensino e à engenharia de software.">
      <div className="grid md:grid-cols-3 gap-10 text-foreground/80 leading-relaxed">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-2 text-lg">
          Mestra em Ciência da Computação com ênfase em Engenharia de Software pela
          {" "}<strong className="text-foreground">Universidade Federal de Sergipe (UFS)</strong>,
          especialista MBA em Gerenciamento de Processos de Negócios (BPM) e em Gestão de Tecnologia da Informação
          pela FAVENI, e bacharel em Sistemas de Informação pelo IFS — Campus Lagarto. Atuo como docente, pesquisadora
          e analista de sistemas, conectando rigor acadêmico à prática profissional.
          <br /><br />
          Minha pesquisa transita por <strong className="text-foreground">modelagem de processos (BPMN)</strong>,
          {" "}<strong className="text-foreground">sistemas de informação executivos</strong>, gestão do conhecimento e
          documentação de processos e sistemas. Na docência, dedico-me à formação de profissionais críticos em UX/UI,
          IHC, Modelagem de Sistemas, Modelagem de Processos, IXD e Desenvolvimento de Software Seguro.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="space-y-4">
          {[
            ["Mestrado", "UFS · 2023"],
            ["Especializações", "BPM & Gestão TI"],
            ["Docência", "Graduação & Pós"],
            ["Pesquisa", "Eng. de Software"],
          ].map(([k, v]) => (
            <div key={k} className="border-l-2 border-[color:var(--gold)] pl-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</div>
              <div className="text-foreground font-medium">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Docencia() {
  const grad = ["UX/UI — User Experience & User Interface", "IHC — Interação Humano-Computador", "Modelagem de Processos", "Modelagem de Sistemas", "Computação Inteligente"];
  const pos = ["Desenvolvimento de Software Seguro", "UX/UI Aplicado", "IXD — Interaction Design"];
  return (
    <Section id="docencia" eyebrow="Experiência Docente" title="Ensino na graduação e pós-graduação em Engenharia de Software.">
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            inst: "Universidade Tiradentes — UNIT",
            role: "Professora Auxiliar",
            period: "2024 — Atual",
            scope: "Graduação em Engenharia de Software e Sistemas de Informação",
            list: [...grad, "Residência de Software"],
            icon: GraduationCap,
          },
          {
            inst: "Universidade Estácio de Sá",
            role: "Docente em Pós-Graduação",
            period: "Atual",
            scope: "Especializações em Tecnologia, UX e Segurança",
            list: pos,
            icon: Shield,
          },
          {
            inst: "Instituto Federal de Sergipe — IFS",
            role: "Professora Visitante (Voluntária)",
            period: "2022 — 2023",
            scope: "Campus Lagarto · Área de Informática I",
            list: ["Computação Inteligente (60h)", "Orientação de Estágio (30h)", "Orientação de TCC I (15h)"],
            icon: BookOpen,
          },
          {
            inst: "Metodologias & Resultados",
            role: "Prática Pedagógica",
            period: "Contínuo",
            scope: "Metodologias ativas, projetos integradores e orientação acadêmica",
            list: ["Aprendizagem baseada em projetos", "Estudos de caso reais", "Orientação de TCCs em Clean Architecture, NestJS/CQRS e Segurança em Redes"],
            icon: Sparkles,
          },
        ].map((c, i) => (
          <motion.article
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group bg-card rounded-2xl border border-border p-7 hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-[color:var(--gold)]/15 text-[color:var(--gold)] flex items-center justify-center">
                <c.icon className="w-5 h-5" />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">{c.period}</span>
            </div>
            <h3 className="text-2xl font-medium text-foreground">{c.inst}</h3>
            <div className="text-sm text-[color:var(--gold)] mt-1">{c.role}</div>
            <p className="text-sm text-muted-foreground mt-2">{c.scope}</p>
            <ul className="mt-5 space-y-2">
              {c.list.map((d) => (
                <li key={d} className="text-sm text-foreground/85 flex gap-2">
                  <span className="text-[color:var(--gold)] mt-1">›</span>{d}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Formacao() {
  const items = [
    { y: "2024 — Atual", t: "Doutorado em andamento — Ciência da Propriedade Intelectual", i: "Universidade Federal de Sergipe (UFS)",
      d: "Pesquisa em andamento articulando propriedade intelectual, tecnologia e inovação." },
    { y: "2021 — 2023", t: "Mestrado em Ciência da Computação", i: "Universidade Federal de Sergipe (UFS)",
      d: "Sistema de Informação Executivo para Gestão de Ativos por meio de Modelagem de Processos de Negócios. Orientador: Dr. Gilton José Ferreira da Silva." },
    { y: "2021 — 2022", t: "MBA em Gerenciamento de Processos de Negócio (BPM)", i: "FAVENI — 750h",
      d: "Mapeamento e automação de processos do controle de ativos para o Departamento de Obras do Tribunal de Justiça de Sergipe." },
    { y: "2019 — 2020", t: "Especialização em Gestão em Tecnologia da Informação", i: "FAVENI — 620h",
      d: "A Gestão do Conhecimento alinhada à Modelagem de Processo." },
    { y: "2015 — 2019", t: "Graduação em Sistemas de Informação", i: "Instituto Federal de Sergipe (IFS)",
      d: "TCC: Estudo de dados de atenção básica de saúde no município de Lagarto-SE." },
    { y: "2011 — 2015", t: "Técnico em Redes de Computadores", i: "Instituto Federal de Sergipe (IFS)",
      d: "Integrado ao Ensino Médio. Projeto de pesquisa em RFID aplicado a bibliotecas." },
  ];
  return (
    <Section id="formacao" eyebrow="Formação Acadêmica" title="Uma linha do tempo de aprendizado contínuo.">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
        <div className="space-y-12">
          {items.map((it, idx) => (
            <motion.div
              key={it.t}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${idx % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[color:var(--gold)] ring-4 ring-background mt-2" />
              <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] mb-2">{it.y}</div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground">{it.t}</h3>
                <div className="text-sm text-muted-foreground mt-1">{it.i}</div>
                <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Pesquisa() {
  const periodicos = [
    "FONTES, A. M.; SANTOS, A. C. N.; LIBÓRIO, F. O. Modelagem de processos com o BPMN para a melhoria de processos acadêmicos do IFS. Brazilian Journal of Development, v. 6, p. 41716–41728, 2020.",
  ];
  const capitulos = [
    "SANTOS, A. C. N. et al. Modelagem de processos: uma proposta de melhoria para a atuação das equipes de saúde da atenção básica. In: Engenharia Elétrica e de Computação — Atena Editora, 2020, v. 4, p. 193–205.",
  ];
  const apresentacoes = [
    "Desafios e Experiências dos Ex-alunos no Mercado de Trabalho — Conferência (2020).",
    "Modelagem de processos para equipes de saúde da atenção básica (2019).",
    "Meninas Digitais em Sergipe: um despertar para a Informática — Congresso (2019).",
    "ColossusBot: Chatbot para auxiliar o ensino da História da Computação — Simpósio (2019).",
    "Os Cuidados no Uso das Redes Sociais — Conferência (2019).",
    "Modelagem de Processos com BPMN para Melhoria de Processos Acadêmicos do IFS (2018).",
    "Roda de Conversa: Saúde Mental como sistema a ser analisado (2018).",
    "Redes Bayesianas na fusão de classificadores para localização de placas de licença (2013).",
  ];
  const orientacoes = [
    "Desenvolvimento de Aplicativo Android com Clean Architecture e MVVM: Estudo com API da Marvel — UNIT, 2025.",
    "Proposta de Arquitetura Modular e Escalável para Aplicações SaaS com NestJS e CQRS — UNIT, 2025.",
    "Vulnerabilidades e Ataques em Redes Wi-Fi: análise técnica e estudo de caso sobre o KRACK — UNIT, 2025.",
  ];

  const Block = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: any }) => (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="bg-card border border-border rounded-2xl p-7">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-[color:var(--navy)]/10 text-[color:var(--navy)] dark:bg-[color:var(--gold)]/15 dark:text-[color:var(--gold)] flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-medium text-foreground">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((p) => (
          <li key={p} className="text-sm text-foreground/85 leading-relaxed border-l border-border pl-4 hover:border-[color:var(--gold)] transition">{p}</li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <Section id="pesquisa" eyebrow="Pesquisa & Produção Científica" title="Publicações, orientações e produção técnica.">
      <div className="grid md:grid-cols-2 gap-6">
        <Block title="Artigos em Periódicos" items={periodicos} icon={BookOpen} />
        <Block title="Capítulos de Livros" items={capitulos} icon={FileText} />
        <Block title="Apresentações de Trabalho" items={apresentacoes} icon={Users} />
        <Block title="Orientações de TCC" items={orientacoes} icon={GraduationCap} />
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-7 text-[color:var(--primary-foreground)]" style={{ background: "var(--gradient-hero)" }}>
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">Liga Acadêmica</div>
          <h4 className="text-lg font-medium mt-2">LICODE — Ladies in Code</h4>
          <p className="text-sm text-white/80 mt-3">2025 — Atual · Coordenadora na UNIT. Projeto de inclusão de mulheres na computação: palestras, minicursos, mentorias e cursos introdutórios de programação para meninas do ensino médio.</p>
          <a href="https://meninas.sbc.org.br/projetos-parceiros/licode/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1 mt-3 text-xs text-[color:var(--gold-soft)] hover:underline">
            Saiba mais <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-7 text-[color:var(--primary-foreground)]" style={{ background: "var(--gradient-hero)" }}>
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">Projeto de Extensão</div>
          <h4 className="text-lg font-medium mt-2">Capacitação Digital de Jovens</h4>
          <p className="text-sm text-white/80 mt-3">2025 — Atual · Coordenadora. Capacitação de estudantes do ensino fundamental II e médio em ferramentas digitais.</p>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-7 text-[color:var(--primary-foreground)]" style={{ background: "var(--gradient-hero)" }}>
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">Projeto de Extensão</div>
          <h4 className="text-lg font-medium mt-2">Meninas Digitais — Regional</h4>
          <p className="text-sm text-white/80 mt-3">2018 — 2019 · Coordenadora. Despertar meninas do ensino fundamental e médio para carreiras em computação.</p>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl p-7 border border-border bg-card">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Produção Técnica</div>
          <h4 className="text-lg font-medium mt-2 text-foreground">Cursos Ministrados</h4>
          <p className="text-sm text-muted-foreground mt-3">Introdução ao IBM Watson Assistant (2019) · Scratch (2018).</p>
        </motion.div>
      </div>
    </Section>
  );
}

function Experiencia() {
  const jobs = [
    {
      org: "Sergipe Parque Tecnológico — SergipeTec",
      role: "Analista de Sistemas (.NET)",
      period: "2022 — Atual",
      desc: "Atuação no segmento acadêmico da Rede de Educação do Estado de Sergipe. Levantamento de requisitos, documentação de diagramas, mapeamento de processos, manutenção e desenvolvimento de sistemas acadêmicos, consultas em SQL Server e PostgreSQL, geração de documentos para políticas internas.",
    },
    {
      org: "Sergipe Parque Tecnológico — SergipeTec",
      role: "Programadora de Sistemas (C#)",
      period: "2020 — 2022",
      desc: "Desenvolvimento Front-End e Back-End com C#, JavaScript e HTML para o segmento administrativo. Levantamento de requisitos, banco de dados SQL Server/Postgres e relatórios em JASPER.",
    },
    {
      org: "ITSolved Soluções em Tecnologia",
      role: "Auxiliar de Programação — Banco de Dados",
      period: "2019 — 2020",
      desc: "Desenvolvimento e manutenção de procedimentos em banco de dados, elicitação de requisitos e suporte técnico avançado.",
    },
    {
      org: "ITSolved Soluções em Tecnologia",
      role: "Estágio em Análise de Sistemas",
      period: "2018 — 2019",
      desc: "Elicitação de requisitos, análise de processos, desenvolvimento e manutenção de consultas em banco de dados.",
    },
    {
      org: "Instituto Federal de Sergipe — PROPEX",
      role: "Bolsista — Suporte em Desenvolvimento de Sistema",
      period: "2017 — 2018",
      desc: "Suporte e manutenção avançada ao SISPUBLI, sistema de gestão de programas, eventos e editais de pesquisa, extensão e inovação do IFS.",
    },
    {
      org: "CNPq — Conselho Nacional de Desenvolvimento Científico e Tecnológico",
      role: "Bolsista — Pesquisadora",
      period: "2013 — 2014",
      desc: "Iniciação científica em projetos de identificação por rádio frequência (RFID) aplicados à acessibilidade e segurança em bibliotecas.",
    },
  ];

  return (
    <Section id="experiencia" eyebrow="Atuação Profissional" title="Da iniciação científica à análise de sistemas em ambientes governamentais.">
      <div className="space-y-4">
        {jobs.map((j, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group grid md:grid-cols-[200px_1fr] gap-6 p-6 md:p-7 rounded-2xl border border-border hover:border-[color:var(--gold)]/60 hover:bg-card transition-all"
          >
            <div className="flex md:flex-col items-baseline md:items-start gap-2">
              <Calendar className="w-4 h-4 text-[color:var(--gold)] hidden md:block" />
              <div className="text-sm font-medium text-foreground">{j.period}</div>
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" /> {j.org}
              </h3>
              <div className="text-sm text-[color:var(--gold)] mt-1">{j.role}</div>
              <p className="text-sm text-foreground/80 mt-3 leading-relaxed max-w-3xl">{j.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Competencias() {
  const groups = [
    {
      icon: Code2,
      title: "Engenharia de Software",
      items: ["Modelagem de Sistemas", "Modelagem de Processos (BPMN)", "Arquitetura de Software", "Desenvolvimento Seguro", "C# / .NET", "SQL Server & PostgreSQL"],
    },
    {
      icon: Palette,
      title: "Experiência do Usuário",
      items: ["UX Research", "UX Design", "UI Design", "IXD — Interaction Design", "IHC", "Design Thinking"],
    },
    {
      icon: GraduationCap,
      title: "Ensino & Pesquisa",
      items: ["Docência Graduação & Pós", "Orientação Acadêmica", "Produção Científica", "Metodologias Ativas", "Gestão do Conhecimento", "Extensão Universitária"],
    },
    {
      icon: Workflow,
      title: "Processos & Gestão",
      items: ["BPM — Business Process Management", "Sistema de Informação Executivo", "Gestão de TI", "Documentação de Processos", "Levantamento de Requisitos", "Automação"],
    },
  ];
  return (
    <Section id="competencias" eyebrow="Competências & Especialidades" title="Áreas de domínio técnico e acadêmico.">
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <motion.div key={g.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="p-7 rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-soft)] transition">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[color:var(--gold)]/15 text-[color:var(--gold)] flex items-center justify-center">
                <g.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it}
                  className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Reconhecimentos() {
  const items = [
    { y: "2025", t: "Feira de Vestibular UNIT", d: "Organização" },
    { y: "2024", t: "Feira de Vestibular UNIT", d: "Organização" },
    { y: "2019", t: "International Women's Day — WTM", d: "Participação" },
    { y: "2019", t: "XIX Escola Regional de Computação BA-AL-SE", d: "Participação" },
    { y: "2018", t: "IFS DEV CONF", d: "Organização" },
    { y: "2018", t: "XVIII Escola Regional de Computação BA-AL-SE", d: "Organização & Participação" },
    { y: "2017", t: "Workshop de Automação Industrial / Eng. Elétrica", d: "Organização" },
    { y: "2017", t: "Conferência JavaScript Brasil", d: "Participação" },
    { y: "2013", t: "Semana Nacional de Ciência e Tecnologia de Sergipe", d: "Participação" },
  ];
  return (
    <Section id="eventos" eyebrow="Eventos & Reconhecimentos" title="Participação, organização e contribuição acadêmica.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it) => (
          <motion.div key={it.t + it.y} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="p-5 rounded-xl bg-card border border-border hover:border-[color:var(--gold)] transition">
            <div className="flex items-center justify-between">
              <Award className="w-4 h-4 text-[color:var(--gold)]" />
              <span className="text-xs text-muted-foreground">{it.y}</span>
            </div>
            <h4 className="text-base font-medium mt-3 text-foreground">{it.t}</h4>
            <div className="text-xs text-muted-foreground mt-1">{it.d}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contato() {
  const links = [
    { icon: Mail, label: "E-mail acadêmico", value: "Disponível via Lattes", href: "http://lattes.cnpq.br/9249364940901293" },
    { icon: FileText, label: "Currículo Lattes", value: "lattes.cnpq.br/9249364940901293", href: "http://lattes.cnpq.br/9249364940901293" },
    { icon: ExternalLink, label: "ORCID", value: "0000-0002-0591-4384", href: "https://orcid.org/0000-0002-0591-4384" },
    { icon: Linkedin, label: "LinkedIn", value: "Rede profissional", href: "https://www.linkedin.com/" },
  ];
  return (
    <Section id="contato" eyebrow="Contato" title="Para colaborações acadêmicas, consultorias e projetos.">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="p-10 rounded-3xl text-[color:var(--primary-foreground)] relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-gold)" }} aria-hidden />
          <Briefcase className="w-8 h-8 text-[color:var(--gold)] mb-6" />
          <h3 className="text-3xl font-medium">Vamos construir algo significativo.</h3>
          <p className="mt-4 text-white/80 max-w-md">
            Aberta a oportunidades em docência, pesquisa, consultoria em UX/UI, IHC,
            modelagem de processos e engenharia de software segura.
          </p>
          <a href="http://lattes.cnpq.br/9249364940901293" target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[color:var(--gold)] text-[color:var(--navy-deep)] font-medium hover:opacity-90 transition">
            Acessar Currículo Completo <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
        <div className="space-y-3">
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-[color:var(--gold)] hover:-translate-y-0.5 transition group"
            >
              <div className="w-11 h-11 rounded-lg bg-[color:var(--gold)]/15 text-[color:var(--gold)] flex items-center justify-center">
                <l.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{l.label}</div>
                <div className="text-foreground font-medium">{l.value}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[color:var(--gold)] transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ana Carla do Nascimento Santos. Todos os direitos reservados.</div>
        <div className="font-display italic text-foreground/70">Sergipe · Brasil</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <Sobre />
      <Docencia />
      <Formacao />
      <Pesquisa />
      <Experiencia />
      <Competencias />
      <Reconhecimentos />
      <Contato />
      <Footer />
    </main>
  );
}
