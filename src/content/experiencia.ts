/**
 * Trajetoria profissional e academica, em uma linha do tempo unica.
 *
 * Experiencia, formacao e cursos ficam juntos de proposito: separados em tres
 * secoes, cada uma ficaria pela metade. Juntos, contam uma historia continua.
 *
 * Nada aqui e estimado. Toda entrada vem do currículo.
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
      "Tecnologia para produção e transmissão audiovisual. Desenvolvo software para a " +
      "operação e presto suporte técnico durante transmissões ao vivo.",
    destaques: [
      "Desenvolvo e mantenho o NEOiD PTZ Deck, plugin em TypeScript e Node.js que controla câmeras PTZ pela rede local via CGI/HTTP e VISCA, publicado na Elgato Marketplace.",
      "Traduzo as necessidades das equipes de operação em soluções técnicas, com base na vivência prática de transmissão ao vivo e dos equipamentos usados.",
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
    tipo: "formacao",
    titulo: "Formação complementar",
    organizacao: "Rocketseat e Alura",
    periodo: "Contínua",
    descricao:
      "Trilhas de Node.js, TypeScript, React e fundamentos de back-end.",
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
