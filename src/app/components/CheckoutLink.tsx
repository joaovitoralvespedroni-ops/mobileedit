"use client";

import { OFFER } from "../config";

// Enquanto o visitante não viu o cartão de preço (#preco), qualquer botão rola até a
// ancoragem (#oferta). Depois que o preço já apareceu na tela, o botão leva ao checkout
// e registra "InitiateCheckout" no Meta Pixel.
// Sem checkoutUrl configurado, sempre rola até a seção de preço.
export function CheckoutLink({
  children,
  className = "",
  location,
}: {
  children: React.ReactNode;
  className?: string;
  location: string;
}) {
  const external = OFFER.checkoutUrl !== "";
  return (
    <a
      href={external ? OFFER.checkoutUrl : "#oferta"}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
      onClick={(e) => {
        const price = document.getElementById("preco");
        const sawPrice = price ? price.getBoundingClientRect().top < window.innerHeight : true;

        if (!external || !sawPrice) {
          e.preventDefault();
          document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        window.fbq?.("track", "InitiateCheckout", {
          content_name: "Mobile Edit",
          content_category: location,
          value: OFFER.price,
          currency: "BRL",
        });
      }}
    >
      {children}
    </a>
  );
}
