import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

export function PhoneIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
export function MailIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
export function FacebookIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
    </svg>
  );
}
export function MessengerIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.7 1.3 5.2 3.4 6.8V22l3.1-1.7c.9.2 1.7.3 2.5.3 5.5 0 10-4.1 10-9.4S17.5 2 12 2Z" />
      <path d="m6.6 14.5 3.4-3.5 2 2 3.4-3.5" />
    </svg>
  );
}
export function PawIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="6" cy="11" r="2" />
      <circle cx="10" cy="6" r="2" />
      <circle cx="14" cy="6" r="2" />
      <circle cx="18" cy="11" r="2" />
      <path d="M12 13c-3 0-5 2-5 4.5S9 22 12 22s5-2.5 5-4.5S15 13 12 13Z" />
    </svg>
  );
}
export function ScissorsIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  );
}
export function DropletIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 2.7s6 5.4 6 10.3a6 6 0 1 1-12 0c0-4.9 6-10.3 6-10.3Z" />
    </svg>
  );
}
export function HeartIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.21l8.84-8.82a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}
export function ShieldIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}
export function LeafIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-11-2 11-5 16-11 16Z" />
      <path d="M2 22 17 7" />
    </svg>
  );
}
export function ClockIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
export function SmileIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  );
}
export function CombIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M3 4h18v6H3z" />
      <path d="M6 10v6m4-6v8m4-8v6m4-6v4" />
    </svg>
  );
}
export function WindIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2M17.5 8a2.5 2.5 0 1 1 2 4H2" />
    </svg>
  );
}
export function EarIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7-3 5-3 9a3 3 0 0 1-6 0M9 12a3 3 0 0 1 6 0" />
    </svg>
  );
}
export function ArrowRightIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
export function ArrowDownIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 5v14M5 13l7 7 7-7" />
    </svg>
  );
}
export function StarIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="currentColor" stroke="none">
      <path d="m12 2 3 7 7 .5-5.5 4.5L18 21l-6-3.5L6 21l1.5-7L2 9.5 9 9Z" />
    </svg>
  );
}
export function CheckIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}
export function PlusIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
export function MenuIcon({ size, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export const iconMap = {
  phone: PhoneIcon,
  mail: MailIcon,
  facebook: FacebookIcon,
  messenger: MessengerIcon,
  paw: PawIcon,
  scissors: ScissorsIcon,
  "scissors-small": ScissorsIcon,
  droplet: DropletIcon,
  heart: HeartIcon,
  shield: ShieldIcon,
  leaf: LeafIcon,
  clock: ClockIcon,
  smile: SmileIcon,
  comb: CombIcon,
  wind: WindIcon,
  ear: EarIcon,
} as const;

export function Icon({ name, ...p }: { name: keyof typeof iconMap } & IconProps) {
  const I = iconMap[name] ?? PawIcon;
  return <I {...p} />;
}
