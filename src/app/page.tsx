import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Icon, type IconName } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { HomeHero } from "@/components/HomeHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
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
      <HomeHero />

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
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
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <ServiceCard service={service} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/patrol-car-sunset.jpg"
              alt="Securas Security Group patrol vehicle parked outside a client property at dusk"
              width={1448}
              height={1086}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 46vw, 92vw"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
              On the Road, On Your Property
            </p>
            <h2 className="mt-3 font-heading text-3xl uppercase tracking-wide text-navy-900 sm:text-4xl">
              A Visible, Marked Presence Across the GTA
            </h2>
            <p className="mt-4 text-slate-600">
              Our patrol vehicles are a deliberate part of the deterrent &mdash; clearly
              marked, easy to recognize, and dispatched the moment a monitored alarm or
              camera event is confirmed. It&apos;s the physical half of a monitoring plan
              that actually shows up.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2.5">
                <Icon name="check" className="h-4 w-4 text-accent-600" />
                Rapid dispatch to confirmed alarms
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="check" className="h-4 w-4 text-accent-600" />
                Scheduled and randomized mobile patrol routes
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="check" className="h-4 w-4 text-accent-600" />
                Clearly marked vehicles that deter before an incident starts
              </li>
            </ul>
            <Link
              href="/services/mobile-patrol"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-accent-600"
            >
              Explore Mobile Patrol
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
              Why Securas
            </p>
            <h2 className="mt-3 font-heading text-3xl uppercase tracking-wide text-white sm:text-4xl">
              Protection That Actually Responds
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <RevealItem
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
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
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
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800"
              >
                Get Your Free Assessment
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </Reveal>
            <RevealGroup className="space-y-6" stagger={0.12}>
              {steps.map((step, index) => (
                <RevealItem key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-sm text-accent-500">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-base uppercase tracking-wide text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
