import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { SITE } from "./config";
import { MetaPixel } from "./components/MetaPixel";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mobile Edit · Grupo VIP de Pré-Lançamento",
  description:
    "Aprenda a editar vídeos profissionais no CapCut usando só o celular, com IA. Entre no Grupo VIP e garanta a condição exclusiva de lançamento.",
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${barlowCondensed.variable} antialiased`}
    >
      <body>
        {children}
        <MetaPixel id={SITE.metaPixelId} />
      </body>
    </html>
  );
}
