"use client";

import { useState, type FormEvent } from "react";
import { services, siteConfig } from "@/lib/site-config";
import { Icon } from "./Icon";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const service = String(form.get("service") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `New enquiry from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service of interest: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-mist-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy-900">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-md border border-mist-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
            placeholder="(343) 555-0198"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-navy-900">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-mist-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-semibold text-navy-900">
          Service You&apos;re Interested In
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full rounded-md border border-mist-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Not sure / General enquiry">Not sure / General enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy-900">
          Tell Us About Your Property
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-mist-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          placeholder="Tell us about your property, current setup, and what you'd like protected."
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-bold text-navy-950 hover:bg-accent-400 transition-colors sm:w-auto"
      >
        <Icon name="mail" className="h-4 w-4" />
        Send Enquiry
      </button>

      {status === "sent" && (
        <p className="flex items-center gap-2 text-sm font-medium text-navy-900">
          <Icon name="check" className="h-4 w-4 text-accent-600" />
          Your email app should now be open with your message ready to send. Prefer to
          talk now? Call {siteConfig.phone}.
        </p>
      )}
    </form>
  );
}
