import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Security Services in Brampton & Across Ontario",
  description:
    "Explore Securas Security Group's full range of security services: CCTV monitoring, alarm systems, emergency response, fire monitoring, guard services, access control, and mobile patrol.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Security Services Built to Work as One System"
        description="Every service below can stand alone or connect into a full protection plan — monitored, dispatched, and reported on by the same Securas team."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <ServiceCard service={service} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
