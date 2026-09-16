import Link from "next/link";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-navy-950">
      <Container className="text-center">
        <p className="font-heading text-7xl text-accent-500">404</p>
        <h1 className="mt-4 font-heading text-2xl uppercase tracking-wide text-white">
          Page Not Found
        </h1>
        <p className="mt-3 text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-bold text-navy-950 hover:bg-accent-400 transition-colors"
        >
          <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
