"use client";

import { useEffect, useState } from "react";

export function Countdown({ target }: { target: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const diff = now === null ? 0 : Math.max(0, new Date(target).getTime() - now);
  const parts = [
    { label: "Dias", value: Math.floor(diff / 86_400_000) },
    { label: "Horas", value: Math.floor(diff / 3_600_000) % 24 },
    { label: "Min", value: Math.floor(diff / 60_000) % 60 },
    { label: "Seg", value: Math.floor(diff / 1000) % 60 },
  ];

  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      {parts.map((p) => (
        <div key={p.label} className="border-spin w-[72px] rounded-xl bg-ink-900 py-3 text-center sm:w-24">
          <div className="font-display text-3xl font-black italic tabular-nums text-white sm:text-5xl">
            {now === null ? "--" : String(p.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-neon-400 sm:text-xs">{p.label}</div>
        </div>
      ))}
    </div>
  );
}
