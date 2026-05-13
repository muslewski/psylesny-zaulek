import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PsyLeśny Zaułek — 10 wariantów strony głównej",
  description:
    "Dziesięć stylów wizualnych strony głównej salonu groomerskiego PsyLeśny Zaułek.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
