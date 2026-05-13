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

/* ── EXAMPLE 9 — Neumorphism Soft ────────────────────────────────────────────
   Palette: warm grey #E8E4DC base, accent coral #E89A7C, ink #3A3633
   Type: rounded sans, medium weights, generous letter spacing
   Signature: soft inset + outset shadows on single-color surface, no borders
   ─────────────────────────────────────────────────────────────────────────── */

const base = "bg-[#E8E4DC]";
const out  = "shadow-[8px_8px_20px_#c9c5be,-8px_-8px_20px_#ffffff]";
const inn  = "shadow-[inset_5px_5px_12px_#c9c5be,inset_-5px_-5px_12px_#ffffff]";
const outSm= "shadow-[4px_4px_10px_#c9c5be,-4px_-4px_10px_#ffffff]";
const coral = "#E89A7C";

export default function Example9() {
  const { site, hero, services, features, faq, testimonials } = content;

  return (
    <main className={`min-h-dvh ${base} text-[#3A3633]`}>
      {/* NAV */}
      <header className="mx-auto max-w-6xl px-6 pt-6">
        <div className={`flex items-center justify-between rounded-full ${base} p-2 ${outSm}`}>
          <a href="#" className="flex items-center gap-2 pl-3 font-semibold tracking-tight">
            <span className={`grid size-9 place-items-center rounded-full ${base} ${outSm}`}>
              <PawIcon size={18} style={{ color: coral }} />
            </span>
            {site.name}
          </a>
          <nav className="hidden gap-1 md:flex">
            {["Usługi", "Galeria", "Opinie", "FAQ", "Kontakt"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className={`rounded-full px-4 py-1.5 text-sm hover:${inn}`}>
                {l}
              </a>
            ))}
          </nav>
          <a
            href={site.contact.phone.href}
            className={`inline-flex items-center gap-2 rounded-full ${base} px-4 py-2 text-sm font-medium ${outSm}`}
            style={{ color: coral }}
          >
            <PhoneIcon size={14} /> Umów wizytę
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <span className={`inline-flex items-center gap-2 rounded-full ${base} px-3 py-1.5 text-xs uppercase tracking-wider ${inn}`}>
              <span className="size-1.5 rounded-full" style={{ background: coral }} />
              {hero.eyebrow}
            </span>
            <RevealH1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Spokojna pielęgnacja{" "}
              <span style={{ color: coral }}>bez stresu</span>.
            </RevealH1>
            <p className="mt-6 max-w-md text-lg text-[#3A3633]/75">{hero.subtitle}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                className={`inline-flex items-center gap-2 rounded-full ${base} px-7 py-4 text-sm font-bold ${out}`}
                style={{ color: coral }}
              >
                <PhoneIcon size={16} /> {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className={`inline-flex items-center gap-2 rounded-full ${base} px-7 py-4 text-sm font-bold ${inn}`}
              >
                {hero.secondaryCta.label} <ArrowRightIcon size={14} />
              </a>
            </div>

            <ul className="mt-12 grid grid-cols-3 gap-3">
              {hero.trustSignals.map((t) => (
                <li key={t.label} className={`flex flex-col items-center gap-2 rounded-3xl ${base} p-4 text-center text-xs ${inn}`}>
                  <span className={`grid size-10 place-items-center rounded-full ${base} ${outSm}`} style={{ color: coral }}>
                    <Icon name={t.icon as never} size={18} />
                  </span>
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className={`rounded-[2.5rem] ${base} p-4 ${out}`}>
              <div className={`overflow-hidden rounded-[2rem] ${inn}`}>
                <RevealImg src={dogs.petsGroup} alt="" className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: coral }}>
            {features.eyebrow}
          </p>
          <RevealH2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{features.title}</RevealH2>
        </div>
        <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((f) => (
            <StaggerItem key={f.title} className={`rounded-[2rem] ${base} p-7 ${out}`}>
              <div className={`grid size-14 place-items-center rounded-2xl ${base} ${inn}`} style={{ color: coral }}>
                <Icon name={f.icon as never} size={24} />
              </div>
              <h3 className="mt-6 text-lg font-bold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-[#3A3633]/75">{f.description}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <RevealH2 className="text-4xl font-bold tracking-tight md:text-5xl">{services.title}</RevealH2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#3A3633]/70">{services.priceNote}</p>
        </div>

        <div className={`mt-12 rounded-[2.5rem] ${base} p-3 ${out} md:p-4`}>
          <ul className="space-y-3">
            {services.items.slice(0, 6).map((s) => {
              const priceLine =
                "prices" in s && s.prices
                  ? `od ${(s.prices as Record<string, string>).small ?? Object.values(s.prices)[0]}`
                  : "price" in s ? (s.price as string) : "";
              return (
                <li
                  key={s.id}
                  className={`flex items-center gap-4 rounded-2xl ${base} p-4 ${inn} md:p-5`}
                >
                  <div className={`grid size-12 place-items-center rounded-2xl ${base} ${outSm}`} style={{ color: coral }}>
                    <Icon name={s.icon as never} size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold tracking-tight">{s.name}</h3>
                    <p className="hidden text-xs text-[#3A3633]/65 md:block">{s.shortDescription}</p>
                  </div>
                  <span className={`hidden rounded-full ${base} px-3 py-1 text-xs ${outSm} sm:inline-block`}>
                    {s.duration}
                  </span>
                  <span className="text-lg font-bold" style={{ color: coral }}>{priceLine}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="mx-auto max-w-6xl px-6 py-20">
        <RevealH2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">Galeria</RevealH2>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          {galleryImages(6).map((src, i) => (
            <div key={i} className={`rounded-[2rem] ${base} p-2 ${out}`}>
              <div className={`overflow-hidden rounded-3xl ${inn}`}>
                <img src={src} alt="" className="aspect-square h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opinie" className="mx-auto max-w-6xl px-6 py-20">
        <RevealH2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">Opinie</RevealH2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.items.slice(0, 2).map((t) => (
            <RevealFigure key={t.name} className={`rounded-[2rem] ${base} p-7 ${out}`}>
              <div className="flex gap-0.5" style={{ color: coral }}>
                {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} size={16} />)}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed">„{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4 text-sm">
                <div className={`grid size-11 place-items-center rounded-full ${base} ${inn} font-bold`} style={{ color: coral }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-[#3A3633]/65">{t.dog}</p>
                </div>
              </figcaption>
            </RevealFigure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
        <RevealH2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">{faq.title}</RevealH2>
        <div className="mt-12 space-y-3">
          {faq.items.slice(0, 6).map((q, i) => (
            <RevealDetails key={i} className={`group rounded-2xl ${base} px-6 py-5 ${out} open:${inn}`}>
              <summary className="flex cursor-pointer items-center justify-between text-base font-bold">
                {q.question}
                <span className={`grid size-7 place-items-center rounded-full ${base} ${outSm} transition group-open:rotate-45`} style={{ color: coral }}>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#3A3633]/75">{q.answer}</p>
            </RevealDetails>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-20">
        <div className={`rounded-[2.5rem] ${base} p-10 ${out} md:p-16`}>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em]" style={{ color: coral }}>
                Czas na metamorfozę
              </p>
              <RevealH2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Umów wizytę dla swojego psa.
              </RevealH2>
              <p className="mt-4 max-w-md text-[#3A3633]/75">
                Zadzwoń lub napisz na Messengerze — odpowiemy najszybciej, jak to możliwe.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.contact.phone.href}
                  className={`inline-flex items-center gap-2 rounded-full ${base} px-6 py-3 text-sm font-bold ${out}`}
                  style={{ color: coral }}
                >
                  <PhoneIcon size={16} /> {site.contact.phone.display}
                </a>
                <a
                  href={site.social[1].url}
                  className={`inline-flex items-center gap-2 rounded-full ${base} px-6 py-3 text-sm font-bold ${inn}`}
                >
                  <MessengerIcon size={16} /> Messenger
                </a>
              </div>
            </div>
            <ul className={`space-y-3 rounded-3xl ${base} p-5 ${inn}`}>
              <li className="flex items-center gap-3 text-sm">
                <PhoneIcon size={18} style={{ color: coral }} /> {site.contact.phone.display}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MailIcon size={18} style={{ color: coral }} /> {site.contact.email.display}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FacebookIcon size={18} style={{ color: coral }} /> {site.social[0].handle}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-12 pt-4 text-center text-sm text-[#3A3633]/65">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </main>
  );
}
