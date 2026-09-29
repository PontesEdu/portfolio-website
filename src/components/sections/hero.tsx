import Image from "next/image";

import { SocialButton } from "@/components/social-button";
import { Button } from "@/components/ui/button";
import { perfil } from "@/content/perfil";

/**
 * Primeira tela.
 *
 * Regras que moldam este componente:
 *
 * - Sem animação de entrada. O <h1> é quase certamente o elemento de LCP, e
 *   começar com opacity 0 adia a métrica até a hidratação terminar.
 * - O espaçamento é mais apertado no mobile porque nome, cargo, resumo e CTAs
 *   precisam caber acima da dobra também em 375x667.
 * - A foto só aparece a partir de `lg`. Em tela estreita ela empurraria o que
 *   o recrutador precisa ler para fora da primeira tela, e o que ele precisa
 *   ler vale mais do que um retrato.
 */

const linksExternos = [
  { label: "GitHub", href: perfil.github, cor: "github" },
  { label: "LinkedIn", href: perfil.linkedin, cor: "linkedin" },
] as const;

export function Hero() {
  return (
    <section className="container-page pt-10 pb-14 sm:pt-20 sm:pb-24">
      <div className="flex items-center gap-14">
        <div className="min-w-0 flex-1">
          <p className="flex items-start gap-2 label-mono">
            {/* Indicador de estado, não enfeite: disponibilidade é o primeiro
                filtro de um recrutador. */}
            <span
              aria-hidden="true"
              className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary"
            />
            {perfil.objetivo}
          </p>

          <h1 className="mt-5 text-4xl font-semibold text-balance sm:mt-6 sm:text-5xl lg:text-6xl">
            {perfil.nome}
          </h1>

          <p className="mt-4 text-lg font-semibold text-link sm:mt-5 sm:text-2xl">
            {perfil.cargo}
            <span className="font-normal text-muted-foreground">
              {" "}
              · {perfil.localizacao}
            </span>
          </p>

          <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground sm:text-lg">
            {perfil.resumo}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <Button asChild size="lg">
              <a href="#projetos">Ver projetos</a>
            </Button>

            {linksExternos.map((link) => (
              <SocialButton key={link.label} {...link} size="lg" />
            ))}
          </div>
        </div>

        {/* O anel em duas camadas separa a foto do fundo sem sombra, que não
            funcionaria no tema escuro. */}
        <div className="hidden shrink-0 lg:block">
          <div className="rounded-full p-1.5 ring-1 ring-border">
            <Image
              src={perfil.foto}
              alt={`Retrato de ${perfil.nome}`}
              width={320}
              height={320}
              // Carrega junto com a pagina, mas sem prioridade alta: quem
              // manda no LCP e o titulo, e a foto nao deve disputar banda com
              // a fonte que o desenha. (`priority` foi depreciado no Next 16.)
              loading="eager"
              className="size-64 rounded-full object-cover object-[center_28%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
