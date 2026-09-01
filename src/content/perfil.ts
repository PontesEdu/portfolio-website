/**
 * Dados pessoais exibidos no site.
 *
 * Telefone, endereco e idade ficam de fora de proposito: nao sao esperados em
 * um portfolio e so aumentam a superficie de spam. Contato por e-mail e
 * LinkedIn.
 */

export type Link = {
  label: string;
  href: string;
};

export const perfil = {
  nome: "Eduardo Pontes da Silva",
  cargo: "Desenvolvedor Fullstack",
  localizacao: "São Paulo, SP",

  /** Uma frase, concreta, para o hero. */
  resumo:
    "Construo aplicações web com TypeScript, React e Node.js — e software que roda em produção.",

  /**
   * Parágrafos da seção Sobre. Todo dado confere com o currículo, com os
   * certificados ou com o repositório do PTZ Deck. Sem "apaixonado por
   * tecnologia" e sem história de superação inventada.
   */
  sobre: [
    "Comecei estudando programação por conta, em cursos da Alura e da Rocketseat, " +
      "enquanto trabalhava em uma função administrativa. Em junho de 2025 entrei na " +
      "NEOiD, empresa de tecnologia para produção e transmissão audiovisual, onde " +
      "presto suporte técnico e desenvolvo software para a operação.",
    "Foi lá que construí o NEOiD PTZ Deck, um plugin que controla câmeras PTZ pela " +
      "rede local e hoje está publicado na Elgato Marketplace. Trabalhar perto de " +
      "quem opera ao vivo mudou o jeito como penso software: a decisão que importa " +
      "é a que economiza um passo do operador no meio de uma transmissão.",
    "Hoje curso Análise e Desenvolvimento de Sistemas na FIAP e me aprofundo em " +
      "TypeScript, React, Next.js e Node.js, com direção Fullstack.",
  ],

  /** Usado como selo no hero e no fim da description da metadata. */
  objetivo: "Disponível para estágio ou vaga júnior",

  /**
   * Só as tecnologias que sustentam os projetos em destaque. A lista completa
   * fica na seção Stack -- aqui o objetivo é o recrutador reconhecer a stack
   * em um olhar, não ler um inventário.
   */
  stackPrincipal: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
  ] as const,

  email: "edupontessilva03@gmail.com",
  github: "https://github.com/PontesEdu",
  linkedin: "https://www.linkedin.com/in/eduardo-pontes-silva",
  curriculo: "/curriculo.pdf",
} as const;

export const navegacao: Link[] = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];
