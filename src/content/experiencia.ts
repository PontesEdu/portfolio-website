/**
 * Trajetoria profissional e academica, em uma linha do tempo unica.
 *
 * Experiencia, formacao e cursos ficam juntos de proposito: separados em tres
 * secoes, cada uma ficaria pela metade. Juntos, contam uma historia continua.
 *
 * Nada aqui e estimado. Toda entrada vem do currículo ou de um certificado
 * publico, e os cursos linkam para o certificado para quem quiser conferir.
 */

export type TipoDeEntrada = "trabalho" | "formacao";

export type EntradaDaTrajetoria = {
  tipo: TipoDeEntrada;
  titulo: string;
  organizacao: string;
  periodo: string;
  /** true enquanto estiver em andamento. */
  atual?: boolean;
  local?: string;
  descricao: string;
  /** Realizacoes concretas. Vazio quando nao ha o que dizer sem inventar. */
  destaques?: string[];
};

export const trajetoria: EntradaDaTrajetoria[] = [
  {
    tipo: "trabalho",
    titulo: "Suporte Técnico e Desenvolvimento",
    organizacao: "NEOiD",
    periodo: "jun/2025 — atual",
    atual: true,
    local: "São Paulo, SP · Presencial",
    descricao:
      "Desenvolvimento de projetos e integração com equipamentos audiovisuais, " +
      "adquirindo experiência prática com workflows de produção e transmissão ao vivo.",
    destaques: [
      "Criação do NEOiD PTZ Deck, plugin para controle de câmeras PTZ pela rede.",
      "Suporte técnico aos equipamentos da NEOiD e à operação de transmissão.",
    ],
  },
  {
    tipo: "formacao",
    titulo: "Análise e Desenvolvimento de Sistemas",
    organizacao: "FIAP",
    periodo: "jan/2026 — dez/2027",
    atual: true,
    descricao:
      "Graduação em andamento, com projetos práticos e challenges em parceria com " +
      "empresas, em equipe e sobre problemas reais.",
  },
  {
    tipo: "trabalho",
    titulo: "Auxiliar Administrativo",
    organizacao: "JCE Transportes",
    periodo: "ago/2022 — nov/2024",
    descricao:
      "Organização de documentos, apoio às operações diárias e suporte à gestão, em " +
      "rotina de atenção a detalhes e prazos.",
  },
];

export type Curso = {
  titulo: string;
  cargaHoraria: string;
  /** Rotulo curto para exibicao. */
  conclusao: string;
  certificado: string;
};

/**
 * Cursos com certificado publico. Titulo, carga horaria e data foram lidos do
 * proprio certificado -- nada foi arredondado. A lista esta em ordem do mais
 * recente para o mais antigo.
 *
 * As trilhas da Rocketseat nao entram nesta lista porque os certificados nao
 * foram guardados, e afirmar carga horaria sem comprovacao seria inventar.
 */
export const cursos: Curso[] = [
  {
    titulo: "Nest.js: criando uma API Restful",
    cargaHoraria: "10h",
    conclusao: "nov/2024",
    certificado:
      "https://cursos.alura.com.br/user/edupontessilva03/course/nestjs-criando-api-resftul/certificate",
  },
  {
    titulo:
      "Modelagem de banco de dados: entidades, relacionamentos e atributos",
    cargaHoraria: "8h",
    conclusao: "ago/2024",
    certificado:
      "https://cursos.alura.com.br/user/edupontessilva03/course/modelagem-banco-dados-entidades-relacionamentos-atributos/certificate",
  },
  {
    titulo: "Next.js: construa suas aplicações com Postgres e Prisma",
    cargaHoraria: "8h",
    conclusao: "ago/2024",
    certificado:
      "https://cursos.alura.com.br/user/edupontessilva03/course/next-js-construa-aplicacoes-postgres-prisma/certificate",
  },
  {
    titulo: "ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite",
    cargaHoraria: "10h",
    conclusao: "ago/2024",
    certificado:
      "https://cursos.alura.com.br/user/edupontessilva03/course/orm-node-js-desenvolvendo-api-sequelize-sqlite/certificate",
  },
  {
    titulo: "TypeScript parte 2: avançando na linguagem",
    cargaHoraria: "10h",
    conclusao: "mar/2024",
    certificado:
      "https://cursos.alura.com.br/user/edupontessilva03/course/typescript-avancando-linguagem/certificate",
  },
  {
    titulo: "Design Patterns em Java II: avançando nas boas práticas",
    cargaHoraria: "6h",
    conclusao: "jul/2023",
    certificado:
      "https://cursos.alura.com.br/user/edupontessilva03/course/avancando-design-patterns-java/certificate",
  },
  {
    titulo: "Java: aplicando a Orientação a Objetos",
    cargaHoraria: "10h",
    conclusao: "mai/2023",
    certificado:
      "https://cursos.alura.com.br/user/edupontessilva03/course/java-aplicando-orientacao-objetos/certificate",
  },
];
