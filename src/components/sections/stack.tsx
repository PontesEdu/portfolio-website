import { SectionHeading } from "@/components/section-heading";
import { stack } from "@/content/stack";

/**
 * Lista agrupada, sem barra de proficiência e sem parede de logos.
 *
 * "React 80%" não é falseável e é um dos sinais mais reconhecíveis de template.
 * Aqui cada item é uma afirmação simples, e toda tecnologia listada aparece
 * como tag em pelo menos um projeto -- então é verificável abrindo o código.
 */
export function Stack() {
  return (
    <section
      id="stack"
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice="03" titulo="Stack" />

      <dl className="mt-10 space-y-8">
        {stack.map((grupo) => (
          <div
            key={grupo.titulo}
            className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <dt className="label-mono sm:pt-1.5">{grupo.titulo}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {grupo.itens.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
