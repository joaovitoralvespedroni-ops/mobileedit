import type { Metadata } from "next";
import Image from "next/image";
import { MODULES, OFFER, SITE } from "../config";
import { CTA, HeroBullets, HeroPrice, MobileCTA, OfferBar, SalesBody } from "../components/SalesSections";

export const metadata: Metadata = {
  title: "Mobile Edit · Curso de Edição Profissional no Celular",
  description:
    "Aprenda a editar vídeos profissionais no CapCut usando só o celular, com IA. 13 módulos do zero ao avançado, com acesso imediato.",
};

/* ---------- página ---------- */

export default function Curso() {
  const heroCovers = [MODULES[10], MODULES[0], MODULES[11]];

  return (
    <main className="relative">
      <OfferBar />

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
                {OFFER.promo ?? "Inscrições abertas"}
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

            <HeroBullets />

            <HeroPrice className="mt-7" />

            <div className={`${OFFER.oldPrice ? "mt-4" : "mt-8"} lg:max-w-md`}>
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

      <SalesBody />

      <MobileCTA />
    </main>
  );
}
