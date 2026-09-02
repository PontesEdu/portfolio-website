"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

/**
 * E-mail com clique para copiar.
 *
 * A API de área de transferência só existe em contexto seguro e pode ser
 * negada pelo navegador, então o link "Abrir no e-mail" ao lado não é um
 * fallback escondido: ele está sempre visível. Se copiar falhar, o caminho
 * alternativo já está na tela.
 *
 * O retorno visual não basta -- quem usa leitor de tela também precisa saber
 * que a cópia funcionou, e é para isso que serve a região com `aria-live`.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!copiado) return;

    const tempo = setTimeout(() => setCopiado(false), 2000);
    return () => clearTimeout(tempo);
  }, [copiado]);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(email);
      setCopiado(true);
    } catch {
      // Contexto inseguro ou permissão negada: o link ao lado resolve.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline" onClick={copiar}>
        <span className="font-mono">{email}</span>
        {copiado ? (
          <Check className="size-4" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
      </Button>

      <Button asChild variant="ghost">
        <a href={`mailto:${email}`}>Abrir no e-mail</a>
      </Button>

      <span aria-live="polite" className="sr-only">
        {copiado ? "E-mail copiado para a área de transferência." : ""}
      </span>
    </div>
  );
}
