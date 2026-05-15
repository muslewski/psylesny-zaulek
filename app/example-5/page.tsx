import { content } from "@/lib/content";
import { dogs, galleryImages } from "@/lib/images";
import {
  PhoneIcon, MailIcon, FacebookIcon, MessengerIcon, ArrowRightIcon,
  StarIcon, Icon,
} from "@/lib/icons";
import {
  RevealH1, RevealH2, RevealImg,
  StaggerGrid, StaggerItem,
  RevealDetails, RevealFigure, RevealArticle,
} from "@/components/motion-wrappers";
import { SitePreloader } from "@/components/site-preloader";

/* ── EXAMPLE 5 — Dark Luxury ─────────────────────────────────────────────────
   Palette: ink #0A0A0A, paper #F4EFE6, gold #C9A55A, copper #B5784F
   Type: serif display (Fraunces fallback to Playfair), light weight, wide tracking
   Signature: dark background, fine gold hairlines, premium spa feel
   ─────────────────────────────────────────────────────────────────────────── */

const gold = "#C9A55A";

export default function Example5() {
  const { site, hero, services, features, faq, testimonials } = content;

  return (
    <>
      <SitePreloader
        storageKey="psylesny:ex5"
        variant="slide"
        duration={1600}
        bgColor="#0A0A0A"
        iconColor="#C9A55A"
        iconSize={48}
        brandClassName="text-3xl md:text-5xl font-light tracking-[0.15em] uppercase text-[#F4EFE6] [font-family:var(--font-serif)]"
        taglineClassName="text-[10px] uppercase tracking-[0.4em] font-medium text-[#C9A55A]"
      />
    <main className="min-h-dvh bg-[#0A0A0A] text-[#F4EFE6] antialiased [font-family:var(--font-serif)]">
      {/* NAV */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
          <div className="hidden text-xs uppercase tracking-[0.35em] text-white/70 md:block">Est. 2024</div>
          <a href="#" className="text-base tracking-[0.2em] sm:text-xl">
            PSYLEŚNY <span style={{ color: gold }}>·</span> ZAUŁEK
          </a>
          <a
            href={site.contact.phone.href}
            className="text-xs uppercase tracking-[0.3em] hover:text-white"
            style={{ color: gold }}
          >
            <span className="hidden md:inline">{site.contact.phone.display}</span>
            <span className="md:hidden">Zadzwoń</span>
          </a>
        </div>
        <nav className="hidden border-t border-white/10 md:block">
          <div className="mx-auto flex max-w-6xl justify-center gap-12 px-6 py-3 text-xs uppercase tracking-[0.25em] text-white/70">
            {["Salon", "Usługi", "Galeria", "Opinie", "FAQ", "Kontakt"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white">
                {l}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-0">
          <img src={dogs.labrador} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-48">
          <p className="text-xs uppercase tracking-[0.4em]" style={{ color: gold }}>
            {hero.eyebrow}
          </p>
          <RevealH1 className="mx-auto mt-8 max-w-3xl text-4xl font-light leading-[1.05] tracking-tight md:text-7xl">
            Profesjonalna{" "}
            <span className="italic" style={{ color: gold }}>pielęgnacja</span>
            <br />
            Twojego psa.
          </RevealH1>
          <p className="mx-auto mt-8 max-w-xl text-white/70 md:text-lg [font-family:var(--font-sans)]">
            {hero.subtitle}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-3 border px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-[#0A0A0A]"
              style={{ borderColor: gold, color: gold }}
            >
              <PhoneIcon size={14} /> Umów wizytę
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white"
            >
              Zobacz usługi
            </a>
          </div>

          {/* gold rule */}
          <div className="mt-20 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-white/60 [font-family:var(--font-sans)]">
            <span className="h-px w-12" style={{ background: gold }} />
            <span>Indywidualne podejście</span>
            <span style={{ color: gold }}>·</span>
            <span>Wszystkie rasy</span>
            <span className="h-px w-12" style={{ background: gold }} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em]" style={{ color: gold }}>
              {features.eyebrow}
            </p>
            <RevealH2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
              {features.title}
            </RevealH2>
          </div>

          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {features.items.map((f) => (
              <div key={f.title} className="bg-[#0A0A0A] p-10 text-center">
                <Icon name={f.icon as never} size={32} style={{ color: gold }} className="mx-auto" />
                <h3 className="mt-6 text-xl font-light tracking-wide">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 [font-family:var(--font-sans)]">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em]" style={{ color: gold }}>
              Cennik
            </p>
            <RevealH2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
              Usługi pielęgnacyjne
            </RevealH2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            {services.items.slice(0, 6).map((s, i) => {
              const priceLine =
                "prices" in s && s.prices
                  ? `od ${(s.prices as Record<string, string>).small ?? Object.values(s.prices)[0]}`
                  : "price" in s ? (s.price as string) : "";
              return (
                <RevealArticle
                  key={s.id}
                  className={`flex items-baseline gap-6 py-5 ${
                    i < services.items.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: gold }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-light tracking-wide md:text-2xl">{s.name}</h3>
                    <p className="mt-1 text-sm text-white/60 [font-family:var(--font-sans)]">
                      {s.shortDescription}
                    </p>
                  </div>
                  <div
                    className="flex-1 border-b border-dotted border-white/20 self-end mb-3"
                  />
                  <span className="text-lg" style={{ color: gold }}>{priceLine}</span>
                </RevealArticle>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em]" style={{ color: gold }}>
              Galeria
            </p>
            <RevealH2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
              Nasze realizacje
            </RevealH2>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages(6).map((src, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden border border-white/10 ${
                  i === 0 || i === 5 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 border opacity-0 transition group-hover:opacity-100"
                  style={{ borderColor: gold }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opinie">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em]" style={{ color: gold }}>Opinie</p>
          <div className="mt-12 space-y-12">
            {testimonials.items.slice(0, 2).map((t) => (
              <RevealFigure key={t.name}>
                <div className="flex justify-center gap-0.5" style={{ color: gold }}>
                  {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} size={16} />)}
                </div>
                <blockquote className="mt-6 text-2xl font-light italic leading-snug md:text-3xl">
                  „{t.quote}"
                </blockquote>
                <figcaption
                  className="mt-6 text-xs uppercase tracking-[0.3em] text-white/60 [font-family:var(--font-sans)]"
                >
                  {t.name} <span style={{ color: gold }}>·</span> {t.dog}
                </figcaption>
              </RevealFigure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em]" style={{ color: gold }}>FAQ</p>
            <RevealH2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
              {faq.title}
            </RevealH2>
          </div>
          <div className="mt-12 divide-y divide-white/10">
            {faq.items.slice(0, 6).map((q, i) => (
              <RevealDetails key={i} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-light tracking-wide">
                  {q.question}
                  <span className="text-xl transition group-open:rotate-45" style={{ color: gold }}>+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/70 [font-family:var(--font-sans)]">
                  {q.answer}
                </p>
              </RevealDetails>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section id="kontakt">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="border p-12 text-center md:p-20" style={{ borderColor: gold }}>
            <p className="text-xs uppercase tracking-[0.4em]" style={{ color: gold }}>
              Czas na metamorfozę
            </p>
            <RevealH2 className="mt-6 text-4xl font-light leading-tight tracking-tight md:text-6xl">
              Umów wizytę<br />dla swojego psa
            </RevealH2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={site.contact.phone.href}
                className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#0A0A0A]"
                style={{ background: gold }}
              >
                <PhoneIcon size={14} /> {site.contact.phone.display}
              </a>
              <a
                href={site.social[1].url}
                className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.3em] hover:border-white"
              >
                <MessengerIcon size={14} /> Messenger
              </a>
            </div>

            <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 text-sm text-white/70 [font-family:var(--font-sans)] md:grid-cols-3 md:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Telefon</p>
                <p className="mt-2 text-white">{site.contact.phone.display}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">E-mail</p>
                <p className="mt-2 text-white">{site.contact.email.display}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Facebook</p>
                <p className="mt-2 text-white">{site.social[0].handle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs uppercase tracking-[0.3em] text-white/50">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-6">
            <a href={site.contact.phone.href}>Telefon</a>
            <a href={site.contact.email.href}>E-mail</a>
            <a href={site.social[0].url}>Facebook</a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
