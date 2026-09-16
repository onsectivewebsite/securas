import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "./Icon";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div className="bg-grid-lines absolute inset-0 opacity-50" />
      <div
        className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-navy-600/30 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
          {breadcrumb.map((item, index) => (
            <span key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <Icon name="chevronRight" className="h-3 w-3" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-accent-400 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-accent-500">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-heading text-4xl uppercase leading-tight tracking-wide text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">{description}</p>
        )}
      </Container>
    </section>
  );
}
