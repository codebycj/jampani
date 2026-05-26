import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { WorkCard } from "@/components/home/WorkCard";
import { WritingCard } from "@/components/home/WritingCard";
import { StatusBadge } from "@/components/home/StatusBadge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chaitanya Jampani — Senior Frontend Engineer",
  description:
    "Senior frontend engineer specializing in enterprise web apps for fintech and banking. 10+ years shipping accessible, performant React and Next.js at scale.",
};

const featuredWork = [
  {
    slug: "ai-portfolio-analyzer",
    title: "AI Portfolio Analyzer",
    client: "Picton Investments",
    summary:
      "White-label AI portfolio analyzer for Canadian banks. Natural language queries over live fund data, shipped to multiple bank brands from a single codebase.",
    tags: ["React", "Next.js", "TypeScript", "White-label SaaS", "AI/NLP"],
    year: "2024-current",
  },
  {
    slug: "novabus-fleet",
    title: "Novabus Fleet Dashboard",
    client: "Novabus (Volvo Group)",
    summary:
      "Real-time electric bus fleet management for Volvo's North American transit brand: live Mapbox tracking, Chart.js energy time-series, and a REST bridge over legacy backends.",
    tags: ["React", "TypeScript", "Mapbox GL", "Chart.js", "REST APIs"],
    year: "2022–2023",
  },
  {
    slug: "scotiabank",
    title: "Scotiabank Design System",
    client: "Scotiabank",
    summary:
      "WCAG 2.1 AA component library integrated with Adobe Experience Manager 6.5, published to a private NPM registry, and adopted across scotiabank.com.",
    tags: ["React", "Storybook", "WCAG 2.1 AA", "AEM 6.5", "NPM"],
    year: "2021–2022",
  },
  {
    slug: "blockchainmind",
    title: "Crypto Data Dashboards",
    client: "BlockchainMind Inc.",
    summary:
      "Data-driven web dashboards helping clients monitor and manage cryptocurrency portfolios, backed by a headless CMS and automated CI/CD pipelines running on Docker and Jenkins.",
    tags: ["React", "GraphQL", "Tailwind CSS", "Kontent CMS", "Docker", "CI/CD"],
    year: "2020–2021",
  },
];

const placeholderPosts = [
  {
    slug: "integrating-openai-regulated-fintech",
    title: "Integrating OpenAI APIs into a regulated fintech UI",
    date: "2026-05-26",
    summary:
      "Audit trails, prompt injection guardrails, and graceful degradation: what changes when LLMs touch financial data.",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading" className="mb-20">
        <div className="mb-5">
          <StatusBadge />
        </div>

        <h1
          id="hero-heading"
          className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-[450] leading-[1.08] tracking-[-0.03em] mb-6 text-[var(--text-primary)]"
        >
          Chaitanya
          <br />
          Jampani
          <span className="cursor-blink" aria-hidden="true" />
        </h1>

        <p className="text-lg text-[var(--text-secondary)] max-w-xl mb-3 leading-relaxed">
          Senior frontend engineer with full-stack reach, building enterprise web apps for fintech and banking.
        </p>

        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-[var(--text-muted)] mb-8">
          <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
          <span>Toronto, Canada</span>
          <span className="mx-2 text-[var(--border-strong)]" aria-hidden="true">·</span>
          <span className="text-[var(--accent)] font-medium">Open to senior / staff roles, remote, Toronto, or relocation to US&nbsp;/&nbsp;UK&nbsp;/&nbsp;EU</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            <FileDown size={15} strokeWidth={1.75} />
            Resume
          </Link>

          <Link
            href="https://github.com/codebycj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
          >
            <GithubIcon size={15} />
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/chaitanyajampani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </Link>

          <Link
            href="mailto:chaitanya@jampani.dev"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
          >
            <Mail size={15} strokeWidth={1.75} />
            Email
          </Link>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section aria-labelledby="about-heading" className="mb-20 max-w-2xl">
        <h2
          id="about-heading"
          className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-5"
        >
          About
        </h2>
        <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
          <p>
            I have over a decade of experience shipping production-grade frontends for organizations
            where failure isn't an option: Canadian banks, regulated fintech platforms, and
            enterprise fleet systems. My focus is the hard middle: accessible component systems,
            white-label architectures, and performance that holds up under real compliance constraints,
            not just synthetic benchmarks.
          </p>
          <p>
            Technically, I live in React and Next.js. What I actually care about is the layer above
            the framework: information architecture, design system strategy, and the decisions that
            scale across a codebase when six teams are touching it. I've owned the full delivery cycle
            from Figma handoff to Storybook publish to monitoring in production. When the work
            calls for it, I also go deeper into the stack — REST API design, Node.js services,
            and enough database work to make informed decisions without waiting on a backend team.
          </p>
          <p>
            I'm a Canadian citizen, which means I can work in the US on a TN visa without employer
            sponsorship cost, a meaningful practical advantage for North American companies. I'm also
            open to relocation to the UK, EU, or Australia.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            Full background
            <ArrowUpRight size={14} strokeWidth={1.75} />
          </Link>
        </div>
      </section>

      {/* ── Featured work ─────────────────────────────────────────────── */}
      <section aria-labelledby="work-heading" className="mb-20">
        <h2
          id="work-heading"
          className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-8"
        >
          Selected work
        </h2>
        <div className="grid gap-4">
          {featuredWork.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── Writing ──────────────────────────────────────────────────── */}
      <section aria-labelledby="writing-heading">
        <div className="flex items-center justify-between mb-8">
          <h2
            id="writing-heading"
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)]"
          >
            Writing
          </h2>
          <Link
            href="/writing"
            className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
          >
            All posts
            <ArrowUpRight size={12} strokeWidth={1.75} />
          </Link>
        </div>
        <div className="grid gap-3">
          {placeholderPosts.map((post) => (
            <WritingCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
