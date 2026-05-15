import { content } from "@/lib/content";
import { dogs, galleryImages } from "@/lib/images";
import {
  PhoneIcon, MailIcon, FacebookIcon, MessengerIcon, ArrowRightIcon,
  PawIcon, StarIcon, Icon,
} from "@/lib/icons";
import {
  RevealH1, RevealH2, RevealImg, RevealDiv,
  StaggerGrid, StaggerItem,
  RevealDetails, RevealFigure, RevealArticle,
} from "@/components/motion-wrappers";
import { SitePreloader } from "@/components/site-preloader";
import { HeroImage } from "@/components/hero-image";

/* ── EXAMPLE 2 — Bento Grid ──────────────────────────────────────────────────
   Palette: cream #FFF7EE, mint #DCEEDB, peach #FFD9B7, lilac #E0DAFF, ink #1A1A1A
   Type: tight modern sans, mixed weights
   Signature: modular cards with varied sizes, colored blocks, rounded-3xl, dense info
   ─────────────────────────────────────────────────────────────────────────── */

export default function Example2() {
  const { site, hero, services, features, faq, testimonials, gallery } = content;

  return (
    <>
      <SitePreloader
        storageKey="psylesny:ex2"
        variant="stairs"
        duration={1400}
        bgColor="#1A1A1A"
        iconColor="#FFFFFF"
        iconSize={52}
        brandClassName="text-4xl md:text-6xl font-bold tracking-tight text-white"
        taglineClassName="text-[10px] uppercase tracking-[0.4em] font-medium text-white/60"
        stairCount={8}
        stairsRevealFrom="center"
      />
    <main className="min-h-dvh bg-[#FFF7EE] text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-20 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <PawIcon size={22} />
            {site.name}
          </div>
          <nav className="hidden gap-2 md:flex">
            {["Usługi", "Galeria", "Opinie", "FAQ", "Kontakt"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm hover:bg-white/70"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href={site.contact.phone.href}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
          >
            <PhoneIcon size={14} />
            <span className="hidden sm:inline">{site.contact.phone.display}</span>
            <span className="sm:hidden">Zadzwoń</span>
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-6">
        {/* HERO BENTO */}
        <section className="grid grid-cols-6 gap-3 md:gap-4">
          {/* Headline */}
          <div className="col-span-6 rounded-3xl bg-white p-8 md:col-span-4 md:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#DCEEDB] px-3 py-1 text-xs font-medium uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-emerald-700" /> {hero.eyebrow}
            </span>
            <RevealH1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Profesjonalna pielęgnacja w spokojnej, leśnej atmosferze.
            </RevealH1>
            <p className="mt-6 max-w-lg text-neutral-600 md:text-lg">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white"
              >
                <PhoneIcon size={16} /> {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Hero photo */}
          <HeroImage
            src={dogs.groomedDog}
            alt=""
            wrapperClassName="col-span-6 rounded-3xl md:col-span-2 md:row-span-2"
            className="h-full w-full object-cover"
          />

          {/* Phone tile */}
          <a
            href={site.contact.phone.href}
            className="col-span-3 rounded-3xl bg-[#FFD9B7] p-6 transition hover:scale-[1.01] md:col-span-2"
          >
            <PhoneIcon size={28} />
            <p className="mt-6 text-xs uppercase tracking-wider text-neutral-700">Zadzwoń</p>
            <p className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">
              {site.contact.phone.display}
            </p>
          </a>

          {/* FB tile */}
          <a
            href={site.social[0].url}
            className="col-span-3 rounded-3xl bg-[#E0DAFF] p-6 transition hover:scale-[1.01] md:col-span-2"
          >
            <FacebookIcon size={28} />
            <p className="mt-6 text-xs uppercase tracking-wider text-neutral-700">Facebook</p>
            <p className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">
              {site.social[0].handle}
            </p>
          </a>

          {/* Trust bar */}
          <div className="col-span-6 grid grid-cols-3 gap-3 rounded-3xl bg-[#DCEEDB] p-4 md:hidden">
            {hero.trustSignals.map((t) => (
              <div key={t.label} className="text-center text-xs font-medium">
                {t.label}
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES BENTO */}
        <section className="mt-4 grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 rounded-3xl bg-neutral-900 p-8 text-white md:col-span-2 md:p-10">
            <p className="text-xs uppercase tracking-wider text-neutral-400">
              {features.eyebrow}
            </p>
            <RevealH2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              {features.title}
            </RevealH2>
            <p className="mt-4 text-sm text-neutral-300">{features.subtitle}</p>
          </div>

          {features.items.slice(0, 4).map((f, i) => {
            const palette = ["bg-[#FFD9B7]", "bg-[#DCEEDB]", "bg-[#E0DAFF]", "bg-white"][i % 4];
            return (
              <div
                key={f.title}
                className={`col-span-3 rounded-3xl ${palette} p-6 md:col-span-2 md:p-8`}
              >
                <Icon name={f.icon as never} size={28} />
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{f.description}</p>
              </div>
            );
          })}

          <div className="col-span-6 overflow-hidden rounded-3xl md:col-span-4">
            <img src={dogs.dogBlanket} alt="" className="h-64 w-full object-cover md:h-full" />
          </div>
        </section>

        {/* SERVICES BENTO */}
        <section id="usługi" className="mt-4 grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 flex flex-wrap items-end justify-between rounded-3xl bg-white p-8 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500">
                {services.eyebrow}
              </p>
              <RevealH2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                {services.title}
              </RevealH2>
            </div>
            <p className="max-w-sm text-sm text-neutral-600">{services.priceNote}</p>
          </div>

          {services.items.slice(0, 6).map((s, i) => {
            const palette = [
              "bg-white",
              "bg-[#DCEEDB]",
              "bg-[#FFD9B7]",
              "bg-[#E0DAFF]",
              "bg-white",
              "bg-neutral-900 text-white",
            ][i];
            const span = i === 0 ? "md:col-span-3" : i === 1 ? "md:col-span-3" : "md:col-span-2";
            const priceLine =
              "prices" in s && s.prices
                ? `od ${(s.prices as Record<string, string>).small ?? Object.values(s.prices)[0]}`
                : "price" in s
                  ? (s.price as string)
                  : "";
            return (
              <RevealArticle
                key={s.id}
                className={`col-span-6 ${span} rounded-3xl ${palette} p-6 md:p-8`}
              >
                <div className="flex items-center justify-between">
                  <Icon name={s.icon as never} size={32} />
                  <span className="text-sm font-medium opacity-70">{s.duration}</span>
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-tight md:text-2xl">{s.name}</h3>
                <p className="mt-2 text-sm opacity-80">{s.shortDescription}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold">{priceLine}</span>
                  <ArrowRightIcon size={18} />
                </div>
              </RevealArticle>
            );
          })}
        </section>

        {/* GALLERY BENTO */}
        <section id="galeria" className="mt-4 grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 rounded-3xl bg-[#FFD9B7] p-8 md:col-span-2 md:p-10">
            <RevealH2 className="text-3xl font-bold tracking-tight md:text-4xl">{gallery.title}</RevealH2>
            <p className="mt-3 text-sm text-neutral-700">{gallery.subtitle}</p>
            <a
              href={gallery.cta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium"
            >
              {gallery.cta.label} <ArrowRightIcon size={14} />
            </a>
          </div>
          {galleryImages(4).map((src, i) => (
            <div
              key={i}
              className={`col-span-3 overflow-hidden rounded-3xl bg-neutral-200 md:col-span-2 ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img src={src} alt="" className="h-full min-h-48 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </section>

        {/* TESTIMONIALS */}
        <section id="opinie" className="mt-4 grid grid-cols-6 gap-3 md:gap-4">
          {testimonials.items.slice(0, 3).map((t, i) => {
            const palette = ["bg-[#E0DAFF]", "bg-white", "bg-[#DCEEDB]"][i];
            return (
              <RevealFigure
                key={t.name}
                className={`col-span-6 rounded-3xl ${palette} p-8 md:col-span-2`}
              >
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} size={16} />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed">
                  „{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-neutral-600">{t.dog}</p>
                </figcaption>
              </RevealFigure>
            );
          })}
        </section>

        {/* FAQ + CTA BENTO */}
        <section id="faq" className="mt-4 grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-6 rounded-3xl bg-white p-8 md:col-span-4 md:p-10">
            <RevealH2 className="text-3xl font-bold tracking-tight md:text-4xl">{faq.title}</RevealH2>
            <div className="mt-6 divide-y divide-neutral-200">
              {faq.items.slice(0, 5).map((q, i) => (
                <RevealDetails key={i} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold">
                    {q.question}
                    <span className="text-xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-neutral-600">{q.answer}</p>
                </RevealDetails>
              ))}
            </div>
          </div>

          <a
            id="kontakt"
            href={site.contact.phone.href}
            className="col-span-6 flex flex-col justify-between rounded-3xl bg-neutral-900 p-8 text-white md:col-span-2 md:p-10"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-400">Czas na metamorfozę</p>
              <p className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Umów wizytę dla swojego psa.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <p className="flex items-center gap-3 text-lg font-semibold">
                <PhoneIcon size={20} /> {site.contact.phone.display}
              </p>
              <p className="flex items-center gap-3 text-sm text-neutral-300">
                <MessengerIcon size={16} /> Napisz na Messengerze
              </p>
              <p className="flex items-center gap-3 text-sm text-neutral-300">
                <MailIcon size={16} /> {site.contact.email.display}
              </p>
            </div>
          </a>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl bg-white p-6 text-sm text-neutral-600 md:flex md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-neutral-900">{site.name}</span> · Salon groomerski
          </p>
          <div className="mt-3 flex gap-4 md:mt-0">
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
