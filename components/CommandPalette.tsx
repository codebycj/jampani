"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, FileText, User, PenLine, Mail, Home } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

type Item = {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  kbd?: string;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const nav = useCallback(
    (href: string) => {
      router.push(href);
      setOpen(false);
      setQuery("");
    },
    [router]
  );

  const items: Item[] = [
    { id: "home", label: "Home", icon: <Home size={15} />, action: () => nav("/") },
    {
      id: "picton",
      label: "Case study — AI Portfolio Analyzer",
      description: "AI-driven portfolio querying for Canadian banks",
      icon: <FileText size={15} />,
      action: () => nav("/work/ai-portfolio-analyzer"),
    },
    {
      id: "novabus",
      label: "Case study — Novabus Fleet Dashboard",
      description: "Electric bus fleet management at Capgemini",
      icon: <FileText size={15} />,
      action: () => nav("/work/novabus-fleet"),
    },
    {
      id: "scotiabank",
      label: "Case study — Scotiabank UI",
      description: "Accessible component library with AEM 6.5",
      icon: <FileText size={15} />,
      action: () => nav("/work/scotiabank"),
    },
    { id: "about", label: "About", icon: <User size={15} />, action: () => nav("/about") },
    { id: "writing", label: "Writing", icon: <PenLine size={15} />, action: () => nav("/writing") },
    {
      id: "email",
      label: "Send an email",
      description: "chaitanya@jampani.dev",
      icon: <Mail size={15} />,
      action: () => { window.location.href = "mailto:chaitanya@jampani.dev"; setOpen(false); },
    },
    {
      id: "github",
      label: "GitHub",
      description: "github.com/codebycj",
      icon: <GithubIcon size={15} />,
      action: () => { window.open("https://github.com/codebycj", "_blank"); setOpen(false); },
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "linkedin.com/in/chaitanyajampani",
      icon: <LinkedinIcon size={15} />,
      action: () => { window.open("https://linkedin.com/in/chaitanyajampani", "_blank"); setOpen(false); },
    },
    {
      id: "resume",
      label: "Download resume",
      icon: <ArrowRight size={15} />,
      action: () => { window.open("/resume.pdf", "_blank"); setOpen(false); },
    },
  ];

  const filtered = query
    ? items.filter(
        (i) =>
          i.label.toLowerCase().includes(query.toLowerCase()) ||
          i.description?.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };

    const customOpen = () => setOpen(true);

    window.addEventListener("keydown", down);
    window.addEventListener("open-cmd-palette", customOpen);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("open-cmd-palette", customOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      setQuery("");
    }
  }, [open]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIdx]?.action();
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg rounded-xl border border-[var(--border-strong)] bg-[var(--bg-base)] shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 24px 48px rgb(0 0 0 / 0.4)" }}
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
          <Search size={16} className="text-[var(--text-muted)] shrink-0" strokeWidth={1.75} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search pages, work, or links…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm outline-none"
            aria-label="Search"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-palette-list"
            aria-activedescendant={`cmd-item-${filtered[activeIdx]?.id}`}
          />
          <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-xs text-[var(--text-muted)] border border-[var(--border)] rounded font-mono">
            esc
          </kbd>
        </div>

        {/* Results */}
        <ul
          ref={listRef}
          id="cmd-palette-list"
          role="listbox"
          className="max-h-72 overflow-y-auto py-2"
        >
          {filtered.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-[var(--text-muted)]">
              No results for &ldquo;{query}&rdquo;
            </li>
          )}
          {filtered.map((item, idx) => (
            <li
              key={item.id}
              id={`cmd-item-${item.id}`}
              role="option"
              aria-selected={idx === activeIdx}
              className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${
                idx === activeIdx
                  ? "bg-[var(--bg-subtle)] text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)]"
              }`}
              onClick={() => item.action()}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <span className="text-[var(--text-muted)] shrink-0">{item.icon}</span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm truncate">{item.label}</span>
                {item.description && (
                  <span className="block text-xs text-[var(--text-muted)] truncate mt-0.5">
                    {item.description}
                  </span>
                )}
              </span>
              {idx === activeIdx && (
                <ArrowRight size={14} className="shrink-0 text-[var(--text-muted)]" />
              )}
            </li>
          ))}
        </ul>

        {/* Footer hint */}
        <div className="border-t border-[var(--border)] px-4 py-2 flex items-center gap-4 text-xs text-[var(--text-muted)]">
          <span><kbd className="font-mono">↑↓</kbd> navigate</span>
          <span><kbd className="font-mono">↵</kbd> open</span>
          <span><kbd className="font-mono">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
