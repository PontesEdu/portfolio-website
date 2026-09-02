import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Botão para um perfil externo, com um marcador na cor da marca.
 *
 * A regra do projeto é usar uma cor de destaque só. Este é o segundo desvio
 * consciente dela, junto com o selo de disponibilidade: o ponto colorido não
 * decora, ele identifica o destino antes da leitura do rótulo -- que é
 * exatamente o que se quer de um link para perfil.
 *
 * O desvio fica contido: a cor da marca aparece só no marcador de 6px. O botão
 * continua neutro, então a página não vira uma colcha de cores de terceiros.
 * O ponto é `aria-hidden` porque o rótulo já diz para onde o link vai.
 */
export function SocialButton({
  label,
  href,
  cor,
  size,
}: {
  label: string;
  href: string;
  /** Nome do token de cor da marca, sem o prefixo `--marca-`. */
  cor: "github" | "linkedin";
  size?: "default" | "lg";
}) {
  return (
    <Button asChild variant="outline" size={size}>
      <a href={href} target="_blank" rel="noreferrer">
        <span
          aria-hidden="true"
          className="size-1.5 shrink-0 rounded-full"
          style={{ background: `var(--marca-${cor})` }}
        />
        {label}
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-out group-hover/button:translate-x-0.5"
        />
      </a>
    </Button>
  );
}
