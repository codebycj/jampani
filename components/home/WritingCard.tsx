import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function WritingCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group flex items-start justify-between gap-4 py-4 border-b border-[var(--border)] last:border-0 hover:border-[var(--border-strong)] transition-colors"
    >
      <div className="min-w-0">
        <h3 className="text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate mb-1">
          {post.title}
        </h3>
        <p className="text-sm text-[var(--text-muted)] line-clamp-2">{post.summary}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0 pt-0.5">
        <time
          dateTime={post.date}
          className="text-xs text-[var(--text-muted)] whitespace-nowrap"
        >
          {formatDate(post.date)}
        </time>
        <ArrowUpRight
          size={14}
          strokeWidth={1.75}
          className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
