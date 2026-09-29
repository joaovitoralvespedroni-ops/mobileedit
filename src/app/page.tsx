import Image from "next/image";
import { MODULES, SITE } from "./config";
import { Countdown } from "./components/Countdown";
import { GroupLink } from "./components/GroupLink";
import { Reveal } from "./components/Reveal";
import { TiltCard } from "./components/TiltCard";

/* ---------- ícones ---------- */

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="11" className="fill-neon/15 stroke-neon/60" />
      <path d="M7 12.5l3.2 3L17 9" stroke="#7fd0ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="11" className="fill-red-500/10 stroke-red-400/50" />
      <path d="M8.5 8.5l7 7m0-7l-7 7" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Phone({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="6" y="2.5" width="12" height="19" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Lock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10.5V7.5a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- blocos reutilizáveis ---------- */

function CTA({
  label = "Quero o mega desconto",
  sub = true,
  location = "cta",
}: {
  label?: string;
  sub?: boolean;
  location?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <GroupLink
        location={location}
        className="btn-shine group relative inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-neon-400 to-neon-deep px-8 py-5 font-display text-xl font-extrabold uppercase italic tracking-wide text-white shadow-[0_10px_40px_-8px_rgba(30,144,255,.8)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-6px_rgba(30,144,255,1)] animate-pulse-glow sm:text-2xl"
      >
        {label}
        <Arrow className="h-6 w-6 transition group-hover:translate-x-1" />
      </GroupLink>
      {sub && (
        <p className="text-center text-sm text-slate-400">
          Entrar no Grupo VIP é <span className="text-neon-300">grátis</span> · Desconto de lançamento{" "}
          <span className="text-gold font-semibold">só para o grupo</span>
        </p>
      )}
    </div>
  );
}

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="h-section">{title}</h2>
      {children && <p className="mt-5 text-lg text-slate-300">{children}</p>}
    </Reveal>
  );
}

/* Faixa de chamada entre seções: lembra do desconto a cada etapa da leitura. */
function DiscountBand({ title, text, label }: { title: React.ReactNode; text: string; label?: string }) {
  return (
    <section className="px-4 py-10">
      <Reveal className="border-spin relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-ink-800 via-ink-900 to-ink-800">
        <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-2xl font-extrabold uppercase italic leading-tight sm:text-3xl">{title}</p>
            <p className="mt-2 text-slate-300">{text}</p>
          </div>
          <div className="w-full shrink-0 md:w-auto">
            <CTA label={label} sub={false} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- dados de copy ---------- */

const PAINS = [
  "Você grava bem, mas na hora de editar o vídeo fica com cara de “amador”.",
  "O cliente pede orçamento e você não tem coragem de cobrar mais — porque sabe que a edição ainda não entrega.",
  "Acha que precisa de um PC potente e Premiere pra fazer algo profissional.",
  "Perde horas pra editar um Reels de 30 segundos.",
  "Vê edições incríveis no feed e não faz ideia de como foram feitas.",
  "Ouve falar de IA pra vídeo, mas não sabe por onde começar.",
];

const COSTS = [
  {
    title: "Cliente indo pro concorrente",
    text: "Enquanto seu vídeo parece “ok”, o do concorrente parece de agência. Adivinha quem fecha o contrato.",
  },
  {
    title: "Trabalho barato pra sempre",
    text: "Sem uma edição que justifique, você fica preso no mesmo preço — e trabalhando cada vez mais pra ganhar o mesmo.",
  },
  {
    title: "Horas jogadas fora",
    text: "Sem método, cada vídeo vira tentativa e erro. Tempo que podia virar mais clientes na sua agenda.",
  },
];

const PROFILES = [
  {
    tag: "Começando agora",
    title: "Quer entrar no mercado",
    text: "Você nunca editou ou só brinca no CapCut. Vai aprender do zero, com método, e sair com vídeos de nível profissional no portfólio.",
  },
  {
    tag: "Intermediário",
    title: "Já edita, mas travou",
    text: "Você já sabe o básico, mas sente que seus vídeos são iguais aos de todo mundo. Aqui você destrava ritmo, texto dinâmico, efeitos e IA.",
  },
  {
    tag: "Videomaker",
    title: "Quer aumentar o ticket",
    text: "Você já tem clientes, mas cobra pouco. Com edição de alto nível e precificação estratégica, você justifica um preço maior.",
  },
];

const BEFORE_AFTER: [string, string][] = [
  ["Vídeo com cara de amador", "Vídeo com cara de cinema"],
  ["Acha que precisa de PC caro", "Edita tudo no celular, em qualquer lugar"],
  ["Horas pra editar um Reels", "Fluxo rápido, com IA a seu favor"],
  ["Legendas sem graça que ninguém lê", "Textos dinâmicos que prendem até o fim"],
  ["Cobra pouco por medo", "Cobra pelo valor que entrega"],
];

const LEARN = [
  "Editar vídeos profissionais do início ao fim usando só o celular",
  "Dominar o CapCut mobile: do básico às funções que quase ninguém usa",
  "Criar textos e legendas dinâmicas que prendem a atenção",
  "Usar IA para criar e editar vídeos mais rápido",
  "Configurar o celular para captar com qualidade de câmera",
  "Escolher os acessórios e apps certos sem gastar à toa",
  "Montar um fluxo de edição rápido para entregar mais em menos tempo",
  "Precificar seu trabalho e cobrar o que ele realmente vale",
];

const COMPARE: [string, string, string][] = [
  ["Equipamento", "PC potente + monitor", "O celular que já está no seu bolso"],
  ["Software", "Assinaturas caras", "CapCut + apps gratuitos"],
  ["Onde você edita", "Só na mesa do escritório", "Em qualquer lugar, na hora"],
  ["Curva de aprendizado", "Meses de interface complexa", "Método direto, passo a passo"],
  ["Entrega ao cliente", "Horas depois de voltar pra casa", "No mesmo dia da gravação"],
];

const LAUNCH_STEPS = [
  { t: "Entre no Grupo VIP", d: "É grátis. Um clique e você está dentro do grupo oficial do lançamento." },
  { t: "Tire suas dúvidas", d: "Acompanhe os avisos e pergunte tudo sobre o curso antes de decidir." },
  { t: "Pegue o mega desconto", d: "No dia do lançamento, o grupo recebe primeiro o link de compra com o desconto exclusivo." },
];

const VIP_PERKS = [
  { title: "Mega desconto de lançamento", text: "O menor preço que o Mobile Edit vai ter. Exclusivo para quem estiver no grupo no dia da abertura." },
  { title: "Compra antes de todo mundo", text: "O link chega primeiro para o grupo. O público geral só fica sabendo depois." },
  { title: "Tire suas dúvidas", text: "Pergunte sobre o curso, os módulos e o formato antes de investir." },
  { title: SITE.bonus.title, text: SITE.bonus.description },
];

const FAQ = [
  {
    q: "O curso é gratuito?",
    a: "Não. O Mobile Edit é um curso pago. O que é gratuito é entrar no Grupo VIP, que é onde você recebe o mega desconto de lançamento para comprar o curso, se quiser.",
  },
  {
    q: "Pra que serve o Grupo VIP?",
    a: "É o grupo oficial do lançamento. Lá você recebe os avisos, tira dúvidas sobre o curso e, no dia da abertura, recebe o link de compra com o mega desconto exclusivo.",
  },
  {
    q: "Se eu não entrar no grupo, ainda consigo o desconto?",
    a: "O mega desconto de lançamento é exclusivo para quem estiver no Grupo VIP. Quem comprar depois, fora do grupo, paga o valor normal.",
  },
  {
    q: "Preciso de computador?",
    a: "Não. O curso inteiro é pensado para o celular. Captação, edição e exportação, tudo no mobile, usando o CapCut.",
  },
  {
    q: "Funciona no Android e no iPhone?",
    a: "Sim. O CapCut está disponível nos dois sistemas, e o método funciona nos dois.",
  },
  {
    q: "Sou iniciante total. É pra mim?",
    a: "É. Os módulos começam do zero, com a trilha “Edição na Prática” dividida em Iniciante, Intermediário e Avançado.",
  },
  {
    q: "Já sou videomaker. Vou aprender algo novo?",
    a: "Sim. Há módulos de técnicas avançadas no CapCut, vídeos com IA e precificação, focados em aumentar a qualidade e o valor do seu trabalho.",
  },
];

/* ---------- página ---------- */

export default function Home() {
  const heroCovers = [MODULES[10], MODULES[0], MODULES[11]];

  return (
    <main className="relative">
      {/* BARRA FIXA DE PRÉ-LANÇAMENTO */}
      <div className="sticky top-0 z-40 border-b border-amber-300/30 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 text-ink-950 shadow-[0_6px_30px_-6px_rgba(251,191,36,.6)]">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-2.5 text-center sm:justify-between">
          <p className="font-display text-sm font-extrabold uppercase italic leading-tight tracking-wide sm:text-base">
            <span className="mr-2 inline-block rounded bg-ink-950 px-2 py-0.5 text-amber-300 not-italic">Pré-lançamento</span>
            O curso ainda não abriu · Entre no Grupo VIP e garanta o <span className="underline decoration-2 underline-offset-2">mega desconto</span>
          </p>
          <GroupLink
            location="barra-topo"
            className="hidden shrink-0 rounded-lg bg-ink-950 px-4 py-2 font-display text-sm font-extrabold uppercase italic text-amber-300 transition hover:bg-ink-800 sm:inline-block"
          >
            Entrar no grupo →
          </GroupLink>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:pt-14 lg:pb-24">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-neon/20 blur-[120px]" />
        <div className="beam left-[4%] top-24 hidden h-72 md:block" />
        <div className="beam right-[4%] top-40 hidden h-56 md:block [animation-delay:1.5s]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-center lg:text-left">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/10 px-4 py-1.5 font-display text-sm font-extrabold uppercase italic tracking-wider text-amber-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
                </span>
                Pré-lançamento oficial
              </span>
              <span className="rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 font-display text-sm font-bold uppercase italic tracking-wider text-neon-300">
                Mobile Edit · com {SITE.instructorName}
              </span>
            </div>

            <h1 className="font-display text-5xl font-black uppercase italic leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-chrome">Edição profissional</span>
              <br />
              <span className="text-gradient drop-shadow-[0_0_30px_rgba(30,144,255,.45)]">só com o celular</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300 sm:text-xl lg:mx-0">
              O curso de edição no <strong className="text-white">CapCut mobile + IA</strong> para videomakers que querem
              entregar vídeos de alto nível e <strong className="text-white">cobrar mais por isso</strong>. Sem PC.
            </p>

            {/* caixa do desconto */}
            <div className="relative mx-auto mt-7 max-w-xl overflow-hidden rounded-2xl border border-amber-300/50 bg-gradient-to-br from-amber-300/15 via-ink-900 to-ink-900 p-5 text-left shadow-[0_0_50px_-15px_rgba(251,191,36,.7)] lg:mx-0">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-b from-amber-200 to-amber-500 font-display text-4xl font-black italic text-ink-950 shadow-[0_0_30px_-4px_rgba(251,191,36,.9)]">
                  %
                </div>
                <div>
                  <p className="font-display text-2xl font-black uppercase italic leading-none text-gold sm:text-3xl">
                    Mega desconto de lançamento
                  </p>
                  <p className="mt-1.5 text-sm text-slate-300 sm:text-base">
                    O curso abre em breve. <strong className="text-white">Só quem estiver no Grupo VIP</strong> recebe o
                    link de compra com o desconto exclusivo no dia do lançamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:max-w-md">
              <CTA label="Quero entrar no Grupo VIP" />
            </div>
          </div>

          {/* leque de capas */}
          <div className="relative mx-auto h-[400px] w-full max-w-[460px] sm:h-[520px]">
            <div className="absolute inset-x-8 bottom-4 top-10 rounded-full bg-neon/30 blur-[90px]" />
            {heroCovers.map((m, i) => {
              const pos = [
                "left-0 top-10 -rotate-[9deg] z-10 w-[46%]",
                "left-1/2 top-0 -translate-x-1/2 z-20 w-[56%] animate-float",
                "right-0 top-10 rotate-[9deg] z-10 w-[46%]",
              ][i];
              return (
                <div
                  key={m.n}
                  className={`absolute aspect-[2/3] overflow-hidden rounded-2xl border border-neon/40 shadow-[0_20px_60px_-10px_rgba(30,144,255,.55)] ${pos}`}
                >
                  <Image
                    src={m.img}
                    alt={`Módulo ${m.n}: ${m.title}`}
                    fill
                    sizes="(max-width: 640px) 60vw, 260px"
                    className="object-cover"
                    preload={i === 1}
                  />
                </div>
              );
            })}
            <div className="absolute -bottom-2 left-1/2 z-30 -translate-x-1/2 -rotate-3 whitespace-nowrap rounded-xl bg-gradient-to-b from-amber-200 to-amber-500 px-5 py-2 font-display text-lg font-black uppercase italic text-ink-950 shadow-[0_10px_40px_-5px_rgba(251,191,36,.8)] sm:text-xl">
              Em breve · 13 módulos
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA O PRÉ-LANÇAMENTO */}
      <section className="relative border-y border-white/5 bg-ink-900/60 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow mb-3">Como funciona o pré-lançamento</p>
            <p className="font-display text-3xl font-extrabold uppercase italic sm:text-4xl">
              <span className="text-chrome">Entra no grupo hoje.</span>{" "}
              <span className="text-gold">Compra com desconto no lançamento.</span>
            </p>
          </Reveal>
          <div className="relative grid gap-8 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-[2px] bg-gradient-to-r from-neon/0 via-neon to-amber-300 shadow-[0_0_12px_#1e90ff] md:block" />
            {LAUNCH_STEPS.map((s, i) => {
              const last = i === LAUNCH_STEPS.length - 1;
              return (
                <Reveal key={s.t} delay={i * 150} className="relative text-center">
                  <div
                    className={`mx-auto grid h-16 w-16 place-items-center rounded-full border-2 bg-ink-950 font-display text-3xl font-black italic ${
                      last
                        ? "border-amber-300 text-amber-200 shadow-[0_0_30px_-2px_rgba(251,191,36,.9)]"
                        : "border-neon text-white shadow-[0_0_30px_-2px_rgba(30,144,255,.9)]"
                    }`}
                  >
                    {last ? "%" : i + 1}
                  </div>
                  <h3 className={`mt-4 font-display text-2xl font-extrabold uppercase italic ${last ? "text-gold" : "text-white"}`}>{s.t}</h3>
                  <p className="mx-auto mt-1 max-w-xs text-slate-400">{s.d}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="relative px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Seja sincero"
            title={
              <>
                <span className="text-chrome">Você se identifica</span> <span className="text-gradient">com isso?</span>
              </>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAINS.map((p, i) => (
              <Reveal key={p} delay={(i % 3) * 120}>
                <div className="glass flex h-full gap-4 p-6 transition hover:border-red-400/30">
                  <Cross className="h-7 w-7 shrink-0" />
                  <p className="text-slate-200">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="font-display text-2xl font-bold uppercase italic text-white sm:text-3xl">
              Se você se viu em <span className="text-gradient">pelo menos uma</span>, continua lendo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CUSTO DE FICAR PARADO */}
      <section className="relative px-4 pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="A verdade que ninguém fala"
            title={
              <>
                <span className="text-chrome">Editar mal está</span> <span className="text-red-400">te custando caro</span>
              </>
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {COSTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 130}>
                <div className="h-full rounded-2xl border border-red-400/20 bg-gradient-to-b from-red-500/[0.07] to-transparent p-7">
                  <p className="font-display text-5xl font-black italic text-red-400/30">0{i + 1}</p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold uppercase italic text-white">{c.title}</h3>
                  <p className="mt-2 text-slate-300">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="neon-frame relative mt-14 overflow-hidden bg-gradient-to-br from-ink-800 to-ink-950 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon/20 blur-3xl" />
            <p className="font-display text-3xl font-extrabold uppercase italic leading-tight sm:text-5xl">
              <span className="text-chrome">O problema não é o seu celular.</span>
              <br />
              <span className="text-gradient">É o seu método de edição.</span>
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              O celular na sua mão já grava em 4K. O que separa um vídeo comum de um vídeo que vende — e um cliente que
              paga pouco de um que paga bem — é saber <strong className="text-white">editar com intenção</strong>. E isso
              se aprende.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="relative px-4 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-96 -translate-y-1/2 bg-neon/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Para quem é"
            title={
              <>
                <span className="text-chrome">Feito para quem vive</span> <span className="text-gradient">de vídeo</span>
              </>
            }
          >
            Não importa em que fase você está. Se você quer editar melhor e ganhar mais com vídeo, o Mobile Edit foi feito pra você.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-3">
            {PROFILES.map((p, i) => (
              <Reveal key={p.title} delay={i * 150}>
                <div className="neon-frame relative h-full bg-ink-900/80 p-8 transition duration-300 hover:-translate-y-1">
                  <span className="font-display text-6xl font-black italic text-neon/20">0{i + 1}</span>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-neon-400">{p.tag}</p>
                  <h3 className="mt-1 font-display text-3xl font-extrabold uppercase italic text-white">{p.title}</h3>
                  <p className="mt-4 text-slate-300">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ANTES x DEPOIS */}
      <section className="relative px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="A virada"
            title={
              <>
                <span className="text-chrome">Imagina você</span> <span className="text-gradient">daqui a alguns meses</span>
              </>
            }
          />
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
                <p className="font-display text-2xl font-extrabold uppercase italic text-slate-400">Hoje</p>
                <ul className="mt-6 space-y-4">
                  {BEFORE_AFTER.map(([b]) => (
                    <li key={b} className="flex items-start gap-3 text-slate-400">
                      <Cross className="mt-0.5 h-6 w-6 shrink-0" />
                      <span className="line-through decoration-red-400/40">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="border-spin h-full rounded-3xl bg-gradient-to-br from-neon/15 to-ink-900 p-7 shadow-[0_0_60px_-20px_rgba(30,144,255,.9)] sm:p-9">
                <p className="font-display text-2xl font-extrabold uppercase italic text-gradient">Depois do Mobile Edit</p>
                <ul className="mt-6 space-y-4">
                  {BEFORE_AFTER.map(([, a]) => (
                    <li key={a} className="flex items-start gap-3 font-medium text-white">
                      <Check className="mt-0.5 h-6 w-6 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <DiscountBand
        title={
          <>
            <span className="text-chrome">Quer essa virada?</span> <span className="text-gold">Começa pelo desconto.</span>
          </>
        }
        text="Entre no Grupo VIP agora e garanta o preço de lançamento quando o curso abrir."
        label="Garantir meu desconto"
      />

      {/* MÓDULOS */}
      <section id="modulos" className="relative px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="O que tem dentro"
            title={
              <>
                <span className="text-chrome">13 módulos</span> <span className="text-gradient">do zero ao pro</span>
              </>
            }
          >
            Uma trilha completa: do equipamento e da captação até a edição avançada, IA e precificação.
          </SectionHeader>

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {MODULES.map((m) => (
              <article key={m.n} className="group w-[72%] shrink-0 snap-center sm:w-auto">
                <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-neon/25 bg-ink-800 transition duration-300 group-hover:-translate-y-1.5 group-hover:border-neon/70 group-hover:shadow-[0_18px_50px_-12px_rgba(30,144,255,.7)]">
                  <Image
                    src={m.img}
                    alt={`Módulo ${m.n}: ${m.title}`}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 33vw, 280px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 px-1">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-neon-400">Módulo {String(m.n).padStart(2, "0")}</p>
                  <h3 className="font-display text-xl font-bold uppercase italic text-white">{m.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{m.desc}</p>
                </div>
              </article>
            ))}

            <div className="w-[72%] shrink-0 snap-center sm:w-auto">
              <div className="flex aspect-[2/3] flex-col items-center justify-center rounded-3xl border border-amber-300/50 bg-gradient-to-b from-amber-300/15 to-ink-950 p-6 text-center shadow-[0_0_40px_-12px_rgba(251,191,36,.7)]">
                <p className="font-display text-7xl font-black italic text-gold">+</p>
                <p className="mt-2 font-display text-2xl font-extrabold uppercase italic text-white">Bônus exclusivo</p>
                <p className="mt-2 text-sm text-slate-400">Revelado só dentro do Grupo VIP</p>
              </div>
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-slate-500 sm:hidden">Arraste para o lado para ver todos →</p>
        </div>
      </section>

      {/* O QUE VAI APRENDER + COMPARATIVO */}
      <section className="relative px-4 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <Reveal className="neon-frame bg-ink-900/70 p-8 sm:p-10">
            <p className="eyebrow mb-3">Na prática</p>
            <h2 className="font-display text-4xl font-extrabold uppercase italic leading-none sm:text-5xl">
              <span className="text-chrome">O que você vai</span> <span className="text-gradient">dominar</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {LEARN.map((l) => (
                <li key={l} className="flex items-start gap-3 text-slate-200">
                  <Check className="mt-0.5 h-6 w-6 shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="flex flex-col">
            <p className="eyebrow mb-3">Por que mobile</p>
            <h2 className="font-display text-4xl font-extrabold uppercase italic leading-none sm:text-5xl">
              <span className="text-chrome">Deixa o PC.</span> <span className="text-gradient">Leva o estúdio no bolso.</span>
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-[1fr_1fr_1.2fr] bg-ink-800 text-xs font-bold uppercase tracking-wider sm:text-sm">
                <div className="p-3 sm:p-4" />
                <div className="p-3 text-slate-400 sm:p-4">Edição no PC</div>
                <div className="flex items-center gap-1.5 bg-neon/15 p-3 text-neon-300 sm:p-4">
                  <Phone className="h-4 w-4" /> Mobile Edit
                </div>
              </div>
              {COMPARE.map(([k, pc, mob]) => (
                <div key={k} className="grid grid-cols-[1fr_1fr_1.2fr] border-t border-white/5 text-sm sm:text-base">
                  <div className="p-3 font-semibold text-white sm:p-4">{k}</div>
                  <div className="p-3 text-slate-500 sm:p-4">{pc}</div>
                  <div className="bg-neon/[0.06] p-3 font-medium text-slate-100 sm:p-4">{mob}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTRUTOR */}
      <section className="relative px-4 py-20 lg:py-28">
        <Reveal className="neon-frame relative mx-auto grid max-w-6xl overflow-hidden bg-ink-900 lg:grid-cols-2">
          <div className="relative min-h-[380px] lg:min-h-[520px]">
            <Image
              src="/img/banner-instrutor-direita.png"
              alt={SITE.instructorName}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-[88%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink-900" />
          </div>
          <div className="relative p-8 sm:p-12">
            <p className="eyebrow mb-3">Quem vai te ensinar</p>
            <h2 className="font-display text-5xl font-black uppercase italic leading-none">
              <span className="text-chrome">Prazer, </span>
              <span className="text-gradient">{SITE.instructorName}</span>
            </h2>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 font-semibold text-neon-300 transition hover:bg-neon/20"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              {SITE.instructorHandle}
            </a>
            <p className="mt-6 text-lg text-slate-300">
              O Pedro é videomaker e cria vídeos com cara de cinema usando só o celular. No Mobile Edit, ele abre o
              método completo que usa no dia a dia: da captação à edição no CapCut, do uso de IA à precificação dos
              seus trabalhos.
            </p>
            <blockquote className="mt-8 border-l-2 border-neon pl-5 font-display text-2xl font-bold uppercase italic text-white">
              “Enquanto a maioria ainda grava vídeos comuns, você vai criar vídeos cinematográficos com o celular.”
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* PROVAS REAIS (aparece só quando houver prints em config.ts) */}
      {SITE.proofs.length > 0 && (
        <section className="relative overflow-hidden px-4 py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-80 bg-neon/10 blur-[100px]" />
          <div className="relative mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Edição que vira dinheiro"
              title={
                <>
                  <span className="text-chrome">Vídeo editado no celular.</span> <span className="text-gradient">Pix na conta.</span>
                </>
              }
            >
              Fechamentos reais de trabalhos editados 100% no mobile.
            </SectionHeader>
            <div className="flex flex-wrap justify-center gap-6">
              {SITE.proofs.map((p, i) => (
                <Reveal key={p.img} delay={i * 120} className="w-[240px]">
                  <figure
                    className={`rounded-[2.2rem] border border-white/15 bg-ink-800 p-2 shadow-[0_25px_60px_-15px_rgba(30,144,255,.6)] ${
                      i % 2 ? "rotate-2" : "-rotate-2"
                    } transition duration-300 hover:rotate-0 hover:scale-[1.03]`}
                  >
                    <div className="relative aspect-[9/19] overflow-hidden rounded-[1.8rem]">
                      <Image src={p.img} alt={p.caption} fill sizes="240px" className="object-cover" />
                    </div>
                    <figcaption className="px-2 py-3 text-center text-sm font-semibold text-slate-300">{p.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PREÇO TRANCADO */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="E quanto vai custar?"
            title={
              <>
                <span className="text-chrome">O preço é revelado</span> <span className="text-gold">no lançamento</span>
              </>
            }
          >
            O Mobile Edit é um curso pago. Mas quem estiver no Grupo VIP no dia da abertura paga bem menos que todo mundo.
          </SectionHeader>

          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">Público geral</p>
                <p className="mt-6 select-none font-display text-6xl font-black italic text-slate-500">R$ ???</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Preço cheio</p>
                <ul className="mt-8 space-y-3 text-left text-slate-400">
                  <li className="flex gap-3"><Cross className="h-5 w-5 shrink-0" /> Fica sabendo depois</li>
                  <li className="flex gap-3"><Cross className="h-5 w-5 shrink-0" /> Sem desconto de lançamento</li>
                  <li className="flex gap-3"><Cross className="h-5 w-5 shrink-0" /> Sem o bônus exclusivo</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative flex h-full flex-col rounded-3xl border-2 border-amber-300/70 bg-gradient-to-b from-amber-300/15 to-ink-900 p-8 text-center shadow-[0_0_70px_-15px_rgba(251,191,36,.8)]">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-b from-amber-200 to-amber-500 px-4 py-1 font-display text-sm font-black uppercase italic text-ink-950">
                  Grupo VIP
                </span>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-200">Membros do grupo</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Lock className="h-10 w-10 text-amber-300" />
                  <p className="font-display text-5xl font-black uppercase italic leading-none text-gold sm:text-6xl">Mega desconto</p>
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-amber-200/80">Liberado no dia do lançamento</p>
                <ul className="mt-8 space-y-3 text-left text-white">
                  <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> Recebe o link antes de todo mundo</li>
                  <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> Menor preço que o curso vai ter</li>
                  <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> Bônus exclusivo para membros</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRUPO VIP */}
      <section id="vip" className="relative overflow-hidden px-4 py-24 lg:py-32">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[620px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/20 blur-[140px]" />
        <div className="beam left-[6%] top-32 hidden h-80 lg:block" />
        <div className="beam right-[6%] top-56 hidden h-64 lg:block [animation-delay:2s]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <Reveal>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-amber-200">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-300" />
                  Grupo oficial do lançamento
                </div>
                <h2 className="h-section">
                  <span className="text-chrome">Seu lugar no</span>
                  <br />
                  <span className="text-gradient drop-shadow-[0_0_30px_rgba(30,144,255,.5)]">Grupo VIP</span>
                </h2>
                <p className="mt-5 max-w-lg text-lg text-slate-300">
                  É o grupo onde o Mobile Edit vai ser lançado. Entrar é grátis. Quem está lá dentro recebe o{" "}
                  <strong className="text-gold">mega desconto</strong> e decide, no dia, se quer comprar o curso.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {VIP_PERKS.map((p, i) => {
                  const featured = i === 0;
                  const isBonus = i === VIP_PERKS.length - 1;
                  return (
                    <Reveal key={p.title} delay={i * 110}>
                      <div
                        className={`flex items-start gap-4 rounded-2xl p-5 transition duration-300 hover:translate-x-1 ${
                          featured
                            ? "border-2 border-amber-300/70 bg-gradient-to-r from-amber-300/15 to-ink-900 shadow-[0_0_40px_-12px_rgba(251,191,36,.8)]"
                            : isBonus
                              ? "border-spin bg-gradient-to-r from-neon/20 to-ink-900"
                              : "border border-white/10 bg-white/[0.03]"
                        }`}
                      >
                        <div
                          className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-2xl font-black italic ${
                            featured
                              ? "bg-gradient-to-b from-amber-200 to-amber-500 text-ink-950 shadow-[0_0_24px_-4px_rgba(251,191,36,.9)]"
                              : "bg-gradient-to-b from-neon-400 to-neon-deep text-white shadow-[0_0_24px_-4px_rgba(30,144,255,.9)]"
                          }`}
                        >
                          {featured ? "%" : isBonus ? "★" : i + 1}
                        </div>
                        <div>
                          <h3 className={`font-display text-xl font-extrabold uppercase italic sm:text-2xl ${featured ? "text-gold" : "text-white"}`}>
                            {p.title}
                          </h3>
                          <p className="mt-1 text-slate-300">{p.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* passe VIP */}
            <Reveal delay={200}>
              <TiltCard className="relative mx-auto w-full max-w-[440px]">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-neon/30 blur-3xl" />
                <div className="ticket-notch relative overflow-hidden rounded-[2rem] border border-neon/50 bg-gradient-to-br from-ink-700 via-ink-900 to-ink-950 shadow-[0_30px_80px_-20px_rgba(30,144,255,.9)]">
                  <div className="holo pointer-events-none absolute inset-0" />
                  <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

                  <div className="relative p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-xl font-black uppercase italic">
                        <span className="text-chrome">Mobile</span> <span className="text-gradient">Edit</span>
                      </p>
                      <span className="rounded-md border border-amber-300/60 bg-amber-300/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-amber-200">
                        Pré-lançamento
                      </span>
                    </div>

                    <p className="mt-10 text-xs font-bold uppercase tracking-[0.4em] text-neon-400">Passe de acesso</p>
                    <p className="font-display text-7xl font-black uppercase italic leading-none sm:text-8xl">
                      <span className="text-gradient drop-shadow-[0_0_24px_rgba(34,211,238,.55)]">VIP</span>
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-5 text-sm">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Titular</p>
                        <p className="font-display text-xl font-bold uppercase italic text-white">Você</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Instrutor</p>
                        <p className="font-display text-xl font-bold uppercase italic text-white">{SITE.instructorName}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Entrada no grupo</p>
                        <p className="font-display text-xl font-bold uppercase italic text-neon-300">Grátis</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Curso</p>
                        <p className="font-display text-xl font-bold uppercase italic text-gold">Com desconto</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative mx-7 border-t-2 border-dashed border-white/15" />

                  <div className="relative flex items-center justify-between gap-4 p-7 sm:p-8">
                    <div className="flex h-12 flex-1 items-end gap-[3px]" aria-hidden>
                      {Array.from({ length: 34 }).map((_, i) => (
                        <span
                          key={i}
                          className="bg-white/70"
                          style={{ width: i % 3 === 0 ? 3 : i % 5 === 0 ? 4 : 1.5, height: `${60 + ((i * 37) % 40)}%` }}
                        />
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Válido para</p>
                      <p className="font-display text-lg font-bold uppercase italic leading-tight text-white">
                        Mega desconto <span className="text-amber-200">+ bônus</span>
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* o que é / o que não é */}
          <Reveal className="mx-auto mt-20 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-neon/40 bg-neon/[0.06] p-7">
              <p className="font-display text-2xl font-extrabold uppercase italic text-white">O grupo é</p>
              <ul className="mt-4 space-y-3 text-slate-200">
                <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> O grupo oficial do lançamento do Mobile Edit</li>
                <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> Onde você tira dúvidas sobre o curso</li>
                <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> Onde chega o link com o mega desconto</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="font-display text-2xl font-extrabold uppercase italic text-slate-300">O grupo não é</p>
              <ul className="mt-4 space-y-3 text-slate-400">
                <li className="flex gap-3"><Cross className="h-5 w-5 shrink-0" /> Um curso gratuito ou aulas de graça</li>
                <li className="flex gap-3"><Cross className="h-5 w-5 shrink-0" /> Grupo de bate-papo ou divulgação</li>
                <li className="flex gap-3"><Cross className="h-5 w-5 shrink-0" /> Compromisso de compra: você decide no dia</li>
              </ul>
            </div>
          </Reveal>

          {SITE.launchDate && (
            <div className="mt-16">
              <p className="eyebrow mb-5 text-center">O carrinho abre em</p>
              <Countdown target={SITE.launchDate} />
            </div>
          )}

          <div className="mt-14">
            <CTA label="Quero o mega desconto" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Dúvidas"
            title={
              <>
                <span className="text-chrome">Perguntas</span> <span className="text-gradient">frequentes</span>
              </>
            }
          />
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="group glass overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-neon/40 text-neon-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-4 pb-32 pt-10 sm:pb-24">
        <Reveal className="neon-frame relative mx-auto max-w-5xl overflow-hidden bg-ink-900">
          <div className="absolute inset-0">
            <Image
              src="/img/banner-instrutor-esquerda.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-left opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
          </div>
          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20">
            <p className="eyebrow mb-4">Você chegou até aqui</p>
            <h2 className="h-section">
              <span className="text-chrome">Você sabe que</span>
              <br />
              <span className="text-gradient">precisa disso</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
              Entre agora no Grupo VIP. Quando o Mobile Edit abrir, você recebe primeiro o link com o{" "}
              <strong className="text-gold">mega desconto de lançamento</strong> e o bônus exclusivo.
            </p>
            <div className="mt-10">
              <CTA label="Quero o mega desconto" />
            </div>
          </div>
        </Reveal>

        <footer className="mx-auto mt-16 max-w-6xl text-center text-sm text-slate-500">
          <p className="font-display text-lg font-black uppercase italic tracking-wide">
            <span className="text-chrome">Mobile</span> <span className="text-gradient">Edit</span>
          </p>
          <p className="mt-2 tracking-[0.3em] text-neon-400/70">APRENDA · EDITE · EVOLUA</p>
          <p className="mt-4">© {new Date().getFullYear()} Mobile Edit. Todos os direitos reservados.</p>
          <p className="mt-1 text-xs text-slate-600">
            CapCut é marca registrada de seus respectivos proprietários. Este curso não tem vínculo oficial com o CapCut.
          </p>
        </footer>
      </section>

      {/* CTA fixo no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-amber-300/30 bg-ink-950/90 p-3 backdrop-blur sm:hidden">
        <GroupLink
          location="fixo-mobile"
          className="btn-shine relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-neon-400 to-neon-deep py-3.5 font-display text-lg font-extrabold uppercase italic text-white"
        >
          Garantir mega desconto no VIP <Arrow className="h-5 w-5" />
        </GroupLink>
      </div>
    </main>
  );
}
