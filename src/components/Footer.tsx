import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { fullAddress, services, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-mist-100">
      <Container className="grid grid-cols-1 gap-10 py-14 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="Securas on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 hover:border-accent-500 hover:text-accent-400 transition-colors"
            >
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Securas on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 hover:border-accent-500 hover:text-accent-400 transition-colors"
            >
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="Securas on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 hover:border-accent-500 hover:text-accent-400 transition-colors"
            >
              <Icon name="linkedin" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-wider text-accent-500">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-accent-400 transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-wider text-accent-500">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
            <li>
              <Link href="/about" className="hover:text-accent-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent-400 transition-colors">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-wider text-accent-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li className="flex items-start gap-2.5">
              <Icon name="mapPin" className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-accent-500" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-accent-400 transition-colors">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-accent-500" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-400 transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="clock" className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
              <span>
                {siteConfig.hours.monitoring}
                <br />
                Office: {siteConfig.hours.office}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-navy-800">
        <Container className="flex flex-col-reverse items-center justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.legalName} All rights reserved.
          </p>
          <p>Serving {siteConfig.serviceArea}.</p>
        </Container>
      </div>
    </footer>
  );
}
