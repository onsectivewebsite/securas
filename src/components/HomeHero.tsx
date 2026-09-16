"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HomeHero() {
  return (
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
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400"
          >
            <Icon name="shield" className="h-3.5 w-3.5" />
            Serving Across Ontario
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-6 font-heading text-4xl uppercase leading-[1.1] tracking-wide text-white sm:text-5xl lg:text-6xl"
          >
            Watching Over What Matters,{" "}
            <span className="text-accent-500">Around the Clock</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-slate-500">
            Securas Security Group Inc. protects homes and businesses across Brampton and
            the GTA with CCTV monitoring, alarm response, fire &amp; life-safety monitoring,
            and professional guard services — backed by a real dispatch team, not just an
            app notification.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/20"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-400"
            >
              Request a Free Assessment
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500"
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-navy-700 shadow-2xl sm:aspect-[5/6]">
            <Image
              src="/images/hero-guard.jpg"
              alt="Uniformed Securas Security Group officer standing beside a branded patrol vehicle with the Toronto skyline behind him"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1024px) 42vw, 92vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/0 to-navy-950/0" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 p-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-950/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                <Icon name="shield" className="h-3.5 w-3.5 text-accent-500" />
                Licensed Security Officers
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
