import { Reveal } from "@/components/reveal";
import { Contato } from "@/components/sections/contato";
import { Hero } from "@/components/sections/hero";
import { Projetos } from "@/components/sections/projetos";
import { Sobre } from "@/components/sections/sobre";
import { Stack } from "@/components/sections/stack";
import { Trajetoria } from "@/components/sections/trajetoria";
import { perfil } from "@/content/perfil";
import { projetosDestaque } from "@/content/projetos";
import { stack } from "@/content/stack";
import { siteUrl } from "@/lib/site";

/**
 * Dados estruturados para buscadores e rastreadores.
 *
 * Vai num <script> puro, não no next/script: é dado estruturado, não código
 * executável. O `<` é escapado porque o conteúdo entra via
 * dangerouslySetInnerHTML.
 */
const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: perfil.nome,
  jobTitle: perfil.cargo,
  description: perfil.resumo,
  email: `mailto:${perfil.email}`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [perfil.github, perfil.linkedin],
  knowsAbout: stack.flatMap((grupo) => grupo.itens),
  subjectOf: projetosDestaque.map((projeto) => ({
    "@type": "SoftwareSourceCode",
    name: projeto.nome,
    description: projeto.descricao,
    codeRepository: projeto.repositorio,
    programmingLanguage: projeto.stack,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dadosEstruturados).replace(/</g, "\\u003c"),
        }}
      />

      {/* O hero fica fora do Reveal: é o elemento de LCP. */}
      <Hero />

      <Reveal>
        <Projetos />
      </Reveal>
      <Reveal>
        <Sobre />
      </Reveal>
      <Reveal>
        <Stack />
      </Reveal>
      <Reveal>
        <Trajetoria />
      </Reveal>
      <Reveal>
        <Contato />
      </Reveal>
    </>
  );
}
