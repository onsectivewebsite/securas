import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Icon, type IconName } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Security Company in Brampton, ON | ${siteConfig.name}`,
  description:
    "Securas Security Group Inc. provides CCTV monitoring, alarm response, fire & life-safety monitoring, guard services, and mobile patrol across Brampton and the GTA. Call 343-558-9669.",
  alternates: { canonical: "/" },
};

const differentiators: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "clock",
    title: "24/7 Monitoring Centre",
    description:
      "Our operations centre never closes. Cameras, alarms, and fire signals are watched continuously, every day of the year.",
  },
  {
    icon: "bolt",
    title: "Real Response, Not Just Alerts",
    description:
      "A confirmed incident triggers an actual dispatch — guard response, key-holder notice, or a direct call to emergency services.",
  },
  {
    icon: "shield",
    title: "One Connected System",
    description:
      "Cameras, alarms, access control, and on-site guards work together, so an event anywhere on your property gets seen.",
  },
  {
    icon: "mapPin",
    title: "Local to Brampton & the GTA",
    description:
      "Based on Drexel Road in Brampton, with coverage across the Greater Toronto Area — we know the neighbourhoods we protect.",
  },
];

const steps = [
  {
    title: "Free Site Assessment",
    description:
      "We start by understanding your property, your risk points, and what you actually need protected.",
  },
  {
    title: "Custom Security Plan",
    description:
      "We recommend a mix of monitoring, alarms, guards, or patrol built for your budget and risk level — not a one-size package.",
  },
  {
    title: "Install & Activate",
    description:
      "Equipment is installed or integrated, guards are briefed, and your monitoring goes live.",
  },
  {
    title: "Ongoing Protection",
    description:
      "Your property is watched continuously, with reporting and adjustments as your needs change.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div className="bg-grid-lines absolute inset-0 opacity-50" />
        <div
          className="absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-15%] left-[-5%] h-80 w-80 rounded-full bg-navy-600/40 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid grid-cols-1 gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400">
              <Icon name="shield" className="h-3.5 w-3.5" />
              Brampton &amp; Greater Toronto Area
            </span>
            <h1 className="mt-6 font-heading text-4xl uppercase leading-[1.1] tracking-wide text-white sm:text-5xl lg:text-6xl">
              Watching Over What Matters, <span className="text-accent-500">Around the Clock</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-500">
              Securas Security Group Inc. protects homes and businesses across Brampton and
              the GTA with CCTV monitoring, alarm response, fire &amp; life-safety monitoring,
              and professional guard services — backed by a real dispatch team, not just an
              app notification.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                Request a Free Assessment
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-accent-500" />
                24/7 Monitoring Centre
              </span>
              <span className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-accent-500" />
                Rapid Emergency Response
              </span>
              <span className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-accent-500" />
                Trained Guard Teams
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl border border-navy-700 bg-navy-900/60 p-6 shadow-2xl">
            <p className="font-heading text-sm uppercase tracking-wider text-accent-500">
              Full-Spectrum Protection
            </p>
            <ul className="mt-4 divide-y divide-navy-800">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between gap-3 py-3.5 text-sm text-mist-100 hover:text-accent-400 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <Icon name={service.icon as IconName} className="h-4 w-4 text-accent-500" />
                      {service.name}
                    </span>
                    <Icon
                      name="chevronRight"
                      className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-accent-400"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
              What We Do
            </p>
            <h2 className="mt-3 font-heading text-3xl uppercase tracking-wide text-navy-900 sm:text-4xl">
              Security Services Built for Real Protection
            </h2>
            <p className="mt-4 text-slate-600">
              From live camera monitoring to boots-on-the-ground guard response, every
              Securas service is designed to work together as one system.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
              Why Securas
            </p>
            <h2 className="mt-3 font-heading text-3xl uppercase tracking-wide text-white sm:text-4xl">
              Protection That Actually Responds
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-navy-700 bg-navy-950/60 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/15 text-accent-500">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                How It Works
              </p>
              <h2 className="mt-3 font-heading text-3xl uppercase tracking-wide text-navy-900 sm:text-4xl">
                From Assessment to Active Protection
              </h2>
              <p className="mt-4 text-slate-600">
                Every property is different. We build a plan around yours instead of
                selling a fixed package.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
              >
                Get Your Free Assessment
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-sm text-accent-500">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base uppercase tracking-wide text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
