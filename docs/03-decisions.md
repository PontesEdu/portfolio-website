# 03 — Decisões

Registro das decisões do projeto e do porquê de cada uma. Decisão revertida não
se apaga: marca-se como substituída, para o histórico continuar legível.

Status: **✅ decidido** · **🔵 aprovado pelo autor** · **⏳ pendente**

---

## Produto e conteúdo

### D-01 🔵 Formação: somente FIAP

Análise e Desenvolvimento de Sistemas na FIAP, jan/2026 – dez/2027, em
andamento. As informações do currículo antigo sobre a Unicid são descartadas.

**Por quê:** decisão do autor. Vale o currículo mais recente.

---

### D-02 🔵 PTZ Deck apresentado como "desenvolvido por mim na NEOiD"

O autor tem autorização da NEOiD para divulgar o projeto.

**Por quê:** a listagem na Elgato Marketplace está sob a conta da empresa, não
sob a conta pessoal. A redação precisa ser honesta e verificável: o crédito é o
desenvolvimento, não a publicação. Um revisor que abrir a marketplace vai ver o
publisher NEOiD, e a frase precisa continuar verdadeira nesse cenário.

---

### D-03 🔵 Três projetos em destaque

| Projeto                     | O que prova                                         |
| --------------------------- | --------------------------------------------------- |
| NEOiD PTZ Deck              | Produto real em produção e distribuído publicamente |
| Form Authenticate Fullstack | Fullstack ponta a ponta, com sessão segura          |
| API SOLID (`03-api-solid`)  | Back-end com regras de negócio reais e testes       |

**Por quê:** cobrem três ângulos sem repetição — produto/hardware, fullstack,
back-end testado. A pesquisa converge em 3 a 5 projetos polidos contra 10 rasos.

**Substitui:** `Cardapio` estava na lista inicial. **Removido a pedido do
autor** — projeto não concluído. Publicar projeto inacabado é um dos danos de
confiança mais citados na pesquisa.

---

### D-04 🔵 Link principal do PTZ Deck: `NEOiD-PTZ-Deck-Elgato`

Mais o link da [Elgato Marketplace](https://marketplace.elgato.com/product/neoid-ptz-deck-d260b006-c00d-44ae-91ec-85c0367c37df)
como prova de distribuição.

**Por quê:** o remote local aponta para `PontesEdu/ptzneoid`, que retorna 404. O
repositório público é `NEOiD-PTZ-Deck-Elgato`, e hoje é o único projeto do autor
em estado apresentável. Ver risco R-01.

---

### D-05 ✅ Ordem das seções: projetos antes de experiência

`Hero → Projetos → Sobre → Stack → Trajetória → Contato`

**Por quê:** para um candidato júnior, projetos são a evidência e a experiência é
a lacuna. Portfólios de sênior (Brittany Chiang, por exemplo) colocam experiência
antes — correto para eles, errado para copiar aqui.

`Trajetória` funde experiência, formação e cursos numa timeline só, em vez de
três seções meio vazias. Os bons portfólios têm 3 a 5 seções, não 8.

---

### D-06 ✅ Seção de Stack fica, mas sem barra e sem logo

A pesquisa recomenda **eliminar** a seção de skills e usar só tags nos projetos.
**Discordo parcialmente** e mantenho uma versão enxuta.

**Por quê:** o argumento da pesquisa é contra a _forma_ — barra de progresso
("React 80%") e parede de logos são o sinal mais forte de template copiado. Mas o
recrutador brasileiro de estágio filtra por palavra-chave de stack, e obrigá-lo a
inferir a stack lendo tags espalhadas em três cards custa mais do que uma lista
agrupada custa em espaço.

**Forma adotada:** lista agrupada em texto (Front / Back / Ferramentas /
Práticas). Sem percentual, sem barra, sem logo. Toda tecnologia listada também
aparece como tag em pelo menos um projeto — o que torna cada afirmação
verificável em vez de declarada.

---

### D-07 ✅ Stack do site inclui o que está no código, não só no currículo

Fastify, Zod, React Query, React Hook Form, shadcn/ui, React Router e Rollup
aparecem nos repositórios e não constam da lista de habilidades do currículo.

**Por quê:** é a lista mais forte e é verificável abrindo o código. O currículo
está subvendendo o autor.

---

### D-08 🔵 Idioma: somente português

Todo texto do site em português. Código, identificadores e commits em inglês.

**Por quê:** o público-alvo é recrutador brasileiro. Site bilíngue dobra a
manutenção de conteúdo e adiciona i18n — complexidade sem retorno nesta fase.

---

### D-09 ✅ Dados pessoais que não vão ao ar

Telefone, endereço e idade ficam fora. Contato por e-mail e LinkedIn.

**Por quê:** telefone público gera spam, endereço é dado sensível e idade abre
espaço para viés. Nenhum dos portfólios de referência publica esses dados.

---

## Técnicas

### D-10 🔵 Framer Motion fica, com uso restrito

CSS/Tailwind é o padrão. `motion` entra só quando trouxer benefício real de
experiência — orquestração, stagger, spring, saída animada.

**Por quê:** a pesquisa técnica recomendou não usar Motion, já que entrada em
scroll hoje é CSS puro a 0 kB. O autor decidiu manter, com moderação. É uma
competência declarada dele, e ~34 kB não ameaça Lighthouse 100 num site estático.

**Consequência:** um único componente `<Reveal>` compartilhado. Se ao fim da
Fase 7 o Motion estiver sendo usado em um só lugar, ele é substituído por CSS e a
dependência sai.

**Correção de um ponto da pesquisa:** `motion/react-client` permite usar
`<motion.div>` sem marcar o arquivo com `"use client"`, mas **não reduz o
bundle** — o JS do Motion continua sendo enviado ao cliente.

---

### D-11 🔵 Deploy na Vercel, domínio próprio depois

`metadataBase` lido de `NEXT_PUBLIC_SITE_URL`, nunca hardcoded.

**Por quê:** a troca de `*.vercel.app` para domínio próprio precisa ser só uma
variável de ambiente. URL hardcoded em metadata, OG e JSON-LD é o erro que
transforma essa troca em caça a string pelo projeto.

---

### D-12 ✅ Arquitetura híbrida: home única + rota por projeto

`/` · `/projetos/[slug]` · `/404`

**Por quê:** a home atende a triagem de ~7 segundos; as rotas de case atendem a
leitura de 2 a 5 minutos, são compartilháveis isoladamente (um recrutador pode
encaminhar um projeto a um engenheiro) e evitam o problema documentado de
empilhar tudo numa página só até virar bagunça.

**Consequência:** `/projetos/[slug]` usa `generateStaticParams` +
`generateMetadata`. Isso **contraria** a recomendação da pesquisa técnica de
evitar `generateMetadata` — mas ali a premissa era um site 100% estático sem rota
dinâmica. Com case por projeto, cada página precisa do próprio título e OG.

---

### D-13 ✅ Conteúdo em módulos TypeScript, sem MDX e sem CMS

**Por quê:** dá autocomplete, transforma erro de campo em erro de compilação e
custa zero dependência. MDX ou CMS só se surgir um blog de verdade.

---

### D-14 ✅ Sem suíte de testes unitários

CI com `tsc --noEmit`, `eslint .` e `next build`.

**Por quê:** não há lógica para testar — sem branch, sem máquina de estado, sem
transformação de dados. Testar que `<ProjectCard>` renderiza o título recebido é
testar o React. Uma pasta de snapshots de JSX estático é sinal negativo para
revisor sênior e imposto de manutenção sobre os arquivos que mais mudam.

Para site estático, um `next build` verde **é** o teste de integração: prova que
toda página pré-renderiza. A competência do autor em testes já está demonstrada
no `03-api-solid`, que é onde ela pertence.

---

### D-15 ✅ Tema por rampa de 12 passos sobre tokens do shadcn

**Por quê:** dark mode não é inversão. Sombra não tem contraste em fundo escuro;
`#000` puro causa halação; uma cor a 4.6:1 no branco pode cair a 2.3:1 no escuro.
A rampa de 12 passos (modelo Radix) dá a cada passo um papel fixo, igual nos dois
temas — então o componente nunca precisa saber em qual tema está.

Piso WCAG 2.2 AA nos dois temas, com conferência extra em APCA no escuro, já que
a matemática de razão da WCAG 2.x prevê mal a legibilidade em fundo escuro.

---

### D-16 ✅ Fatos verificados na documentação oficial do Next 16

Confirmados direto na doc, porque a maioria dos tutoriais está desatualizada:

- `next lint` foi **removido** na v16 — o script vira `eslint .`, e a chave
  `eslint` do `next.config` não existe mais
- a prop `priority` do `<Image>` foi **depreciada** em favor de `preload` /
  `loading="eager"` / `fetchPriority="high"`
- `images.qualities` agora é obrigatório e vem como `[75]`; outro valor de
  `quality` é silenciosamente ajustado para o mais próximo da lista
- a documentação do `eslint-config-next` lista como incluídos apenas
  `eslint-plugin-react`, `eslint-plugin-react-hooks` e `@next/eslint-plugin-next`.
  **Corrigido na Fase 1:** o pacote de fato **registra** o plugin `jsx-a11y`,
  mas não liga as regras dele. Espalhar `jsxA11y.flatConfigs.recommended` falha
  com `Cannot redefine plugin "jsx-a11y"` — o caminho correto é aplicar só
  `jsxA11y.flatConfigs.recommended.rules`, reaproveitando o plugin já registrado
- o `scroll-behavior: smooth` automático foi removido

---

### D-17 ⏳ O guia de desenvolvimento fica fora do repositório público

O guia de regras de desenvolvimento é criado na raiz, com o nome que o autor
pediu, e é ignorado por `.git/info/exclude` — **não** pelo `.gitignore`.

**Por quê:** o autor pediu que o repositório do portfólio não contenha artefato
nem referência da ferramenta de desenvolvimento. O nome de arquivo solicitado
é, em si, uma dessas referências — versioná-lo contradiria a própria regra que
ele descreve. O conteúdo é neutro e não menciona ferramenta alguma.

**Detalhe que só apareceu na implementação:** colocar o nome no `.gitignore`
resolveria o arquivo, mas o `.gitignore` é versionado — a regra de exclusão
publicaria justamente o nome que se queria esconder. Ignores locais pertencem a
`.git/info/exclude`, que existe para exatamente isso e nunca é enviado.
O `.gitignore` versionado ficou só com `AGENTS.md`, gerado pelo `next dev`, cujo
nome não identifica ferramenta alguma.

A documentação pública do projeto continua sendo `docs/`, que cobre discovery,
pesquisa, decisões e plano sem qualquer menção a ferramenta.

**Alternativa, se o autor preferir versionar o guia:** renomear o arquivo para
`docs/00-guia-de-desenvolvimento.md` e versionar normalmente. Decisão dele —
esta é a única decisão do documento ainda em aberto.

---

### D-18 🔵 Tipografia: Inter + JetBrains Mono

Duas famílias, ambas variáveis, ambas auto-hospedadas por `next/font`.

**Por quê Inter no corpo e na interface:** é a grotesca desenhada especificamente
para tela, com x-height alto e boa desambiguação — é o padrão de facto de
interface de produto de software, e é o que o portfólio mais citado da pesquisa
(brittanychiang.com) usa. Não é uma escolha "segura por omissão": é a fonte cuja
métrica foi feita para o tamanho em que o texto deste site vai ser lido.

**Por quê JetBrains Mono no metadado:** a pesquisa registra o monoespaçado como
sinal de identidade de desenvolvedor genuíno, adotado por Vercel, Linear, Raycast
e Resend. Entre as monos, a da JetBrains é a mais associada ao ofício — foi
desenhada por uma fabricante de IDE, para código. Usada em tag, data, rótulo de
seção e nav, ela dá a identidade sem nenhum gimmick.

**Substitui** Geist + Geist Mono, que vieram do `create-next-app`. Geist é ótima,
mas é a fonte da Vercel e o default do scaffold: num portfólio Next.js
hospedado na Vercel, é a tipografia que mais parece ter vindo de fábrica. A troca
é por identidade, não por qualidade.

**O que foi descartado e por quê:** Space Grotesk e Bricolage Grotesque têm mais
caráter, mas caráter na fonte do corpo cansa em texto longo e envelhece rápido.
Uma terceira família de display resolveria a vontade de personalidade violando a
regra das duas famílias — e cada família a mais é um recurso a mais no caminho
crítico.

---

### D-19 🔵 A personalidade vem do sistema, não do ornamento

O autor pediu mais personalidade sem cair em genérico. A resposta deste projeto é
que personalidade vem de composição, ritmo de espaçamento, contraste tipográfico,
detalhe estrutural e microinteração com propósito — nesta ordem. Detalhado no
guia de desenvolvimento §2.

**Por quê:** a pesquisa é explícita em que o que separa profissional de chamativo
é amplitude, não presença. Os portfólios de referência que mais se destacam não
têm mais efeitos — têm melhor composição e melhor tipografia. E a maior parte dos
sinais de "template" catalogados na pesquisa é justamente ornamento adicionado
para compensar falta de sistema: barra de skill, parede de logos, gradiente,
sombra em tudo.

**Consequência prática:** todo elemento decorativo precisa responder a "isto
ajuda o recrutador ou o revisor técnico?". Se não ajuda nenhum dos dois, sai —
mesmo bonito.

---

### D-20 ✅ Selo de disponibilidade no hero usa a cor de destaque

O hero abre com um ponto na cor de destaque seguido de "Disponível para estágio
ou vaga júnior", em mono caixa-alta.

**Por quê:** a regra do guia diz que a cor de destaque só aparece em elemento
interativo, para impedir cor decorativa. Este caso é a exceção deliberada — o
ponto não decora, ele carrega a informação que é o primeiro filtro de qualquer
recrutador. Aplicar a regra ao pé da letra aqui esconderia justamente o dado que
a pesquisa aponta como decisivo nos primeiros segundos.

**Limite da exceção:** vale para indicador de estado com significado próprio.
Não abre precedente para cor em ícone, borda, fundo ou título.

---

### D-21 ✅ Hero sem imagem e sem animação de entrada

**Por quê:** o `<h1>` é quase certamente o elemento de LCP. Animar a entrada
começando em `opacity: 0` adia a métrica até a hidratação e a animação
terminarem — é o erro de performance mais comum em portfólio. E hero sem imagem
é escolha legítima, usada por `alexnaraghi.com` e `leerob.com`: elimina o modo de
falha mais frequente, que é uma ilustração genérica barateando a página.

---

### D-22 🔵 Experiência freelancer fica de fora

**Por quê:** o autor esclareceu que não foi freelancer — fez um projeto para
amigos e não tem mais os arquivos. Sem artefato, sem cliente citável e sem
período confirmado, listar isso como experiência seria exatamente o modo de
falha que a pesquisa aponta como o mais detectável por revisor sênior:
experiência inflada. Uma trajetória curta e verdadeira é mais forte que uma
inchada.

**Encerra a pendência P2.**

---

### D-23 🔵 Cursos com certificado público e link para conferência

Sete cursos da Alura entram na Trajetória, cada um com título, carga horária,
data e **link direto para o certificado**.

**Por quê:** título, carga horária e data foram lidos de cada certificado, um a
um — nada foi arredondado nem estimado. Linkar o certificado transforma cada
linha de afirmação em fato verificável, que é o padrão mais alto que um
candidato júnior consegue atingir sem experiência profissional.

As trilhas da Rocketseat aparecem como uma frase, **sem carga horária**, porque
o autor não guardou os certificados. Declarar horas sem comprovação seria
inventar.

**Encerra a pendência P3.**

---

### D-24 🔵 NestJS, Java e DDD aparecem só pelos cursos, não na seção Stack

**Por quê:** o autor tem certificado e repositório de curso nessas tecnologias,
mas não as usa há um tempo e por isso não as colocou no currículo. A seção Stack
é a lista do que ele trabalha hoje, e a regra do projeto é que toda tecnologia
listada ali apareça como tag em algum projeto — do contrário vira afirmação sem
lastro.

Os cursos resolvem isso sem custo: mostram a amplitude do estudo, datados e
comprovados, sem alegar prática atual. Um revisor lê "estudou NestJS em 2024",
que é verdade, em vez de "trabalha com NestJS", que não é.

**Encerra a pendência P4.**

---

## Riscos

### R-01 🔴 Só um dos três destaques está apresentável publicamente

Hoje apenas `NEOiD-PTZ-Deck-Elgato` está em estado de ser aberto por um
recrutador. `form-authenticate-fullstack` tem README de uma linha;
`03-api-solid` tem README bom, mas é preciso confirmar o estado geral.

**Impacto:** o portfólio leva o revisor ao GitHub. Um site excelente que linka
para um repositório sem README derruba a impressão que ele acabou de construir.

**Mitigação:** a página de case fica sob controle total do autor e carrega a
profundidade mesmo que o README seja simples. Ainda assim, os dois repositórios
precisam de README antes da Fase 5 fechar. Trabalho paralelo, fora do escopo
deste projeto, mas bloqueante para o resultado.

---

### R-02 🟡 Sem screenshot dos destaques

Só `GoodMovies` e `NEOiD-tally-web` têm imagem. Card de projeto sem screenshot
perde muito.

**Mitigação:** ou o autor captura as telas, ou os cards adotam layout text-only
deliberado (padrão usado por emilkowal.ski e leerob.com, e legítimo). Decidir
antes da Fase 5.

---

### R-03 🟡 Nenhum destaque tem demo no ar

Link de demo quebrado ou ausente é citado na pesquisa como destruidor de
confiança.

**Mitigação:** publicar o front do `form-authenticate-fullstack`. Alternativa:
não prometer demo — card sem botão de demo é melhor que botão que não funciona.

---

### R-04 🟢 Motion pode virar dependência de um uso só

**Mitigação:** revisão explícita na Fase 7. Um uso só, sai a dependência.
