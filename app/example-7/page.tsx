import { content } from "@/lib/content";
import { dogs, galleryImages } from "@/lib/images";
import {
  PhoneIcon, MailIcon, FacebookIcon, MessengerIcon, ArrowRightIcon,
  StarIcon, Icon, PawIcon,
} from "@/lib/icons";
import {
  RevealH1, RevealH2, RevealImg,
  StaggerGrid, StaggerItem,
  RevealDetails, RevealFigure, RevealArticle,
} from "@/components/motion-wrappers";

/* ── EXAMPLE 7 — Playful Pastel ──────────────────────────────────────────────
   Palette: butter #FFF7C2, mint #C8E6C9, peach #FFCFA2, lilac #DCC4F2, candy pink #FFB8D1
   Type: rounded display sans, friendly weights
   Signature: rounded-full everywhere, wavy dividers, organic blob backgrounds, fun
   ─────────────────────────────────────────────────────────────────────────── */

const Wave = ({ flip = false, color = "#FFB8D1" }: { flip?: boolean; color?: string }) => (
  <svg
    viewBox="0 0 1200 60"
    preserveAspectRatio="none"
    className={`block h-12 w-full ${flip ? "rotate-180" : ""}`}
    aria-hidden
  >
    <path
      d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
      fill={color}
    />
  </svg>
);

export default function Example7() {
  const { site, hero, services, features, faq, testimonials } = content;

  return (
    <main className="min-h-dvh bg-[#FFF7C2] text-[#3A2C2A]">
      {/* NAV */}
      <header className="mx-auto max-w-6xl px-4 pt-6 md:px-6">
        <div className="flex items-center justify-between rounded-full border-2 border-[#3A2C2A] bg-white px-3 py-2 shadow-[4px_4px_0_0_#3A2C2A]">
          <a href="#" className="flex items-center gap-2 pl-3 font-bold">
            <span className="grid size-9 place-items-center rounded-full bg-[#FFB8D1]">
              <PawIcon size={18} />
            </span>
            {site.name}
          </a>
          <nav className="hidden gap-1 md:flex">
            {["Usługi", "Galeria", "Opinie", "FAQ", "Kontakt"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="rounded-full px-4 py-1.5 text-sm font-semibold hover:bg-[#FFF7C2]">
                {l}
              </a>
            ))}
          </nav>
          <a
            href={site.contact.phone.href}
            className="rounded-full bg-[#3A2C2A] px-4 py-2 text-sm font-bold text-white"
          >
            ☎ {site.contact.phone.display}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-[#FFCFA2] opacity-70 blur-2xl" />
        <div className="pointer-events-none absolute top-40 -left-32 size-96 rounded-full bg-[#DCC4F2] opacity-50 blur-2xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#3A2C2A] bg-[#C8E6C9] px-3 py-1.5 text-xs font-bold uppercase">
              ★ {hero.eyebrow}
            </span>
            <RevealH1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Pies wraca{" "}
              <span className="relative inline-block">
                <span className="relative z-10">szczęśliwy</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-[#FFB8D1]" />
              </span>{" "}
              i pachnący.
            </RevealH1>
            <p className="mt-6 max-w-md text-lg">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-[#FFB8D1] px-6 py-3 text-sm font-bold border-2 border-[#3A2C2A] shadow-[4px_4px_0_0_#3A2C2A] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#3A2C2A]"
              >
                <PhoneIcon size={16} /> {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold border-2 border-[#3A2C2A] shadow-[4px_4px_0_0_#3A2C2A]"
              >
                {hero.secondaryCta.label} <ArrowRightIcon size={14} />
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {hero.trustSignals.map((t, i) => {
                const c = ["bg-[#C8E6C9]", "bg-[#DCC4F2]", "bg-[#FFCFA2]"][i % 3];
                return (
                  <li key={t.label} className={`inline-flex items-center gap-2 rounded-full border-2 border-[#3A2C2A] ${c} px-3 py-1.5 text-xs font-bold`}>
                    <Icon name={t.icon as never} size={14} />
                    {t.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-[#FFB8D1]" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-[#3A2C2A] shadow-[8px_8px_0_0_#3A2C2A]">
              <RevealImg src={dogs.dogSmile} alt="" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 rotate-[-6deg] rounded-2xl border-2 border-[#3A2C2A] bg-white px-4 py-3 shadow-[4px_4px_0_0_#3A2C2A]">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} size={14} />)}
              </div>
              <p className="mt-1 text-xs font-bold">Kochamy psy!</p>
            </div>
          </div>
        </div>

        <Wave color="#FFB8D1" />
      </section>

      {/* FEATURES */}
      <section className="bg-[#FFB8D1]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest">{features.eyebrow}</p>
            <RevealH2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
              {features.title}
            </RevealH2>
          </div>
          <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.items.map((f, i) => {
              const c = ["bg-[#FFF7C2]", "bg-[#C8E6C9]", "bg-[#DCC4F2]", "bg-white", "bg-[#FFCFA2]", "bg-[#FFF7C2]"][i];
              return (
                <StaggerItem
                  key={f.title}
                  className={`rounded-3xl border-2 border-[#3A2C2A] ${c} p-6 shadow-[4px_4px_0_0_#3A2C2A]`}
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl border-2 border-[#3A2C2A] bg-white">
                    <Icon name={f.icon as never} size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-sm">{f.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
        <Wave flip color="#FFF7C2" />
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <RevealH2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            {services.title}
          </RevealH2>
          <p className="mx-auto mt-3 max-w-md">{services.priceNote}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.items.slice(0, 6).map((s, i) => {
            const c = ["bg-white", "bg-[#C8E6C9]", "bg-[#FFCFA2]", "bg-[#DCC4F2]", "bg-[#FFB8D1]", "bg-[#C8E6C9]"][i];
            const priceLine =
              "prices" in s && s.prices
                ? `od ${(s.prices as Record<string, string>).small ?? Object.values(s.prices)[0]}`
                : "price" in s ? (s.price as string) : "";
            return (
              <RevealArticle
                key={s.id}
                className={`flex flex-col rounded-3xl border-2 border-[#3A2C2A] ${c} p-6 shadow-[4px_4px_0_0_#3A2C2A]`}
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-12 items-center justify-center rounded-full border-2 border-[#3A2C2A] bg-white">
                    <Icon name={s.icon as never} size={22} />
                  </div>
                  <span className="rounded-full bg-[#3A2C2A] px-3 py-1 text-xs font-bold text-white">
                    {s.duration}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm">{s.shortDescription}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-extrabold">{priceLine}</span>
                  <a href="#kontakt" className="inline-flex size-9 items-center justify-center rounded-full border-2 border-[#3A2C2A] bg-white">
                    <ArrowRightIcon size={16} />
                  </a>
                </div>
              </RevealArticle>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="bg-[#DCC4F2]">
        <Wave color="#DCC4F2" />
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <RevealH2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Galeria</RevealH2>
            <p className="mt-3">Metamorfozy naszych podopiecznych ✂️</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages(8).map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-3xl border-2 border-[#3A2C2A] shadow-[4px_4px_0_0_#3A2C2A] ${
                  i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
                style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 1.5}deg` }}
              >
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <Wave flip color="#FFF7C2" />
      </section>

      {/* TESTIMONIALS */}
      <section id="opinie" className="mx-auto max-w-6xl px-6 py-20">
        <RevealH2 className="text-center text-4xl font-extrabold tracking-tight md:text-6xl">
          Co mówią właściciele
        </RevealH2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.slice(0, 3).map((t, i) => {
            const c = ["bg-[#C8E6C9]", "bg-[#FFB8D1]", "bg-[#FFCFA2]"][i];
            return (
              <RevealFigure
                key={t.name}
                className={`rounded-3xl border-2 border-[#3A2C2A] ${c} p-6 shadow-[4px_4px_0_0_#3A2C2A]`}
              >
                <div className="flex gap-0.5 text-amber-600">
                  {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} size={16} />)}
                </div>
                <blockquote className="mt-4 font-medium leading-relaxed">
                  „{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t-2 border-[#3A2C2A]/20 pt-4">
                  <div className="grid size-10 place-items-center rounded-full border-2 border-[#3A2C2A] bg-white text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-sm font-bold">
                    {t.name}<br /><span className="font-normal">{t.dog}</span>
                  </div>
                </figcaption>
              </RevealFigure>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#C8E6C9]">
        <Wave color="#C8E6C9" />
        <div className="mx-auto max-w-3xl px-6 py-20">
          <RevealH2 className="text-center text-4xl font-extrabold tracking-tight md:text-6xl">FAQ</RevealH2>
          <div className="mt-10 space-y-3">
            {faq.items.slice(0, 6).map((q, i) => (
              <RevealDetails
                key={i}
                className="group rounded-3xl border-2 border-[#3A2C2A] bg-white px-5 py-4 shadow-[4px_4px_0_0_#3A2C2A] open:bg-[#FFF7C2]"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold">
                  {q.question}
                  <span className="text-2xl transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm">{q.answer}</p>
              </RevealDetails>
            ))}
          </div>
        </div>
        <Wave flip color="#FFF7C2" />
      </section>

      {/* CTA */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#3A2C2A] bg-[#3A2C2A] p-8 text-white shadow-[8px_8px_0_0_#FFB8D1] md:p-14">
          <div className="absolute -bottom-10 -right-10 size-48 rounded-full bg-[#FFB8D1] opacity-30 blur-2xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFB8D1] px-3 py-1 text-xs font-bold text-[#3A2C2A]">
                ★ Czas na metamorfozę
              </span>
              <RevealH2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Twój pies też zasługuje na <span className="text-[#FFB8D1]">SPA</span>.
              </RevealH2>
              <p className="mt-4 max-w-md text-white/85">
                Zadzwoń lub napisz — odpowiemy najszybciej, jak to możliwe.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.contact.phone.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFB8D1] px-6 py-3 text-sm font-bold text-[#3A2C2A]"
                >
                  <PhoneIcon size={16} /> {site.contact.phone.display}
                </a>
                <a
                  href={site.social[1].url}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFB8D1] px-6 py-3 text-sm font-bold text-[#FFB8D1]"
                >
                  <MessengerIcon size={16} /> Messenger
                </a>
              </div>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <PhoneIcon size={18} /> {site.contact.phone.display}
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <MailIcon size={18} /> {site.contact.email.display}
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <FacebookIcon size={18} /> {site.social[0].handle}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-[#3A2C2A]/20 py-8 text-center text-sm font-medium">
        © {new Date().getFullYear()} {site.name} · zrobione z miłością do psów 🐾
      </footer>
    </main>
  );
}
