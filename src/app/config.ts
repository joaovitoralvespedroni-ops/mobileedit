// Tudo que ainda vai mudar fica aqui, pra ajustar sem mexer no layout.

export const SITE = {
  // Link do grupo VIP (WhatsApp, Telegram etc.)
  groupUrl: "https://chat.whatsapp.com/EUQTzOxPTdNDNJzBzJNeEC?mode=gi_t",
  metaPixelId: "1032317759858705",
  courseName: "Mobile Edit",
  instructorName: "Pedro",
  instructorHandle: "@venicius.pedro",
  instagramUrl: "https://www.instagram.com/venicius.pedro/",
  // Data de abertura do carrinho (ex.: "2026-10-20T20:00:00-03:00"). null esconde o contador.
  launchDate: null as string | null,
  // Prints REAIS de pagamentos/fechamentos do Pedro, com dados pessoais borrados.
  // Coloque as imagens em public/img/provas/ e liste aqui. Lista vazia esconde a seção.
  proofs: [] as { img: string; caption: string }[],
  // Bônus de quem entra no grupo — trocar quando estiver definido
  bonus: {
    title: "Bônus exclusivo do Grupo VIP",
    description:
      "Um presente liberado só para quem estiver no grupo na abertura do carrinho. Revelamos lá dentro.",
  },
};

// Página de vendas direta (/curso).
export const OFFER = {
  // Link do checkout (Hotmart, Kiwify etc.). Vazio = botões rolam até a seção de preço.
  checkoutUrl: "https://pay.kiwify.com.br/5sqQPVl",
  price: 197,
  // Texto de parcelamento exibido abaixo do preço (ex.: "ou 12x de R$ 9,74"). null esconde.
  installments: "ou 6x de R$ 35,08" as string | null,
  // Fim da condição de R$ 197. Use uma data REAL e suba o preço depois dela. null esconde o cronômetro.
  endsAt: "2026-10-12T23:59:59-03:00" as string | null,
  guaranteeDays: 7,
  // Ancoragem: o que a pessoa recebe e quanto cada parte valeria separada. Ajuste à vontade.
  stack: [
    { title: "Fundamentos: equipamentos, apps e captação", detail: "Módulos 1 a 5", value: 97 },
    { title: "CapCut do básico aos segredos", detail: "Módulos 6 a 8 · textos e legendas dinâmicas", value: 197 },
    { title: "Edição na Prática: Iniciante, Intermediário e Avançado", detail: "Módulos 9 a 11 · do bruto ao export", value: 247 },
    { title: "Vídeos com IA", detail: "Módulo 12", value: 147 },
    { title: "Precificando seu Trabalho", detail: "Módulo 13 · cobre o que vale", value: 109 },
  ],
};

export type Module = {
  n: number;
  title: string;
  desc: string;
  img: string;
};

export const MODULES: Module[] = [
  { n: 1, title: "Boas-vindas", desc: "O mapa do curso e como tirar o máximo de cada aula.", img: "/img/modulo-01.jpg" },
  { n: 2, title: "Área de Atuação", desc: "Todas as possibilidades de trabalho com a edição mobile.", img: "/img/modulo-02.png" },
  { n: 3, title: "Acessórios Essenciais", desc: "Os equipamentos que elevam a qualidade dos seus vídeos.", img: "/img/modulo-03.png" },
  { n: 4, title: "Apps Essenciais", desc: "As ferramentas certas para editar como um profissional.", img: "/img/modulo-04.png" },
  { n: 5, title: "Settings e Feeling", desc: "Da captação à ideia: vídeos com mais intenção.", img: "/img/modulo-05.png" },
  { n: 6, title: "Conhecendo o CapCut", desc: "Do básico ao avançado, tudo o que você precisa saber.", img: "/img/modulo-06.png" },
  { n: 7, title: "Segredos do CapCut", desc: "Técnicas avançadas para levar suas edições a outro nível.", img: "/img/modulo-07.png" },
  { n: 8, title: "Textos e Legendas Dinâmicas", desc: "Comunique melhor e prenda a atenção até o fim.", img: "/img/modulo-08.png" },
  { n: 9, title: "Edição na Prática · Iniciante", desc: "Do passo a passo ao seu primeiro vídeo profissional.", img: "/img/modulo-09.png" },
  { n: 10, title: "Edição na Prática · Intermediário", desc: "Ritmo, cortes e camadas para vídeos que retêm.", img: "/img/modulo-10.png" },
  { n: 11, title: "Edição na Prática · Avançado", desc: "Edições completas, do bruto ao export final.", img: "/img/modulo-11.png" },
  { n: 12, title: "Vídeos com IA", desc: "Use inteligência artificial para criar e editar mais rápido.", img: "/img/modulo-12.png" },
  { n: 13, title: "Precificando seu Trabalho", desc: "Edite com estratégia e valorize o seu talento.", img: "/img/modulo-13.png" },
];
