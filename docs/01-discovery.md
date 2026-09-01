# 01 — Discovery

Levantamento da matéria-prima do portfólio. Tudo aqui foi extraído do currículo,
dos repositórios locais, da API pública do GitHub e da Elgato Marketplace.
Nada foi inventado. O que não pôde ser confirmado está marcado como pendência.

---

## 1. Identidade

| Campo        | Valor                                       | Origem                                |
| ------------ | ------------------------------------------- | ------------------------------------- |
| Nome         | Eduardo Pontes da Silva                     | Currículo / perfil GitHub             |
| Título atual | Desenvolvedor                               | Currículo                             |
| Localização  | São Paulo, SP — Brasil                      | Currículo / perfil GitHub             |
| E-mail       | edupontessilva03@gmail.com                  | Currículo                             |
| GitHub       | github.com/PontesEdu (conta desde abr/2022) | Currículo / API                       |
| LinkedIn     | linkedin.com/in/eduardo-pontes-silva        | Currículo                             |
| Telefone     | (11) 97784-4812                             | Currículo — **não publicar** (ver §6) |
| Endereço     | Rua Alfredo da Motta, zona leste de SP      | Currículo antigo — **não publicar**   |

**Objetivo declarado:** estágio ou vaga júnior em desenvolvimento, direção Fullstack.

---

## 2. Formação

| Curso                                 | Instituição | Período             | Status                |
| ------------------------------------- | ----------- | ------------------- | --------------------- |
| Análise e Desenvolvimento de Sistemas | FIAP        | jan/2026 – dez/2027 | Em andamento (1º ano) |

Formação complementar: trilhas Rocketseat e Alura (Node.js, TypeScript, React,
fundamentos de back-end).

> O currículo antigo citava "Universidade de São Paulo — Unicid". **Descartado
> por decisão do autor**: vale o currículo mais recente, que informa FIAP.

Certificados encontrados em disco (3 PDFs): `Certificado_nextjs`,
`Certificado_nodejs`, `certificado_api_nodejs`. São PDFs de imagem — emissor,
data e carga horária **não puderam ser extraídos**. Pendência P3.

---

## 3. Experiência profissional

### NEOiD — Suporte Técnico e Desenvolvimento · jun/2025 – atual

São Paulo, SP · Presencial · Tecnologia para produção e transmissão audiovisual

- Desenvolve e mantém o **NEOiD PTZ Deck**, plugin em TypeScript/Node.js que
  controla câmeras PTZ na rede local via CGI/HTTP e VISCA, publicado na Elgato
  Marketplace.
- Vivência prática com transmissão ao vivo e com os equipamentos audiovisuais
  usados na operação.
- Suporte técnico a sistemas e equipamentos em transmissão ao vivo, traduzindo
  necessidades das equipes de operação em soluções técnicas.

> Este é o ativo mais forte do portfólio: software real, em produção, usado por
> operadores, distribuído em uma marketplace pública. Deve dominar a narrativa.

### JCE Transportes — Auxiliar Administrativo · ago/2022 – nov/2024

Organização de documentos, apoio às operações diárias e suporte à gestão.

> Fora da área técnica. Aparece de forma compacta, apenas para não deixar buraco
> na linha do tempo. Não compete por espaço com a NEOiD.

---

## 4. Inventário de projetos

21 repositórios públicos em `github.com/PontesEdu`. Classificação por valor para
o portfólio:

### Nível 1 — Destaque (case completo)

**NEOiD PTZ Deck** · TypeScript · Node.js · Stream Deck SDK · Rollup

- Repositório público: `NEOiD-PTZ-Deck-Elgato`
- Publicado na [Elgato Marketplace](https://marketplace.elgato.com/product/neoid-ptz-deck-d260b006-c00d-44ae-91ec-85c0367c37df):
  v2.1, 13/jul/2026, Mac + Windows, Stream Deck 6.9+, suporte a dial
- Publisher na marketplace: conta da NEOiD (empresa), não pessoal — pendência P5
- 34 commits locais, 9 actions implementadas
- Escopo verificado no código: registro de múltiplas câmeras com checagem
  automática de conectividade, controles de pan/tilt, zoom, foco e autofoco,
  96 presets com press-and-hold para gravar, ciclo de velocidades, tracking,
  record, OSD menu, backlight e snapshot da câmera no próprio botão
- Camadas: `actions/` (9 ações), `api/` (dois fabricantes — NEOiD e Telycam),
  `utils/` (VISCA sobre TCP e UDP, base HTTP/CGI, login, snapshot)
- **Por que vende:** integração com hardware, dois protocolos de rede, dois
  fabricantes, decisões de UX para operador ao vivo, produto distribuído.

**Form Authenticate Fullstack** · Fastify · Prisma · React · React Query

- Repositório: `form-authenticate-fullstack` (API + front no mesmo repo)
- API: Fastify 5, `@fastify/jwt`, `@fastify/cookie`, `@fastify/cors`, Prisma,
  Zod, bcryptjs. Camadas: `http/controllers/` → `usecase/` → `repositories/`
  (interface + implementação Prisma), com `middlewares/verify-jwt`
- Front: React 19, React Router 7, React Query, React Hook Form + Zod,
  shadcn/ui, Axios, next-themes, rotas protegidas via loader
- **Diferencial real:** access token curto + refresh token em cookie HttpOnly,
  com rotas de `refresh` e `sign-out`. É o projeto que melhor prova capacidade
  Fullstack de ponta a ponta.

**API SOLID (estilo GymPass)** · Fastify · Prisma · PostgreSQL · Docker · Vitest

- Repositório: `03-api-solid`
- É a "API REST com Node.js" citada no currículo
- README documenta RFs, RNs e RNFs — raro em projeto júnior e ótimo sinal
- Regras de negócio reais: check-in só a até 100 m da academia, validação em até
  20 min, um check-in por dia, validação restrita a administradores, paginação
- JWT, hash de senha, PostgreSQL em Docker, testes unitários e e2e em Vitest
- **Por que vende:** é o único projeto do conjunto com testes automatizados e
  regras de negócio não triviais. Cobre o lado back-end que os outros dois não
  cobrem com a mesma profundidade.

### Nível 2 — Apoio (card curto, sem case)

| Projeto                              | Stack                               | Observação                                           |
| ------------------------------------ | ----------------------------------- | ---------------------------------------------------- |
| `GoodMovies`                         | React, React Query, Axios, TMDB API | Consumo de API externa. Já tem screenshot no README. |
| `Forum-DDD-NestJs` / `05-nest-clean` | NestJS, DDD, Clean Architecture     | Projetos de curso. Ver pendência P4.                 |
| `site-blog-next-estudo`              | Next.js 15, Contentlayer            | 19 commits.                                          |
| `To-do-list-training`                | React, Zustand, localStorage        | Pequeno.                                             |
| `pizzashop-web`                      | React, React Query, shadcn/ui       | Projeto de curso.                                    |
| `edupay-fintech`                     | CSS                                 | Atividade FIAP.                                      |

### Nível 3 — Não exibir

`Cardapio` — **retirado por decisão sua**: o projeto não foi concluído. Não entra
no portfólio em nenhum nível enquanto estiver nesse estado.

`002-api-rest-nodejs`, `004-clean-ddd-forum`, `Board`, `alurabooks`,
`layout-sidebar`, `nnc-formulario`, `deluna-system`, `numero-secreto`,
`landingPage-neymarjr`, `node-oauth`. São exercícios iniciais ou repetições de
conteúdo já melhor representado. Seguem públicos no GitHub; apenas não recebem
destaque no portfólio.

### Projetos locais sem repositório público

`NEOiD-tally-web` (React + React Router + Tailwind, já tem banner pronto),
`next-test`, `ptz-test`, `project-authenticate`, `test-ctrl`.

---

## 5. Habilidades

Declaradas no currículo:

- **Linguagens:** TypeScript, JavaScript (ES6+), HTML5, CSS3
- **Front-end:** React.js, Next.js, Tailwind CSS, consumo de APIs REST
- **Back-end:** Node.js, APIs REST, arquitetura MVC, JWT, Prisma ORM, PostgreSQL
- **Ferramentas:** Git, GitHub, Docker, Vitest
- **Boas práticas:** SOLID, Clean Code, testes automatizados
- **IA no desenvolvimento:** agentes e automações aplicados ao fluxo de trabalho

Confirmadas no código, mas **ausentes** da lista do currículo: **Fastify, Zod,
React Query, React Hook Form, shadcn/ui, React Router, Rollup, NestJS**.

> Recomendação: a seção de Skills do site deve refletir o que está no código, não
> apenas o que está no currículo. É a lista mais forte e é verificável.

---

## 6. Informações que NÃO devem ir para o site

| Informação                         | Motivo                                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------------ |
| Telefone (11) 97784-4812           | Exposição pública gera spam e não é esperada em portfólio. E-mail e LinkedIn bastam. |
| Endereço residencial               | Dado sensível. "São Paulo, SP — Brasil" é suficiente.                                |
| Idade / data de nascimento         | Não agrega e abre espaço para viés.                                                  |
| JCE Transportes em destaque        | Fora da área. Entra compacto na timeline.                                            |
| Lista completa dos 21 repositórios | Dilui os bons projetos. Vale a curadoria da §4.                                      |

---

## 7. Pendências e inconsistências (precisam da sua confirmação)

### Resolvidas pelo autor

| #   | Ponto                   | Resolução                                                                                                                            |
| --- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| P1  | Formação divergente     | **Somente FIAP.** As informações do currículo antigo sobre a Unicid foram descartadas. Vale o currículo mais recente.                |
| P5  | Autoria do PTZ Deck     | **Autorizado pela NEOiD.** Apresentar como "desenvolvido por mim na NEOiD".                                                          |
| P6  | Repositório do PTZ Deck | **`NEOiD-PTZ-Deck-Elgato`**, mais o link da Elgato Marketplace. É hoje o único projeto do autor em estado apresentável publicamente. |
| P10 | Idioma                  | **Somente português.** Código e commits em inglês.                                                                                   |
| P11 | Domínio                 | **Vercel primeiro**, domínio próprio depois. `metadataBase` lido de `NEXT_PUBLIC_SITE_URL` para a troca ser trivial.                 |

### Em aberto

| #   | Ponto                                       | Bloqueia | Detalhe                                                                                                                                                                       |
| --- | ------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P2  | **Experiência freelancer**                  | Fase 4   | O currículo antigo cita "Freelancer — Projetos Web" (sites institucionais, sistemas de gestão, lojas virtuais). Não consta no atual. Entra? Há projetos ou clientes citáveis? |
| P3  | **Certificados**                            | Fase 4   | Os 3 PDFs são imagens; não foi possível ler emissor, data e carga horária.                                                                                                    |
| P4  | **NestJS / DDD / Clean Architecture**       | Fase 4   | Há repositórios (`Forum-DDD-NestJs`, `05-nest-clean`), mas o currículo atual não lista essas competências. Exibir ou omitir?                                                  |
| P7  | **README do `form-authenticate-fullstack`** | Fase 5   | Tem uma linha só. O portfólio leva o recrutador ao GitHub — README fraco derruba a impressão construída pelo site. `03-api-solid` já tem README bom.                          |
| P8  | **Screenshots**                             | Fase 5   | Só `GoodMovies` e `NEOiD-tally-web` têm imagem. Alternativa é adotar cards text-only de forma deliberada.                                                                     |
| P9  | **Demos no ar**                             | Fase 5   | Nenhum destaque está publicado. Card sem botão de demo é melhor que botão quebrado.                                                                                           |

> A regra de não referenciar a ferramenta de desenvolvimento vale **apenas para
> este repositório de portfólio**. Os outros repositórios do autor não precisam
> de ajuste — confirmado por ele.
