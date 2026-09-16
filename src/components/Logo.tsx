import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Securas Security Group Inc. — home"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent-500" aria-hidden="true">
        <path
          d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"
          fill="currentColor"
        />
        <path
          d="m8.5 12.2 2.3 2.3 4.7-4.9"
          fill="none"
          stroke={dark ? "#081527" : "#0b1626"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-heading text-xl leading-none tracking-wide uppercase ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        Securas
        <span className="block text-[0.55rem] font-sans normal-case tracking-[0.2em] text-accent-500 mt-0.5">
          Security Group
        </span>
      </span>
    </Link>
  );
}
