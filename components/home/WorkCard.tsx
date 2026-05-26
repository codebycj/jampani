import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  tags: string[];
  year: string;
};

export function WorkCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-muted)] transition-all duration-200"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="text-xs text-[var(--text-muted)] mb-1">{project.client}</p>
          <h3 className="font-serif text-xl font-[450] tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-[var(--text-muted)]">{project.year}</span>
          <ArrowUpRight
            size={16}
            strokeWidth={1.75}
            className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors"
            aria-hidden="true"
          />
        </div>
      </div>

      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block text-xs px-2.5 py-1 rounded-md bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
