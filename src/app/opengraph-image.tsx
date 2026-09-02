import { ImageResponse } from "next/og";

import { perfil } from "@/content/perfil";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${perfil.nome} — ${perfil.cargo}`;

/**
 * Imagem que aparece quando o link é colado no LinkedIn, no Slack ou no
 * WhatsApp. É a segunda impressão do site, antes de alguém abrir a página.
 *
 * A decisão original do projeto era usar um PNG estático em vez de gerar a
 * imagem, porque o gerador aceita só um subconjunto de CSS e isso costuma
 * custar tempo de depuração. Aqui o desenho é uma coluna de texto sobre fundo
 * sólido, bem dentro do que o gerador suporta -- e assim a imagem nasce do
 * mesmo conteúdo tipado do resto do site, sem virar um arquivo solto que
 * envelhece sozinho quando o cargo ou a stack mudam.
 *
 * As cores são as do tema escuro do site, que é o que melhor se sustenta sobre
 * os fundos claros e escuros dos aplicativos de mensagem.
 */
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0f1114",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "9999px",
            background: "#34a3de",
          }}
        />
        <div
          style={{
            color: "#a5acb3",
            fontSize: "24px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          {perfil.objetivo}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#f2f5f7",
            fontSize: "82px",
            fontWeight: 600,
            letterSpacing: "-2.5px",
            lineHeight: 1.05,
          }}
        >
          {perfil.nome}
        </div>
        <div
          style={{
            color: "#a5acb3",
            fontSize: "38px",
            marginTop: "20px",
          }}
        >
          {`${perfil.cargo} em ${perfil.localizacao}`}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "36px",
          borderTop: "1px solid #353a3f",
          paddingTop: "28px",
          color: "#a5acb3",
          fontSize: "22px",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        {perfil.stackPrincipal.map((tecnologia) => (
          <div key={tecnologia}>{tecnologia}</div>
        ))}
      </div>
    </div>,
    size,
  );
}
