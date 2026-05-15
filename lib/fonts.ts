import { Geist, Geist_Mono, Fraunces } from "next/font/google";

/**
 * Self-hosted via next/font/google.
 *
 * - `display: 'swap'` keeps text visible during font load (no FOIT, just
 *   a brief FOUT — system fallback while the webfont is fetched).
 * - `preload: true` on the two visible fonts (sans + serif). Mono is
 *   below-the-fold for our pages so we let Next pull it on demand.
 * - `subsets: ['latin', 'latin-ext']` covers Polish diacritics
 *   (ą ć ę ł ń ó ś ź ż) without shipping Cyrillic / Greek glyphs.
 */
export const fontSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const fontSerif = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
  axes: ["opsz"],
});

export const fontMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});
