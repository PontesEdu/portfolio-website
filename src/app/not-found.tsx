import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-start justify-center py-32">
      <p className="label-mono">Erro 404</p>
      <h1 className="mt-4 text-4xl font-semibold">Página não encontrada</h1>
      <p className="mt-3 max-w-[66ch] text-muted-foreground">
        O endereço que você abriu não existe ou foi movido.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Voltar para o início</Link>
      </Button>
    </div>
  );
}
