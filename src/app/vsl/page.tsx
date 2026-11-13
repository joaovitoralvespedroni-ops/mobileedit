import type { Metadata } from "next";
import { CTA, HeroBullets, HeroPrice, MobileCTA, OfferBar, SalesBody } from "../components/SalesSections";
import { VslLocked, VslPlayer } from "../components/Vsl";

export const metadata: Metadata = {
  title: "Mobile Edit · Curso de Edição Profissional no Celular",
  description:
    "Aprenda a editar vídeos profissionais no CapCut usando só o celular, com IA. 13 módulos do zero ao avançado, com acesso imediato.",
};

// Mesma página de /curso, mas abre só com o título e a VSL.
// Barra da oferta, preço, seções e botões aparecem quando o vídeo chega em VSL.unlockAt (config.ts).

export default function Vsl() {
  return (
    <main className="relative">
      <VslLocked>
        <OfferBar />
      </VslLocked>

      {/* TOPO: título + vídeo */}
      <section className="relative overflow-hidden px-4 pb-14 pt-6 sm:pt-10 lg:pb-20">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-neon/20 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-black uppercase italic leading-[0.9] tracking-tight sm:text-6xl">
            <span className="text-chrome">Edição profissional</span>
            <br />
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(30,144,255,.45)]">só com o celular</span>
          </h1>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">Assista ao vídeo com o som ligado.</p>

          {/* Largura limitada pela altura da tela, para o vídeo vertical caber inteiro sem rolar. */}
          <VslPlayer
            className="mx-auto mt-5"
            style={{ width: "min(100%, 400px, max(260px, calc((100svh - 250px) * 9 / 16)))" }}
          />

          <VslLocked>
            <div className="mx-auto mt-10 max-w-xl">
              <HeroBullets />
              <HeroPrice className="mt-7" />
              <div className="mt-4">
                <CTA label="Quero começar agora" location="vsl-topo" />
              </div>
            </div>
          </VslLocked>
        </div>
      </section>

      <VslLocked>
        <SalesBody />
        <MobileCTA />
      </VslLocked>
    </main>
  );
}
