"use client";

import { SITE } from "../config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Link para o grupo VIP que registra "Lead" no Meta Pixel a cada clique.
export function GroupLink({
  children,
  className = "",
  location,
}: {
  children: React.ReactNode;
  className?: string;
  location: string;
}) {
  return (
    <a
      href={SITE.groupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => window.fbq?.("track", "Lead", { content_name: "Grupo VIP", content_category: location })}
    >
      {children}
    </a>
  );
}
