# Portfólio — Eduardo Pontes

Portfólio pessoal, construído com Next.js e TypeScript. Reúne minha trajetória,
minha stack e os projetos que melhor representam o que eu construo.

🔗 **[eduardopontes.vercel.app](https://eduardopontes.vercel.app)**

---

## Stack

| Camada      | Tecnologia              |
| ----------- | ----------------------- |
| Framework   | Next.js 16 (App Router) |
| Linguagem   | TypeScript              |
| UI          | React 19                |
| Estilo      | Tailwind CSS v4         |
| Componentes | shadcn/ui               |
| Tema        | next-themes             |
| Ícones      | lucide-react            |
| Deploy      | Vercel                  |

## Como rodar

Requer Node.js 20 ou superior.

```bash
git clone https://github.com/PontesEdu/portfolio-website.git
cd portfolio-website
npm install
cp .env.example .env.local
npm run dev
```

A aplicação sobe em `http://localhost:3000`.

## Scripts

| Comando             | O que faz                                  |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Servidor de desenvolvimento                |
| `npm run build`     | Build de produção                          |
| `npm run start`     | Serve o build de produção                  |
| `npm run lint`      | ESLint, incluindo regras de acessibilidade |
| `npm run typecheck` | Checagem de tipos sem emitir arquivos      |
| `npm run format`    | Formata o projeto com Prettier             |

## Estrutura

```
src/
  app/          rotas, layout e estilos globais
  components/   componentes de UI e de seção
  content/      conteúdo do site em módulos TypeScript tipados
  lib/          utilidades
public/         imagens e currículo
docs/           documentação do projeto
```

O conteúdo do site fica em `src/content/` como módulos TypeScript tipados, e não
em um CMS ou em arquivos Markdown. Para um site deste tamanho isso dá
autocomplete e transforma um campo errado em erro de compilação, sem custo de
dependência.

## Tema

Cada tema tem sua própria rampa de 12 passos, definida em
`src/app/globals.css`, e o mesmo número de passo cumpre a mesma função nos dois
temas. Os componentes consomem apenas os tokens semânticos — nenhum precisa
saber em qual tema está.

O tema escuro não é uma inversão do claro: a elevação é feita por luminosidade
em vez de sombra, não há branco nem preto puro, e o acento é dessaturado. Todos
os pares de contraste foram verificados contra WCAG 2.2 AA nos dois temas.

## Documentação

A pasta [`docs/`](./docs) registra as decisões do projeto:

- [`01-discovery.md`](./docs/01-discovery.md) — levantamento de conteúdo
- [`02-research.md`](./docs/02-research.md) — pesquisa que embasou o design
- [`03-decisions.md`](./docs/03-decisions.md) — decisões técnicas e visuais
- [`04-plan.md`](./docs/04-plan.md) — plano de implementação por fases
