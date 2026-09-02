"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Entrada em scroll: fade curto com 16px de deslocamento.
 *
 * Feito com IntersectionObserver e transição do CSS, sem biblioteca de
 * animação. A decisão do projeto era usar `motion` só quando ele trouxesse
 * benefício real -- orquestração, spring, saída animada. Um fade-up de entrada
 * não é nenhum desses casos, e a biblioteca custaria mais de 30 kB para fazer
 * o que duas propriedades de CSS já fazem.
 *
 * O observador é desconectado na primeira aparição: reanimar a cada volta do
 * scroll é trabalho de main thread para sempre e lê como amador.
 *
 * Só `opacity` e `transform` são animados, então o navegador resolve tudo no
 * compositor e nada dispara layout. `prefers-reduced-motion` é tratado no
 * globals.css, que reduz a duração de toda transição a 1ms -- o conteúdo
 * aparece na hora, sem movimento.
 *
 * O hero nunca usa este componente: ele é o elemento de LCP, e começar
 * invisível adiaria a métrica até a hidratação terminar.
 */
export function Reveal({
  children,
  /** Atraso em ms, para escalonar irmãos. */
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const referencia = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setVisivel(true);
        observador.disconnect();
      },
      // Dispara um pouco antes de encostar na borda inferior, para o elemento
      // já estar visível quando o usuário chega nele.
      { rootMargin: "0px 0px -8% 0px" },
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={referencia}
      data-reveal
      data-visivel={visivel ? "true" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className="translate-y-4 opacity-0 transition-[opacity,transform] duration-300 ease-out data-[visivel=true]:translate-y-0 data-[visivel=true]:opacity-100"
    >
      {children}
    </div>
  );
}
