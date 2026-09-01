import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { cursos, trajetoria } from "@/content/experiencia";
import { perfil } from "@/content/perfil";

/**
 * Experiência, formação e cursos numa linha do tempo única.
 *
 * Separadas em três seções, cada uma ficaria pela metade -- e seção pela metade
 * é o que faz um portfólio júnior parecer inflado. Juntas, contam uma história
 * contínua e cheia.
 *
 * O trilho é uma div própria em vez de `border-l` para poder terminar em
 * gradiente: a linha se dissolve no fim em vez de parar seca, sugerindo que a
 * trajetória continua. O nó de cada entrada tem um anel da cor do fundo, o que
 * faz o trilho parecer passar por trás dele.
 */
export function Trajetoria() {
  return (
    <section
      id="trajetoria"
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice="04" titulo="Trajetória" />

      {/* O trilho fica fora do <ol> de proposito: uma lista ordenada so pode
          conter <li>, e um <div> solto ali dentro seria HTML invalido. */}
      <div className="relative mt-10">
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-0 left-0 w-px bg-linear-to-b from-border via-border to-transparent"
        />

        <ol className="space-y-12 pl-8">
          {trajetoria.map((entrada) => (
            <li
              key={`${entrada.organizacao}-${entrada.titulo}`}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute top-1 -left-8 flex size-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-background"
              >
                <span
                  className={
                    entrada.atual
                      ? "size-2 rounded-full bg-primary"
                      : "size-2 rounded-full border border-muted-foreground/60"
                  }
                />
              </span>

              <p className="label-mono tabular-nums">{entrada.periodo}</p>

              <h3 className="mt-2 text-lg font-semibold">{entrada.titulo}</h3>
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
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14 border-t pt-8">
        <h3 className="label-mono">Cursos concluídos</h3>
        <p className="mt-3 max-w-[66ch] text-sm leading-relaxed text-muted-foreground">
          Os sete abaixo são uma amostra — os que mais se conectam ao que faço
          hoje, cada um com link para o certificado. Ao todo são cerca de 50
          cursos concluídos na Alura, além das trilhas da Rocketseat e de outros
          cursos; parte dos certificados também está no{" "}
          <a
            href={perfil.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-link underline underline-offset-4"
          >
            meu LinkedIn
          </a>
          .
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
