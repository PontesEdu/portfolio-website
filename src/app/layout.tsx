import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { perfil } from "@/content/perfil";
import { siteUrl } from "@/lib/site";

import "./globals.css";

// Inter no corpo e na interface, JetBrains Mono em metadado. Ambas variaveis:
// um arquivo cobre toda a faixa de pesos, em vez de um download por peso.
//
// So a Inter e pre-carregada. Ela desenha o <h1>, que e o elemento de LCP --
// vale disputar o inicio do carregamento por ela. A mono aparece so em rotulo,
// tag e data: mantê-la no caminho critico somava dezenas de kB antes da
// primeira pintura para servir texto secundario.
const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${perfil.nome} — ${perfil.cargo}`,
    template: `%s · ${perfil.nome}`,
  },
  description: `${perfil.cargo} em ${perfil.localizacao}. ${perfil.resumo} ${perfil.objetivo}.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: siteUrl,
    siteName: perfil.nome,
    title: `${perfil.nome} — ${perfil.cargo}`,
    description: `${perfil.resumo} ${perfil.objetivo}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${perfil.nome} — ${perfil.cargo}`,
    description: `${perfil.resumo} ${perfil.objetivo}.`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning cobre a classe de tema que next-themes escreve
    // no <html> antes da primeira pintura. E esperado que o HTML do servidor e
    // o do cliente difiram nesse unico atributo.
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        {/* Sem JavaScript o IntersectionObserver do <Reveal> nunca roda e o
            conteúdo ficaria invisível. Aqui ele nasce visível. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Primeiro elemento focavel da pagina. Fica fora da tela ate
              receber foco pelo teclado. */}
          <a
            href="#conteudo"
            className="sr-only bg-background text-foreground ring-ring focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2"
          >
            Pular para o conteúdo
          </a>

          <Header />

          {/* Unico <main> do site: as paginas so entregam o conteudo.
              tabIndex={-1} faz o foco realmente pousar aqui quando o skip link
              e acionado -- sem isso, varios navegadores rolam a pagina mas
              deixam o foco no link, e a tabulacao seguinte volta ao header. */}
          <main id="conteudo" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
