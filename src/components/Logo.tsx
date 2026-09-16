import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Securas Security Group Inc. — home"
    >
      <span className={`relative overflow-hidden rounded-md ${className}`}>
        <Image
          src="/images/logo.jpg"
          alt="Securas Security Group shield logo"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </span>
      <span className="font-heading text-xl leading-none tracking-wide uppercase text-white">
        Securas
        <span className="block text-[0.55rem] font-sans normal-case tracking-[0.2em] text-accent-500 mt-0.5">
          Security Group
        </span>
      </span>
    </Link>
  );
}
