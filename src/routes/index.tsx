import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { About } from "@/components/site/about";
import { Contact, Footer } from "@/components/site/contact";
import { Education } from "@/components/site/education";
import { Experience } from "@/components/site/experience";
import { Hero, Marquee } from "@/components/site/hero";
import { Nav } from "@/components/site/nav";
import { Research } from "@/components/site/research";
import { Events, Skills } from "@/components/site/skills";
import { Teaching } from "@/components/site/teaching";
import { focusAreas, profile } from "@/content/portfolio";

const title = `${profile.name} — Engenharia de Software, UX & IHC`;
const description =
  "Portfólio acadêmico e profissional de Ana Carla do Nascimento Santos: Mestra em Ciência da Computação, docente e pesquisadora em Engenharia de Software, UX/UI, IHC e Desenvolvimento Seguro.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Docente e Analista de Sistemas",
  description,
  knowsAbout: focusAreas,
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidade Federal de Sergipe" },
    { "@type": "CollegeOrUniversity", name: "Instituto Federal de Sergipe" },
  ],
  address: { "@type": "PostalAddress", addressRegion: "SE", addressCountry: "BR" },
  sameAs: Object.values(profile.links),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: profile.name },
      {
        property: "og:description",
        content:
          "Docente, pesquisadora e analista de sistemas — Engenharia de Software, UX/UI, IHC e Desenvolvimento Seguro.",
      },
      { property: "og:type", content: "profile" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personSchema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#sobre"
        className="sr-only z-[80] rounded-full bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <div className="grain overflow-x-clip bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Teaching />
          <Education />
          <Research />
          <Experience />
          <Skills />
          <Events />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
