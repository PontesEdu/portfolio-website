/**
 * Monograma usado no ícone da aba e no ícone de tela inicial.
 *
 * Iniciais em vez de símbolo abstrato: é o padrão em portfólio pessoal de
 * desenvolvedor, e num favicon de 16px uma marca abstrata vira mancha enquanto
 * duas letras ainda funcionam como forma reconhecível.
 *
 * Fundo na cor de destaque do site com texto quase branco -- a razão de
 * contraste é a mesma já verificada para o botão primário. O ícone não muda com
 * o tema, então precisa funcionar tanto em barra de abas clara quanto escura, e
 * o azul sólido resolve os dois casos.
 */
export function Monograma({ lado }: { lado: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0072bd",
        color: "#fcfdfe",
        borderRadius: `${lado * 0.22}px`,
        fontSize: `${lado * 0.52}px`,
        fontWeight: 700,
        letterSpacing: `${lado * -0.02}px`,
        fontFamily: "sans-serif",
      }}
    >
      EP
    </div>
  );
}
