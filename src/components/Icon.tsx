export type IconName =
  | "camera"
  | "alarm"
  | "bolt"
  | "flame"
  | "shield"
  | "key"
  | "car"
  | "phone"
  | "mail"
  | "mapPin"
  | "clock"
  | "check"
  | "menu"
  | "close"
  | "chevronRight"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "arrowRight";

const paths: Record<IconName, React.ReactNode> = {
  camera: (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </>
  ),
  alarm: (
    <>
      <path d="M12 3a6 6 0 0 0-6 6v3.5L4 16v1h16v-1l-2-3.5V9a6 6 0 0 0-6-6Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  flame: (
    <path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1.5-1-2-1-3 2 1 4 4 4 7a6 6 0 0 1-12 0c0-4 3-6 6-12Z" />
  ),
  shield: <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />,
  key: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11 20 20M15 16l3 3M18 13l3 3" />
    </>
  ),
  car: (
    <>
      <path d="M4 16V11l2.5-5h11L20 11v5" />
      <path d="M2 16h20v3H2z" />
      <circle cx="7" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
    </>
  ),
  phone: (
    <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  check: <path d="m5 13 4 4L19 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  facebook: (
    <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6H14v-6h2.5l.5-3H14V9.6c0-.4.2-.6.6-.6Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4.5a2.5 2.5 0 0 1 5 0V17M11 10v7" />
    </>
  ),
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const filled = name === "bolt" || name === "flame" || name === "shield" || name === "facebook";
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
