# 02 — Pesquisa

Pesquisa feita antes de fechar o design, em duas frentes: padrões de UX/UI para
portfólio de desenvolvedor e boas práticas técnicas atuais de Next.js. Aqui ficam
só as conclusões que **mudaram alguma decisão** — cada uma com a fonte e a
consequência prática no projeto.

---

## 0. O que foi descartado

Quatro estatísticas circulam muito em conteúdo sobre portfólio de desenvolvedor e
**não têm fonte primária**. Nenhuma decisão deste projeto se apoia nelas:

| Alegação                                                                       | Status                                                                       |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| "Stack Overflow 2024: 73% dos gestores valorizam portfólio acima do currículo" | A pesquisa de 2024 ouviu ~65.000 **desenvolvedores** e não tem essa pergunta |
| "84% dos empregadores querem ver aplicações funcionando"                       | Sem fonte primária                                                           |
| "Estudo Webflow 2025: animações customizadas dão +23% de tempo de sessão"      | Não localizável; quase certamente inventada                                  |
| "60%+ do tráfego de portfólio é mobile"                                        | Opinião de um post, sem dado                                                 |

Registrado porque a tentação de citar número redondo em documento de projeto é
grande, e um número falso invalida o argumento inteiro quando alguém checa.

---

## 1. Atenção do recrutador — o dado que define o layout

**~7,4 segundos** na triagem inicial. Estudo de eye-tracking da Ladders com 30
recrutadores profissionais e hardware de rastreamento ocular
([PDF](https://www.theladders.com/static/images/basicSite/pdfs/TheLadders-EyeTracking-StudyC2.pdf)).

O mesmo estudo mediu **o que ganhou e o que perdeu atenção**:

| Ganhou                                   | Perdeu                              |
| ---------------------------------------- | ----------------------------------- |
| Layout simples, uma coluna               | Layout carregado, múltiplas colunas |
| Títulos de seção explícitos e em negrito | Ausência de cabeçalho de seção      |
| Itens em bullet                          | Frases longas                       |
| Espaço em branco                         | Falta de espaço em branco           |

**Atenção é concentrada no topo, não distribuída.** NN/g, 120 participantes e
mais de 130.000 fixações oculares
([Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)):
**57% do tempo acima da dobra**, 74% nas duas primeiras telas, e **mais de 65%
do tempo acima da dobra fica na metade de cima dela**. Usuários leem 20–28% das
palavras.

**Consequência no projeto:**

- Hero em texto puro, coluna única, sem animação segurando informação
- Nome, cargo, stack, localização e objetivo na primeira tela
- Toda seção com título explícito; parágrafo curto; fato em bullet ou tag
- Nada de efeito máquina de escrever no cargo — é esconder o dado mais
  importante atrás de uma animação

---

## 2. O que avaliadores procuram

Convergência entre [Codecademy](https://www.codecademy.com/resources/blog/what-to-include-in-a-junior-developer-portfolio),
[freeCodeCamp](https://www.freecodecamp.org/news/level-up-developer-portfolio/),
[DEV](https://dev.to/dhruvjoshi9/junior-dev-resume-portfolio-in-the-age-of-ai-what-recruiters-care-about-in-2025-26c7)
e a thread [Ask HN sobre portfólio na contratação](https://news.ycombinator.com/item?id=14420802):

1. **Entregue e terminado vence ambicioso e abandonado.** Foi o tema dominante na
   thread do HN — "qualquer coisa que foi lançada" é a resposta mais repetida
2. **Raciocínio, não sintaxe.** É o diferencial específico de júnior, porque
   ninguém espera profundidade de experiência
3. **Documentação e testes** são raros em candidato júnior, e por isso valiosos
4. **Legibilidade para quem não é técnico** — o primeiro humano é recrutador
5. **Sinais de manutenção.** Demo morta e link quebrado destroem confiança de
   forma desproporcional
6. **Autenticação e segurança** foram citadas no HN como sinal crível de
   maturidade

**Consequência no projeto:**

- O PTZ Deck vira o eixo da narrativa: é software entregue, em produção,
  distribuído publicamente. Isso é raro em portfólio júnior
- Todo case tem seção de decisões técnicas em formato "escolhi X em vez de Y
  porque Z"
- O `form-authenticate-fullstack` ganha destaque justamente pelo refresh token em
  cookie HttpOnly — é o item 6
- `Cardapio` sai (item 1)
- Nenhum link para demo que não exista (item 5)

**Divergência registrada:** há na thread do HN uma minoria forte dizendo que
portfólio quase não importa, porque o trabalho dos bons desenvolvedores é
proprietário e indicação domina. **Esse argumento é sobre contratação sênior.**
Para júnior sem histórico, o portfólio é a única evidência disponível. Mas serve
de alerta contra tratar o portfólio como substituto de networking e contra
encher de volume.

---

## 3. Arquitetura: híbrido

Não existe estudo medindo página única contra múltiplas páginas para portfólio de
desenvolvedor. O padrão recomendado com mais frequência é o **híbrido**: uma home
rolável + rota dedicada por projeto.

Todos os portfólios de referência inspecionados usam híbrido — `brittanychiang.com`,
`emilkowal.ski`, `samuelkraft.com`, `tobiasahlin.com`, `paco.me`.

Modo de falha documentado: um desenvolvedor fullstack empilhou 5 serviços e 8
projetos numa página só, "ficou caótico", e os visitantes pediam detalhe que não
existia — refeito como multi-página.

**Consequência:** home única + `/projetos/[slug]`. Ver D-12.

---

## 4. Ordem das seções

Sem dado experimental. O que os bons sites têm em comum é **3 a 5 seções, não 8**.
Nenhum dos inspecionados tem seção isolada de skills com logos, depoimentos ou
serviços.

| Site               | Seções                                              |
| ------------------ | --------------------------------------------------- |
| leerob.com         | bio (histórico embutido em prosa) → notas → blog    |
| samuelkraft.com    | hero/bio → projetos → posts                         |
| emilkowal.ski      | aviso → sobre → 4 projetos → escrita → newsletter   |
| paco.me            | Building → Projects → Writing → Now → Connect       |
| brittanychiang.com | hero → sobre → **experiência** → projetos → escrita |

**A observação decisiva:** Brittany Chiang coloca experiência antes de projetos —
correto para ela, que é sênior no Klaviyo. **Errado copiar para um júnior**, em
que projetos são a evidência e experiência é a lacuna.

**Consequência:** `Hero → Projetos → Sobre → Stack → Trajetória → Contato`, com
experiência, formação e cursos fundidos numa timeline só. Ver D-05.

---

## 5. Apresentação de projeto

**Anatomia do card**, convergente entre as referências: screenshot (ou nada) ·
título · **uma a duas frases do que faz e para quem** · tags de stack inline ·
links. A descrição é por função, **nunca pela tecnologia**.

**Estrutura de case study** — o esqueleto repetido é Problema → Abordagem →
Stack e trade-offs → Resultado → Links. O refinamento mais útil encontrado:
**tratar o case como um ADR** — documentar as alternativas consideradas e por que
foram rejeitadas, não só o estado final.

> "Seja honesto sobre trade-offs e mencione as alternativas que você considerou"
> é a instrução mais repetida em todas as fontes sobre case study. É também a
> mais barata de executar para quem não tem experiência profissional.

**Quantidade:** 3 a 5 projetos polidos vencem 10 rasos. Consenso unânime.

**Consequência:** estrutura de case definida no guia de desenvolvimento §12, com "o que eu
mudaria hoje" incluído — seção que sinaliza autocrítica e é especialmente
crível vinda de um júnior.

---

## 6. Tipografia

- **Medida de linha 45–75 caracteres, 66 ótimo**, para texto de coluna única
  ([webtypography.net §2.1.2](http://webtypography.net/2.1.2)). Implementação
  literal: `max-width: 66ch`
- Corpo 16–18 px, entrelinha 1,5–1,6. Abaixo de 16 px o iOS dá zoom no foco
- Entrelinha 1,1–1,25 em título de display, apertando conforme o tamanho cresce
- **Tracking negativo (−0.01em a −0.03em) em título grande** — quase universal em
  grotescas tipo Inter/Geist. A ausência disso é um dos indicadores mais
  confiáveis de "default não ajustado"
- Um salto de peso para hierarquia (400 corpo / 500–600 título), não quatro

**Monospace como sinal de desenvolvedor** é uma tendência documentada, não só
gosto: Vercel, Linear, Cursor, Raycast, Resend e PostHog usam mono como sinal de
marca ([madegooddesigns](https://madegooddesigns.com/monospace-font/)).

**O detalhe que importa para este projeto:** mono é elegante em **texto pequeno e
estrutural** — tag, data, label de seção, cabeçalho de tabela, nav, código
inline. Mono em corpo de texto ou em título vira cosplay de terminal, que é
exatamente o clichê a evitar.

**Consequência:** uma sans variável + uma mono, mono restrita a metadado.
guia de desenvolvimento §2.

---

## 7. Tema claro/escuro

**Dark mode não é inversão.** Uma paleta clara invertida mecanicamente costuma
falhar contraste e ficar embarrada.

**Rampa de 12 passos** ([Radix Colors](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)),
em que cada passo tem função fixa e **o mesmo número significa a mesma função nos
dois temas**:

| Passos    | Função                                            |
| --------- | ------------------------------------------------- |
| 1–2       | Fundo da aplicação; fundo sutil de componente     |
| 3 / 4 / 5 | Fundo de componente: normal / hover / pressionado |
| 6 / 7 / 8 | Borda: sutil / interativa / forte e anel de foco  |
| 9 / 10    | Fundo sólido / seu hover                          |
| 11 / 12   | Texto de baixo contraste / de alto contraste      |

É esse mecanismo que faz um tema ser **autorado** em vez de invertido: escrevem-se
duas rampas, e o código do componente nunca muda.

**Elevação:** sombra não funciona em fundo escuro — não há contraste entre sombra
escura e fundo escuro. A substituição é **hierarquia por luminosidade**:
superfície elevada fica mais clara, não mais sombreada. Mínimo 4 níveis.

**Evitar `#000000`.** Preto puro gera contraste excessivo com quase qualquer cor
de frente, causando halação — o texto claro parece brilhar e as bordas vibram.
O mesmo vale para `#FFFFFF` puro em texto sobre fundo escuro.

**Acento dessaturado no escuro.** Exemplo citado nas fontes: um azul a 4,6:1 no
branco cai para 2,3:1 no escuro. **Toda razão precisa ser recalculada por tema.**

**Contraste — WCAG 2.2 AA:** 4,5:1 texto normal · 3:1 texto grande · **3:1
componente de UI e indicador de foco** (SC 1.4.11).

**Divergência registrada:** é amplamente reconhecido — inclusive por notas de
trabalho do W3C — que a matemática de razão da WCAG 2.x prevê mal a legibilidade
em modo escuro, e a [APCA](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell.html)
lida melhor com isso (Lc 75 mínimo, Lc 90 preferível para corpo). Mas WCAG 2.2 AA
continua sendo o padrão que as ferramentas de auditoria checam.
**Resolução prática: WCAG 2.2 AA como piso, APCA como conferência no escuro.**

---

## 8. Animação

**Durações** (consenso convergente): micro-interação 150–250 ms · transição
200–350 ms · **saída mais rápida que entrada** (o usuário está esperando para
fazer a próxima coisa).

**Easing:** `ease-out` para entrada. **Nunca `ease-in` para entrar.**

**A regra de taste mais útil encontrada — amplitude:**

> Um fade-up de 20px é quase sempre melhor que um slide de 100px, e uma escala de
> 1.02 é melhor que 1.1.

Essa heurística separa profissional de chamativo com mais confiabilidade do que
qualquer outra coisa na pesquisa.

**Padrões considerados de bom gosto:** uma variante de fade/fade-up definida uma
vez e reusada · `whileInView` com `viewport={{ once: true }}` · stagger de ~60 ms
· spring para o que o usuário manipula diretamente, tween para entrada
orquestrada.

**Performance:** animar **só `transform` e `opacity`**. Nunca `height`, `width`,
`padding`, `margin`, `top` — disparam layout e estouram CLS/INP.

**O erro que custa métrica:** `initial={{ opacity: 0 }}` em conteúdo acima da
dobra. O título do hero é quase certamente o elemento de LCP; começar invisível
significa que o LCP só é registrado depois da hidratação e da animação.

**Lido como chamativo:** blob que segue o cursor, botão magnético, cursor
customizado, revelação letra a letra em título, parallax em toda seção,
scroll-jacking, 3D/WebGL, preloader, marquee.

---

## 9. Erros que fazem um portfólio júnior parecer template

**Conteúdo:** projeto de tutorial reconhecível (to-do de curso, clone de Netflix,
calculadora) · volume no lugar de curadoria · listar o próprio portfólio como
projeto · demo quebrada · "Sobre" genérico ("apaixonado por tecnologia, adoro
café") · nenhum texto de case, só link do GitHub · experiência inflada.

**Design:** **barra de progresso de skill** — condenada universalmente, não
falseável, e um dos indicadores mais fortes de template copiado · parede de logos
de stack · template não modificado · layout carregado sem espaço em branco ·
**defaults não ajustados** (o `blue-500` do Tailwind, `shadow-lg` em tudo,
`rounded-lg` sem ritmo, sem tracking em título) · dark mode que é só `dark:`
invertido · clichês de "hacker" · não responsivo · sem domínio próprio · **sem
skip link, sem anel de foco visível, botão de ícone sem label, imagem sem alt** ·
**sem OG image e sem title** — recrutador cola link no Slack, e o desdobramento é
a segunda impressão.

**Consequência:** a lista de proibições do guia de desenvolvimento §2 e §10 vem direto daqui.
Vale registrar que Brittany Chiang publica skip link num portfólio pessoal — esse
é o patamar, e é sinal positivo para qualquer revisor sênior.

---

## 10. Referências e a ideia a aproveitar de cada uma

Nenhuma será copiada. De cada uma, um mecanismo:

| Site                                             | Ideia                                                                                                                                                                                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [brittanychiang.com](https://brittanychiang.com) | Experiência como lista cronológica com período, cargo, uma descrição e tags inline. Extremamente escaneável. _(O layout de duas colunas foi tão clonado que copiá-lo já lê como template — aproveitar o mecanismo, não a pele.)_ |
| [leerob.com](https://leerob.com)                 | Histórico profissional em prosa, dentro da bio, em vez de um componente de timeline. Para júnior com histórico curto, esconde a lacuna melhor que uma timeline meio vazia                                                        |
| [emilkowal.ski](https://emilkowal.ski)           | Projetos como lista de texto com uma frase funcional precisa cada. Prova que screenshot é opcional quando a descrição é boa                                                                                                      |
| [paco.me](https://paco.me)                       | Seção "Now" — um parágrafo datado sobre o que está construindo/aprendendo. Sinal barato de que o site está vivo                                                                                                                  |
| [rauno.me](https://rauno.me)                     | E-mail com clique-para-copiar e feedback inline "Copiado". Uma micro-interação genuinamente útil, sem movimento decorativo                                                                                                       |
| [samuelkraft.com](https://www.samuelkraft.com)   | Anatomia do card: screenshot + título + contexto + uma frase do que faz — descrito por função, nunca por stack                                                                                                                   |
| [tobiasahlin.com](https://tobiasahlin.com)       | Exatamente três projetos em destaque, cada um com rota própria. Curadoria como decisão de design                                                                                                                                 |
| [anandchowdhary.com](https://anandchowdhary.com) | Puxar **um** número real de API para a página (estrelas do GitHub, último commit). Prova que o site é aplicação, não export estático. _Avaliar na Fase 7 — é sinal fullstack barato, mas adiciona fetch_                         |
| [alexnaraghi.com](https://alexnaraghi.com)       | Hero só com texto. Remove o modo de falha mais comum: imagem genérica que barateia a página                                                                                                                                      |

Para navegar referência: [Godly](https://godly.website) tem sinal muito melhor
que Awwwards para este briefing — Awwwards pende para experimental e de agência,
que é a direção errada para portfólio júnior voltado a recrutador.

---

## 11. Técnico — o que mudou decisão

Verificado direto na documentação oficial, porque boa parte do conteúdo publicado
sobre Next 16 está desatualizada. Detalhe em D-16.

| Achado                                                                            | Consequência                                                                                                                 |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `next lint` removido na v16                                                       | Script vira `eslint .`; chave `eslint` sai do `next.config`                                                                  |
| `priority` do `<Image>` depreciada                                                | Usar `preload` / `loading="eager"` / `fetchPriority="high"`                                                                  |
| `eslint-config-next` registra o plugin `jsx-a11y` mas não liga as regras | Aplicar `jsxA11y.flatConfigs.recommended.rules`; espalhar o config inteiro falha com `Cannot redefine plugin` |
| `images.qualities` agora obrigatório, default `[75]`                              | Valor fora da lista é ajustado silenciosamente                                                                               |
| `scroll-behavior: smooth` automático removido                                     | Precisa de `data-scroll-behavior="smooth"`, e isso interage com reduced-motion                                               |
| Tailwind v4 é CSS-first                                                           | Sem `tailwind.config.js`. `@theme inline` é obrigatório quando um token referencia outra variável                            |
| `@theme` não pode ser aninhado em seletor                                         | Por isso os valores crus ficam em `:root`/`.dark` e são reexportados em `@theme inline` — é exatamente a estrutura do shadcn |
| `next/font` já auto-hospeda e gera fallback com métrica ajustada                  | Não desabilitar `adjustFontFallback`; não escrever `size-adjust` à mão                                                       |
| `metadataBase` é obrigatório com URL relativa em OG                               | Ler de env var, para a troca de domínio ser trivial                                                                          |
| Metadata de página **substitui** o objeto `openGraph` inteiro                     | Repetir campos compartilhados em `/projetos/[slug]`                                                                          |
| JSON-LD deve ir em `<script>` puro, não `next/script`                             | Escapar `<` para evitar XSS                                                                                                  |
| ESLint 10 é flat-config-only e a cadeia do `eslint-config-next` ainda não suporta | Fixar `eslint@^9`                                                                                                            |

**Alvo realista:** para site estático em Next na Vercel, Lighthouse 100 nas
quatro categorias é o resultado esperado, não meta ambiciosa. Abaixo de 95, a
causa costuma ser imagem não otimizada, animação de entrada no elemento de LCP,
fonte sem fallback métrico ou biblioteca de ícone importada inteira.

**Bounce por lentidão** (Google/SOASTA 2017): probabilidade sobe 32% de 1s para
3s e 90% de 1s para 5s. Um portfólio que falha em performance nunca chega a ser
avaliado pelo design.
