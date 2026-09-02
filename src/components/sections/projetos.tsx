import { ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { outrosProjetos, projetosDestaque } from "@/content/projetos";

export function Projetos() {
  return (
    <section
      id="projetos"
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice="01" titulo="Projetos" />

      <p className="mt-4 max-w-[66ch] leading-relaxed text-muted-foreground">
        Um plugin em produção, uma API com regras de negócio e testes, e um site
        para um cliente real.
      </p>

      <ul className="mt-10 grid gap-4">
        {projetosDestaque.map((projeto) => (
          <ProjectCard key={projeto.repositorio} projeto={projeto} />
        ))}
      </ul>

      <div className="mt-14 border-t pt-8">
        <h3 className="label-mono">Outros projetos</h3>

        <ul className="mt-6 space-y-1">
          {outrosProjetos.map((projeto) => (
            <li key={projeto.repositorio}>
              <a
                href={projeto.repositorio}
                target="_blank"
                rel="noreferrer"
                className="group -mx-3 block rounded-md px-3 py-3 transition-colors hover:bg-accent"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  {projeto.nome}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  />
                </span>

                <span className="mt-1 block max-w-[66ch] text-sm text-muted-foreground">
                  {projeto.descricao}
                </span>

                <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {projeto.stack.map((tecnologia) => (
                    <span key={tecnologia} className="label-mono">
                      {tecnologia}
                    </span>
                  ))}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
