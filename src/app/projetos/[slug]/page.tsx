import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { perfil } from "@/content/perfil";
import { projetosDestaque } from "@/content/projetos";
import { siteUrl } from "@/lib/site";

function buscarProjeto(slug: string) {
  return projetosDestaque.find((projeto) => projeto.slug === slug);
}

export function generateStaticParams() {
  return projetosDestaque.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const projeto = buscarProjeto(slug);

  if (!projeto) return {};

  const url = `${siteUrl}/projetos/${projeto.slug}`;

  return {
    title: projeto.nome,
    description: projeto.descricao,
    alternates: { canonical: url },
    // Metadata de página substitui o objeto openGraph inteiro em vez de fazer
    // merge com o do layout, então os campos compartilhados são repetidos aqui.
    openGraph: {
      title: `${projeto.nome} — ${perfil.nome}`,
      description: projeto.descricao,
      url,
      type: "article",
    },
  };
}

/** Bloco de texto do case. Cada um é um passo da estrutura de decisão. */
function Bloco({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t py-10">
      <h2 className="label-mono">{titulo}</h2>
      <div className="mt-4 max-w-[66ch] leading-relaxed">{children}</div>
    </section>
  );
}

export default async function PaginaDoProjeto({
  params,
}: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const projeto = buscarProjeto(slug);

  if (!projeto) notFound();

  const links = [
    { label: "Repositório", href: projeto.repositorio },
    ...(projeto.demo ? [{ label: "Demo", href: projeto.demo }] : []),
    ...(projeto.externo ? [projeto.externo] : []),
  ];

  return (
    <article className="container-page py-12 sm:py-16">
      <Link
        href="/#projetos"
        className="inline-flex items-center gap-2 label-mono transition-colors hover:text-foreground"
      >
        <ArrowLeft aria-hidden="true" className="size-3.5" />
        Voltar para projetos
      </Link>

      <h1 className="mt-8 text-4xl font-semibold text-balance sm:text-5xl">
        {projeto.nome}
      </h1>

      <p className="mt-5 max-w-[66ch] text-lg leading-relaxed text-muted-foreground">
        {projeto.descricao}
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        {projeto.stack.map((tecnologia) => (
          <li key={tecnologia} className="label-mono">
            {tecnologia}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        {links.map(({ label, href }) => (
          <Button key={label} asChild variant="outline">
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

      <div className="mt-12">
        <Bloco titulo="Contexto">
          <p>{projeto.contexto}</p>
        </Bloco>

        <Bloco titulo="Arquitetura">
          <p>{projeto.arquitetura}</p>
        </Bloco>

        <section className="border-t py-10">
          <h2 className="label-mono">Decisões técnicas</h2>

          <ol className="mt-6 space-y-8">
            {projeto.decisoes.map((decisao, indice) => (
              <li
                key={decisao.escolha}
                className="grid gap-2 sm:grid-cols-[2.5rem_1fr] sm:gap-6"
              >
                <span
                  aria-hidden="true"
                  className="label-mono tabular-nums sm:pt-1"
                >
                  {String(indice + 1).padStart(2, "0")}
                </span>

                <div className="max-w-[66ch]">
                  <p className="font-medium">{decisao.escolha}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    em vez de {decisao.alternativa}
                  </p>
                  <p className="mt-3 leading-relaxed">
                    <span className="text-muted-foreground">Porque</span>{" "}
                    {decisao.motivo}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <Bloco titulo="O problema difícil">
          <p>{projeto.desafio}</p>
        </Bloco>

        <Bloco titulo="Resultado">
          <p>{projeto.resultado}</p>
        </Bloco>

        <Bloco titulo="O que eu mudaria hoje">
          <p>{projeto.aprendizado}</p>
        </Bloco>
      </div>
    </article>
  );
}
