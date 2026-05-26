import Link from "next/link";
import { FileDown, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Career arc, technical philosophy, and what I'm looking for next — Chaitanya Jampani",
};

const skills = [
  { category: "Core", items: ["React", "Next.js", "TypeScript", "JavaScript (ES2022+)"] },
  { category: "Styling", items: ["Tailwind CSS", "CSS Modules", "CSS custom properties", "Radix UI"] },
  { category: "State & data", items: ["React Query", "Zustand", "React Context", "Server Components"] },
  { category: "Quality", items: ["Storybook", "Testing Library", "Playwright", "Chromatic"] },
  { category: "Platform", items: ["Vercel", "AWS (S3, CloudFront)", "Docker", "GitHub Actions"] },
  { category: "Design systems", items: ["Design tokens", "Style Dictionary", "Figma", "White-label SaaS"] },
  { category: "Accessibility", items: ["WCAG 2.1 AA", "ARIA patterns", "axe / Lighthouse", "Screen reader testing"] },
  { category: "Backend & integrations", items: ["Node.js", "REST APIs", "GraphQL", "Mapbox GL", "Adobe Experience Manager"] },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-[450] tracking-tight mb-12">
          About
        </h1>

        {/* Career arc */}
        <section aria-labelledby="arc-heading" className="mb-12">
          <h2
            id="arc-heading"
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6"
          >
            Career arc
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              I've spent a decade building things on the web, almost entirely in environments where
              the consequences of getting it wrong are real: a bank customer can't complete a
              transaction, a fleet dispatcher can't see a bus, a financial advisor gives advice based
              on stale data. That context has shaped how I approach everything from component API
              design to CI pipeline choices.
            </p>
            <p>
              My earlier years were generalist: JavaScript, some Rails, a lot of jQuery, the full
              arc of pre-React frontend. Around 2016 I went deep on React and haven't surfaced since.
              Not because it's the only option. It's where the hard problems I care about
              live: state management under real concurrency, design systems that actually scale,
              accessibility that isn't an afterthought.
            </p>
            <p>
              I've worked at startups where I was the only frontend engineer and at banks where the
              frontend org had 80 people. Both extremes taught me things the other couldn't. I prefer
              the middle: a team with real engineers and real constraints, where architectural
              decisions have lasting consequences.
            </p>
          </div>
        </section>

        {/* What I'm good at */}
        <section aria-labelledby="strengths-heading" className="mb-12">
          <h2
            id="strengths-heading"
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6"
          >
            What I'm good at
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              <strong className="text-[var(--text-primary)]">Design systems and component architecture.</strong>{" "}
              I've built or significantly shaped component libraries at two financial institutions.
              The technical work (tokens, Storybook, publishing pipelines) is the easy part.
              The hard part is the API design: how do you write a component that's easy to use
              correctly and hard to use incorrectly? I think about this a lot.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">White-label and multi-tenant UIs.</strong>{" "}
              Shipping the same product to multiple clients with different brands and requirements
              is an underrated architectural challenge. Token-based theming, feature flags, and
              careful prop API design matter here in ways they don't in single-brand products.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">Accessibility at the component level.</strong>{" "}
              Not "audit the site and fix the findings." Building accessibility into the component
              API so consumers can't easily ship inaccessible patterns. TypeScript-enforced ARIA
              relationships, keyboard navigation that actually works, announcements under streaming
              content.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">Performance with real constraints.</strong>{" "}
              Lighthouse scores on a MacBook on wifi don't tell you much. I care about performance
              on the hardware and network conditions your actual users have. Map renders with 400
              live vehicles. Streaming LLM content without layout shift. Bundle splits that matter
              in regulated environments where CDN caching is restricted.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">Compliance in fintech and banking.</strong>{" "}
              Most frontend engineers treat compliance as someone else's problem. In financial services
              it isn't. I've worked under strict CSP policies that block third-party scripts, no-store
              cache directives from security teams, data residency rules that constrain how and where
              you fetch, and audit requirements that reach into the UI layer. The skill is translating
              a regulatory constraint into a concrete frontend decision, not routing every compliance
              question to the back end and waiting. WCAG isn't optional in financial services; neither
              is understanding why your bundle can't phone home to a CDN your security team hasn't
              approved.
            </p>
          </div>
        </section>

        {/* What I'm not */}
        <section aria-labelledby="not-heading" className="mb-12">
          <h2
            id="not-heading"
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6"
          >
            What I'm not
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              A generalist who'll claim expertise in everything. I know the frontend stack deeply and
              I can hold my own in infrastructure conversations, but I'm not a DevOps engineer or a
              mobile developer. I've written backend Node.js but I wouldn't own a complex distributed
              system solo.
            </p>
            <p>
              I'm not excited by greenfield work for its own sake. The interesting problems are usually
              in systems with constraints: legacy code, compliance requirements, performance budgets,
              real users. Blank-slate projects where anything goes produce mediocre software because
              the constraints that force good decisions are absent.
            </p>
          </div>
        </section>

        {/* What I'm looking for */}
        <section aria-labelledby="looking-heading" className="mb-12">
          <h2
            id="looking-heading"
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6"
          >
            What I'm looking for
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Senior or staff-level frontend roles where the work has real technical depth: design
              systems leadership, frontend architecture, or owning the UI layer of a complex product.
              I'm particularly drawn to fintech, regulated industries, and developer tooling.
            </p>
            <p>
              Remote-first is ideal, but I'm open to Toronto hybrid and to relocation. I'm a Canadian
              citizen and can work in the US on a TN visa without employer sponsorship cost, which
              means the visa process is typically a same-day border crossing, not a 6-month petition.
              I'm also genuinely open to the UK, EU (particularly Germany, Netherlands, or Ireland),
              and Australia.
            </p>
          </div>
        </section>

        {/* Skills grid */}
        <section aria-labelledby="skills-heading" className="mb-12">
          <h2
            id="skills-heading"
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6"
          >
            Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs text-[var(--text-muted)] mb-2.5">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact + resume */}
        <section aria-labelledby="contact-heading" className="mb-12">
          <h2
            id="contact-heading"
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6"
          >
            Get in touch
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              <FileDown size={15} strokeWidth={1.75} />
              Resume PDF
            </Link>
            <Link
              href="mailto:chaitanya@jampani.dev"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
            >
              <Mail size={15} strokeWidth={1.75} />
              chaitanya@jampani.dev
            </Link>
            <Link
              href="https://linkedin.com/in/chaitanyajampani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
            >
              <LinkedinIcon size={15} />
              LinkedIn
              <ArrowUpRight size={13} strokeWidth={1.75} />
            </Link>
            <Link
              href="https://github.com/codebycj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
            >
              <GithubIcon size={15} />
              GitHub
              <ArrowUpRight size={13} strokeWidth={1.75} />
            </Link>
          </div>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            +1 778-776-6918 (call or text)
          </p>
        </section>
      </div>
    </div>
  );
}
