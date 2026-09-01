/**
 * Cabeçalho de seção.
 *
 * O índice em mono dá ritmo e estrutura à página sem precisar de ornamento --
 * e fica `aria-hidden` porque é ordenação visual: quem usa leitor de tela já
 * recebe a hierarquia pelo próprio heading.
 */
export function SectionHeading({
  indice,
  titulo,
}: {
  indice: string;
  titulo: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="label-mono" aria-hidden="true">
        {indice}
      </span>
      <h2 className="text-3xl font-semibold sm:text-4xl">{titulo}</h2>
    </div>
  );
}
