import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { cursos, trajetoria } from "@/content/experiencia";

/**
 * Experiência, formação e cursos numa linha do tempo única.
 *
 * Separadas em três seções, cada uma ficaria pela metade -- e seção pela metade
 * é o que faz um portfólio júnior parecer inflado. Juntas, contam uma história
 * contínua e cheia.
 *
 * O período fica numa coluna própria em telas largas, com `tabular-nums` para
 * os números alinharem entre as linhas.
 */
export function Trajetoria() {
  return (
    <section
      id="trajetoria"
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice="04" titulo="Trajetória" />

      <ol className="mt-10 space-y-10">
        {trajetoria.map((entrada) => (
          <li
            key={`${entrada.organizacao}-${entrada.titulo}`}
            className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <p className="flex items-center gap-2 label-mono tabular-nums sm:pt-1.5">
              {entrada.atual && (
                <span
                  aria-hidden="true"
                  className="inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
              )}
              {entrada.periodo}
            </p>

            <div>
              <h3 className="text-lg font-semibold">{entrada.titulo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {entrada.organizacao}
                {entrada.local ? ` · ${entrada.local}` : ""}
              </p>

              <p className="mt-3 max-w-[66ch] leading-relaxed">
                {entrada.descricao}
              </p>

              {entrada.destaques && (
                <ul className="mt-3 max-w-[66ch] space-y-2 leading-relaxed text-muted-foreground">
                  {entrada.destaques.map((destaque) => (
                    <li key={destaque.slice(0, 40)} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-3 shrink-0 bg-border"
                      />
                      <span>{destaque}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 border-t pt-8">
        <h3 className="label-mono">Cursos concluídos</h3>
        <p className="mt-3 max-w-[66ch] text-sm leading-relaxed text-muted-foreground">
          Certificados da Alura, cada um com link para conferência. Também
          concluí trilhas da Rocketseat de Node.js, TypeScript e React, cujos
          certificados não guardei.
        </p>

        <ul className="mt-6 space-y-1">
          {cursos.map((curso) => (
            <li key={curso.certificado}>
              <a
                href={curso.certificado}
                target="_blank"
                rel="noreferrer"
                className="group -mx-3 flex flex-col gap-1 rounded-md px-3 py-2.5 transition-colors hover:bg-accent sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="flex items-center gap-1.5 text-sm">
                  {curso.titulo}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  />
                </span>
                <span className="shrink-0 label-mono tabular-nums">
                  {curso.cargaHoraria} · {curso.conclusao}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
