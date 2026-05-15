import { content } from "@/lib/content";
import { dogs, galleryImages } from "@/lib/images";
import {
  PhoneIcon, MailIcon, FacebookIcon, MessengerIcon, ArrowRightIcon,
  StarIcon, Icon, LeafIcon, PawIcon,
} from "@/lib/icons";
import {
  RevealH1, RevealH2, RevealImg,
  StaggerGrid, StaggerItem, StaggerUl, StaggerLi,
  RevealDetails, RevealFigure, RevealArticle, RevealLi,
} from "@/components/motion-wrappers";

/* ── EXAMPLE 8 — Forest / Organic Nature ─────────────────────────────────────
   Palette: deep forest #1F3A2D, moss #4A6741, sage #91B091, paper #F5EDDC, bark #3D2C1C
   Type: serif headings (Fraunces) + clean sans body
   Signature: earthy, leaf SVGs, organic blob shapes, vertical type, wood feel
   ─────────────────────────────────────────────────────────────────────────── */

const forest = "#1F3A2D";
const paper = "#F5EDDC";
const moss = "#4A6741";

const LeafSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" fill="currentColor" {...props}>
    <path d="M100 10c40 20 70 60 70 120 0 30-25 50-70 60-45-10-70-30-70-60C30 70 60 30 100 10Z" />
    <path d="M100 30v140" stroke="currentColor" strokeOpacity="0.3" />
  </svg>
);

export default function Example8() {
  const { site, hero, services, features, faq, testimonials } = content;

  return (
    <main className="min-h-dvh bg-[#F5EDDC] text-[#1F3A2D] [font-family:var(--font-sans)]">
      {/* NAV */}
      <header className="border-b border-[#1F3A2D]/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <PawIcon size={22} style={{ color: forest }} />
            <span className="[font-family:var(--font-serif)] text-xl">{site.name}</span>
          </a>
          <nav className="hidden gap-7 text-sm md:flex">
            {["Salon", "Usługi", "Galeria", "Opinie", "FAQ", "Kontakt"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:underline">{l}</a>
            ))}
          </nav>
          <a
            href={site.contact.phone.href}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#F5EDDC]"
            style={{ background: forest }}
          >
            <PhoneIcon size={14} /> Umów wizytę
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <LeafSvg className="pointer-events-none absolute -left-12 top-20 size-72 opacity-20" style={{ color: forest }} />
        <LeafSvg className="pointer-events-none absolute -right-8 top-1/3 size-56 -rotate-45 opacity-15" style={{ color: moss }} />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]" style={{ color: moss }}>
              <span className="h-px w-10" style={{ background: moss }} />
              {hero.eyebrow}
            </p>
            <RevealH1 className="mt-6 text-4xl leading-[1.05] tracking-tight md:text-7xl [font-family:var(--font-serif)]">
              W leśnej, <em className="italic">spokojnej</em> atmosferze.
            </RevealH1>
            <p className="mt-6 max-w-md text-lg text-[#1F3A2D]/80">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium text-[#F5EDDC]"
                style={{ background: forest }}
              >
                <PhoneIcon size={16} /> {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-3 rounded-full border border-[#1F3A2D]/30 px-6 py-3 text-sm"
              >
                {hero.secondaryCta.label} <ArrowRightIcon size={14} />
              </a>
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[#1F3A2D]/15 pt-6 text-sm md:grid-cols-3">
              {hero.trustSignals.map((t) => (
                <li key={t.label} className="flex items-center gap-2">
                  <LeafIcon size={16} style={{ color: moss }} /> {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative md:col-span-5">
            <div className="absolute -inset-4 rounded-[60%_40%_60%_40%/40%_60%_50%_50%]" style={{ background: moss }} />
            <RevealImg
              src={dogs.puppy}
              alt=""
              className="relative aspect-[3/4] w-full rounded-[60%_40%_60%_40%/40%_60%_50%_50%] object-cover"
            />
            <div className="absolute -bottom-6 -right-2 rounded-3xl border border-[#1F3A2D]/15 bg-[#F5EDDC] p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full" style={{ background: forest, color: paper }}>
                  <PawIcon size={18} />
                </div>
                <div className="text-xs">
                  <p className="font-semibold">Cierpliwość</p>
                  <p style={{ color: moss }}>i spokój</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-[#1F3A2D]/15" style={{ background: forest, color: paper }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] opacity-70">{features.eyebrow}</p>
              <RevealH2 className="mt-3 text-4xl tracking-tight md:text-5xl [font-family:var(--font-serif)]">
                {features.title}
              </RevealH2>
              <LeafSvg className="mt-6 size-16 opacity-60" />
            </div>
            <div className="md:col-span-8">
              <ul className="grid gap-6 sm:grid-cols-2">
                {features.items.map((f) => (
                  <li
                    key={f.title}
                    className="rounded-3xl border border-[#F5EDDC]/15 bg-[#F5EDDC]/5 p-6"
                  >
                    <div className="grid size-11 place-items-center rounded-full bg-[#F5EDDC]/15">
                      <Icon name={f.icon as never} size={20} />
                    </div>
                    <h3 className="mt-5 text-lg font-medium tracking-tight">{f.title}</h3>
                    <p className="mt-2 text-sm opacity-85">{f.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: moss }}>
            {services.eyebrow}
          </p>
          <RevealH2 className="mt-3 text-4xl tracking-tight md:text-6xl [font-family:var(--font-serif)]">
            {services.title}
          </RevealH2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#1F3A2D]/70">{services.priceNote}</p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.items.slice(0, 6).map((s) => {
            const priceLine =
              "prices" in s && s.prices
                ? `od ${(s.prices as Record<string, string>).small ?? Object.values(s.prices)[0]}`
                : "price" in s ? (s.price as string) : "";
            return (
              <RevealArticle
                key={s.id}
                className="group relative overflow-hidden rounded-[2rem] border border-[#1F3A2D]/15 bg-white p-7 transition hover:border-[#1F3A2D]/40 hover:shadow-lg"
              >
                <LeafSvg className="absolute -right-8 -top-8 size-32 opacity-5 transition group-hover:opacity-10" style={{ color: forest }} />
                <div className="relative">
                  <div className="grid size-12 place-items-center rounded-full" style={{ background: paper, color: forest }}>
                    <Icon name={s.icon as never} size={22} />
                  </div>
                  <h3 className="mt-6 text-xl tracking-tight [font-family:var(--font-serif)]">{s.name}</h3>
                  <p className="mt-2 text-sm text-[#1F3A2D]/70">{s.shortDescription}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#1F3A2D]/10 pt-4">
                    <span className="text-xs uppercase tracking-wider" style={{ color: moss }}>
                      {s.duration}
                    </span>
                    <span className="text-lg font-medium" style={{ color: forest }}>{priceLine}</span>
                  </div>
                </div>
              </RevealArticle>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="bg-[#EBE0C5]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <RevealH2 className="text-4xl tracking-tight md:text-5xl [font-family:var(--font-serif)]">
              Galeria realizacji
            </RevealH2>
            <a href="#" className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline">
              Zobacz więcej na Facebooku <ArrowRightIcon size={14} />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages(6).map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden ${
                  i === 0 || i === 4 ? "rounded-[55%_45%_60%_40%/45%_55%_45%_55%]" : "rounded-[2rem]"
                } border border-[#1F3A2D]/15`}
              >
                <img src={src} alt="" className="aspect-square h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opinie" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: moss }}>Opinie</p>
            <RevealH2 className="mt-3 text-4xl tracking-tight md:text-5xl [font-family:var(--font-serif)]">
              Co mówią właściciele
            </RevealH2>
          </div>
          <div className="grid gap-6 md:col-span-8 md:grid-cols-2">
            {testimonials.items.slice(0, 2).map((t) => (
              <RevealFigure
                key={t.name}
                className="rounded-3xl border border-[#1F3A2D]/15 bg-white p-6"
              >
                <div className="flex gap-0.5" style={{ color: moss }}>
                  {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} size={16} />)}
                </div>
                <blockquote className="mt-4 italic leading-relaxed text-[#1F3A2D]/85 [font-family:var(--font-serif)]">
                  „{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#1F3A2D]/10 pt-4 text-sm">
                  <div className="grid size-10 place-items-center rounded-full" style={{ background: forest, color: paper }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-[#1F3A2D]/60">{t.dog}</p>
                  </div>
                </figcaption>
              </RevealFigure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-[#1F3A2D]/15 bg-[#EBE0C5]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: moss }}>Pytania</p>
            <RevealH2 className="mt-3 text-4xl tracking-tight md:text-5xl [font-family:var(--font-serif)]">
              {faq.title}
            </RevealH2>
          </div>
          <div className="mt-12 space-y-2">
            {faq.items.slice(0, 6).map((q, i) => (
              <RevealDetails key={i} className="group rounded-2xl border border-[#1F3A2D]/15 bg-white px-5 py-4 open:bg-white open:shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium tracking-tight">
                  <span className="flex items-center gap-3">
                    <LeafIcon size={16} style={{ color: moss }} className="transition group-open:rotate-90" />
                    {q.question}
                  </span>
                  <span className="text-sm" style={{ color: moss }}>+</span>
                </summary>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-[#1F3A2D]/75">{q.answer}</p>
              </RevealDetails>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section id="kontakt" className="text-[#F5EDDC]" style={{ background: forest }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] opacity-70">Kontakt</p>
              <RevealH2 className="mt-4 text-4xl tracking-tight md:text-7xl [font-family:var(--font-serif)]">
                Umów <em className="italic">wizytę</em>.
              </RevealH2>
              <p className="mt-6 max-w-md opacity-85">
                Zadzwoń lub napisz. Zawsze odpowiadamy spokojnym tonem.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={site.contact.phone.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5EDDC] px-6 py-3 text-sm font-medium"
                  style={{ color: forest }}
                >
                  <PhoneIcon size={16} /> {site.contact.phone.display}
                </a>
                <a
                  href={site.social[1].url}
                  className="inline-flex items-center gap-2 rounded-full border border-[#F5EDDC]/40 px-6 py-3 text-sm"
                >
                  <MessengerIcon size={16} /> Messenger
                </a>
              </div>
            </div>

            <ul className="space-y-3 rounded-3xl border border-[#F5EDDC]/15 bg-[#F5EDDC]/5 p-6">
              <li className="flex items-center justify-between border-b border-[#F5EDDC]/15 py-2 text-sm">
                <span className="opacity-70">Telefon</span>
                <span>{site.contact.phone.display}</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#F5EDDC]/15 py-2 text-sm">
                <span className="opacity-70">E-mail</span>
                <span>{site.contact.email.display}</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#F5EDDC]/15 py-2 text-sm">
                <span className="opacity-70">Facebook</span>
                <span>{site.social[0].handle}</span>
              </li>
              <li className="pt-3 text-sm opacity-90">
                {site.openingHours.slice(0, 6).map((d) => (
                  <div key={d.day} className="flex justify-between py-0.5">
                    <span className="opacity-70">{d.day}</span>
                    <span>{d.hours}</span>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1F3A2D]/15 bg-[#F5EDDC]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-5 text-[#1F3A2D]/70">
            <a href={site.contact.phone.href} className="inline-flex items-center gap-2"><PhoneIcon size={14} /> Telefon</a>
            <a href={site.contact.email.href} className="inline-flex items-center gap-2"><MailIcon size={14} /> E-mail</a>
            <a href={site.social[0].url} className="inline-flex items-center gap-2"><FacebookIcon size={14} /> Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
