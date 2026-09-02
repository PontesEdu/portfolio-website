/**
 * Projetos do portfolio.
 *
 * Tres em destaque, cada um com pagina propria. A descricao curta diz o que o
 * projeto faz e para quem, antes de citar qualquer tecnologia -- a stack e
 * metadado, nao manchete.
 *
 * Projeto sem demo publicada nao ganha botao de demo: link quebrado custa mais
 * confianca do que a ausencia do link. Pelo mesmo motivo, projeto inacabado nao
 * entra, nem como "em breve".
 *
 * As decisoes tecnicas abaixo foram extraidas do codigo de cada repositorio.
 * O formato e sempre "escolhi X em vez de Y porque Z" -- e o motivo precisa ser
 * defensavel numa entrevista, porque e exatamente ali que ele sera cobrado.
 */

export type Decisao = {
  escolha: string;
  alternativa: string;
  motivo: string;
};

export type Projeto = {
  slug: string;
  nome: string;
  /** Uma frase: o que faz e para quem. */
  descricao: string;
  /** Tags exibidas no card, na ordem em que importam. */
  stack: string[];
  repositorio: string;
  /** Ausente quando nao ha demo publicada. */
  demo?: string;
  /** Link externo adicional, como uma listagem de marketplace. */
  externo?: { label: string; href: string };

  contexto: string;
  arquitetura: string;
  decisoes: Decisao[];
  desafio: string;
  resultado: string;
  /** O que eu mudaria hoje. */
  aprendizado: string;
};

export const projetosDestaque: Projeto[] = [
  {
    slug: "neoid-ptz-deck",
    nome: "NEOiD PTZ Deck",
    descricao:
      "Permite que o operador de transmissão ao vivo controle câmeras PTZ — movimento, " +
      "zoom, foco, presets e rastreamento — por botões físicos do Stream Deck, sem " +
      "joystick nem software dedicado.",
    stack: ["TypeScript", "Node.js", "Stream Deck SDK", "Rollup"],
    repositorio: "https://github.com/PontesEdu/NEOiD-PTZ-Deck-Elgato",
    externo: {
      label: "Elgato Marketplace",
      href: "https://marketplace.elgato.com/product/neoid-ptz-deck-d260b006-c00d-44ae-91ec-85c0367c37df",
    },

    contexto:
      "Durante uma transmissão ao vivo, quem opera as câmeras precisa de resposta " +
      "imediata. O controle padrão é um joystick físico ou um software dedicado na " +
      "tela — os dois tiram a atenção da operação num momento em que não dá para " +
      "errar. A NEOiD fabrica câmeras PTZ e precisava de um controle direto, por " +
      "botão físico, para os operadores que já usam Stream Deck na mesa.",

    arquitetura:
      "Plugin do Stream Deck em TypeScript e Node.js, empacotado com Rollup. São " +
      "nove ações, uma por função de botão, sobre duas camadas: uma classe de API " +
      "por fabricante de câmera e utilitários de transporte de rede — CGI sobre " +
      "HTTP para as câmeras NEOiD, VISCA sobre TCP e UDP para as demais. O estado " +
      "compartilhado (câmera selecionada, velocidades, presets) fica nas global " +
      "settings do próprio Stream Deck.",

    decisoes: [
      {
        escolha:
          "Checar a conexão da câmera com uma corrida entre o fetch e um timeout",
        alternativa: "simplesmente esperar a requisição resolver",
        motivo:
          "uma câmera desligada deixa a requisição pendurada e o botão sem resposta. " +
          "Ao vivo, um botão que não responde é pior que um botão que avisa " +
          "“sem conexão” — o operador precisa saber em qual dos dois casos está.",
      },
      {
        escolha:
          "Usar o mesmo botão para gravar e chamar um preset, separando por tempo de pressão",
        alternativa: "dois botões por preset",
        motivo:
          "o Stream Deck tem número limitado de teclas. Duplicar cada preset gastaria " +
          "metade do painel e reduziria pela metade quantas posições o operador " +
          "consegue alcançar sem trocar de página.",
      },
      {
        escolha: "Uma classe de API por fabricante de câmera",
        alternativa: "um cliente único com condicionais internas",
        motivo:
          "os fabricantes não falam o mesmo protocolo, e as escalas de velocidade de " +
          "pan, tilt, zoom e foco não coincidem entre eles. Um cliente único viraria " +
          "uma sequência de exceções difícil de ler e de estender.",
      },
      {
        escolha:
          "VISCA sobre UDP como caminho principal, com HTTP como alternativa",
        alternativa: "usar só HTTP para tudo",
        motivo:
          "UDP não paga o custo de estabelecer conexão a cada comando. Em movimento " +
          "contínuo, essa diferença de latência é percebida por quem está operando.",
      },
      {
        escolha: "Guardar um instantâneo da câmera na própria tecla do preset",
        alternativa: "mostrar apenas o número do preset",
        motivo:
          "o operador reconhece o enquadramento pela imagem muito mais rápido do que " +
          "associa um número a uma posição — e sem precisar desviar o olhar para o " +
          "monitor de preview.",
      },
    ],

    desafio:
      "Fazer o mesmo conjunto de botões atender fabricantes que falam protocolos " +
      "diferentes. Cada fabricante tem seu próprio meio de transporte, seu próprio " +
      "formato de comando e sua própria escala de velocidade — mas para o operador " +
      "tudo precisa se comportar igual, com a mesma tecla fazendo a mesma coisa.",

    resultado:
      "Publicado na Elgato Marketplace, na versão 2.1, para Mac e Windows. Nove " +
      "ações, presets por câmera com imagem de referência, ciclo de velocidades, " +
      "rastreamento, menu OSD e verificação automática de conexão.",

    aprendizado:
      "A escolha do fabricante é resolvida com uma condicional repetida dentro de " +
      "quase todas as ações. Funciona, mas espalha a mesma decisão por mais de dez " +
      "lugares: incluir um terceiro fabricante hoje significa abrir todas as ações " +
      "de novo. Eu extrairia uma interface comum de câmera e escolheria a " +
      "implementação uma única vez, no momento em que a câmera é registrada. As " +
      "ações não deveriam precisar saber de qual fabricante é a câmera.",
  },

  {
    slug: "form-authenticate-fullstack",
    nome: "Form Authenticate Fullstack",
    descricao:
      "Fluxo completo de cadastro e login com sessão segura: access token curto em " +
      "memória e refresh token em cookie HttpOnly, com renovação automática e logout.",
    stack: [
      "TypeScript",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "React",
      "React Query",
    ],
    repositorio: "https://github.com/PontesEdu/form-authenticate-fullstack",

    contexto:
      "Autenticação é o assunto em que mais se erra por copiar o exemplo mais fácil. " +
      "O caminho comum é salvar o token no localStorage, que funciona na primeira " +
      "tentativa e deixa a aplicação exposta. Construí este projeto justamente para " +
      "resolver a pergunta que o tutorial padrão evita: onde guardar o token no " +
      "navegador, e como renovar a sessão sem pedir a senha de novo.",

    arquitetura:
      "API em Fastify com Prisma e PostgreSQL, organizada em camadas: o controller " +
      "cuida de HTTP e validação, o caso de uso concentra a regra, e o repositório " +
      "é uma interface com implementação em Prisma. O front é React com React " +
      "Router, React Query para estado de servidor e React Hook Form com Zod nos " +
      "formulários. As rotas protegidas verificam a sessão antes de renderizar.",

    decisoes: [
      {
        escolha:
          "Guardar o access token em memória e o refresh token em cookie HttpOnly",
        alternativa: "salvar o token no localStorage",
        motivo:
          "qualquer script injetado na página consegue ler o localStorage. Um cookie " +
          "HttpOnly não é acessível por JavaScript, então o refresh token continua " +
          "protegido mesmo se a aplicação for comprometida. O preço é perder a sessão " +
          "ao recarregar a aba até a renovação acontecer — foi um preço consciente.",
      },
      {
        escolha: "Access token de 10 minutos e refresh token de 7 dias",
        alternativa: "um único token de vida longa",
        motivo:
          "token curto reduz a janela de estrago se ele vazar, e o refresh mantém o " +
          "usuário logado sem pedir a senha de novo. São dois objetivos que um token " +
          "único não consegue atender ao mesmo tempo.",
      },
      {
        escolha: "Renovar o token quando o servidor responde 401",
        alternativa: "conferir a validade antes de cada requisição",
        motivo:
          "o servidor é a única fonte de verdade sobre a expiração. Checar no cliente " +
          "duplica a regra e ainda erra quando o relógio do usuário está fora de hora.",
      },
      {
        escolha:
          "Declarar o repositório como interface e injetá-lo no caso de uso",
        alternativa: "chamar o Prisma direto de dentro da regra de negócio",
        motivo:
          "o caso de uso passa a depender de um contrato, não do ORM. Trocar de banco " +
          "ou testar a regra sem infraestrutura vira questão de passar outra " +
          "implementação.",
      },
    ],

    desafio:
      "A renovação precisa ser invisível para quem está usando: a requisição que " +
      "falhou por token expirado tem que ser refeita sozinha, com o token novo, sem " +
      "que o usuário perceba. E precisa parar quando o próprio refresh falha — " +
      "senão vira um laço de requisições contra um servidor que já disse não.",

    resultado:
      "Cadastro, login, renovação e logout funcionando de ponta a ponta, com a " +
      "sessão protegida contra leitura por JavaScript. Ainda não está publicado: " +
      "roda localmente com o banco em Docker.",

    aprendizado:
      "O interceptor que renova o token chama um hook do React de dentro de uma " +
      "função que não é componente. Isso quebra as regras de hooks e falha em tempo " +
      "de execução justamente quando mais importa — na primeira renovação. Hoje eu " +
      "entregaria a função de atualizar o token ao módulo do Axios uma vez, na " +
      "inicialização, em vez de tentar alcançar o contexto do React de dentro dele.",
  },

  {
    slug: "api-solid",
    nome: "API de check-in em academias",
    descricao:
      "API REST onde o usuário faz check-in apenas se estiver a até 100 metros da " +
      "academia, e o check-in só é validado por um administrador dentro de 20 minutos.",
    stack: [
      "TypeScript",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Vitest",
    ],
    repositorio: "https://github.com/PontesEdu/03-api-solid",

    contexto:
      "Uma API de check-in parece simples até as regras aparecerem: o usuário só " +
      "pode marcar presença se estiver fisicamente perto da academia, não pode " +
      "marcar duas vezes no mesmo dia, e o registro só vale depois que um " +
      "administrador confirma — dentro de uma janela de tempo. São regras que não " +
      "cabem numa validação de formulário, e foi por isso que escolhi este projeto " +
      "para praticar separação de responsabilidades.",

    arquitetura:
      "Fastify com Prisma e PostgreSQL em Docker. Cada caso de uso recebe os " +
      "repositórios pelo construtor, e cada repositório tem uma interface com duas " +
      "implementações: uma em Prisma para produção e uma em memória para os testes. " +
      "Os erros de domínio são classes próprias. A integração contínua roda no " +
      "GitHub Actions, com fluxos separados para testes unitários e de ponta a ponta.",

    decisoes: [
      {
        escolha: "Repositórios em memória para os testes de regra de negócio",
        alternativa: "subir um banco para cada teste",
        motivo:
          "as regras são o que mais muda e o que mais precisa de teste rápido. Sem " +
          "banco, a suíte roda em milissegundos e não quebra por causa de " +
          "infraestrutura — o que faz eu realmente rodar os testes enquanto programo.",
      },
      {
        escolha: "Erros de domínio como classes próprias",
        alternativa: "devolver mensagem de texto ou código numérico",
        motivo:
          "o controller mapeia cada tipo de erro para um status HTTP sem precisar ler " +
          "a mensagem. Comparar texto para decidir o comportamento quebra em silêncio " +
          "assim que alguém corrige uma palavra.",
      },
      {
        escolha: "Calcular a distância dentro do caso de uso",
        alternativa: "delegar o cálculo ao banco de dados",
        motivo:
          "o limite de 100 metros é regra de negócio, não detalhe de armazenamento. " +
          "No caso de uso ela fica testável sem banco e visível para quem lê o código.",
      },
      {
        escolha:
          "Separar os fluxos de teste unitário e de ponta a ponta na integração contínua",
        alternativa: "um único fluxo rodando tudo junto",
        motivo:
          "o teste de ponta a ponta precisa de banco e é lento. Separado, o retorno " +
          "sobre as regras de negócio chega rápido, e o fluxo pesado não atrasa o " +
          "sinal que mais importa.",
      },
    ],

    desafio:
      "Isolar o banco entre os testes de ponta a ponta. Rodando em sequência contra " +
      "o mesmo banco, um teste enxerga o que o anterior deixou e a suíte passa a " +
      "falhar dependendo da ordem — o pior tipo de falha, porque não é reproduzível. " +
      "A saída foi preparar um ambiente de banco isolado para cada arquivo de teste.",

    resultado:
      "Onze casos de uso, cada um com sua própria bateria de testes, mais testes de " +
      "ponta a ponta sobre as rotas HTTP e integração contínua rodando os dois " +
      "fluxos a cada envio. É o projeto do conjunto com a maior cobertura de testes.",

    aprendizado:
      "Hoje eu centralizaria a validação de entrada. Cada controller declara o " +
      "próprio esquema de validação, o que repete estrutura e deixa a resposta de " +
      "erro diferente dependendo da rota. Um tratamento único de erro na aplicação " +
      "resolveria os dois problemas de uma vez.",
  },
];

/** Projetos menores, sem case. Apenas nome, uma linha e link. */
export const outrosProjetos: Pick<
  Projeto,
  "nome" | "descricao" | "stack" | "repositorio"
>[] = [
  {
    nome: "GoodMovies",
    descricao:
      "Catálogo de filmes e séries que consome a API do TMDB, com busca e listagens.",
    stack: ["React", "React Query", "Axios"],
    repositorio: "https://github.com/PontesEdu/GoodMovies",
  },
  {
    nome: "Blog com Next.js",
    descricao:
      "Blog estático com conteúdo em arquivos locais, renderizado no servidor.",
    stack: ["Next.js", "Contentlayer", "Tailwind CSS"],
    repositorio: "https://github.com/PontesEdu/site-blog-next-estudo",
  },
  {
    nome: "To-do list",
    descricao:
      "Lista de tarefas com estado global e persistência no navegador.",
    stack: ["React", "Zustand", "localStorage"],
    repositorio: "https://github.com/PontesEdu/To-do-list-training",
  },
];
