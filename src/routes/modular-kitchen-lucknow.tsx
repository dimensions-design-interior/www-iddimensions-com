import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Phone } from "lucide-react";

import { ConsultationForm } from "@/components/site/ConsultationForm";
import { PageShell } from "@/components/site/PageShell";
import { absoluteUrl, breadcrumbSchema, buildSeo, homeAndConstructionBusinessSchema } from "@/lib/seo/site";

const PATH = "/modular-kitchen-lucknow";

const TITLE = "Modular Kitchen in Lucknow";
const DESCRIPTION =
  "Modular kitchen design and installation in Lucknow — L-shaped, parallel, U-shaped and island layouts in acrylic, laminate and PU finishes, designed and executed turnkey.";

const layouts = [
  {
    name: "L-Shaped Kitchen",
    for: "Most Lucknow apartments (2BHK/3BHK)",
    detail:
      "Uses two adjoining walls to keep the sink, hob and refrigerator within an easy work triangle, while leaving floor space free for movement.",
  },
  {
    name: "Parallel / Galley Kitchen",
    for: "Long, narrow kitchens",
    detail:
      "Two facing runs split wet and dry work. Ideal when the kitchen is a corridor between the living and utility areas.",
  },
  {
    name: "U-Shaped Kitchen",
    for: "Larger family kitchens",
    detail:
      "Three walls of storage for households that cook daily, with room for tall units, a built-in oven and a dedicated pantry.",
  },
  {
    name: "Island Kitchen",
    for: "Villas and open-plan homes",
    detail:
      "A central island adds prep surface and casual seating, and works best in open layouts found in Golf City and Sushant Golf City villas.",
  },
];

const finishes = [
  {
    name: "Acrylic",
    detail: "High-gloss, mirror-like finish that resists yellowing. Best for bright, contemporary kitchens.",
  },
  {
    name: "Laminate",
    detail: "Hard-wearing and value-focused, in hundreds of matte, textured and woodgrain options.",
  },
  {
    name: "PU (Polyurethane)",
    detail: "Sprayed paint finish with a seamless, premium look and custom colour matching.",
  },
  {
    name: "Veneer",
    detail: "Real wood grain for warmth, sealed and polished for a natural, tactile surface.",
  },
];

const cores = [
  {
    name: "BWP / Marine Plywood",
    detail: "Boiling-water-proof plywood for the sink and hob runs where moisture exposure is highest.",
  },
  {
    name: "HDF-HMR Board",
    detail: "Moisture-resistant engineered board for dry-zone base and wall units.",
  },
  {
    name: "Hardware",
    detail: "Soft-close hinges and channels, tandem drawers, corner pull-outs and lift-up mechanisms.",
  },
  {
    name: "Countertops",
    detail: "Quartz, granite or sintered stone with matching or contrasting backsplash.",
  },
];

const gallery = [
  {
    src: "/og/kitchen-l-shaped.jpg",
    title: "Charcoal L-Shaped Kitchen",
    location: "Golf City, Lucknow",
    detail: "Matte shutters with brass handles, quartz counter, built-in oven and tall unit.",
  },
  {
    src: "/og/kitchen-parallel.jpg",
    title: "Parallel Kitchen With Breakfast Counter",
    location: "Gomti Nagar, Lucknow",
    detail: "Cream acrylic shutters, wood accents and a compact breakfast counter for a 3BHK.",
  },
  {
    src: "/og/kitchen-island.jpg",
    title: "Island Kitchen For A Villa",
    location: "Sushant Golf City, Lucknow",
    detail: "Deep green cabinetry, marble-top island with seating and brass pendant lighting.",
  },
];

const steps = [
  { step: "01", name: "Site measurement", detail: "We measure your kitchen and note plumbing, gas and electrical points." },
  { step: "02", name: "Layout & 3D design", detail: "Layout options and 3D views so you can see the kitchen before it is built." },
  { step: "03", name: "Materials & quote", detail: "Core, finish, hardware and countertop selection with a line-item quote." },
  { step: "04", name: "Factory production", detail: "Modules are machine-cut and edge-banded for precise, repeatable joinery." },
  { step: "05", name: "Installation & handover", detail: "Supervised installation, appliance fitting, cleaning and a walk-through." },
];

const faqs = [
  {
    q: "How much does a modular kitchen cost in Lucknow?",
    a: "Cost depends on the size of the kitchen, the core material, the shutter finish and the hardware brand. A compact L-shaped kitchen in laminate costs considerably less than a larger island kitchen in acrylic or PU. We share a line-item quote after site measurement so you can see exactly what each element costs.",
  },
  {
    q: "How long does installation take?",
    a: "After design sign-off and material selection, most modular kitchens are produced and installed within about four to six weeks. Installation on site usually takes two to four days.",
  },
  {
    q: "Which layout suits a 2BHK kitchen?",
    a: "L-shaped and parallel layouts suit most 2BHK kitchens in Lucknow because they use the available walls efficiently and keep the floor clear.",
  },
  {
    q: "Do you handle plumbing, electrical and countertop work?",
    a: "Yes. We work turnkey — civil touch-ups, plumbing and electrical shifting, countertop and backsplash, chimney and appliance integration are coordinated by our team.",
  },
  {
    q: "Which areas of Lucknow do you serve?",
    a: "We work across Lucknow including Gomti Nagar, Golf City, Sushant Golf City, Hazratganj, Aliganj, Indira Nagar and Jankipuram, and take projects across India.",
  },
];

export const Route = createFileRoute("/modular-kitchen-lucknow")({
  head: () =>
    buildSeo({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
      image: "/og/kitchen-l-shaped.jpg",
      imageAlt: "Charcoal L-shaped modular kitchen designed by Dimensions Designs Interior in Lucknow",
      jsonLd: [
        homeAndConstructionBusinessSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Modular Kitchen in Lucknow", path: PATH },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Modular Kitchen Design & Installation in Lucknow",
          serviceType: "Modular kitchen design and installation",
          description: DESCRIPTION,
          url: absoluteUrl(PATH),
          areaServed: { "@type": "City", name: "Lucknow, Uttar Pradesh, India" },
          provider: {
            "@type": "InteriorDesigner",
            name: "Dimensions Designs Interior",
            url: absoluteUrl("/"),
            email: "info@iddimension.com",
            telephone: "+91-9670001155",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Skylark Plaza, Ground Floor, Shop No. 09, Skyline Plaza, near Lulu Mall Road, Golf City",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              postalCode: "226030",
              addressCountry: "IN",
            },
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: ModularKitchenLucknow,
});

function ModularKitchenLucknow() {
  return (
    <PageShell
      eyebrow="Modular Kitchens · Lucknow"
      title="Modular Kitchen Design & Installation In Lucknow"
      intro="We design and build modular kitchens for homes across Lucknow — from compact apartment kitchens in Gomti Nagar to island kitchens in Golf City villas. Layout, materials, hardware, countertop and installation are handled by one team, end to end."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#kitchen-consultation" className="btn-solid inline-flex items-center gap-2">
          <CalendarCheck aria-hidden="true" className="size-4 shrink-0" />
          Book A Kitchen Design Consultation
        </a>
        <a
          href="tel:+919670001155"
          className="btn-outline inline-flex items-center gap-2 border-border text-muted-foreground"
        >
          <Phone aria-hidden="true" className="size-4 shrink-0" />
          Call +91 96700 01155
        </a>
      </div>

      <img
        src="/og/kitchen-l-shaped.jpg"
        alt="Charcoal L-shaped modular kitchen with brass handles and quartz countertop in Lucknow"
        width={1600}
        height={1000}
        className="mt-12 h-[28rem] w-full object-cover"
      />

      {/* Layouts */}
      <section className="mt-20">
        <h2 className="text-xl tracking-[0.1em] uppercase">Kitchen Layouts We Design</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {layouts.map((l) => (
            <article key={l.name} className="border-t border-border pt-5">
              <h3 className="font-display text-lg tracking-[0.06em] uppercase">{l.name}</h3>
              <p className="mt-2 text-[0.68rem] tracking-[0.24em] text-brass uppercase">{l.for}</p>
              <p className="mt-3 text-sm text-muted-foreground">{l.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="mt-20">
        <h2 className="text-xl tracking-[0.1em] uppercase">Shutter Finishes</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {finishes.map((f) => (
            <article key={f.name} className="border-t border-border pt-5">
              <h3 className="text-sm tracking-[0.16em] uppercase">{f.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{f.detail}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-16 text-xl tracking-[0.1em] uppercase">Core Materials & Hardware</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cores.map((c) => (
            <article key={c.name} className="border-t border-border pt-5">
              <h3 className="text-sm tracking-[0.16em] uppercase">{c.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-20">
        <h2 className="text-xl tracking-[0.1em] uppercase">Modular Kitchens We Have Built</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.src}>
              <img
                src={g.src}
                alt={`${g.title} — modular kitchen in ${g.location} by Dimensions Designs Interior`}
                width={1600}
                height={1000}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <figcaption className="mt-4">
                <h3 className="text-sm tracking-[0.16em] uppercase">{g.title}</h3>
                <p className="mt-1 text-[0.68rem] tracking-[0.24em] text-brass uppercase">{g.location}</p>
                <p className="mt-2 text-sm text-muted-foreground">{g.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-20">
        <h2 className="text-xl tracking-[0.1em] uppercase">How Your Kitchen Gets Built</h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.step} className="border-t border-border pt-5">
              <span className="font-display text-brass text-2xl">{s.step}</span>
              <h3 className="mt-3 text-sm tracking-[0.16em] uppercase">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <h2 className="text-xl tracking-[0.1em] uppercase">Modular Kitchen FAQs</h2>
        <div className="mt-8 max-w-3xl divide-y divide-border">
          {faqs.map((f) => (
            <article key={f.q} className="py-6">
              <h3 className="font-display text-lg tracking-[0.04em]">{f.q}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="kitchen-consultation" className="mt-20 scroll-mt-24 border-t border-border pt-12">
        <p className="text-[0.68rem] tracking-[0.32em] text-brass uppercase">Kitchen Consultation</p>
        <h2 className="font-display mt-4 text-3xl tracking-[0.06em] uppercase">
          Get A Modular Kitchen Design & Quote
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Share a few details and we will arrange a site measurement in Lucknow, then present layout
          options, materials and a line-item quote for your kitchen.
        </p>
        <div className="mt-10 max-w-2xl">
          <ConsultationForm />
        </div>
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          to="/services/$slug"
          params={{ slug: "modular-kitchens" }}
          className="btn-outline border-border text-muted-foreground"
        >
          Modular Kitchens Service
        </Link>
        <Link to="/services" className="btn-outline border-border text-muted-foreground">
          All Services
        </Link>
        <Link to="/projects" className="btn-outline border-border text-muted-foreground">
          View Projects
        </Link>
        <Link to="/portfolio" className="btn-outline border-border text-muted-foreground">
          Portfolio Photos
        </Link>
      </div>
    </PageShell>
  );
}
