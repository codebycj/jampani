import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] mt-20"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
        <p>
          © {new Date().getFullYear()} Chaitanya Jampani.{" "}
          <Link
            href="https://github.com/codebycj/jampani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-secondary)] transition-colors"
          >
            Built with Next.js
          </Link>
          {" — view source"}
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="mailto:chaitanya@jampani.dev"
            aria-label="Email"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            <Mail size={16} strokeWidth={1.75} />
          </Link>
          <Link
            href="https://github.com/codebycj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            <GithubIcon size={16} />
          </Link>
          <Link
            href="https://linkedin.com/in/chaitanyajampani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            <LinkedinIcon size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
