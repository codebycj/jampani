"use client";

import { useEffect, useState } from "react";

function getTorontoTime() {
  return new Date().toLocaleTimeString("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function StatusBadge() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(getTorontoTime());
    const id = setInterval(() => setTime(getTorontoTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] text-sm text-[var(--text-secondary)]"
      role="status"
      aria-label="Current availability status"
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span>Open to work</span>
      {time && (
        <>
          <span className="text-[var(--border-strong)]" aria-hidden="true">·</span>
          <span className="text-[var(--text-muted)] text-xs font-mono" aria-label={`Local time: ${time}`}>
            {time} Toronto
          </span>
        </>
      )}
    </div>
  );
}
