import Link from "next/link";
import { getAllWriting } from "@/lib/content";
import { ArrowUpRight, Rss } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on frontend architecture, accessibility, and building for regulated industries.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Writing() {
  const posts = getAllWriting();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex items-start justify-between mb-12">
        <div>
          <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-[450] tracking-tight mb-4">
            Writing
          </h1>
          <p className="text-[var(--text-secondary)] max-w-md">
            Notes on frontend architecture, accessibility, and building production software for
            regulated industries.
          </p>
        </div>
        <Link
          href="/feed.xml"
          aria-label="RSS feed"
          className="mt-2 p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] transition-colors"
        >
          <Rss size={18} strokeWidth={1.75} />
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-[var(--text-muted)]">No posts yet — check back soon.</p>
      ) : (
        <ol className="space-y-0" role="list">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-[var(--border)] last:border-0">
              <Link
                href={`/writing/${post.slug}`}
                className="group flex items-start justify-between gap-4 py-6 hover:bg-[var(--bg-subtle)] -mx-4 px-4 rounded-lg transition-colors"
              >
                <div className="min-w-0">
                  <time
                    dateTime={post.date}
                    className="text-xs text-[var(--text-muted)] mb-2 block"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 className="text-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.75}
                  className="mt-7 text-[var(--text-muted)] group-hover:text-[var(--accent)] shrink-0 transition-colors"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
