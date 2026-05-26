"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Command } from "lucide-react";

const links = [
  { href: "/work/ai-portfolio-analyzer", label: "Work", match: "/work" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/writing", label: "Writing", match: "/writing" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg-base)]/90 backdrop-blur-sm"
      role="banner"
    >
      <nav
        className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Chaitanya Jampani — home">
          <Image src="/cj.png" alt="CJ" width={36} height={36} priority />
        </Link>

        <div className="flex items-center gap-1">
          {links.map(({ href, label, match }) => {
            const active = pathname.startsWith(match);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active
                    ? "text-[var(--text-primary)] bg-[var(--bg-subtle)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <div className="w-px h-4 bg-[var(--border)] mx-1" aria-hidden="true" />

          <button
            id="cmd-palette-trigger"
            aria-label="Open command palette (⌘K)"
            title="Open command palette"
            className="p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors"
            onClick={() => {
              const ev = new CustomEvent("open-cmd-palette");
              window.dispatchEvent(ev);
            }}
          >
            <Command size={15} strokeWidth={1.75} />
          </button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
