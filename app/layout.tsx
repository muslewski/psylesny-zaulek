import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "PsyLeśny Zaułek — salon groomerski dla psów",
  description:
    "Profesjonalny salon groomerski. Strzyżenie, kąpiel i pielęgnacja psów wszystkich ras. Indywidualne podejście i spokojna atmosfera.",
  applicationName: "PsyLeśny Zaułek",
  formatDetection: { telephone: true, email: true, address: false },
  authors: [{ name: "PsyLeśny Zaułek" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Never disable user zoom — WCAG 1.4.4 (Resize Text).
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  colorScheme: "light dark",
};

/**
 * Inline browser-capability check that runs BEFORE any module bundle is
 * fetched. Feature-detects two ES2020 APIs (Object.fromEntries +
 * globalThis) — if either is missing, the compiled Next.js bundle would
 * throw a parse-level "syntax error: unexpected token" before any of our
 * code runs. In that case we replace the document with a static,
 * branded "browser too old" notice with a clickable phone number —
 * better than a white screen + cryptic console errors.
 *
 * Script body is plain ES5 (no arrow funcs / template strings /
 * optional chaining) so it parses cleanly on ancient runtimes. Content
 * is a hardcoded string constant — no user input touches it, so no
 * injection surface despite the document rewrite. Pattern borrowed
 * verbatim from pol-med-v4.
 */
const LEGACY_BROWSER_CHECK = `(function(){try{var ok=(typeof Object.fromEntries==='function')&&(typeof globalThis!=='undefined');if(!ok){document.documentElement.innerHTML='<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>PsyLeśny Zaułek — przeglądarka jest zbyt stara</title><style>html,body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#FAFAF7;color:#0a0a0a;height:100%}body{display:flex;align-items:center;justify-content:center;text-align:center;padding:24px}main{max-width:480px}h1{font-size:24px;margin:0 0 12px;font-weight:600}p{font-size:15px;line-height:1.55;color:#555;margin:0 0 8px}a{color:#0a0a0a;text-decoration:underline}</style></head><body><main><h1>Twoja przeglądarka jest zbyt stara</h1><p>Strona PsyLeśny Zaułek wymaga przeglądarki z 2019 roku lub nowszej. Zaktualizuj Safari, Chrome, Firefox lub Edge.</p><p style="margin-top:24px">Możesz też zadzwonić: <a href="tel:+48733538638">733&nbsp;538&nbsp;638</a></p></main></body>';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={cn(fontSans.variable, fontSerif.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <Script id="legacy-browser-check" strategy="beforeInteractive">
          {LEGACY_BROWSER_CHECK}
        </Script>
        <noscript>
          <div
            style={{
              padding: "48px 24px",
              textAlign: "center",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            <h1 style={{ fontSize: "24px", margin: "0 0 12px" }}>
              JavaScript jest wyłączony
            </h1>
            <p style={{ maxWidth: "480px", margin: "0 auto 8px", color: "#555" }}>
              Włącz JavaScript w przeglądarce, aby zobaczyć stronę
              PsyLeśny Zaułek.
            </p>
            <p style={{ marginTop: "16px" }}>
              <a href="tel:+48733538638">Zadzwoń: 733 538 638</a>
            </p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
