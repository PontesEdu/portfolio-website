/**
 * Tecnologias agrupadas por area.
 *
 * Sem barra de progresso e sem parede de logos: "React 80%" nao significa nada
 * e e um dos sinais mais reconheciveis de template. Toda tecnologia listada
 * aqui aparece como tag em pelo menos um projeto, entao cada item e
 * verificavel abrindo o codigo.
 */

export type GrupoDeStack = {
  titulo: string;
  itens: string[];
};

export const stack: GrupoDeStack[] = [
  {
    titulo: "Linguagens",
    itens: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    titulo: "Front-end",
    itens: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "React Query",
      "React Hook Form",
      "React Router",
    ],
  },
  {
    titulo: "Back-end",
    itens: [
      "Node.js",
      "Fastify",
      "APIs REST",
      "Prisma ORM",
      "PostgreSQL",
      "Autenticação JWT",
      "Zod",
    ],
  },
  {
    titulo: "Ferramentas",
    itens: ["Git", "GitHub", "Docker", "Vitest"],
  },
  {
    titulo: "Práticas",
    itens: ["Princípios SOLID", "Clean Code", "Testes automatizados"],
  },
];
