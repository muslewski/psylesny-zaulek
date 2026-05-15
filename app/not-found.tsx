import Link from "next/link";
import { content } from "@/lib/content";

/**
 * Self-contained 404. Doesn't rely on any layout or context — pure Tailwind
 * classes + system font fallbacks via globals.css. Renders cleanly even
 * if JavaScript fails to load entirely.
 */
export default function NotFound() {
  const { site } = content;
  return (
    <main className="min-h-dvh bg-[#FAFAF7] px-6 py-24 text-center text-neutral-900">
      <div className="mx-auto max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 tabular-nums">
          Błąd 404
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Nic tu nie ma
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-neutral-600">
          Strona, której szukasz, nie istnieje albo została przeniesiona.
          Wróć na stronę główną, albo zadzwoń — chętnie pomożemy.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            ← Strona główna
          </Link>
          <a
            href={site.contact.phone.href}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:border-neutral-900"
          >
            ☏ {site.contact.phone.display}
          </a>
        </div>
        <p className="mt-12 text-xs text-neutral-500">
          {site.name} · {site.contact.email.display}
        </p>
      </div>
    </main>
  );
}
