import { GithubIcon, GmailIcon, LinkedinIcon } from "@/components/brand-icons";
import { perfil } from "@/content/perfil";

/**
 * Os ícones de marca aparecem só aqui.
 *
 * No hero e no contato os links são botões com rótulo, onde a marca entra como
 * um ponto colorido. No rodapé o espaço é curto e a repetição dos mesmos
 * destinos já foi apresentada acima -- aqui o ícone identifica mais rápido do
 * que o texto, e o rótulo fica ao lado para quem não reconhece a marca.
 */
const links = [
  {
    label: "GitHub",
    href: perfil.github,
    cor: "var(--marca-github)",
    Icone: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: perfil.linkedin,
    cor: "var(--marca-linkedin)",
    Icone: LinkedinIcon,
  },
  {
    label: "E-mail",
    href: `mailto:${perfil.email}`,
    cor: "var(--marca-gmail)",
    Icone: GmailIcon,
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="container-page flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium">{perfil.nome}</p>

        <ul className="-mx-2 flex flex-wrap items-center">
          {links.map(({ label, href, cor, Icone }) => {
            const externo = !href.startsWith("mailto:");

            return (
              <li key={label}>
                <a
                  href={href}
                  target={externo ? "_blank" : undefined}
                  rel={externo ? "noreferrer" : undefined}
                  className="flex items-center gap-2 rounded-md px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Icone className="size-4 shrink-0" style={{ color: cor }} />
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
