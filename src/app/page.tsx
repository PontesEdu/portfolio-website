import { perfil } from "@/content/perfil";
import { stack } from "@/content/stack";

/**
 * Página temporária.
 *
 * Serve para validar as rampas de cor, a tipografia e agora a navegação por
 * âncora e por teclado. As seções abaixo são só andaimes com os ids corretos --
 * cada uma é substituída pela seção real nas Fases 3 a 6.
 */

const passos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const secoesPendentes = [
  { id: "projetos", titulo: "Projetos", fase: "Fase 5" },
  { id: "sobre", titulo: "Sobre", fase: "Fase 4" },
  { id: "trajetoria", titulo: "Trajetória", fase: "Fase 4" },
  { id: "contato", titulo: "Contato", fase: "Fase 6" },
];

export default function Home() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-semibold sm:text-5xl">{perfil.nome}</h1>
      <p className="mt-3 label-mono">
        {perfil.cargo} · {perfil.localizacao}
      </p>

      <p className="mt-8 max-w-[66ch] text-lg leading-relaxed">
        {perfil.resumo}
      </p>
      <p className="mt-4 max-w-[66ch] leading-relaxed text-muted-foreground">
        {perfil.bio}
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Rampa neutra</h2>
        <div className="mt-4 flex overflow-hidden rounded-lg border border-border">
          {passos.map((passo) => (
            <div
              key={passo}
              className="flex h-14 flex-1 items-end justify-center pb-1 font-mono text-[10px] text-muted-foreground"
              style={{ background: `var(--neutral-${passo})` }}
            >
              {passo}
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="mt-16 scroll-mt-24">
        <p className="label-mono">Seção</p>
        <h2 className="mt-2 text-2xl font-semibold">Stack</h2>
        <div className="mt-6 space-y-5">
          {stack.map((grupo) => (
            <div key={grupo.titulo}>
              <p className="label-mono">{grupo.titulo}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {grupo.itens.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-card px-2 py-1 font-mono text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {secoesPendentes.map((secao) => (
        <section
          key={secao.id}
          id={secao.id}
          className="mt-16 scroll-mt-24 border-t border-border pt-10"
        >
          <p className="label-mono">{secao.fase}</p>
          <h2 className="mt-2 text-2xl font-semibold">{secao.titulo}</h2>
          <p className="mt-3 max-w-[66ch] text-muted-foreground">
            Seção ainda não construída. O andaime existe para validar a
            navegação por âncora e o comportamento do header fixo.
          </p>
        </section>
      ))}
    </div>
  );
}
