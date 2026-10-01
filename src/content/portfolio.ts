// All content comes from Ana Carla's Currículo Lattes. Keep it factual: do not
// add experiences, degrees or numbers that are not in the CV.

export const profile = {
  name: "Ana Carla do Nascimento Santos",
  shortName: "Ana Carla",
  location: "Sergipe · Brasil",
  headline: "Mestra em Ciência da Computação · Docente · Analista de Sistemas",
  links: {
    linkedin: "https://www.linkedin.com/in/anacarla-nascimento/",
    lattes: "http://lattes.cnpq.br/9249364940901293",
    orcid: "https://orcid.org/0000-0002-0591-4384",
    github: "https://github.com/anacarla-n",
  },
};

export const navLinks = [
  { id: "sobre", label: "Sobre" },
  { id: "docencia", label: "Docência" },
  { id: "formacao", label: "Formação" },
  { id: "pesquisa", label: "Pesquisa" },
  { id: "experiencia", label: "Experiência" },
  { id: "competencias", label: "Competências" },
  { id: "contato", label: "Contato" },
] as const;

export const focusAreas = [
  "Engenharia de Software",
  "UX/UI",
  "IHC",
  "Modelagem de Processos (BPMN)",
  "Modelagem de Sistemas",
  "IXD",
  "Desenvolvimento Seguro",
  "Gestão do Conhecimento",
];

export type Teaching = {
  institution: string;
  role: string;
  period: string;
  scope: string;
  subjects: string[];
};

export const teaching: Teaching[] = [
  {
    institution: "Universidade Tiradentes — UNIT",
    role: "Professora Auxiliar",
    period: "2024 — Atual",
    scope: "Graduação em Engenharia de Software e Sistemas de Informação",
    subjects: [
      "UX/UI — User Experience & User Interface",
      "IHC — Interação Humano-Computador",
      "Modelagem de Processos",
      "Modelagem de Sistemas",
      "Computação Inteligente",
      "Residência de Software",
    ],
  },
  {
    institution: "Universidade Estácio de Sá",
    role: "Docente em Pós-Graduação",
    period: "Atual",
    scope: "Especializações em Tecnologia, UX e Segurança",
    subjects: ["Desenvolvimento de Software Seguro", "UX/UI Aplicado", "IXD — Interaction Design"],
  },
  {
    institution: "Instituto Federal de Sergipe — IFS",
    role: "Professora Visitante (Voluntária)",
    period: "2022 — 2023",
    scope: "Campus Lagarto · Área de Informática I",
    subjects: [
      "Computação Inteligente (60h)",
      "Orientação de Estágio (30h)",
      "Orientação de TCC I (15h)",
    ],
  },
];

export const pedagogy = [
  {
    title: "Aprendizagem baseada em projetos",
    text: "Metodologias ativas e projetos integradores ao longo das disciplinas.",
  },
  {
    title: "Estudos de caso reais",
    text: "Conteúdo conectado à prática de mercado e a problemas concretos.",
  },
  {
    title: "Orientação acadêmica",
    text: "TCCs em Clean Architecture, NestJS/CQRS e Segurança em Redes.",
  },
];

export type Degree = {
  period: string;
  title: string;
  institution: string;
  detail: string;
  ongoing?: boolean;
};

export const education: Degree[] = [
  {
    period: "2024 — Atual",
    title: "Doutorado em Ciência da Propriedade Intelectual",
    institution: "Universidade Federal de Sergipe (UFS)",
    detail: "Pesquisa em andamento articulando propriedade intelectual, tecnologia e inovação.",
    ongoing: true,
  },
  {
    period: "2021 — 2023",
    title: "Mestrado em Ciência da Computação",
    institution: "Universidade Federal de Sergipe (UFS)",
    detail:
      "Sistema de Informação Executivo para Gestão de Ativos por meio de Modelagem de Processos de Negócios. Orientador: Dr. Gilton José Ferreira da Silva.",
  },
  {
    period: "2021 — 2022",
    title: "MBA em Gerenciamento de Processos de Negócio (BPM)",
    institution: "FAVENI · 750h",
    detail:
      "Mapeamento e automação de processos do controle de ativos para o Departamento de Obras do Tribunal de Justiça de Sergipe.",
  },
  {
    period: "2019 — 2020",
    title: "Especialização em Gestão em Tecnologia da Informação",
    institution: "FAVENI · 620h",
    detail: "A Gestão do Conhecimento alinhada à Modelagem de Processo.",
  },
  {
    period: "2015 — 2019",
    title: "Graduação em Sistemas de Informação",
    institution: "Instituto Federal de Sergipe (IFS)",
    detail: "TCC: Estudo de dados de atenção básica de saúde no município de Lagarto-SE.",
  },
  {
    period: "2011 — 2015",
    title: "Técnico em Redes de Computadores",
    institution: "Instituto Federal de Sergipe (IFS)",
    detail: "Integrado ao Ensino Médio. Projeto de pesquisa em RFID aplicado a bibliotecas.",
  },
];

export type PublicationKind = "periodico" | "capitulo" | "apresentacao" | "orientacao";

export type Publication = {
  kind: PublicationKind;
  year: number;
  title: string;
  authors?: string;
  venue?: string;
};

export const publicationKinds: Record<PublicationKind, string> = {
  periodico: "Artigo em periódico",
  capitulo: "Capítulo de livro",
  apresentacao: "Apresentação de trabalho",
  orientacao: "Orientação de TCC",
};

export const publications: Publication[] = [
  {
    kind: "periodico",
    year: 2020,
    title: "Modelagem de processos com o BPMN para a melhoria de processos acadêmicos do IFS",
    authors: "FONTES, A. M.; SANTOS, A. C. N.; LIBÓRIO, F. O.",
    venue: "Brazilian Journal of Development, v. 6, p. 41716–41728",
  },
  {
    kind: "capitulo",
    year: 2020,
    title:
      "Modelagem de processos: uma proposta de melhoria para a atuação das equipes de saúde da atenção básica",
    authors: "SANTOS, A. C. N. et al.",
    venue: "Engenharia Elétrica e de Computação — Atena Editora, v. 4, p. 193–205",
  },
  {
    kind: "orientacao",
    year: 2025,
    title:
      "Desenvolvimento de Aplicativo Android com Clean Architecture e MVVM: Estudo com API da Marvel",
    venue: "UNIT",
  },
  {
    kind: "orientacao",
    year: 2025,
    title: "Proposta de Arquitetura Modular e Escalável para Aplicações SaaS com NestJS e CQRS",
    venue: "UNIT",
  },
  {
    kind: "orientacao",
    year: 2025,
    title:
      "Vulnerabilidades e Ataques em Redes Wi-Fi: análise técnica e estudo de caso sobre o KRACK",
    venue: "UNIT",
  },
  {
    kind: "apresentacao",
    year: 2020,
    title: "Desafios e Experiências dos Ex-alunos no Mercado de Trabalho",
    venue: "Conferência",
  },
  {
    kind: "apresentacao",
    year: 2019,
    title: "Modelagem de processos para equipes de saúde da atenção básica",
  },
  {
    kind: "apresentacao",
    year: 2019,
    title: "Meninas Digitais em Sergipe: um despertar para a Informática",
    venue: "Congresso",
  },
  {
    kind: "apresentacao",
    year: 2019,
    title: "ColossusBot: Chatbot para auxiliar o ensino da História da Computação",
    venue: "Simpósio",
  },
  {
    kind: "apresentacao",
    year: 2019,
    title: "Os Cuidados no Uso das Redes Sociais",
    venue: "Conferência",
  },
  {
    kind: "apresentacao",
    year: 2018,
    title: "Modelagem de Processos com BPMN para Melhoria de Processos Acadêmicos do IFS",
  },
  {
    kind: "apresentacao",
    year: 2018,
    title: "Roda de Conversa: Saúde Mental como sistema a ser analisado",
  },
  {
    kind: "apresentacao",
    year: 2013,
    title: "Redes Bayesianas na fusão de classificadores para localização de placas de licença",
  },
];

export const outreach = [
  {
    tag: "Liga Acadêmica",
    title: "LICODE — Ladies in Code",
    period: "2025 — Atual · Coordenadora na UNIT",
    text: "Inclusão de mulheres na computação: palestras, minicursos, mentorias e cursos introdutórios de programação para meninas do ensino médio.",
    href: "https://meninas.sbc.org.br/projetos-parceiros/licode/",
  },
  {
    tag: "Projeto de Extensão",
    title: "Capacitação Digital de Jovens",
    period: "2025 — Atual · Coordenadora",
    text: "Capacitação de estudantes do ensino fundamental II e médio em ferramentas digitais.",
  },
  {
    tag: "Projeto de Extensão",
    title: "Meninas Digitais — Regional",
    period: "2018 — 2019 · Coordenadora",
    text: "Despertar meninas do ensino fundamental e médio para carreiras em computação.",
  },
  {
    tag: "Produção Técnica",
    title: "Cursos Ministrados",
    period: "2018 — 2019",
    text: "Introdução ao IBM Watson Assistant (2019) · Scratch (2018).",
  },
];

export type Job = {
  organization: string;
  period: string;
  roles: { title: string; period: string; text: string }[];
  stack?: string[];
};

export const experience: Job[] = [
  {
    organization: "Sergipe Parque Tecnológico — SergipeTec",
    period: "2020 — Atual",
    roles: [
      {
        title: "Analista de Sistemas (.NET)",
        period: "2022 — Atual",
        text: "Atuação no segmento acadêmico da Rede de Educação do Estado de Sergipe. Levantamento de requisitos, documentação de diagramas, mapeamento de processos, manutenção e desenvolvimento de sistemas acadêmicos, consultas em SQL Server e PostgreSQL, geração de documentos para políticas internas.",
      },
      {
        title: "Programadora de Sistemas (C#)",
        period: "2020 — 2022",
        text: "Desenvolvimento Front-End e Back-End com C#, JavaScript e HTML para o segmento administrativo. Levantamento de requisitos, banco de dados SQL Server/Postgres e relatórios em JASPER.",
      },
    ],
    stack: ["C#", ".NET", "JavaScript", "HTML", "SQL Server", "PostgreSQL", "Jasper"],
  },
  {
    organization: "ITSolved Soluções em Tecnologia",
    period: "2018 — 2020",
    roles: [
      {
        title: "Auxiliar de Programação — Banco de Dados",
        period: "2019 — 2020",
        text: "Desenvolvimento e manutenção de procedimentos em banco de dados, elicitação de requisitos e suporte técnico avançado.",
      },
      {
        title: "Estágio em Análise de Sistemas",
        period: "2018 — 2019",
        text: "Elicitação de requisitos, análise de processos, desenvolvimento e manutenção de consultas em banco de dados.",
      },
    ],
  },
  {
    organization: "Instituto Federal de Sergipe — PROPEX",
    period: "2017 — 2018",
    roles: [
      {
        title: "Bolsista — Suporte em Desenvolvimento de Sistema",
        period: "2017 — 2018",
        text: "Suporte e manutenção avançada ao SISPUBLI, sistema de gestão de programas, eventos e editais de pesquisa, extensão e inovação do IFS.",
      },
    ],
  },
  {
    organization: "CNPq — Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    period: "2013 — 2014",
    roles: [
      {
        title: "Bolsista — Pesquisadora",
        period: "2013 — 2014",
        text: "Iniciação científica em projetos de identificação por rádio frequência (RFID) aplicados à acessibilidade e segurança em bibliotecas.",
      },
    ],
  },
];

export const skillGroups = [
  {
    key: "eng",
    title: "Engenharia de Software",
    items: [
      "Modelagem de Sistemas",
      "Modelagem de Processos (BPMN)",
      "Arquitetura de Software",
      "Desenvolvimento Seguro",
      "C# / .NET",
      "SQL Server & PostgreSQL",
    ],
  },
  {
    key: "ux",
    title: "Experiência do Usuário",
    items: [
      "UX Research",
      "UX Design",
      "UI Design",
      "IXD — Interaction Design",
      "IHC",
      "Design Thinking",
    ],
  },
  {
    key: "edu",
    title: "Ensino & Pesquisa",
    items: [
      "Docência Graduação & Pós",
      "Orientação Acadêmica",
      "Produção Científica",
      "Metodologias Ativas",
      "Gestão do Conhecimento",
      "Extensão Universitária",
    ],
  },
  {
    key: "bpm",
    title: "Processos & Gestão",
    items: [
      "BPM — Business Process Management",
      "Sistema de Informação Executivo",
      "Gestão de TI",
      "Documentação de Processos",
      "Levantamento de Requisitos",
      "Automação",
    ],
  },
] as const;

export const events = [
  { year: 2025, title: "Feira de Vestibular UNIT", role: "Organização" },
  { year: 2024, title: "Feira de Vestibular UNIT", role: "Organização" },
  { year: 2019, title: "International Women's Day — WTM", role: "Participação" },
  { year: 2019, title: "XIX Escola Regional de Computação BA-AL-SE", role: "Participação" },
  { year: 2018, title: "IFS DEV CONF", role: "Organização" },
  {
    year: 2018,
    title: "XVIII Escola Regional de Computação BA-AL-SE",
    role: "Organização & Participação",
  },
  { year: 2017, title: "Workshop de Automação Industrial / Eng. Elétrica", role: "Organização" },
  { year: 2017, title: "Conferência JavaScript Brasil", role: "Participação" },
  { year: 2013, title: "Semana Nacional de Ciência e Tecnologia de Sergipe", role: "Participação" },
];
