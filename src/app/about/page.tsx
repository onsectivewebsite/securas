import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Icon, type IconName } from "@/components/Icon";
import { fullAddress, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Securas Security Group Inc., a Brampton-based security company delivering CCTV monitoring, alarm response, fire monitoring, and guard services across the GTA.",
  alternates: { canonical: "/about" },
};

const values: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "shield",
    title: "Protection First",
    description:
      "Every decision we make starts with one question: does this make the property safer? Sales pitches come second.",
  },
  {
    icon: "bolt",
    title: "Speed Matters",
    description:
      "A monitored alarm is only useful if someone acts on it fast. We build our operations around response time.",
  },
  {
    icon: "check",
    title: "Accountability",
    description:
      "Shift reports, incident logs, and patrol verification mean you always know exactly what happened on your property.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Securas"
        title="A Security Partner Based Right Here in Brampton"
        description="Securas Security Group Inc. was built around a simple idea: security should mean an actual response, not just a camera pointed at your door."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
              Our Story
            </p>
            <h2 className="mt-3 font-heading text-3xl uppercase tracking-wide text-navy-900">
              Security Built Around Response, Not Just Equipment
            </h2>
            <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Too many security setups stop at installation: a camera gets mounted, an
                alarm panel gets wired in, and no one is actually watching when something
                happens. Securas Security Group Inc. exists to close that gap.
              </p>
              <p>
                We operate as a connected system — CCTV monitoring, alarm response,
                fire and life-safety monitoring, guard services, access control, and
                mobile patrol all feed into the same operations centre, so an incident
                anywhere on your property gets seen and acted on.
              </p>
              <p>
                Operating out of Brampton, we work with homeowners, retail locations,
                construction sites, property managers, and commercial buildings across{" "}
                {siteConfig.serviceArea}.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-mist-200 bg-white p-8 shadow-sm">
            <h3 className="font-heading text-lg uppercase tracking-wide text-navy-900">
              Securas at a Glance
            </h3>
            <dl className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Icon name="mapPin" className="h-5 w-5 shrink-0 text-accent-500" />
                <div>
                  <dt className="text-sm font-semibold text-navy-900">Headquarters</dt>
                  <dd className="text-sm text-slate-600">{fullAddress}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="clock" className="h-5 w-5 shrink-0 text-accent-500" />
                <div>
                  <dt className="text-sm font-semibold text-navy-900">Monitoring</dt>
                  <dd className="text-sm text-slate-600">{siteConfig.hours.monitoring}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="shield" className="h-5 w-5 shrink-0 text-accent-500" />
                <div>
                  <dt className="text-sm font-semibold text-navy-900">Coverage Area</dt>
                  <dd className="text-sm text-slate-600">{siteConfig.serviceArea}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-accent-500" />
                <div>
                  <dt className="text-sm font-semibold text-navy-900">Direct Line</dt>
                  <dd className="text-sm text-slate-600">
                    <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-accent-600">
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-500">
              What Guides Us
            </p>
            <h2 className="mt-3 font-heading text-3xl uppercase tracking-wide text-white">
              Our Operating Principles
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-navy-700 bg-navy-950/60 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/15 text-accent-500">
                  <Icon name={value.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base uppercase tracking-wide text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Explore
          </p>
          <h2 className="mt-3 font-heading text-3xl uppercase tracking-wide text-navy-900">
            See How We Protect Your Property
          </h2>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-navy-800 transition-colors"
          >
            View All Services
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
