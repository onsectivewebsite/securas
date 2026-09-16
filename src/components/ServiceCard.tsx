import Link from "next/link";
import { Icon, type IconName } from "./Icon";
import type { Service } from "@/lib/site-config";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-xl border border-mist-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent-500/60"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-accent-500 transition-colors group-hover:bg-accent-500 group-hover:text-navy-950">
        <Icon name={service.icon as IconName} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-heading text-lg uppercase tracking-wide text-navy-900">
        {service.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-accent-600">
        Learn more
        <Icon name="chevronRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
