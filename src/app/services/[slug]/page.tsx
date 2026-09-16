import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Icon, type IconName } from "@/components/Icon";
import { getServiceBySlug, services, siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} in Brampton & the GTA`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.name,
          name: service.name,
          description: service.summary,
          provider: {
            "@type": "Organization",
            name: siteConfig.legalName,
            telephone: siteConfig.phoneHref,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.region,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
          },
          areaServed: siteConfig.serviceArea,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <PageHero
        eyebrow="Security Services"
        title={service.name}
        description={service.heroDescription}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortName },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl uppercase tracking-wide text-navy-900">
              What&apos;s Included
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-mist-200 bg-white p-4"
                >
                  <Icon name="check" className="h-5 w-5 shrink-0 text-accent-600" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-heading text-2xl uppercase tracking-wide text-navy-900">
              How It Works
            </h2>
            <ol className="mt-6 space-y-6">
              {service.process.map((step, index) => (
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

            <h2 className="mt-14 font-heading text-2xl uppercase tracking-wide text-navy-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-mist-200 bg-white p-5 open:border-accent-500/50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900">
                    {faq.question}
                    <Icon
                      name="chevronRight"
                      className="h-4 w-4 shrink-0 text-accent-600 transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-navy-800 bg-navy-950 p-6 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-500 text-navy-950">
                <Icon name={service.icon as IconName} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg uppercase tracking-wide">
                Talk to Our Team
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Get a free assessment for {service.shortName.toLowerCase()} at your property.
              </p>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-500 px-5 py-3 text-sm font-bold text-navy-950 hover:bg-accent-400 transition-colors"
              >
                <Icon name="phone" className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-navy-700 px-5 py-3 text-sm font-bold text-white hover:border-accent-500 hover:text-accent-400 transition-colors"
              >
                Request a Quote
              </Link>
            </div>

            <div className="rounded-2xl border border-mist-200 bg-white p-6">
              <h3 className="font-heading text-base uppercase tracking-wide text-navy-900">
                Other Services
              </h3>
              <ul className="mt-4 space-y-1">
                {otherServices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="flex items-center justify-between gap-2 rounded-md px-2 py-2.5 text-sm text-slate-700 hover:bg-mist-50 hover:text-accent-600"
                    >
                      {item.name}
                      <Icon name="chevronRight" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
