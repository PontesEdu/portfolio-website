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

  /** Paragrafo da secao Sobre. Todo dado confere com o currículo. */
  bio:
    "Trabalho com suporte técnico e desenvolvimento na NEOiD, onde criei e mantenho o " +
    "PTZ Deck: um plugin que controla câmeras PTZ pela rede local e está publicado na " +
    "Elgato Marketplace. Estudo Análise e Desenvolvimento de Sistemas na FIAP e venho me " +
    "aprofundando em TypeScript, React, Next.js e Node.js.",

  objetivo: "Buscando estágio ou vaga júnior em desenvolvimento.",

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
