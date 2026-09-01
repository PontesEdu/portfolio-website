/**
 * Projetos do portfolio.
 *
 * Tres em destaque, cada um com pagina propria. A descricao curta diz o que o
 * projeto faz e para quem, antes de citar qualquer tecnologia -- a stack e
 * metadado, nao manchete.
 *
 * Projeto sem demo publicada nao ganha botao de demo: link quebrado custa mais
 * confianca do que a ausencia do link. Pelo mesmo motivo, projeto inacabado nao
 * entra, nem como "em breve".
 *
 * Os campos longos de case (contexto, decisoes, desafio, aprendizado) sao
 * preenchidos na Fase 5, junto com as capturas de tela.
 */

export type Projeto = {
  slug: string;
  nome: string;
  /** Uma frase: o que faz e para quem. */
  descricao: string;
  /** Tags exibidas no card, na ordem em que importam. */
  stack: string[];
  repositorio: string;
  /** Ausente quando nao ha demo publicada. */
  demo?: string;
  /** Link externo adicional, como uma listagem de marketplace. */
  externo?: { label: string; href: string };
  imagem?: { src: string; alt: string };

  /** Conteudo do case. Preenchido na Fase 5. */
  contexto?: string;
  decisoes?: { escolha: string; alternativa: string; motivo: string }[];
  desafio?: string;
  aprendizado?: string;
};

export const projetosDestaque: Projeto[] = [
  {
    slug: "neoid-ptz-deck",
    nome: "NEOiD PTZ Deck",
    descricao:
      "Permite que o operador de transmissão ao vivo controle câmeras PTZ — movimento, " +
      "zoom, foco, presets e rastreamento — por botões físicos do Stream Deck, sem " +
      "joystick nem software dedicado.",
    stack: ["TypeScript", "Node.js", "Stream Deck SDK", "VISCA", "CGI/HTTP"],
    repositorio: "https://github.com/PontesEdu/NEOiD-PTZ-Deck-Elgato",
    externo: {
      label: "Elgato Marketplace",
      href: "https://marketplace.elgato.com/product/neoid-ptz-deck-d260b006-c00d-44ae-91ec-85c0367c37df",
    },
  },
  {
    slug: "form-authenticate-fullstack",
    nome: "Form Authenticate Fullstack",
    descricao:
      "Fluxo completo de cadastro e login com sessão segura: access token curto em " +
      "memória e refresh token em cookie HttpOnly, com renovação e logout.",
    stack: [
      "TypeScript",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "React",
      "React Query",
    ],
    repositorio: "https://github.com/PontesEdu/form-authenticate-fullstack",
  },
  {
    slug: "api-solid",
    nome: "API de check-in em academias",
    descricao:
      "API REST onde o usuário faz check-in apenas se estiver a até 100 metros da " +
      "academia, e o check-in só é validado por um administrador dentro de 20 minutos.",
    stack: [
      "TypeScript",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Vitest",
    ],
    repositorio: "https://github.com/PontesEdu/03-api-solid",
  },
];

/** Projetos menores, sem case. Apenas nome, uma linha e link. */
export const outrosProjetos: Pick<
  Projeto,
  "nome" | "descricao" | "stack" | "repositorio"
>[] = [
  {
    nome: "GoodMovies",
    descricao:
      "Catálogo de filmes e séries que consome a API do TMDB, com busca e listagens.",
    stack: ["React", "React Query", "Axios"],
    repositorio: "https://github.com/PontesEdu/GoodMovies",
  },
  {
    nome: "Blog com Next.js",
    descricao:
      "Blog estático com conteúdo em arquivos locais, renderizado no servidor.",
    stack: ["Next.js", "Contentlayer", "Tailwind CSS"],
    repositorio: "https://github.com/PontesEdu/site-blog-next-estudo",
  },
  {
    nome: "To-do list",
    descricao:
      "Lista de tarefas com estado global e persistência no navegador.",
    stack: ["React", "Zustand", "localStorage"],
    repositorio: "https://github.com/PontesEdu/To-do-list-training",
  },
];
