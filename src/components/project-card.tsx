import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Projeto } from "@/content/projetos";

/**
 * Card em texto, sem imagem.
 *
 * Nenhum dos três projetos tem captura de tela publicável, e um placeholder
 * genérico barateia a página mais do que a ausência de imagem. Portfólios
 * fortes usam cards só de texto quando a descrição é precisa -- então a
 * descrição precisa ser precisa.
 *
 * O card inteiro é o link, e o `after` estica a área clicável por cima de tudo:
 * assim o alvo de toque é o bloco todo, sem aninhar links, o que seria HTML
 * inválido e um pesadelo para navegação por teclado.
 */
export function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <li className="group relative rounded-lg border p-6 transition-colors focus-within:ring-2 focus-within:ring-ring hover:bg-card sm:p-8">
      <h3 className="text-xl font-semibold">
        <Link
          href={`/projetos/${projeto.slug}`}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {projeto.nome}
        </Link>
      </h3>

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

      <p className="mt-6 flex items-center gap-1.5 text-sm font-medium text-link">
        Ver o case
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        />
      </p>
    </li>
  );
}
