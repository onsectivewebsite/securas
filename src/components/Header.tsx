"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { services, siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-800 bg-navy-950/95 backdrop-blur">
      <div className="hidden md:block bg-navy-900 text-mist-100 text-xs">
        <Container className="flex items-center justify-between py-1.5">
          <p className="flex items-center gap-1.5 text-slate-500">
            <Icon name="clock" className="h-3.5 w-3.5 text-accent-500" />
            {siteConfig.hours.monitoring}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-accent-400 transition-colors"
            >
              <Icon name="mail" className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex items-center gap-1.5 font-semibold text-accent-400 hover:text-accent-300 transition-colors"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-3">
        <Logo dark />

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-mist-100 hover:text-accent-400 transition-colors"
                >
                  {link.label}
                  <Icon name="chevronRight" className="h-3.5 w-3.5 rotate-90" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-72 rounded-lg border border-navy-700 bg-navy-900 p-2 shadow-xl">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-md px-3 py-2 text-sm text-mist-100 hover:bg-navy-800 hover:text-accent-400 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 block rounded-md px-3 py-2 text-sm font-semibold text-accent-400 hover:bg-navy-800"
                    >
                      View all services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-mist-100 hover:text-accent-400 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-4 py-2.5 text-sm font-bold text-navy-950 hover:bg-accent-400 transition-colors"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-mist-100"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-navy-800 bg-navy-950">
          <Container className="flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-mist-100 border-b border-navy-800/60"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-1 gap-1 py-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-slate-500"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-4 py-3 text-sm font-bold text-navy-950"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {siteConfig.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
