export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Static, developer-authored data only (no user input) — the "<" escape
  // just prevents a "</script>" substring from ever closing the tag early.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
