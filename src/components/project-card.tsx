import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Projeto } from "@/content/projetos";

/**
 * Card em texto, sem imagem.
 *
 * Nenhum projeto tem captura de tela publicável, e um placeholder genérico
 * barateia a página mais do que a ausência de imagem. Portfólios fortes usam
 * cards só de texto quando a descrição é precisa -- então a descrição precisa
 * ser precisa.
 *
 * Os links ficam em botões separados em vez de o card inteiro ser clicável:
 * cada destino é externo e explícito, e não há uma página interna que seria o
 * alvo natural de um clique no bloco todo.
 */
export function ProjectCard({ projeto }: { projeto: Projeto }) {
  const links = [
    { label: "Repositório", href: projeto.repositorio },
    ...(projeto.demo ? [{ label: "Ver no ar", href: projeto.demo }] : []),
    ...(projeto.externo ? [projeto.externo] : []),
  ];

  return (
    <li className="rounded-lg border p-6 transition-colors hover:bg-card sm:p-8">
      <h3 className="text-xl font-semibold">{projeto.nome}</h3>

      <p className="mt-3 max-w-[60ch] leading-relaxed text-muted-foreground">
        {projeto.descricao}
      </p>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
        {projeto.stack.map((tecnologia) => (
          <li key={tecnologia} className="label-mono">
            {tecnologia}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {links.map(({ label, href }) => (
          <Button key={label} asChild variant="outline" size="sm">
            <a href={href} target="_blank" rel="noreferrer">
              {label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 ease-out group-hover/button:translate-x-0.5"
              />
            </a>
          </Button>
        ))}
      </div>
    </li>
  );
}
