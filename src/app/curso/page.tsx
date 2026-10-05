import type { Metadata } from "next";
import Image from "next/image";
import { MODULES, OFFER, SITE } from "../config";
import { BEFORE_AFTER, COMPARE, COSTS, LEARN, PAINS, PROFILES } from "../copy";
import { CheckoutLink } from "../components/CheckoutLink";
import { Countdown } from "../components/Countdown";
import { Reveal } from "../components/Reveal";
import { Arrow, Bolt, Check, Cross, Lock, Phone, SectionHeader, Shield } from "../components/ui";

export const metadata: Metadata = {
  title: "Mobile Edit · Curso de Edição Profissional no Celular",
  description:
    "Aprenda a editar vídeos profissionais no CapCut usando só o celular, com IA. 13 módulos do zero ao avançado, com acesso imediato.",
};

const brl = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;
const STACK_TOTAL = OFFER.stack.reduce((sum, s) => sum + s.value, 0);

/* ---------- blocos ---------- */

function CTA({ label = "Quero o Mobile Edit", sub = true, location = "cta" }: { label?: string; sub?: boolean; location?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <CheckoutLink
        location={location}
        className="btn-shine group relative inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-neon-400 to-neon-deep px-8 py-5 font-display text-xl font-extrabold uppercase italic tracking-wide text-white shadow-[0_10px_40px_-8px_rgba(30,144,255,.8)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-[0_14px_50px_-6px_rgba(30,144,255,1)] animate-pulse-glow sm:text-2xl"
      >
        {label}
        <Arrow className="h-6 w-6 transition group-hover:translate-x-1" />
      </CheckoutLink>
      {sub && (
        <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-sm text-slate-400">
          <span className="inline-flex items-center gap-1.5"><Bolt className="h-4 w-4 text-neon-300" /> Acesso imediato</span>
          <span className="inline-flex items-center gap-1.5"><Lock className="h-4 w-4 text-neon-300" /> Compra segura</span>
          <span className="inline-flex items-center gap-1.5"><Shield className="h-4 w-4 text-gold" /> Garantia de {OFFER.guaranteeDays} dias</span>
        </p>
      )}
    </div>
  );
}

/* Faixa de chamada entre seções. */
function CTABand({ title, text, label }: { title: React.ReactNode; text: string; label?: string }) {
  return (
    <section className="px-4 py-10">
      <Reveal className="border-spin relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-ink-800 via-ink-900 to-ink-800">
        <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-neon/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-2xl font-extrabold uppercase italic leading-tight sm:text-3xl">{title}</p>
            <p className="mt-2 text-slate-300">{text}</p>
          </div>
          <div className="w-full shrink-0 md:w-auto">
            <CTA label={label} sub={false} location="faixa" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- copy ---------- */

const FAQ = [
  {
    q: "Como recebo o acesso?",
    a: "Logo após a confirmação do pagamento, você recebe no seu e-mail os dados de acesso à área de membros. É só entrar e começar.",
  },
  {
    q: "E se eu não gostar?",
    a: `Você tem ${OFFER.guaranteeDays} dias de garantia. Se achar que o curso não é pra você, pede o reembolso dentro do prazo e recebe 100% do valor de volta, sem burocracia.`,
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
  {
    q: "Quais as formas de pagamento?",
    a: "As formas disponíveis aparecem na página de pagamento segura, logo depois de clicar no botão de compra.",
  },
];

/* ---------- página ---------- */

export default function Curso() {
  const heroCovers = [MODULES[10], MODULES[0], MODULES[11]];

  return (
    <main className="relative">
      {/* BARRA FIXA DA OFERTA */}
      <div className="sticky top-0 z-40 border-b border-neon/30 bg-gradient-to-r from-neon-deep via-neon-400 to-neon-deep text-white shadow-[0_6px_30px_-6px_rgba(30,144,255,.6)]">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-2.5 text-center sm:justify-between">
          <p className="font-display text-sm font-extrabold uppercase italic leading-tight tracking-wide sm:text-base">
            <span className="mr-2 inline-block rounded bg-ink-950 px-2 py-0.5 text-neon-300 not-italic">Oferta especial</span>
            Condição de lançamento por <span className="underline decoration-2 underline-offset-2">tempo limitado</span>
          </p>
          <CheckoutLink
            location="barra-topo"
            className="hidden shrink-0 rounded-lg bg-ink-950 px-4 py-2 font-display text-sm font-extrabold uppercase italic text-neon-300 transition hover:bg-ink-800 sm:inline-block"
          >
            Quero o curso →
          </CheckoutLink>
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
              <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 font-display text-sm font-extrabold uppercase italic tracking-wider text-neon-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-300" />
                </span>
                Inscrições abertas
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

            <ul className="mx-auto mt-7 grid max-w-xl gap-3 text-left sm:grid-cols-2 lg:mx-0">
              {["13 módulos do zero ao avançado", "Acesso imediato após a compra", "Android e iPhone", `Garantia de ${OFFER.guaranteeDays} dias`].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-medium text-white">
                  <Check className="h-6 w-6 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 lg:max-w-md">
              <CTA label="Quero começar agora" location="hero" />
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
            <div className="absolute -bottom-2 left-1/2 z-30 -translate-x-1/2 -rotate-3 whitespace-nowrap rounded-xl bg-gradient-to-b from-neon-300 to-neon-deep px-5 py-2 font-display text-lg font-black uppercase italic text-white shadow-[0_10px_40px_-5px_rgba(30,144,255,.8)] sm:text-xl">
              13 módulos · acesso imediato
            </div>
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

      <CTABand
        title={
          <>
            <span className="text-chrome">Quer essa virada?</span> <span className="text-gradient">Começa hoje.</span>
          </>
        }
        text="Acesso liberado logo após a compra. Você pode editar seu primeiro vídeo ainda hoje."
        label="Quero começar hoje"
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

      {/* OFERTA: ancoragem → cronômetro → preço */}
      <section id="oferta" className="relative scroll-mt-16 overflow-hidden px-4 py-24 lg:py-32">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[620px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/15 blur-[140px]" />

        <div className="relative mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Tudo que você recebe"
            title={
              <>
                <span className="text-chrome">O método completo</span> <span className="text-gradient">numa só compra</span>
              </>
            }
          >
            Se cada parte do Mobile Edit fosse vendida separada, ficaria assim:
          </SectionHeader>

          {/* lista de valor */}
          <Reveal className="neon-frame overflow-hidden bg-ink-900/80">
            <ul>
              {OFFER.stack.map((s, i) => (
                <li
                  key={s.title}
                  className={`flex items-center gap-4 p-5 sm:p-6 ${i > 0 ? "border-t border-white/5" : ""}`}
                >
                  <Check className="h-7 w-7 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg font-extrabold uppercase italic leading-tight text-white sm:text-xl">{s.title}</p>
                    <p className="mt-0.5 text-sm text-slate-400">{s.detail}</p>
                  </div>
                  <p className="shrink-0 font-display text-lg font-bold italic text-slate-400 sm:text-xl">{brl(s.value)}</p>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <p className="font-display text-xl font-extrabold uppercase italic text-slate-300 sm:text-2xl">Valor total</p>
              <p className="font-display text-3xl font-black italic text-red-400 line-through decoration-2 sm:text-4xl">
                {brl(STACK_TOTAL)}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14 text-center">
            <p className="font-display text-2xl font-extrabold uppercase italic leading-tight text-white sm:text-4xl">
              Mas você não vai pagar <span className="text-red-400">{brl(STACK_TOTAL)}</span>.
            </p>
            <p className="mt-3 text-lg text-slate-300">Nem metade disso. Nem perto.</p>
          </Reveal>

          {/* cartão de preço */}
          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-amber-300/70 bg-gradient-to-b from-amber-300/15 via-ink-900 to-ink-950 px-6 pb-10 pt-12 text-center shadow-[0_0_90px_-20px_rgba(251,191,36,.8)] sm:px-12">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-b-xl bg-gradient-to-b from-amber-200 to-amber-500 px-5 py-1.5 font-display text-sm font-black uppercase italic text-ink-950">
                Condição especial
              </span>

              {OFFER.endsAt && (
                <div className="mb-10">
                  <p className="eyebrow mb-5 text-center">Esse preço acaba em</p>
                  <Countdown target={OFFER.endsAt} />
                </div>
              )}

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
                De <span className="text-red-400 line-through decoration-2">{brl(STACK_TOTAL)}</span> por apenas
              </p>
              <p className="mt-3 font-display font-black italic leading-none text-gold drop-shadow-[0_0_40px_rgba(251,191,36,.45)]">
                <span className="align-top text-4xl sm:text-5xl">R$</span>
                <span className="text-[7rem] sm:text-[9rem]">{OFFER.price}</span>
              </p>
              <p className="mt-2 text-slate-300">
                {OFFER.installments ?? "pagamento único"} · acesso imediato
              </p>

              <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left text-white">
                <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> Os 13 módulos completos</li>
                <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> Do zero ao avançado, no celular</li>
                <li className="flex gap-3"><Check className="h-5 w-5 shrink-0" /> Garantia de {OFFER.guaranteeDays} dias</li>
              </ul>

              <div className="mt-10">
                <CTA label={`Quero garantir por R$ ${OFFER.price}`} location="oferta" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="relative px-4 pb-20 lg:pb-28">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12 md:flex-row md:text-left">
          <div className="relative grid h-36 w-36 shrink-0 place-items-center rounded-full border-4 border-amber-300/70 bg-gradient-to-b from-amber-300/20 to-ink-950 shadow-[0_0_50px_-10px_rgba(251,191,36,.8)]">
            <div className="text-center">
              <p className="font-display text-6xl font-black italic leading-none text-gold">{OFFER.guaranteeDays}</p>
              <p className="font-display text-sm font-extrabold uppercase italic tracking-widest text-amber-200">dias</p>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Risco zero</p>
            <h2 className="font-display text-4xl font-extrabold uppercase italic leading-none sm:text-5xl">
              <span className="text-chrome">Garantia de</span> <span className="text-gold">{OFFER.guaranteeDays} dias</span>
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Entra, assiste às aulas, aplica nos seus vídeos. Se em até {OFFER.guaranteeDays} dias você achar que não é pra
              você, é só pedir o reembolso e recebe <strong className="text-white">100% do valor de volta</strong>. Sem
              perguntas.
            </p>
          </div>
        </Reveal>
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
              O método completo de edição no celular por <strong className="text-gold">R$ {OFFER.price}</strong>, com
              acesso imediato e {OFFER.guaranteeDays} dias de garantia. O risco é todo nosso.
            </p>
            <div className="mt-10">
              <CTA label="Quero o Mobile Edit" location="final" />
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
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neon/30 bg-ink-950/90 p-3 backdrop-blur sm:hidden">
        <CheckoutLink
          location="fixo-mobile"
          className="btn-shine relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-neon-400 to-neon-deep py-3.5 font-display text-lg font-extrabold uppercase italic text-white"
        >
          Quero o Mobile Edit <Arrow className="h-5 w-5" />
        </CheckoutLink>
      </div>
    </main>
  );
}
