import { SectionHeading } from "@/components/section-heading";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Stack } from "@/components/sections/stack";
import { Trajetoria } from "@/components/sections/trajetoria";

/**
 * Home.
 *
 * Projetos e Contato ainda são andaimes com os ids corretos, para a navegação
 * por âncora seguir funcionando até as Fases 5 e 6 substituírem cada um.
 */

const secoesPendentes = [
  { id: "projetos", indice: "01", titulo: "Projetos", fase: "Fase 5" },
  { id: "contato", indice: "05", titulo: "Contato", fase: "Fase 6" },
];

function SecaoPendente({
  id,
  indice,
  titulo,
  fase,
}: (typeof secoesPendentes)[number]) {
  return (
    <section
      id={id}
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice={indice} titulo={titulo} />
      <p className="mt-4 max-w-[66ch] text-muted-foreground">
        Seção construída na {fase}.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <SecaoPendente {...secoesPendentes[0]} />
      <Sobre />
      <Stack />
      <Trajetoria />
      <SecaoPendente {...secoesPendentes[1]} />
    </>
  );
}
