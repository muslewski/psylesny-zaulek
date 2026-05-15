import { content } from "@/lib/content";
import { dogs, galleryImages } from "@/lib/images";
import { PhoneIcon, MailIcon, FacebookIcon, ArrowRightIcon, StarIcon, Icon, PawIcon } from "@/lib/icons";
import {
  RevealH1, RevealH2, RevealImg,
  StaggerGrid, StaggerItem,
  RevealDetails, RevealFigure, RevealArticle,
} from "@/components/motion-wrappers";
import { SitePreloader } from "@/components/site-preloader";
import { HeroImage } from "@/components/hero-image";

/* ── EXAMPLE 6 — Editorial / Magazine ────────────────────────────────────────
   Palette: paper #FCF8F3, ink #181512, terracotta #B85C38, sage #6B8459
   Type: serif everywhere for display, small caps for utilities
   Signature: drop caps, magazine columns, asymmetric layered photos, foot rules
   ─────────────────────────────────────────────────────────────────────────── */

const terracotta = "#B85C38";
const ink = "#181512";

export default function Example6() {
  const { site, hero, services, features, faq, testimonials, about } = content;

  return (
    <>
      <SitePreloader
        storageKey="psylesny:ex6"
        variant="curtain"
        duration={1500}
        bgColor="#181512"
        brand={
          <div className="flex flex-col items-center gap-5 px-6 text-center">
            <PawIcon size={48} style={{ color: "#B85C38" }} />
            <div className="flex flex-col items-center gap-3">
              <span className="text-4xl md:text-6xl tracking-tight text-[#FCF8F3] [font-family:var(--font-serif)]">
                <span className="italic">PsyLeśny</span> Zaułek
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-[#B85C38] [font-family:var(--font-sans)]">
                Volume I · Salon groomerski
              </span>
            </div>
          </div>
        }
      />
    <main className="min-h-dvh bg-[#FCF8F3] text-[#181512] [font-family:var(--font-serif)]">
      {/* NAV — magazine masthead */}
      <header className="border-b border-[#181512]/20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-4 text-[10px] uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.25em]">
          <span>Volume I · Wydanie 2026</span>
          <span className="hidden sm:inline">Salon · Lifestyle · Pies</span>
        </div>
        <div className="mx-auto max-w-6xl border-y border-[#181512]/20 px-6 py-6 text-center">
          <RevealH1 className="text-4xl tracking-tight md:text-7xl">
            <span className="italic">PsyLeśny</span> Zaułek
          </RevealH1>
        </div>
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 overflow-x-auto px-6 py-3 text-xs uppercase tracking-[0.25em] [font-family:var(--font-sans)]">
          {["Salon", "Usługi", "Galeria", "Opinie", "FAQ", "Kontakt"].map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="whitespace-nowrap hover:underline">
              {String(i + 1).padStart(2, "0")} · {l}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p
              className="text-xs uppercase tracking-[0.3em] [font-family:var(--font-sans)]"
              style={{ color: terracotta }}
            >
              {hero.eyebrow} · Reportaż
            </p>
            <RevealH2 className="mt-6 text-5xl leading-[0.95] tracking-tight md:text-[7rem]">
              Sztuka <span className="italic" style={{ color: terracotta }}>pielęgnacji</span> psa.
            </RevealH2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#181512]/80 [font-family:var(--font-sans)]">
              <span className="float-left mr-3 text-6xl font-bold leading-none [font-family:var(--font-serif)]" style={{ color: terracotta }}>
                K
              </span>
              ażdy pies zasługuje na czas, troskę i indywidualne podejście. {hero.subtitle.toLowerCase()}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm [font-family:var(--font-sans)]">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 border-b-2 border-[#181512] pb-1 font-semibold uppercase tracking-wider"
              >
                <PhoneIcon size={14} /> {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="text-[#181512]/70 hover:text-[#181512]">
                {hero.secondaryCta.label} →
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <RevealFigure>
              <HeroImage src={dogs.dogBlanket} alt="" className="aspect-[3/4] w-full object-cover" />
              <figcaption className="mt-3 border-t border-[#181512]/30 pt-2 text-xs uppercase tracking-[0.2em] text-[#181512]/60 [font-family:var(--font-sans)]">
                Fot. {site.name} · po wizycie
              </figcaption>
            </RevealFigure>
          </div>
        </div>
      </section>

      {/* ABOUT — three-column editorial */}
      <section id="salon" className="border-y border-[#181512]/20 bg-[#F4ECDD]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <p className="text-xs uppercase tracking-[0.3em] [font-family:var(--font-sans)]" style={{ color: terracotta }}>
            O Salonie
          </p>
          <h3 className="mt-3 max-w-4xl text-4xl tracking-tight md:text-6xl">
            {about.title}
          </h3>
          <div className="mt-10 grid gap-8 md:grid-cols-3 [font-family:var(--font-sans)]">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-[#181512]/80">
                {i === 0 && (
                  <span className="float-left mr-2 text-4xl font-bold leading-none [font-family:var(--font-serif)]" style={{ color: terracotta }}>
                    {p.charAt(0)}
                  </span>
                )}
                {i === 0 ? p.slice(1) : p}
              </p>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-[#181512]/20 pt-8 [font-family:var(--font-sans)]">
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl tracking-tight [font-family:var(--font-serif)] md:text-5xl" style={{ color: terracotta }}>
                  {s.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#181512]/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — two-column index */}
      <section id="uslugi" className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="flex flex-wrap items-end justify-between border-b border-[#181512]/20 pb-6">
          <h3 className="text-4xl tracking-tight md:text-6xl">Cennik usług</h3>
          <p className="max-w-sm text-sm text-[#181512]/60 [font-family:var(--font-sans)]">
            {services.priceNote}
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          {services.items.slice(0, 6).map((s, i) => {
            const priceLine =
              "prices" in s && s.prices
                ? `od ${(s.prices as Record<string, string>).small ?? Object.values(s.prices)[0]}`
                : "price" in s ? (s.price as string) : "";
            return (
              <RevealArticle key={s.id} className="flex gap-4 border-b border-[#181512]/15 py-6">
                <span className="mt-1 font-mono text-xs text-[#181512]/40 [font-family:var(--font-sans)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-xl tracking-tight md:text-2xl">{s.name}</h4>
                    <span className="text-lg italic" style={{ color: terracotta }}>{priceLine}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#181512]/70 [font-family:var(--font-sans)]">
                    {s.shortDescription}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#181512]/50 [font-family:var(--font-sans)]">
                    {s.duration}
                  </p>
                </div>
              </RevealArticle>
            );
          })}
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="border-y border-[#181512]/20 bg-[#181512] text-[#FCF8F3]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#FCF8F3]/60 [font-family:var(--font-sans)]">
            Manifesto
          </p>
          <blockquote className="mt-8 text-4xl italic leading-tight tracking-tight md:text-6xl">
            „Dobrze pielęgnowany pies to nie tylko ładny wygląd — to{" "}
            <span style={{ color: terracotta }}>zdrowa skóra, sierść i lepsza jakość życia</span>."
          </blockquote>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <p className="text-xs uppercase tracking-[0.3em] [font-family:var(--font-sans)]" style={{ color: terracotta }}>
          Portfolio
        </p>
        <h3 className="mt-3 text-4xl tracking-tight md:text-6xl">Galeria realizacji</h3>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <RevealFigure className="md:col-span-7">
            <div className="overflow-hidden">
              <img src={dogs.dogPortrait} alt="" className="aspect-[16/10] w-full object-cover" />
            </div>
            <figcaption className="mt-2 border-t border-[#181512]/30 pt-2 text-xs uppercase tracking-[0.2em] text-[#181512]/60 [font-family:var(--font-sans)]">
              Lola · golden retriever · sesja pełna
            </figcaption>
          </RevealFigure>
          <RevealFigure className="md:col-span-5">
            <div className="overflow-hidden">
              <img src={dogs.husky} alt="" className="aspect-[4/5] w-full object-cover" />
            </div>
            <figcaption className="mt-2 border-t border-[#181512]/30 pt-2 text-xs uppercase tracking-[0.2em] text-[#181512]/60 [font-family:var(--font-sans)]">
              Fenix · husky · wyczesywanie
            </figcaption>
          </RevealFigure>
          {galleryImages(4, 3).map((src, i) => (
            <RevealFigure key={i} className="md:col-span-3">
              <div className="overflow-hidden">
                <img src={src} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </div>
            </RevealFigure>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — letter to editor */}
      <section id="opinie" className="border-y border-[#181512]/20 bg-[#F4ECDD]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <p className="text-xs uppercase tracking-[0.3em] [font-family:var(--font-sans)]" style={{ color: terracotta }}>
            Listy od czytelników
          </p>
          <h3 className="mt-3 text-4xl tracking-tight md:text-6xl">Opinie właścicieli</h3>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {testimonials.items.slice(0, 2).map((t) => (
              <RevealFigure key={t.name}>
                <div className="flex gap-0.5" style={{ color: terracotta }}>
                  {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} size={14} />)}
                </div>
                <blockquote className="mt-4 text-2xl italic leading-snug">
                  „{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-[#181512]/30 pt-3 text-xs uppercase tracking-[0.2em] text-[#181512]/70 [font-family:var(--font-sans)]">
                  — {t.name}, właścicielka <span style={{ color: terracotta }}>{t.dog}</span>
                </figcaption>
              </RevealFigure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <p className="text-xs uppercase tracking-[0.3em] [font-family:var(--font-sans)]" style={{ color: terracotta }}>
          FAQ
        </p>
        <h3 className="mt-3 text-4xl tracking-tight md:text-5xl">{faq.title}</h3>
        <div className="mt-10 divide-y divide-[#181512]/15 border-y border-[#181512]/15">
          {faq.items.slice(0, 7).map((q, i) => (
            <RevealDetails key={i} className="group py-5">
              <summary className="flex cursor-pointer items-baseline justify-between gap-4">
                <span className="flex items-baseline gap-3 text-lg tracking-tight md:text-xl">
                  <span className="font-mono text-xs [font-family:var(--font-sans)]" style={{ color: terracotta }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {q.question}
                </span>
                <span className="text-xl transition group-open:rotate-45" style={{ color: terracotta }}>+</span>
              </summary>
              <p className="mt-3 pl-8 text-sm leading-relaxed text-[#181512]/75 [font-family:var(--font-sans)]">
                {q.answer}
              </p>
            </RevealDetails>
          ))}
        </div>
      </section>

      {/* CTA + Contact */}
      <section id="kontakt" className="border-y border-[#181512]/20 bg-[#181512] text-[#FCF8F3]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] [font-family:var(--font-sans)]" style={{ color: terracotta }}>
                Kontakt redakcyjny
              </p>
              <h3 className="mt-4 text-4xl tracking-tight md:text-7xl">
                Umów <span className="italic" style={{ color: terracotta }}>wizytę</span>.
              </h3>
              <p className="mt-6 max-w-md text-[#FCF8F3]/80 [font-family:var(--font-sans)]">
                Zadzwoń lub napisz — porozmawiamy o Twoim psie i ustalimy dogodny termin.
              </p>
            </div>
            <ul className="space-y-4 text-xl [font-family:var(--font-sans)]">
              <li className="flex items-center justify-between border-b border-[#FCF8F3]/20 pb-3">
                <span className="text-xs uppercase tracking-[0.3em] text-[#FCF8F3]/60">Telefon</span>
                <a href={site.contact.phone.href} className="hover:underline" style={{ color: terracotta }}>
                  {site.contact.phone.display}
                </a>
              </li>
              <li className="flex items-center justify-between border-b border-[#FCF8F3]/20 pb-3">
                <span className="text-xs uppercase tracking-[0.3em] text-[#FCF8F3]/60">E-mail</span>
                <a href={site.contact.email.href} className="hover:underline">
                  {site.contact.email.display}
                </a>
              </li>
              <li className="flex items-center justify-between border-b border-[#FCF8F3]/20 pb-3">
                <span className="text-xs uppercase tracking-[0.3em] text-[#FCF8F3]/60">Facebook</span>
                <a href={site.social[0].url} className="hover:underline">{site.social[0].handle}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs uppercase tracking-[0.25em] text-[#181512]/60 [font-family:var(--font-sans)]">
        <p>© {new Date().getFullYear()} · {site.name} · Wydawnictwo własne</p>
        <p>End of Issue</p>
      </footer>
    </main>
    </>
  );
}
