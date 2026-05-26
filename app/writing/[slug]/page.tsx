import { notFound } from "next/navigation";
import { getWriting, getAllWriting } from "@/lib/content";
import { MdxContent } from "@/components/MdxContent";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllWriting();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getWriting(slug);
    return {
      title: post.title,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        type: "article",
        publishedTime: post.date,
      },
    };
  } catch {
    return {};
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getWriting(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <div className="read-progress" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors mb-12"
        >
          <ArrowLeft size={14} strokeWidth={1.75} />
          Writing
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time
              dateTime={post.date}
              className="text-sm text-[var(--text-muted)]"
            >
              {formatDate(post.date)}
            </time>
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-[450] leading-[1.1] tracking-[-0.025em] mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            {post.summary}
          </p>
        </header>

        <div className="prose">
          <MdxContent source={post.content} />
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.75} />
            All writing
          </Link>
        </div>
      </div>
    </article>
  );
}
