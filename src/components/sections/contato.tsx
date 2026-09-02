import { FileText } from "lucide-react";

import { CopyEmail } from "@/components/copy-email";
import { SectionHeading } from "@/components/section-heading";
import { SocialButton } from "@/components/social-button";
import { Button } from "@/components/ui/button";
import { perfil } from "@/content/perfil";

/**
 * Sem formulário de contato.
 *
 * Um formulário exigiria backend, e formulário que não envia é pior do que
 * formulário nenhum: o candidato acha que mandou a mensagem e ela não chega.
 * E-mail e LinkedIn são o que recrutador espera encontrar.
 */

const redes = [
  { label: "LinkedIn", href: perfil.linkedin, cor: "linkedin" },
  { label: "GitHub", href: perfil.github, cor: "github" },
] as const;

export function Contato() {
  return (
    <section
      id="contato"
      className="container-page scroll-mt-24 border-t py-16 sm:py-20"
    >
      <SectionHeading indice="05" titulo="Contato" />

      <p className="mt-4 max-w-[66ch] text-lg leading-relaxed">
        {perfil.objetivo}. Se fizer sentido conversar, o caminho mais rápido é o
        e-mail.
      </p>

      <div className="mt-8">
        <CopyEmail email={perfil.email} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {redes.map((rede) => (
          <SocialButton key={rede.label} {...rede} />
        ))}

        <Button asChild variant="outline">
          <a href={perfil.curriculo} target="_blank" rel="noreferrer">
            <FileText className="size-4" aria-hidden="true" />
            Currículo em PDF
          </a>
        </Button>
      </div>
    </section>
  );
}
