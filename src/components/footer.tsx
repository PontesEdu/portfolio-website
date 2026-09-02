import { perfil } from "@/content/perfil";

/**
 * Links em texto, não botões de ícone.
 *
 * O lucide-react v1 deixou de publicar ícones de marca, e colar SVGs do GitHub
 * e do LinkedIn à mão não valeria a pena: texto é mais legível, dispensa
 * `aria-label`, e dá um alvo de toque bem maior que um ícone de 16px.
 *
 * Cada link leva um ponto na cor do serviço, como no hero e no contato. O
 * e-mail usa a cor de destaque do próprio site: é o canal que é nosso, não de
 * terceiros.
 */
const links = [
  { label: "GitHub", href: perfil.github, cor: "var(--marca-github)" },
  { label: "LinkedIn", href: perfil.linkedin, cor: "var(--marca-linkedin)" },
  { label: "E-mail", href: `mailto:${perfil.email}`, cor: "var(--link)" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="container-page flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium">{perfil.nome}</p>

        <ul className="-mx-2 flex flex-wrap items-center">
          {links.map(({ label, href, cor }) => {
            const externo = !href.startsWith("mailto:");

            return (
              <li key={label}>
                <a
                  href={href}
                  target={externo ? "_blank" : undefined}
                  rel={externo ? "noreferrer" : undefined}
                  className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full"
                    style={{ background: cor }}
                  />
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
