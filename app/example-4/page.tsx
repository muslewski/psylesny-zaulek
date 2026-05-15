import { content } from "@/lib/content";
import { dogs, galleryImages } from "@/lib/images";
import {
  PhoneIcon, MailIcon, FacebookIcon, ArrowRightIcon, StarIcon, Icon,
} from "@/lib/icons";
import {
  RevealH1, RevealH2, RevealImg,
  StaggerGrid, StaggerItem,
  RevealDetails, RevealFigure, RevealArticle,
} from "@/components/motion-wrappers";

/* ── EXAMPLE 4 — Brutalism ───────────────────────────────────────────────────
   Palette: yellow #FFE600, hot pink #FF3D7F, black #0A0A0A, white
   Type: huge grotesque + italic serif accents, all-caps utility text
   Signature: 4px black borders, hard offset shadows, marquee, asymmetric blocks
   ─────────────────────────────────────────────────────────────────────────── */

const block = "border-4 border-black bg-white";
const dropShadow = "shadow-[8px_8px_0_0_#0A0A0A]";

export default function Example4() {
  const { site, hero, services, features, faq, testimonials } = content;

  return (
    <main className="min-h-dvh bg-[#FFE600] text-black [font-feature-settings:'ss01']">
      {/* NAV */}
      <header className="border-b-4 border-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center bg-black text-[#FFE600]">★</div>
            <span className="text-lg font-black uppercase tracking-tight">{site.name}</span>
          </div>
          <nav className="hidden gap-1 md:flex">
            {["Usługi", "Galeria", "Opinie", "FAQ", "Kontakt"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="border-2 border-transparent px-3 py-1.5 text-sm font-bold uppercase hover:border-black hover:bg-white"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href={site.contact.phone.href}
            className={`${block} ${dropShadow} px-4 py-2 text-sm font-black uppercase tracking-wider`}
          >
            ☏ Dzwoń
          </a>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b-4 border-black bg-black py-3 text-[#FFE600]">
        <div className="flex w-max animate-marquee gap-12 text-2xl font-black uppercase tracking-tight md:text-3xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {[
                "Salon groomerski",
                "★",
                "Strzyżenie · Kąpiel · Trymowanie",
                "★",
                "Wszystkie rasy",
                "★",
                "PsyLeśny Zaułek",
                "★",
                "733 538 638",
                "★",
              ].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <RevealH1 className="text-[15vw] font-black uppercase leading-[0.85] tracking-tight md:text-[10rem]">
              PIES.<br />
              <span className="italic">CIĘCIE.</span><br />
              <span className="bg-black px-3 text-[#FFE600]">SPOKÓJ.</span>
            </RevealH1>
            <p className="mt-8 max-w-md text-xl font-medium leading-snug">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                className={`${block} ${dropShadow} bg-black px-6 py-4 text-base font-black uppercase tracking-wider text-[#FFE600] hover:translate-x-1 hover:translate-y-1 hover:shadow-none`}
              >
                ☏ {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className={`${block} ${dropShadow} px-6 py-4 text-base font-black uppercase tracking-wider hover:translate-x-1 hover:translate-y-1 hover:shadow-none`}
              >
                {hero.secondaryCta.label} →
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className={`relative ${block} ${dropShadow}`}>
              <RevealImg src={dogs.husky} alt="" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute -bottom-4 -right-4 rotate-3 border-4 border-black bg-[#FF3D7F] px-4 py-2 text-sm font-black uppercase text-black">
                ★ 5/5 opinii
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y-4 border-black bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mb-8 flex items-end justify-between">
            <RevealH2 className="text-4xl font-black uppercase tracking-tight md:text-7xl">
              Dlaczego my?
            </RevealH2>
            <p className="hidden max-w-xs text-sm font-bold uppercase md:block">
              {features.subtitle}
            </p>
          </div>
          <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.items.map((f, i) => (
              <StaggerItem
                key={f.title}
                className={`${block} ${dropShadow} p-6 ${
                  i % 3 === 0 ? "bg-[#FFE600]" : i % 3 === 1 ? "bg-[#FF3D7F] text-black" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon name={f.icon as never} size={32} />
                  <span className="font-mono text-3xl font-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-black uppercase tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm font-medium">{f.description}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <RevealH2 className="text-4xl font-black uppercase tracking-tight md:text-7xl">
            Co robimy
          </RevealH2>
          <p className="max-w-sm border-l-4 border-black pl-4 text-sm font-bold">
            {services.priceNote}
          </p>
        </div>

        <div className="space-y-4">
          {services.items.slice(0, 6).map((s, i) => {
            const priceLine =
              "prices" in s && s.prices
                ? `od ${(s.prices as Record<string, string>).small ?? Object.values(s.prices)[0]}`
                : "price" in s ? (s.price as string) : "";
            return (
              <RevealArticle
                key={s.id}
                className={`${block} flex flex-wrap items-center gap-4 p-5 md:gap-8 md:p-6 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#FFE600]"
                }`}
              >
                <span className="font-mono text-3xl font-black md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon name={s.icon as never} size={36} />
                <div className="flex-1">
                  <h3 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium">{s.shortDescription}</p>
                </div>
                <div className="ml-auto flex items-center gap-4">
                  <span className="border-2 border-black bg-black px-3 py-1 text-xs font-black uppercase text-[#FFE600]">
                    {s.duration}
                  </span>
                  <span className="text-2xl font-black md:text-3xl">{priceLine}</span>
                </div>
              </RevealArticle>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="border-y-4 border-black bg-[#FF3D7F]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <RevealH2 className="text-4xl font-black uppercase tracking-tight md:text-7xl">
            Metamorfozy
          </RevealH2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages(8).map((src, i) => (
              <div
                key={i}
                className={`${block} ${dropShadow} overflow-hidden`}
                style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 1.2}deg` }}
              >
                <img src={src} alt="" className="aspect-square w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opinie" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <RevealH2 className="mb-12 text-4xl font-black uppercase tracking-tight md:text-7xl">
          Opinie
        </RevealH2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.slice(0, 3).map((t, i) => (
            <RevealFigure
              key={t.name}
              className={`${block} ${dropShadow} p-6 ${i === 1 ? "bg-black text-[#FFE600]" : "bg-white"}`}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} size={20} />)}
              </div>
              <blockquote className="mt-4 text-lg font-bold leading-tight">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t-2 border-current pt-3 text-sm font-black uppercase">
                {t.name} · {t.dog}
              </figcaption>
            </RevealFigure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y-4 border-black bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
          <RevealH2 className="text-4xl font-black uppercase tracking-tight md:text-7xl">FAQ</RevealH2>
          <div className="mt-10 divide-y-4 divide-black border-y-4 border-black">
            {faq.items.slice(0, 6).map((q, i) => (
              <RevealDetails key={i} className="group">
                <summary className="flex cursor-pointer items-center justify-between py-5 text-lg font-black uppercase">
                  {q.question}
                  <span className="text-3xl transition group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-sm font-medium">{q.answer}</p>
              </RevealDetails>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="bg-black text-[#FFE600]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em]">Kontakt</p>
              <RevealH2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                Zadzwoń.<br />
                <span className="italic">teraz.</span>
              </RevealH2>
            </div>
            <div className="space-y-3 text-2xl font-black md:text-3xl">
              <a href={site.contact.phone.href} className="flex items-center justify-between border-y-4 border-[#FFE600] py-3 hover:bg-[#FFE600] hover:text-black">
                <span className="flex items-center gap-3"><PhoneIcon size={28} /> {site.contact.phone.display}</span>
                <ArrowRightIcon size={28} />
              </a>
              <a href={site.contact.email.href} className="flex items-center justify-between border-b-4 border-[#FFE600] py-3 hover:bg-[#FFE600] hover:text-black">
                <span className="flex items-center gap-3 text-base md:text-lg"><MailIcon size={22} /> {site.contact.email.display}</span>
                <ArrowRightIcon size={22} />
              </a>
              <a href={site.social[0].url} className="flex items-center justify-between border-b-4 border-[#FFE600] py-3 hover:bg-[#FFE600] hover:text-black">
                <span className="flex items-center gap-3"><FacebookIcon size={24} /> Facebook</span>
                <ArrowRightIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-black bg-[#FFE600]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 md:px-6">
          <p className="font-black uppercase tracking-tight">
            © {new Date().getFullYear()} · {site.name}
          </p>
          <p className="text-sm font-bold uppercase">Pies. Cięcie. Spokój.</p>
        </div>
      </footer>
    </main>
  );
}
