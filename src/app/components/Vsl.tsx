"use client";

import { useEffect, useSyncExternalStore } from "react";
import { VSL } from "../config";

// Trava da página /vsl: o conteúdo só aparece quando o vídeo do VTurb chega em VSL.unlockAt.
// Quem já liberou uma vez (mesmo navegador) volta com tudo aberto.
// Para conferir a página sem assistir ao vídeo: /vsl?liberado

const STORAGE_KEY = `vsl-liberada-${VSL.playerId}`;
const listeners = new Set<() => void>();
let unlocked = false;

if (typeof window !== "undefined") {
  try {
    unlocked = localStorage.getItem(STORAGE_KEY) === "1";
  } catch {}
  if (new URLSearchParams(window.location.search).has("liberado")) unlocked = true;
}

function unlock() {
  if (unlocked) return;
  unlocked = true;
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {}
  listeners.forEach((l) => l());
}

function useUnlocked() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => unlocked,
    () => false,
  );
}

/* Só mostra o conteúdo depois que o vídeo liberou. */
export function VslLocked({ children }: { children: React.ReactNode }) {
  return useUnlocked() ? <>{children}</> : null;
}

// Mesmo código de incorporação que o VTurb gera. Fica fora do controle do React
// para o player montar sozinho dentro dele.
const PLAYER_HTML = `<vturb-smartplayer id="vid-${VSL.playerId}" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer>`;

export function VslPlayer({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  useEffect(() => {
    const el = document.getElementById(`vid-${VSL.playerId}`);
    if (!el) return;

    // Eventos do Pixel para públicos (cada um uma vez por visita).
    const sent = new Set<string>();
    const track = (name: string) => {
      if (sent.has(name)) return;
      sent.add(name);
      window.fbq?.("trackCustom", name, { content_name: "Mobile Edit VSL" });
    };

    // O VTurb só manda "video:timeupdate" quando a pessoa está assistindo de verdade;
    // a prévia muda do autoplay usa outro evento e não conta.
    const onTime = (e: Event) => {
      const t = (e as CustomEvent<{ time?: number }>).detail?.time ?? 0;
      for (const m of VSL.pixelMarks) if (t >= m) track(`VSL_${m}s`);
      if (t >= VSL.unlockAt) {
        track("VSL_Oferta");
        unlock();
      }
    };
    const onEnded = () => {
      track("VSL_Completo");
      unlock();
    };

    el.addEventListener("video:timeupdate", onTime);
    el.addEventListener("video:ended", onEnded);

    if (!document.querySelector(`script[src="${VSL.scriptUrl}"]`)) {
      const s = document.createElement("script");
      s.src = VSL.scriptUrl;
      s.async = true;
      document.head.appendChild(s);
    }

    return () => {
      el.removeEventListener("video:timeupdate", onTime);
      el.removeEventListener("video:ended", onEnded);
    };
  }, []);

  return <div className={className} style={style} dangerouslySetInnerHTML={{ __html: PLAYER_HTML }} />;
}
