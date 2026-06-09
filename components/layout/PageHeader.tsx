import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  subtitle,
  crumbs = [],
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 to-brand-600 pt-28 pb-14 text-white md:pt-36 md:pb-20">
      <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-solar-500/20 blur-3xl" />
      <div className="container-x relative">
        <nav className="flex items-center gap-1.5 text-sm text-white/70">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-4 w-4" />
              {c.href ? (
                <Link href={c.href} className="transition hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
