import { content } from "@/lib/content";
import { galleryImages } from "@/lib/images";
import {
  PhoneIcon, MailIcon, FacebookIcon, MessengerIcon, ArrowRightIcon,
  StarIcon, Icon, PawIcon,
} from "@/lib/icons";
import {
  RevealH1, RevealH2, RevealImg,
  StaggerGrid, StaggerItem,
  RevealDetails, RevealFigure, RevealArticle,
} from "@/components/motion-wrappers";
import { SitePreloader } from "@/components/site-preloader";

/* ── EXAMPLE 10 — Retro 70s / Y2K Vintage ────────────────────────────────────
   Palette: cream #F4E8D8, burnt orange #C75A3F, mustard #D4A03C, brown #3D2C1C, cream-200 #E8D8B5
   Type: geometric retro sans (Geist with wide tracking), mixed weights, all-caps
   Signature: circular stamps, sticker badges, rotated elements, wavy text, ribbon shapes
   ─────────────────────────────────────────────────────────────────────────── */

const orange = "#C75A3F";
const brown  = "#3D2C1C";
const mustard = "#D4A03C";

/** Circular stamp text along a ring */
const Stamp = ({ text, className = "" }: { text: string; className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden>
    <defs>
      <path id="ring" d="M 100 100 m -75 0 a 75 75 0 1 1 150 0 a 75 75 0 1 1 -150 0" fill="none" />
    </defs>
    <text fontSize="14" fontWeight="700" letterSpacing="2" fill="currentColor">
      <textPath href="#ring">{text}</textPath>
    </text>
  </svg>
);

export default function Example10() {
  const { site, hero, services, features, faq, testimonials } = content;

  return (
    <>
      <SitePreloader
        storageKey="psylesny:ex10"
        variant="stairs"
        duration={1500}
        bgColor="#3D2C1C"
        brandClassName="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#F4E8D8]"
        taglineClassName="text-xs uppercase tracking-[0.3em] font-bold text-[#D4A03C]"
        stairCount={8}
        stairsRevealFrom="left"
      />
    <main className="min-h-dvh bg-[#F4E8D8] text-[#3D2C1C] [font-feature-settings:'ss01']">
      {/* NAV */}
      <header className="border-b-2 border-dashed" style={{ borderColor: brown }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="grid size-11 -rotate-12 place-items-center rounded-full text-white" style={{ background: orange }}>
              <PawIcon size={22} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] opacity-70">Est. 2024</p>
              <p className="text-lg font-black uppercase leading-none tracking-tight">{site.name}</p>
            </div>
          </div>
          <nav className="hidden gap-1 md:flex">
            {["Usługi", "Galeria", "Opinie", "FAQ", "Kontakt"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="rounded-full px-3 py-1.5 text-sm font-bold uppercase hover:bg-white">
                {l}
              </a>
            ))}
          </nav>
          <a
            href={site.contact.phone.href}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-xs font-black uppercase tracking-wider text-[#F4E8D8] sm:px-5 sm:text-sm"
            style={{ background: brown }}
          >
            <PhoneIcon size={14} />
            <span className="hidden sm:inline">{site.contact.phone.display}</span>
            <span className="sm:hidden">Dzwoń</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Wavy ribbon strip */}
        <div className="absolute inset-x-0 top-32 -z-0 h-24 -rotate-2" style={{ background: orange }} />
        <div className="absolute inset-x-0 top-44 -z-0 h-10 rotate-1" style={{ background: mustard }} />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em]" style={{ color: orange }}>
                ★ Salon groomerski · od 2024 ★
              </span>
              <RevealH1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                Twój pies.<br />
                <span className="inline-block -rotate-1 rounded-2xl px-3 text-[#F4E8D8]" style={{ background: orange }}>
                  Świeży
                </span>{" "}
                styl.
              </RevealH1>
              <p className="mt-6 max-w-md text-lg font-medium">{hero.subtitle}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-wider text-[#F4E8D8]"
                  style={{ background: brown }}
                >
                  <PhoneIcon size={16} /> {hero.primaryCta.label}
                  <ArrowRightIcon size={16} className="transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-black uppercase tracking-wider"
                  style={{ borderColor: brown }}
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[40%_60%_40%_60%/60%_40%_60%_40%]" style={{ background: mustard }} />
              <RevealImg
                src="https://placedog.net/1200/1200?id=42"
                alt=""
                className="relative aspect-square w-full rounded-[40%_60%_40%_60%/60%_40%_60%_40%] object-cover"
              />
              {/* Circular stamp badge */}
              <div className="absolute -bottom-8 -right-4 grid size-32 place-items-center rounded-full text-[#F4E8D8] md:-right-12 md:size-40" style={{ background: orange }}>
                <Stamp text="★ INDYWIDUALNE PODEJŚCIE ★ SPOKÓJ ★" className="absolute inset-0 size-full animate-[spin_30s_linear_infinite]" />
                <PawIcon size={36} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — ticker */}
      <div className="overflow-hidden border-y-2 border-dashed py-3 text-center text-sm font-black uppercase tracking-[0.3em]" style={{ borderColor: brown, color: brown }}>
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, k) => (
            <span key={k} className="flex gap-12">
              <span>★ Salon groomerski</span>
              <span>·</span>
              <span>Strzyżenie</span>
              <span>·</span>
              <span>Kąpiel</span>
              <span>·</span>
              <span>Wszystkie rasy</span>
              <span>·</span>
              <span>Est. 2024</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES — vintage cards */}
      <section className="bg-[#E8D8B5]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <RevealH2 className="text-4xl font-black uppercase tracking-tight md:text-7xl">
              Dlaczego my?
            </RevealH2>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.25em]">
              ✦ {features.subtitle.slice(0, 30)}...
            </span>
          </div>
          <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.items.map((f, i) => {
              const palettes = [
                { bg: "#C75A3F", fg: "#F4E8D8" },
                { bg: "#F4E8D8", fg: "#3D2C1C" },
                { bg: "#D4A03C", fg: "#3D2C1C" },
                { bg: "#3D2C1C", fg: "#F4E8D8" },
                { bg: "#F4E8D8", fg: "#3D2C1C" },
                { bg: "#C75A3F", fg: "#F4E8D8" },
              ][i];
              return (
                <StaggerItem
                  key={f.title}
                  className="relative rounded-3xl p-6"
                  whileHover={{ rotate: -1, transition: { duration: 0.2 } }}
                  style={{ background: palettes.bg, color: palettes.fg }}
                >
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wider" style={{ color: brown }}>
                    No. {String(i + 1).padStart(2, "0")}
                  </div>
                  <Icon name={f.icon as never} size={36} className="mt-4" />
                  <h3 className="mt-6 text-2xl font-black uppercase tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-sm">{f.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em]" style={{ color: orange }}>
            ✦ Cennik ✦
          </p>
          <RevealH2 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-7xl">
            {services.title}
          </RevealH2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.items.slice(0, 6).map((s, i) => {
            const priceLine =
              "prices" in s && s.prices
                ? `od ${(s.prices as Record<string, string>).small ?? Object.values(s.prices)[0]}`
                : "price" in s ? (s.price as string) : "";
            return (
              <RevealArticle
                key={s.id}
                className={`relative flex gap-5 rounded-3xl p-6 ${i % 2 ? "bg-white" : "bg-[#E8D8B5]"}`}
              >
                <div className="grid size-16 shrink-0 place-items-center rounded-full text-[#F4E8D8]" style={{ background: orange }}>
                  <Icon name={s.icon as never} size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-black uppercase tracking-tight md:text-2xl">{s.name}</h3>
                    <span className="text-xl font-black md:text-2xl" style={{ color: orange }}>{priceLine}</span>
                  </div>
                  <p className="mt-1 text-sm">{s.shortDescription}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs font-bold uppercase">
                    <span className="rounded-full px-2 py-0.5 text-[#F4E8D8]" style={{ background: brown }}>
                      {s.duration}
                    </span>
                  </div>
                </div>
              </RevealArticle>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="relative overflow-hidden py-12 md:py-20" style={{ background: orange }}>
        <div className="mx-auto max-w-6xl px-6 text-[#F4E8D8]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <RevealH2 className="text-4xl font-black uppercase tracking-tight md:text-7xl">Galeria</RevealH2>
            <p className="font-bold uppercase tracking-wider">✦ Metamorfozy ✦</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {galleryImages(8).map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border-4 border-[#F4E8D8] bg-white p-2"
                style={{ rotate: `${(i % 2 === 0 ? -1.5 : 1.5)}deg` }}
              >
                <img src={src} alt="" className="aspect-square w-full rounded-2xl object-cover" loading="lazy" />
                <p className="mt-2 px-1 text-center text-xs font-black uppercase tracking-wider text-[#3D2C1C]">
                  No. {String(i + 1).padStart(2, "0")} / {String(galleryImages.length || 8).padStart(2, "0")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opinie" className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <RevealH2 className="text-center text-4xl font-black uppercase tracking-tight md:text-7xl">
          Opinie
        </RevealH2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.slice(0, 3).map((t, i) => {
            const palettes = [
              { bg: "#F4E8D8", border: brown },
              { bg: "#D4A03C", border: brown },
              { bg: "#E8D8B5", border: brown },
            ][i];
            return (
              <RevealFigure
                key={t.name}
                className="relative rounded-3xl border-2 p-6"
                style={{ background: palettes.bg, borderColor: palettes.border, rotate: `${i % 2 === 0 ? -0.5 : 0.5}deg` }}
              >
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wider" style={{ color: orange }}>
                  ★ {t.rating}/5
                </div>
                <blockquote className="mt-4 font-medium leading-relaxed">„{t.quote}"</blockquote>
                <figcaption className="mt-6 border-t-2 border-dashed pt-3 text-xs font-black uppercase tracking-wider" style={{ borderColor: brown }}>
                  {t.name} · {t.dog}
                </figcaption>
              </RevealFigure>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#E8D8B5]">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
          <RevealH2 className="text-center text-4xl font-black uppercase tracking-tight md:text-7xl">FAQ</RevealH2>
          <div className="mt-10 space-y-3">
            {faq.items.slice(0, 6).map((q, i) => (
              <RevealDetails
                key={i}
                className="group rounded-2xl border-2 border-dashed bg-[#F4E8D8] px-5 py-4 open:bg-white"
                style={{ borderColor: brown }}
              >
                <summary className="flex cursor-pointer items-center justify-between text-base font-black uppercase tracking-tight">
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs" style={{ color: orange }}>
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    {q.question}
                  </span>
                  <span className="text-xl transition group-open:rotate-45" style={{ color: orange }}>+</span>
                </summary>
                <p className="mt-3 pl-9 text-sm">{q.answer}</p>
              </RevealDetails>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="bg-[#3D2C1C] text-[#F4E8D8]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-[#3D2C1C]" style={{ background: mustard }}>
                ✦ Special offer ✦
              </span>
              <RevealH2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
                Czas na wizytę
                <br />
                <span style={{ color: mustard }}>w salonie.</span>
              </RevealH2>
              <p className="mt-6 max-w-md font-medium opacity-90">
                Zadzwoń lub napisz na Messengerze — porozmawiamy o Twoim psie.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={site.contact.phone.href}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-wider text-[#3D2C1C]"
                  style={{ background: mustard }}
                >
                  <PhoneIcon size={16} /> {site.contact.phone.display}
                </a>
                <a
                  href={site.social[1].url}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#F4E8D8] px-6 py-3 text-sm font-black uppercase tracking-wider"
                >
                  <MessengerIcon size={16} /> Messenger
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative grid place-items-center">
                <Stamp text="★ PSYLEŚNY ZAUŁEK ★ SALON GROOMERSKI ★" className="size-72 animate-[spin_25s_linear_infinite] text-[#F4E8D8]/80" />
                <div className="absolute grid size-40 place-items-center rounded-full text-[#3D2C1C]" style={{ background: mustard }}>
                  <div className="text-center">
                    <PhoneIcon size={28} className="mx-auto" />
                    <p className="mt-2 text-xs font-black uppercase tracking-wider">Zadzwoń</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-dashed bg-[#F4E8D8]" style={{ borderColor: brown }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs font-bold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} · {site.name} · Est. 2024</p>
          <div className="flex gap-5">
            <a href={site.contact.phone.href} className="inline-flex items-center gap-2"><PhoneIcon size={14} /> Telefon</a>
            <a href={site.contact.email.href} className="inline-flex items-center gap-2"><MailIcon size={14} /> E-mail</a>
            <a href={site.social[0].url} className="inline-flex items-center gap-2"><FacebookIcon size={14} /> Facebook</a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
