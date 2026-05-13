import Link from "next/link";
import { content } from "@/lib/content";

const examples = [
  { slug: "example-2",  name: "Bento Grid",         hint: "Modularne karty, kolorowe bloki, gęsta siatka" },
  { slug: "example-4",  name: "Brutalism",          hint: "Wielka typografia, neonowy żółty, raw" },
  { slug: "example-5",  name: "Dark Luxury",        hint: "Czarne tło, miedziane akcenty, serif" },
  { slug: "example-6",  name: "Editorial Magazine", hint: "Fraunces serif, układ jak czasopismo" },
  { slug: "example-7",  name: "Playful Pastel",     hint: "Cukierkowe kolory, organiczne kształty" },
  { slug: "example-8",  name: "Forest / Organic",   hint: "Zieleń lasu, faktury natury, ciepło" },
  { slug: "example-9",  name: "Neumorphism Soft",   hint: "Miękkie cienie, monochromatyczny spokój" },
  { slug: "example-10", name: "Retro Y2K",          hint: "Stemple, sepia, vintage badge" },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {content.site.name}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            10 wariantów strony głównej
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Każdy z poniższych projektów wykorzystuje te same dane z folderu{" "}
            <code className="rounded bg-neutral-200 px-1.5 py-0.5 text-sm">/content</code>,
            ale eksploruje inny język wizualny. Kliknij, aby zobaczyć.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex, idx) => (
            <li key={ex.slug}>
              <Link
                href={`/${ex.slug}`}
                className="group block rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-neutral-900 hover:shadow-lg"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-neutral-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-neutral-400 transition group-hover:text-neutral-900">
                    →
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-medium tracking-tight">{ex.name}</h2>
                <p className="mt-2 text-sm text-neutral-600">{ex.hint}</p>
                <p className="mt-6 font-mono text-xs text-neutral-400">/{ex.slug}</p>
              </Link>
            </li>
          ))}
        </ul>

        <footer className="mt-16 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
          <p>
            Treść:{" "}
            <code className="rounded bg-neutral-200 px-1.5 py-0.5">content/*.json</code>
            {" · "}Zdjęcia: Pixabay CDN + placedog.net
          </p>
        </footer>
      </div>
    </main>
  );
}
