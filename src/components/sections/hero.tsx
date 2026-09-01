import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { perfil } from "@/content/perfil";

/**
 * Primeira tela.
 *
 * Regras que moldam este componente:
 *
 * - Sem animação de entrada. O <h1> é quase certamente o elemento de LCP, e
 *   começar com opacity 0 adia a métrica até a hidratação terminar.
 * - Sem imagem. Texto puro evita o modo de falha mais comum de um hero, que é
 *   uma ilustração genérica de banco de imagens.
 * - O espaçamento é mais apertado no mobile porque nome, cargo, resumo, stack e
 *   CTAs precisam caber acima da dobra também em 375x667.
 * - O padding inferior é contido de propósito: a seção seguinte precisa
 *   aparecer na dobra para sinalizar que a página continua.
 */

const linksExternos = [
  { label: "GitHub", href: perfil.github },
  { label: "LinkedIn", href: perfil.linkedin },
];

export function Hero() {
  return (
    <section className="container-page pt-10 pb-14 sm:pt-20 sm:pb-24">
      <p className="flex items-start gap-2 label-mono">
        {/* Indicador de estado, não enfeite: disponibilidade é o primeiro
            filtro de um recrutador. Por isso usa a cor de destaque.
            O mt alinha o ponto ao centro da primeira linha quando o texto
            quebra em duas. */}
        <span
          aria-hidden="true"
          className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary"
        />
        {perfil.objetivo}
      </p>

      <h1 className="mt-5 text-4xl font-semibold text-balance sm:mt-6 sm:text-5xl lg:text-6xl">
        {perfil.nome}
      </h1>

      <p className="mt-5 max-w-[60ch] text-lg font-medium sm:mt-6 sm:text-2xl">
        {perfil.cargo} em {perfil.localizacao}.
      </p>

      <p className="mt-3 max-w-[60ch] leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
        {perfil.resumo}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
        <Button asChild size="lg">
          <a href="#projetos">Ver projetos</a>
        </Button>

        {linksExternos.map(({ label, href }) => (
          <Button key={label} asChild variant="outline" size="lg">
            <a href={href} target="_blank" rel="noreferrer">
              {label}
              {/* Uma propriedade muda no hover. A seta também comunica que o
                  link sai do site. */}
              <ArrowUpRight
                className="size-4 transition-transform duration-200 ease-out group-hover/button:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Button>
        ))}
      </div>

      <div className="mt-10 border-t border-border pt-4 sm:mt-14 sm:pt-5">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {perfil.stackPrincipal.map((tecnologia) => (
            <li key={tecnologia} className="label-mono">
              {tecnologia}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
