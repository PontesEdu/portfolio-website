import { perfil } from "@/content/perfil";

/**
 * Links em texto, não botões de ícone.
 *
 * O lucide-react v1 deixou de publicar ícones de marca, e a alternativa --
 * colar SVGs do GitHub e do LinkedIn à mão -- não valeria a pena: texto é mais
 * legível, dispensa `aria-label`, e dá um alvo de toque bem maior que um ícone
 * de 16px.
 */
const links = [
  { label: "GitHub", href: perfil.github },
  { label: "LinkedIn", href: perfil.linkedin },
  { label: "E-mail", href: `mailto:${perfil.email}` },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">{perfil.nome}</p>
          {/* Creditar as ferramentas do próprio site é hábito da comunidade e
              adianta ao revisor técnico o que ele vai encontrar no repositório. */}
          <p className="mt-2 label-mono normal-case">
            Next.js · TypeScript · Tailwind CSS
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
          {links.map(({ label, href }) => {
            const externo = !href.startsWith("mailto:");

            return (
              <li key={label}>
                <a
                  href={href}
                  target={externo ? "_blank" : undefined}
                  rel={externo ? "noreferrer" : undefined}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
