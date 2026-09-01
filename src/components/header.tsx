import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { navegacao, perfil } from "@/content/perfil";

/**
 * Server Component. Só as duas folhas interativas -- o menu mobile e o botão de
 * tema -- carregam JavaScript para o cliente.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="min-w-0 truncate rounded-sm font-semibold tracking-tight transition-colors hover:text-link"
        >
          {perfil.nome.split(" ").slice(0, 2).join(" ")}
        </Link>

        <nav aria-label="Seções do site" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 label-mono transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
