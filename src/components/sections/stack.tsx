import { SectionHeading } from "@/components/section-heading";
import { stack } from "@/content/stack";

/**
 * Lista de tecnologias no formato de ficha técnica.
 *
 * Sem barra de proficiência e sem parede de logos: "React 80%" não é falseável
 * e é um dos sinais mais reconhecíveis de template. Toda tecnologia listada
 * aparece como tag em pelo menos um projeto, então é verificável abrindo o
 * código.
 *
 * A escolha visual é deliberada: rótulo em mono à esquerda, valores em mono à
 * direita, separados por réguas de 1px. É a linguagem de uma ficha técnica ou
 * de um arquivo de configuração -- reconhecível para quem programa, e mais
 * caracterizada do que uma sopa de chips arredondados, que é o padrão de
 * template. A textura vem da tipografia e do espaço, não de ornamento.
 */
export function Stack() {
  return (
    <section
      id="stack"
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice="03" titulo="Stack" />

      <dl className="mt-10 divide-y border-y">
        {stack.map((grupo) => (
          <div
            key={grupo.titulo}
            className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8 sm:py-6"
          >
            <dt className="label-mono sm:pt-0.5">{grupo.titulo}</dt>
            <dd className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
              {grupo.itens.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
