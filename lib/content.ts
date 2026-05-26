import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

// ─── Schemas ───────────────────────────────────────────────────────────────

export const WorkFrontmatterSchema = z.object({
  title: z.string(),
  client: z.string(),
  role: z.string(),
  dates: z.string(),
  teamSize: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean().optional().default(false),
});

export const WritingFrontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).optional().default([]),
  published: z.boolean().optional().default(true),
});

export type WorkFrontmatter = z.infer<typeof WorkFrontmatterSchema>;
export type WritingFrontmatter = z.infer<typeof WritingFrontmatterSchema>;

export type WorkPost = WorkFrontmatter & { slug: string; content: string };
export type WritingPost = WritingFrontmatter & { slug: string; content: string };

// ─── Helpers ───────────────────────────────────────────────────────────────

const WORK_DIR = path.join(process.cwd(), "content", "work");
const WRITING_DIR = path.join(process.cwd(), "content", "writing");

function readMdx(dir: string, slug: string) {
  const fullPath = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
}

function getSlugs(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// ─── Work ──────────────────────────────────────────────────────────────────

export function getAllWork(): WorkPost[] {
  const slugs = getSlugs(WORK_DIR);
  return slugs.map((slug) => {
    const { data, content } = readMdx(WORK_DIR, slug);
    const frontmatter = WorkFrontmatterSchema.parse(data);
    return { slug, content, ...frontmatter };
  });
}

export function getWork(slug: string): WorkPost {
  const { data, content } = readMdx(WORK_DIR, slug);
  const frontmatter = WorkFrontmatterSchema.parse(data);
  return { slug, content, ...frontmatter };
}

// ─── Writing ───────────────────────────────────────────────────────────────

export function getAllWriting(): WritingPost[] {
  const slugs = getSlugs(WRITING_DIR);
  return slugs
    .map((slug) => {
      const { data, content } = readMdx(WRITING_DIR, slug);
      const frontmatter = WritingFrontmatterSchema.parse(data);
      return { slug, content, ...frontmatter };
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getWriting(slug: string): WritingPost {
  const { data, content } = readMdx(WRITING_DIR, slug);
  const frontmatter = WritingFrontmatterSchema.parse(data);
  return { slug, content, ...frontmatter };
}
