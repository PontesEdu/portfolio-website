import { Hero } from "@/components/sections/hero";

/**
 * Home.
 *
 * O Hero é definitivo. As seções abaixo ainda são andaimes com os ids corretos,
 * para a navegação por âncora continuar funcionando enquanto as Fases 4 a 6 não
 * as substituem.
 */

const secoesPendentes = [
  { id: "projetos", titulo: "Projetos", fase: "Fase 5" },
  { id: "sobre", titulo: "Sobre", fase: "Fase 4" },
  { id: "stack", titulo: "Stack", fase: "Fase 4" },
  { id: "trajetoria", titulo: "Trajetória", fase: "Fase 4" },
  { id: "contato", titulo: "Contato", fase: "Fase 6" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {secoesPendentes.map((secao) => (
        <section
          key={secao.id}
          id={secao.id}
          className="container-page scroll-mt-24 border-t py-14"
        >
          <p className="label-mono">{secao.fase}</p>
          <h2 className="mt-2 text-2xl font-semibold">{secao.titulo}</h2>
          <p className="mt-3 max-w-[66ch] text-muted-foreground">
            Seção ainda não construída.
          </p>
        </section>
      ))}
    </>
  );
}
