import { SectionHeading } from "@/components/section-heading";
import { stack } from "@/content/stack";

/**
 * Lista de tecnologias no formato de ficha técnica, com calha de numeração.
 *
 * Sem barra de proficiência e sem parede de logos: "React 80%" não é falseável
 * e é um dos sinais mais reconhecíveis de template. Toda tecnologia listada
 * aparece como tag em pelo menos um projeto, então é verificável abrindo o
 * código.
 *
 * A identidade de desenvolvedor vem da estrutura, não de ornamento: numeração
 * em mono numa calha à esquerda, régua vertical separando calha de conteúdo,
 * réguas finas entre as linhas. É a forma de um editor de código -- e é a mesma
 * numeração em mono já usada nos índices de seção, então estende um sistema que
 * já existe em vez de inventar um efeito novo.
 *
 * O realce no hover não é enfeite: as linhas são largas, e ligar o rótulo da
 * esquerda aos valores da direita fica mais fácil com a linha destacada. É o
 * mesmo motivo pelo qual um editor destaca a linha ativa.
 */
export function Stack() {
  return (
    <section
      id="stack"
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice="03" titulo="Stack" />

      <div className="relative mt-10">
        {/* Régua da calha. Mais leve que as réguas horizontais para não
            competir com elas. */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-10 w-px bg-border/60"
        />

        <dl className="divide-y border-y">
          {stack.map((grupo, indice) => (
            <div
              key={grupo.titulo}
              className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-4 gap-y-2 py-5 transition-colors hover:bg-muted sm:grid-cols-[2.5rem_10rem_1fr] sm:gap-x-6 sm:py-6"
            >
              <span
                aria-hidden="true"
                className="row-span-2 pr-4 text-right label-mono tabular-nums transition-colors group-hover:text-foreground sm:row-span-1 sm:pt-0.5"
              >
                {String(indice + 1).padStart(2, "0")}
              </span>

              <dt className="label-mono sm:pt-0.5">{grupo.titulo}</dt>

              <dd className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
                {grupo.itens.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
