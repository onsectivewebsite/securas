import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { fullAddress, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Securas Security Group Inc. at 22 Drexel Road, Brampton, ON L6P 3V2 or call 343-558-9669 for CCTV monitoring, alarm response, and guard services across the GTA.",
  alternates: { canonical: "/contact" },
};

const mapQuery = encodeURIComponent(`${fullAddress}`);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Talk to Our Security Team"
        description="Whether you need a full property assessment or have a quick question about coverage, our team is ready to help."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl uppercase tracking-wide text-navy-900">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the form and we&apos;ll follow up to schedule your free assessment.
            </p>
            <div className="mt-8 rounded-2xl border border-mist-200 bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-navy-800 bg-navy-950 p-6 text-white sm:p-8">
              <h2 className="font-heading text-lg uppercase tracking-wide">
                Contact Details
              </h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Icon name="mapPin" className="h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="font-semibold text-white">Office Address</p>
                    <p className="text-slate-500">{fullAddress}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="phone" className="h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href={`tel:${siteConfig.phoneHref}`} className="text-slate-500 hover:text-accent-400">
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="mail" className="h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-slate-500 hover:text-accent-400">
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="clock" className="h-5 w-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="text-slate-500">{siteConfig.hours.monitoring}</p>
                    <p className="text-slate-500">Office: {siteConfig.hours.office}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-mist-200">
              <iframe
                title="Securas Security Group Inc. location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
