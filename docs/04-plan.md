# 04 — Plano de Implementação

Execução incremental. Cada fase entrega escopo fechado, passa pelas validações,
é apresentada e **para** para validação do autor. Nenhuma fase começa sozinha.

**Validação obrigatória em toda fase:**

```
npm run typecheck     # tsc --noEmit
npm run lint          # eslint .
npm run build         # prova que toda página pré-renderiza
```

Mais, sempre: revisão de higiene do repositório (guia de desenvolvimento §15) antes do commit.

---

## Fase 0 — Discovery e Specification ✅ concluída

**Objetivo:** entender o perfil, levantar a matéria-prima, pesquisar e decidir.

**Entregue:** análise do currículo e do currículo antigo · inventário de 21
repositórios públicos e 15 projetos locais, com leitura do código · verificação
da listagem na Elgato Marketplace · pesquisa de UX/UI e técnica, com fontes ·
`docs/01-discovery.md`, `docs/02-research.md`, `docs/03-decisions.md`,
`docs/04-plan.md` e o guia de desenvolvimento na raiz.

**Aceite:** autor aprova direção, arquitetura e plano.

---

## Fase 1 — Fundação ✅ implementada, aguardando validação visual

**Objetivo:** projeto rodando com os dois temas corretos e o conteúdo tipado
pronto para ser consumido. Nenhuma seção visual ainda.

**Escopo**

- `create-next-app` — TypeScript, ESLint, Tailwind, App Router, `src/`, alias `@/*`
- shadcn/ui init + só `button` (as demais primitivas entram quando forem usadas)
- `globals.css`: rampa de 12 passos nos dois temas em OKLCH, `:root` / `.dark` /
  `@theme inline`, `@custom-variant dark`, bloco de `prefers-reduced-motion`
- Fontes via `next/font`: uma sans variável + uma mono, expostas como
  `--font-sans` / `--font-mono`
- `ThemeProvider` (next-themes) dentro do `<body>`; `suppressHydrationWarning` no
  `<html lang="pt-BR">`
- ESLint flat config + `jsx-a11y` + `eslint-config-prettier`; Prettier com
  `prettier-plugin-tailwindcss` e `tailwindStylesheet`
- Scripts `lint`, `typecheck`, `format`
- `src/content/` tipado: `perfil.ts`, `stack.ts`, `experiencia.ts`, `projetos.ts`
- `.env.example` com `NEXT_PUBLIC_SITE_URL`; `.gitignore` cobrindo também o guia
  de desenvolvimento local (ver D-17)
- `git init` + primeiro commit

**Arquivos:** `package.json` · `next.config.ts` · `tsconfig.json` ·
`postcss.config.mjs` · `eslint.config.mjs` · `.prettierrc` · `components.json` ·
`src/app/{layout,page,globals.css}` · `src/content/*` · `src/lib/utils.ts`

**Dependências:** nenhuma. É a base.

**Critérios de aceitação**

- [x] `typecheck`, `lint` e `build` passam sem aviso
- [ ] Os dois temas alternam **sem flash** na carga e sem erro de hidratação
      — depende de validação visual do autor
- [x] Cada token da rampa documentado com sua função, nos dois temas
- [x] Nenhum par de contraste do tema abaixo de AA — verificado por script antes
      de existir componente; 30 pares checados, todos passam
- [x] `src/content/` compila e nenhum dado contradiz o currículo
- [x] `NEXT_PUBLIC_SITE_URL` é a **única** fonte da URL do site
- [x] Repositório sem artefato ou referência de ferramenta — auditado antes do
      commit e conferido no repositório publicado

**Riscos:** errar a rampa aqui se propaga por todas as fases — é a única parte do
projeto cara de refazer depois. Vale gastar tempo extra e validar visualmente as
duas paletas antes de avançar.

---

## Fase 2 — Layout e navegação ✅ implementada, aguardando validação

**Objetivo:** o esqueleto navegável, responsivo e acessível.

**Escopo:** header sticky com nav âncora · toggle de tema · menu mobile ·
footer · skip link · container de largura de leitura · `not-found.tsx`

**Arquivos:** `src/components/{header,footer,theme-toggle,mobile-nav}.tsx` ·
`src/app/layout.tsx` · `src/app/not-found.tsx`

**Dependências:** Fase 1

**Critérios de aceitação**

- [x] Navegação completa por teclado, com foco visível em todo elemento
- [x] Skip link é o primeiro elemento focável e funciona — confirmado no HTML
      pré-renderizado; `tabIndex={-1}` no `<main>` para o foco pousar de fato
- [x] Header sticky não cobre o elemento focado (SC 2.4.11) — via
      `scroll-padding-top` no `<html>`, que vale para foco e não só para âncora
- [x] Todo botão de ícone tem `aria-label` — auditado no HTML gerado: zero
      botões sem nome acessível
- [ ] Zero scroll horizontal em 320, 375, 768, 1024, 1440 e 1920 px
      — depende de verificação visual do autor
- [x] Alvos de toque ≥ 24×24 px
- [x] `header.tsx` continua Server Component; `"use client"` só nas folhas
      (`mobile-nav`, `theme-toggle`)

**Resultado:** landmarks conferidos no HTML pré-renderizado — um `<main>`, um
`<header>`, um `<footer>`, um `<h1>`, `lang="pt-BR"`. Custo em bundle: +0,4 kB
gzip sobre a linha de base da Fase 1.

**Riscos:** menu mobile é o ponto onde armadilha de acessibilidade costuma
entrar (foco preso, `aria-expanded` ausente, scroll do body). Usar a primitiva do
shadcn em vez de implementar do zero.

---

## Fase 3 — Hero ✅ implementada, aguardando validação

**Objetivo:** resolver os primeiros 7 segundos.

**Escopo:** hero com nome, "Desenvolvedor Fullstack", stack principal,
localização, objetivo (estágio/júnior) e CTAs — Ver projetos · GitHub · LinkedIn
· e-mail.

**Arquivos:** `src/components/sections/hero.tsx` · `src/content/perfil.ts`

**Dependências:** Fases 1 e 2

**Critérios de aceitação**

- [ ] Nome, cargo, stack e objetivo legíveis na primeira tela **sem scroll**, em
      1366×768 e em 375×667 — espaçamento calculado para caber nas duas alturas,
      mas depende de conferência do autor
- [x] **Nenhuma animação de entrada no hero** — verificado no HTML gerado: sem
      `opacity-0` e sem classe `animate-`
- [x] Texto puro, sem imagem de placeholder
- [x] Um único `<h1>`
- [x] Existe indicação visual de que a página continua abaixo da dobra — a régua
      com a stack fecha o hero e a seção seguinte entra na dobra
- [~] Todos os links externos funcionam — GitHub responde 200; o LinkedIn
      devolve 999 (anti-bot padrão da plataforma) e precisa de conferência
      manual do autor

**Resultado:** toda âncora da navegação tem um id correspondente na página.
Corrigidos na revisão: `label-mono` tinha `line-height: 1`, que faria as linhas
se tocarem quando o rótulo quebrasse em telas estreitas; e o espaçamento vertical
do hero era grande demais para caber em 375×667.

**Riscos:** a tentação de "enfeitar o hero" é onde este projeto mais pode se
perder. Se surgir dúvida entre informação e efeito, ganha a informação.

---

## Fase 4 — Conteúdo profissional ✅ implementada, aguardando validação

**Objetivo:** a narrativa profissional, sem inflar nada.

**Escopo:** Sobre (narrativa real e curta) · Stack (lista agrupada, sem barra,
sem logo) · Trajetória (timeline única: NEOiD em destaque, JCE compacto, FIAP,
cursos)

**Arquivos:** `src/components/sections/{sobre,stack,trajetoria}.tsx` ·
`src/content/{stack,experiencia}.ts`

**Dependências:** Fases 1 a 3. Pendências P2, P3 e P4 resolvidas pelo autor
antes da execução.

**Critérios de aceitação**

- [x] Todo dado confere com o currículo — sem número, resultado ou
      responsabilidade estimada. Os 7 certificados foram lidos um a um: título,
      carga horária e data saíram do próprio certificado
- [x] Zero barra de progresso e zero parede de logos
- [x] Toda tecnologia da seção Stack aparece como tag em ao menos um projeto
- [x] "Sobre" não contém clichê ("apaixonado por tecnologia", "café em código")
- [x] JCE aparece compacto, sem competir com a NEOiD
- [x] Hierarquia de heading correta, sem pular nível — auditada no HTML gerado
- [x] Item pendente **não foi escrito por suposição** — P2 (freelancer) ficou de
      fora por decisão; Rocketseat aparece sem carga horária por não haver
      comprovação

**Resultado:** os 7 links de certificado respondem 200. Pendências P2, P3 e P4
encerradas em D-22, D-23 e D-24.

**Riscos:** o histórico é curto. A saída não é inflar, é fundir experiência +
formação + cursos numa timeline só, que fica cheia e honesta.

---

## Fase 5 — Projetos

**Objetivo:** a seção que carrega o portfólio.

**Escopo:** cards na home · `/projetos/[slug]` com `generateStaticParams` e
`generateMetadata` · três cases completos · imagens otimizadas · lista secundária
"outros projetos"

**Arquivos:** `src/components/sections/projetos.tsx` ·
`src/components/project-card.tsx` · `src/app/projetos/[slug]/page.tsx` ·
`src/content/projetos.ts` · `public/projetos/*`

**Dependências:** Fases 1 a 4. **Bloqueada** por R-01, R-02 e R-03 de
`03-decisions.md` — repositórios apresentáveis, screenshots e demos.

**Critérios de aceitação**

- [ ] Os três cases têm decisões técnicas escritas em "escolhi X em vez de Y
      porque Z" — mínimo 3 por projeto
- [ ] Cada card descreve **o que o projeto faz e para quem**, antes de citar
      tecnologia
- [ ] Todo link externo testado e funcionando; **nenhum botão de demo sem demo**
- [ ] O crédito do PTZ Deck lê "desenvolvido por mim na NEOiD" e continua
      verdadeiro para quem abrir a marketplace
- [ ] Cada página de projeto tem título, canonical e OG próprios, repetindo os
      campos compartilhados de `openGraph`
- [ ] Imagens com dimensão explícita e `alt` descritivo; `sizes` correto onde
      houver `fill`
- [ ] Nenhuma seção de case preenchida com texto genérico por falta de informação

**Riscos:** é a fase mais dependente de material externo. Se screenshot ou README
não vierem, a fase entrega parcial e fica explícito o que faltou — não se inventa
conteúdo para fechar.

---

## Fase 6 — Contato

**Objetivo:** fechar o funil.

**Escopo:** e-mail com clique-para-copiar e feedback inline · LinkedIn · GitHub ·
currículo em PDF

**Arquivos:** `src/components/sections/contato.tsx` ·
`src/components/copy-email.tsx` · `public/curriculo.pdf`

**Dependências:** Fases 1 a 3

**Critérios de aceitação**

- [ ] Sem telefone, sem endereço, sem idade
- [ ] Clique-para-copiar funciona e anuncia o resultado a leitor de tela
      (`aria-live`), com fallback de `mailto:`
- [ ] PDF do currículo abre e está atualizado
- [ ] Sem formulário — não há backend, e formulário que não envia é pior que
      nenhum

**Riscos:** baixo.

---

## Fase 7 — Refinamento

**Objetivo:** transformar "funciona" em "bem-feito".

**Escopo:** `<Reveal>` compartilhado · microinterações · revisão de
responsividade nas 6 larguras · auditoria de acessibilidade · SEO completo ·
performance

**Arquivos:** `src/components/reveal.tsx` · `src/app/{sitemap,robots}.ts` ·
`src/app/opengraph-image.png` · JSON-LD em `src/app/page.tsx` · ajustes gerais

**Dependências:** Fases 1 a 6

**Critérios de aceitação**

- [ ] Lighthouse ≥ 95 nas quatro categorias, nos dois temas
- [ ] Extensão axe sem violação em todas as rotas
- [ ] Contraste AA verificado nos dois temas, incluindo borda e anel de foco
- [ ] `prefers-reduced-motion` respeitado — via `MotionConfig` e via CSS
- [ ] Animação só em `transform` e `opacity`; `once: true` em toda revelação
- [ ] Amplitude dentro do limite: translate ~20 px, escala ≤ 1.02
- [ ] First Load JS abaixo de 120 kB
- [ ] `sitemap.xml`, `robots.txt` e JSON-LD válidos
      ([validator.schema.org](https://validator.schema.org/))
- [ ] OG image 1200×630 desdobra corretamente no LinkedIn e no Slack
- [ ] **Revisão do Motion:** se estiver em um único uso, substituir por CSS e
      remover a dependência (R-04)

**Riscos:** é a fase que mais tende a virar refatoração sem fim. O escopo é a
lista acima; melhoria fora dela vira item de backlog, não trabalho desta fase.

---

## Fase 8 — Finalização e deploy

**Objetivo:** publicar.

**Escopo:** revisão geral de conteúdo · build de produção · deploy na Vercel ·
`NEXT_PUBLIC_SITE_URL` de produção · verificação pós-deploy · README do
repositório

**Dependências:** todas

**Critérios de aceitação**

- [ ] Build de produção limpo
- [ ] Site no ar, com todas as rotas respondendo
- [ ] LCP < 2,5 s · CLS < 0,1, medidos no deploy real e não só em local
- [ ] Todo link externo revalidado em produção
- [ ] Desdobramento do link conferido no LinkedIn e no Slack
- [ ] Nenhum dado pessoal indevido publicado
- [ ] README do repositório explica o que é, como rodar e a stack
- [ ] Histórico de commits limpo, em inglês, sem referência a ferramenta
- [ ] Troca para domínio próprio depende **só** de variável de ambiente

**Riscos:** métrica em produção costuma ser pior que em local. Reservar espaço
para um ajuste depois do primeiro deploy.

---

## Ordem de dependências

```
Fase 1 ──> Fase 2 ──> Fase 3 ──┬──> Fase 4 ──> Fase 5 ──┐
                               └──> Fase 6 ─────────────┴──> Fase 7 ──> Fase 8
```

Fases 4 e 6 não dependem uma da outra. A Fase 5 depende da 4 apenas por
consistência visual das seções.

---

## Trabalho paralelo do autor

Fora do escopo deste repositório, mas **bloqueante para o resultado**:

| Item                                                                | Bloqueia | Prazo ideal     |
| ------------------------------------------------------------------- | -------- | --------------- |
| README do `form-authenticate-fullstack` e revisão do `03-api-solid` | Fase 5   | antes da Fase 5 |
| Screenshots dos três destaques                                      | Fase 5   | antes da Fase 5 |
| Publicar demo do front do `form-authenticate-fullstack`             | Fase 5   | opcional        |
| Emissor, data e carga horária dos certificados                      | Fase 4   | antes da Fase 4 |
| Decidir sobre NestJS/DDD e experiência freelancer                   | Fase 4   | antes da Fase 4 |
| Currículo em PDF atualizado para `public/`                          | Fase 6   | antes da Fase 6 |
