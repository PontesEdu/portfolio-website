"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navegacao } from "@/content/perfil";

/**
 * Menu de navegação em telas pequenas.
 *
 * O painel é a primitiva Sheet do shadcn, sobre o Dialog do Radix: ela já
 * resolve foco preso enquanto aberto, fechamento por Escape, devolução do foco
 * ao gatilho e bloqueio do scroll do fundo. Reimplementar isso à mão é onde a
 * maioria dos menus mobile quebra acessibilidade.
 *
 * SheetClose envolve cada link para que o painel feche ao navegar.
 */
export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="label-mono">Navegação</SheetTitle>
        </SheetHeader>

        <nav aria-label="Seções do site">
          <ul className="flex flex-col px-4">
            {navegacao.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
