"use client";

import { OFFER } from "../config";

// Link para o checkout que registra "InitiateCheckout" no Meta Pixel a cada clique.
// Sem checkoutUrl configurado, rola até a seção de preço.
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
      onClick={() =>
        external &&
        window.fbq?.("track", "InitiateCheckout", {
          content_name: "Mobile Edit",
          content_category: location,
          value: OFFER.price,
          currency: "BRL",
        })
      }
    >
      {children}
    </a>
  );
}
