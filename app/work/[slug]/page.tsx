import { notFound } from "next/navigation";
import { getWork, getAllWork } from "@/lib/content";
import { MdxContent } from "@/components/MdxContent";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Briefcase } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const work = getAllWork();
  return work.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getWork(slug);
    return {
      title: `${post.title} — ${post.client}`,
      description: post.summary,
      openGraph: {
        title: `${post.title} — ${post.client}`,
        description: post.summary,
        images: [{ url: `/api/og?title=${encodeURIComponent(post.title)}&client=${encodeURIComponent(post.client)}`, width: 1200, height: 630 }],
      },
    };
  } catch {
    return {};
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getWork(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      {/* Read progress indicator */}
      <div className="read-progress" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors mb-12"
        >
          <ArrowLeft size={14} strokeWidth={1.75} />
          Back
        </Link>

        {/* Hero */}
        <header className="mb-12 pb-12 border-b border-[var(--border)]">
          <p className="text-sm text-[var(--accent)] font-medium mb-3">{post.client}</p>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-[450] leading-[1.1] tracking-[-0.025em] mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8">
            {post.summary}
          </p>

          {/* Meta grid */}
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <dt className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-1.5">
                <Briefcase size={12} strokeWidth={1.75} aria-hidden="true" />
                Role
              </dt>
              <dd className="text-sm text-[var(--text-primary)]">{post.role}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-1.5">
                <Calendar size={12} strokeWidth={1.75} aria-hidden="true" />
                Timeline
              </dt>
              <dd className="text-sm text-[var(--text-primary)]">{post.dates}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-1.5">
                <Users size={12} strokeWidth={1.75} aria-hidden="true" />
                Team
              </dt>
              <dd className="text-sm text-[var(--text-primary)]">{post.teamSize}</dd>
            </div>
          </dl>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs px-2.5 py-1 rounded-md bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* MDX body */}
        <div className="prose">
          <MdxContent source={post.content} />
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.75} />
            Back to home
          </Link>
        </div>
      </div>
    </article>
  );
}
