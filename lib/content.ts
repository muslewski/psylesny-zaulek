import site from "@/content/site.json";
import hero from "@/content/hero.json";
import about from "@/content/about.json";
import services from "@/content/services.json";
import features from "@/content/features.json";
import processData from "@/content/process.json";
import gallery from "@/content/gallery.json";
import testimonials from "@/content/testimonials.json";
import faq from "@/content/faq.json";
import cta from "@/content/cta.json";
import navigation from "@/content/navigation.json";
import footer from "@/content/footer.json";
import seo from "@/content/seo.json";
import pricing from "@/content/pricing.json";

export const content = {
  site,
  hero,
  about,
  services,
  features,
  process: processData,
  gallery,
  testimonials,
  faq,
  cta,
  navigation,
  footer,
  seo,
  pricing,
};

export type Content = typeof content;
