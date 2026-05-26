import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Not Found",
};

const stackTrace = [
  { file: "human.ts", line: 404, fn: "navigateTo()" },
  { file: "browser.ts", line: 1, fn: "fetch()" },
  { file: "jampani.dev", line: 404, fn: "renderPage()" },
];

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <div className="max-w-lg">
        <p className="text-[var(--accent)] font-mono text-sm mb-6 font-medium">
          UnhandledPageError
        </p>

        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-[450] tracking-tight mb-4">
          Page not found
        </h1>

        <p className="text-[var(--text-secondary)] mb-10">
          This route doesn&apos;t exist. The stack trace below is as accurate as stack traces get.
        </p>

        {/* Fake (but funny) stack trace */}
        <div
          className="bg-[var(--bg-subtle)] border border-[var(--border)] rounded-lg p-5 font-mono text-sm mb-10"
          role="region"
          aria-label="Humorous error details"
        >
          <p className="text-red-400 mb-3 font-medium">
            Error: Cannot GET /{"{"}slug{"}"}
          </p>
          {stackTrace.map(({ file, line, fn }, i) => (
            <div key={i} className="flex gap-3 text-[var(--text-muted)] mb-1">
              <span className="text-[var(--text-muted)] select-none shrink-0">at</span>
              <span>
                <span className="text-[var(--text-secondary)]">{fn}</span>
                <span className="text-[var(--text-muted)]"> (</span>
                <span className="text-[var(--accent)]">{file}</span>
                <span className="text-[var(--text-muted)]">:{line})</span>
              </span>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-[var(--border)] text-[var(--text-muted)] text-xs">
            <p>
              <span className="text-[var(--text-secondary)]">hint:</span> You may have typed the
              URL manually. Humans are fallible. Computers are patient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
