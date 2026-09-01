import { SectionHeading } from "@/components/section-heading";
import { perfil } from "@/content/perfil";

export function Sobre() {
  return (
    <section
      id="sobre"
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice="02" titulo="Sobre" />

      <div className="mt-8 max-w-[66ch] space-y-5 text-lg leading-relaxed">
        {perfil.sobre.map((paragrafo) => (
          <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
        ))}
      </div>
    </section>
  );
}
