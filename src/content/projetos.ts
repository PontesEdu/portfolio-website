/**
 * Projetos do portfolio.
 *
 * A descricao curta diz o que o projeto faz e para quem, antes de citar
 * qualquer tecnologia -- a stack e metadado, nao manchete.
 *
 * `demo` so aparece quando existe um endereco publicado e funcionando: botao de
 * demo que nao abre custa mais confianca do que a ausencia do botao. Pelo mesmo
 * motivo, projeto inacabado nao entra, nem como "em breve".
 */

export type Projeto = {
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
};

export const projetosDestaque: Projeto[] = [
  {
    nome: "NEOiD PTZ Deck",
    descricao:
      "Permite que o operador de transmissão ao vivo controle câmeras PTZ — movimento, " +
      "zoom, foco, presets e rastreamento — por botões físicos do Stream Deck, sem " +
      "joystick nem software dedicado.",
    stack: ["TypeScript", "Node.js", "Stream Deck SDK", "Rollup"],
    repositorio: "https://github.com/PontesEdu/NEOiD-PTZ-Deck-Elgato",
    externo: {
      label: "Elgato Marketplace",
      href: "https://marketplace.elgato.com/product/neoid-ptz-deck-d260b006-c00d-44ae-91ec-85c0367c37df",
    },
  },
  {
    nome: "API de check-in em academias",
    descricao:
      "API REST onde o usuário faz check-in apenas se estiver a até 100 metros da " +
      "academia, e o check-in só é validado por um administrador dentro de 20 minutos. " +
      "Casos de uso testados sem banco, com integração contínua a cada envio.",
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
  {
    nome: "NNC Transportes",
    descricao:
      "Site institucional e formulário de orçamento para uma transportadora de " +
      "mudanças em São Paulo, que não tinha presença digital além do perfil no " +
      "Google. O formulário entrega o pedido direto no WhatsApp da empresa, sem " +
      "backend.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zod"],
    repositorio: "https://github.com/PontesEdu/nnc-transportes-website",
    demo: "https://nnc-transportes.vercel.app",
  },
];

/** Projetos menores. Nome, uma linha e link. */
export const outrosProjetos: Projeto[] = [
  {
    nome: "Fórum com NestJS",
    descricao:
      "API de um fórum organizada em Clean Architecture e DDD, com autenticação por " +
      "JWT e testes unitários e de ponta a ponta separados.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Vitest"],
    repositorio: "https://github.com/PontesEdu/05-nest-clean",
  },
  {
    nome: "Form Authenticate Fullstack",
    descricao:
      "Cadastro e login com sessão segura: access token curto em memória e refresh " +
      "token em cookie HttpOnly, com renovação automática e logout.",
    stack: ["Fastify", "Prisma", "PostgreSQL", "React", "React Query"],
    repositorio: "https://github.com/PontesEdu/form-authenticate-fullstack",
  },
  {
    nome: "To-do list",
    descricao:
      "Lista de tarefas com estado global e persistência no navegador.",
    stack: ["React", "Zustand", "localStorage"],
    repositorio: "https://github.com/PontesEdu/To-do-list-training",
  },
];
