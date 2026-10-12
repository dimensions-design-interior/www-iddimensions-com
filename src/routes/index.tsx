import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

import { GOOGLE_DIRECTIONS_URL, buildSeo, homeAndConstructionBusinessSchema } from "@/lib/seo/site";

import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { ProjectsGallery } from "@/components/site/ProjectsGallery";
import { BeforeAfterViewer } from "@/components/site/BeforeAfterViewer";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import {
  GoogleReviewLink,
  GoogleVerifiedBusinessBadge,
  StudioMap,
} from "@/components/site/GoogleBusinessProfile";

import heroInterior from "@/assets/hero-interior.jpg";
import { services as serviceCatalog } from "@/lib/seo/catalog";
import { WhatsAppLink } from "@/components/site/WhatsAppButton";


export const Route = createFileRoute("/")({
  head: () => {
    const seo = buildSeo({
      title: "Turnkey Interior Solutions in Lucknow & India | ID Dimensions",
      description: "Interior design, material selection and complete turnkey execution for apartments, villas, offices and commercial spaces in Lucknow and Uttar Pradesh.",
      path: "/",
      jsonLd: homeAndConstructionBusinessSchema(),
    });
    const title = "Turnkey Interior Solutions in Lucknow & India | ID Dimensions";
    return { ...seo, meta: seo.meta.map((tag) => tag.title ? { title } : tag.property === "og:title" || tag.name === "twitter:title" ? { ...tag, content: title } : tag) };
  },
  component: Index,
});


const services = [
  {
    title: "Residential Interiors",
    body: "Elegant and functional interiors designed around your lifestyle, space and personal taste.",
  },
  {
    title: "Luxury Villas & Homes",
    body: "Bespoke interior concepts that bring sophistication, comfort and individuality to every room.",
  },
  {
    title: "Modular Kitchens",
    body: "Contemporary kitchens designed for efficient storage, seamless functionality and timeless aesthetics.",
  },
  {
    title: "Wardrobes",
    body: "Customized wardrobe solutions combining intelligent storage with refined finishes.",
  },
  {
    title: "Commercial Interiors",
    body: "Professional, productive and visually compelling spaces designed for modern businesses.",
  },
  {
    title: "Retail & Showrooms",
    body: "Strategic interior environments designed to enhance customer experience and strengthen your brand presence.",
  },
  {
    title: "Hospitality Interiors",
    body: "Distinctive hospitality spaces designed to create memorable guest experiences.",
  },
  {
    title: "Turnkey Projects",
    body: "Complete design-to-execution solutions with professional project coordination from concept to handover.",
  },
];


const process = [
  {
    no: "01",
    title: "Consultation",
    body: "We understand your requirements, lifestyle, business objectives, budget and vision.",
  },
  {
    no: "02",
    title: "Concept & Design",
    body: "Our designers transform your ideas into a cohesive design concept with detailed planning.",
  },
  {
    no: "03",
    title: "Material & Estimation",
    body: "We finalize materials, finishes and project specifications with transparent cost planning.",
  },
  {
    no: "04",
    title: "Execution",
    body: "Our execution team coordinates every stage of the project with attention to detail and quality.",
  },
  {
    no: "05",
    title: "Final Handover",
    body: "We complete the finishing touches and deliver a space that is ready to experience.",
  },
];

const reasons = [
  {
    title: "Dedicated Project Supervision",
    body: "Every stage is monitored by experienced design and execution managers.",
  },
  {
    title: "Material Transparency",
    body: "Premium-grade boards, durable laminates, and genuine branded hardware with warranty.",
  },
  {
    title: "Zero Hidden Surprises",
    body: "Detailed, line-item estimates so you know exactly where every rupee goes.",
  },
];

function Index() {


  return (
    <div id="top">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-screen">
        <img
          src={heroInterior}
          alt="Warmly lit luxury living room interior with oak paneling and brass accents"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pt-40 pb-20 lg:px-12 lg:pb-28">
          <p className="eyebrow">Dimensions Designs Interior</p>
          <h1 className="display-xl mt-6 max-w-4xl text-4xl text-ink-foreground sm:text-6xl lg:text-7xl">
            Complete Turnkey Interior Solutions — From Design to Execution
          </h1>
          <p className="mt-8 max-w-xl text-base tracking-wide text-brass-soft">
            Interior Designers In Lucknow · Turnkey Homes &amp; Modular Kitchens
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-foreground/70">
            Interior design, material selection and complete turnkey execution for apartments, homes,
            villas, offices and commercial interiors in Lucknow and Uttar Pradesh.
          </p>
          <p className="mt-8 text-[0.7rem] tracking-[0.28em] text-ink-foreground/50 uppercase">
            Lucknow & Uttar Pradesh
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-solid">Request a Consultation</Link>
            <a href="#contact" className="btn-outline text-ink-foreground">Get a Project Quote</a>
            <WhatsAppLink className="btn-outline text-ink-foreground"><MessageCircle className="size-4 shrink-0" aria-hidden="true" />WhatsApp Us</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">
              Where Design Meets Execution
            </h2>
            <div className="rule-thin mt-8" />
          </div>
          <div className="space-y-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>
              At Dimensions Designs Interior, we believe exceptional interiors are created when
              thoughtful design meets precise execution.
            </p>
            <p>
              We offer complete interior design and turnkey solutions in Lucknow for homes, luxury
              villas, modular kitchens, offices, retail spaces and hospitality projects.
            </p>
            <p>
              From the first concept to the final handover, our team manages every detail—design,
              materials, coordination and execution—to create spaces that are distinctive,
              functional and built to last.
            </p>
            <p className="font-display text-2xl tracking-[0.12em] text-foreground uppercase">
              Design. Detail. Execution.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <p className="eyebrow">Our Services</p>
          <h2 className="display-xl mt-6 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
            Interior Design Services In Lucknow
          </h2>
          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, index) => (
              <article
                key={s.title}
                className="group bg-background p-9 transition-colors duration-500 hover:bg-ink"
              >
                <div className="rule-thin" />
                <h3 className="mt-7 text-lg tracking-[0.12em] uppercase transition-colors group-hover:text-ink-foreground">
                  <Link to="/services/$slug" params={{ slug: serviceCatalog[index + 1]?.slug ?? "turnkey-projects" }}>{s.title}</Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ink-foreground/65">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-5 text-sm"><Link to="/services" className="underline underline-offset-4">All interior design services</Link><Link to="/services/$slug" params={{ slug: "interior-designer-lucknow" }} className="underline underline-offset-4">Interior Designer in Lucknow</Link></div>
          <p className="mt-10 text-sm text-muted-foreground">
            Planning a kitchen?{" "}
            <Link
              to="/modular-kitchen-lucknow"
              className="text-foreground underline underline-offset-4"
            >
              Explore our modular kitchen designs in Lucknow
            </Link>{" "}
            — layouts, finishes, materials and pricing guidance.
          </p>
        </div>
      </section>

      {/* PROJECTS GALLERY */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <p className="eyebrow">Projects Gallery</p>
        <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">
          Interior Design Inspiration
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Illustrative residential, commercial and hospitality concepts — not photographs of completed client projects.
        </p>

        <ProjectsGallery />

        <p className="mt-10 text-sm text-muted-foreground">
          Explore more design ideas?{" "}
          <Link to="/portfolio" className="text-foreground underline underline-offset-4">
            View our full interior design portfolio
          </Link>{" "}
          — illustrative homes, kitchens, offices and showrooms.
        </p>
      </section>


      {/* PROCESS */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <p className="eyebrow">Our Process</p>
          <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">
            From Concept To Completion
          </h2>
          <div className="mt-16 space-y-px bg-brass/15">
            {process.map((step) => (
              <div
                key={step.no}
                className="grid gap-6 bg-ink py-10 md:grid-cols-[6rem_16rem_1fr] md:items-baseline"
              >
                <span className="font-display text-3xl text-brass">{step.no}</span>
                <h3 className="text-lg tracking-[0.16em] uppercase">{step.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-ink-foreground/60">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <p className="eyebrow">Why Choose Us</p>
        <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">Crafted with Precision. Built to Last.</h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title}>
              <div className="rule-thin" />
              <h3 className="mt-6 text-base tracking-[0.16em] uppercase">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <p className="eyebrow">Before &amp; After</p>
          <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">
            From Ordinary To Extraordinary
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            An illustrative before-and-after comparison showing how layout, lighting and finishes can change a space.
          </p>
          <BeforeAfterViewer />

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <p className="eyebrow">Design Philosophy</p>
        <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">Beauty With Purpose</h2>
        <p className="font-display mt-10 text-2xl leading-snug text-foreground sm:text-3xl">
          We don't design spaces simply to look beautiful.
          <br />
          We design them to work beautifully.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every layout, material, colour, light and detail is carefully considered to create
          interiors that feel natural, functional and timeless.
        </p>
      </section>

      {/* REVIEWS */}
      <ReviewsSection />


      {/* FINAL CTA */}
      <section id="contact" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <p className="eyebrow">Have A Space In Mind?</p>
          <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">
            Let's Turn Your Vision Into A Space You'll Love.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-ink-foreground/65">
            Whether it's a luxury home, modern office, retail showroom or hospitality project, our
            team is ready to bring your vision to life.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/919670001155?text=Hi%2C%20I%27m%20interested%20in%20a%20consultation%20for%20my%20interior%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-solid inline-flex items-center gap-2"
            >
              <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
              Start Your Project on WhatsApp
            </a>
            <a
              href="tel:9670001155"
              className="btn-outline inline-flex items-center gap-2 text-ink-foreground"
            >
              <Phone aria-hidden="true" className="size-4 shrink-0" />
              Call 9670001155
            </a>
          </div>

          <div className="mx-auto mt-16 max-w-2xl border-t border-ink-foreground/15 pt-12">
            <p className="eyebrow">Request A Consultation</p>
            <ConsultationForm />
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
            <GoogleVerifiedBusinessBadge dark />
            <GoogleReviewLink dark />
          </div>

          <div className="mt-12 text-left">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-display text-xl uppercase">Find Our Golf City Studio</h3>
              <a
                href={GOOGLE_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-outline inline-flex items-center gap-2 text-ink-foreground"
              >
                <Navigation aria-hidden="true" className="size-4 shrink-0" />
                Get Directions
              </a>
            </div>
            <StudioMap />
          </div>

          <ul className="mt-10 flex flex-col items-center gap-3 text-sm tracking-[0.2em] text-brass uppercase">
            <li>
              <a
                href="mailto:info@iddimension.com"
                className="inline-flex items-center gap-2 hover:text-brass-soft"
              >
                <Mail aria-hidden="true" className="size-4 shrink-0" />
                info@iddimension.com
              </a>
            </li>
            <li>
              <a
                href="tel:9670001155"
                className="inline-flex items-center gap-2 hover:text-brass-soft"
              >
                <Phone aria-hidden="true" className="size-4 shrink-0" />
                Call: 9670001155
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/iddimensions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-brass-soft"
              >
                <Instagram aria-hidden="true" className="size-4 shrink-0" />
                @iddimensions
              </a>
            </li>
          </ul>
          <p className="mt-4 flex items-center justify-center gap-2 text-[0.7rem] tracking-[0.26em] text-ink-foreground/45 uppercase">
            <MapPin aria-hidden="true" className="size-4 shrink-0 text-brass/70" />
            Lucknow & Uttar Pradesh
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
