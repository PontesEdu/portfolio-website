import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { perfil } from "@/content/perfil";
import { stack } from "@/content/stack";

/**
 * Pagina temporaria da Fase 1.
 *
 * Existe apenas para validar visualmente as duas rampas de cor, a tipografia e
 * a troca de tema antes de as secoes reais serem construidas. E substituida
 * pela home na Fase 3.
 */

const passos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Rampa({ nome, prefixo }: { nome: string; prefixo: string }) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs text-muted-foreground uppercase">
        {nome}
      </p>
      <div className="flex overflow-hidden rounded-md border border-border">
        {passos.map((passo) => (
          <div
            key={passo}
            className="flex h-12 flex-1 items-end justify-center pb-1 font-mono text-[10px] text-muted-foreground"
            style={{ background: `var(--${prefixo}-${passo})` }}
          >
            {passo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-12 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-semibold">{perfil.nome}</h1>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            {perfil.cargo} · {perfil.localizacao}
          </p>
        </div>
        <ThemeToggle />
      </div>

      <p className="max-w-[66ch] text-lg leading-relaxed">{perfil.resumo}</p>
      <p className="mt-4 max-w-[66ch] leading-relaxed text-muted-foreground">
        {perfil.bio}
      </p>

      <section className="mt-14 space-y-6">
        <h2 className="text-2xl font-semibold">Rampas de cor</h2>
        <Rampa nome="Neutro" prefixo="neutral" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground uppercase">
              Superfícies
            </p>
            <div className="space-y-2 rounded-lg border border-border bg-card p-4">
              <p className="text-sm">Card sobre o fundo da página</p>
              <div className="rounded-md border border-border bg-popover p-3">
                <p className="text-sm text-muted-foreground">
                  Superfície sobreposta
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs text-muted-foreground uppercase">
              Interativos
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Button>Primário</Button>
              <Button variant="outline">Contorno</Button>
              <Button variant="ghost">Fantasma</Button>
              <Button variant="destructive">Perigo</Button>
            </div>
            <input
              className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Campo de formulário"
              aria-label="Campo de exemplo"
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-2xl font-semibold">Stack</h2>
        <div className="space-y-4">
          {stack.map((grupo) => (
            <div key={grupo.titulo}>
              <p className="mb-2 font-mono text-xs text-muted-foreground uppercase">
                {grupo.titulo}
              </p>
              <ul className="flex flex-wrap gap-2">
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
    </main>
  );
}
