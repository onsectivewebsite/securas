import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { siteConfig } from "@/lib/site-config";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16">
      <div className="bg-grid-lines absolute inset-0 opacity-60" />
      <div
        className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-alert-500/40 bg-alert-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-alert-500">
          <Icon name="bolt" className="h-3.5 w-3.5" />
          24/7 Emergency Dispatch
        </span>
        <h2 className="max-w-2xl font-heading text-3xl uppercase tracking-wide text-white sm:text-4xl">
          Your Property Shouldn&apos;t Wait for Business Hours to Be Protected
        </h2>
        <p className="max-w-xl text-slate-500">
          Talk to our team about CCTV monitoring, alarm response, and guard coverage built
          around your property in Brampton and the GTA.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-bold text-navy-950 hover:bg-accent-400 transition-colors"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-600 px-6 py-3.5 text-sm font-bold text-white hover:border-accent-500 hover:text-accent-400 transition-colors"
          >
            Request a Free Security Assessment
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
