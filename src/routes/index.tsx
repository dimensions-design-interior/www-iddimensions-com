import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroInterior from "@/assets/hero-interior.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import beforeRoom from "@/assets/before-room.jpg";
import afterRoom from "@/assets/after-room.jpg";

const SITE_URL = "https://interior-essence-editor.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Interior Design & Turnkey Interiors in Lucknow | Dimensions" },
      {
        name: "description",
        content:
          "Dimensions Designs Interior delivers premium interior design and turnkey solutions for homes, villas, offices, showrooms and hospitality spaces in Lucknow.",
      },
      {
        property: "og:title",
        content: "Dimensions Designs Interior | Designing Spaces. Defining Experiences.",
      },
      {
        property: "og:description",
        content:
          "Concept to completion interiors for homes, villas, offices, showrooms and hospitality projects in Lucknow and across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Dimensions Designs Interior | Designing Spaces. Defining Experiences.",
      },
      {
        name: "twitter:description",
        content:
          "Premium interior design and turnkey interior solutions in Lucknow, Uttar Pradesh and across India.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesigner",
          name: "Dimensions Designs Interior",
          url: SITE_URL,
          email: "info@iddimension.com",
          telephone: "+91-9670001155",
          description:
            "Premium interior design and turnkey interior solutions for residential, commercial, retail and hospitality spaces.",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Skylark Plaza, Ground Floor, Shop No. 09, Skyline Plaza, near Lulu Mall Road, Golf City",
            addressLocality: "Lucknow",
            addressRegion: "Uttar Pradesh",
            postalCode: "226030",
            addressCountry: "IN",
          },
          areaServed: "India",
        }),
      },
    ],
  }),
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

const filters = ["Residential", "Commercial", "Retail", "Hospitality"] as const;

const projects = [
  {
    name: "Gomti Nagar Residence",
    location: "Lucknow",
    type: "Residential",
    image: projectResidential,
  },
  {
    name: "Hazratganj Workspace",
    location: "Lucknow",
    type: "Commercial",
    image: projectCommercial,
  },
  {
    name: "Aurum Showroom",
    location: "Lucknow",
    type: "Retail",
    image: projectRetail,
  },
  {
    name: "The Verandah Lounge",
    location: "Uttar Pradesh",
    type: "Hospitality",
    image: projectHospitality,
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
    title: "Design That Is Personal",
    body: "Every project is developed around the client's requirements—not a one-size-fits-all template.",
  },
  {
    title: "End-To-End Execution",
    body: "From design to installation and finishing, we provide a complete turnkey experience.",
  },
  {
    title: "Attention To Detail",
    body: "From lighting and materials to furniture, finishes and spatial planning, every detail matters.",
  },
  {
    title: "Quality-Focused",
    body: "We carefully select materials, finishes and execution methods to achieve lasting results.",
  },
  {
    title: "Professional Project Management",
    body: "A coordinated approach keeps design, vendors, execution and timelines aligned.",
  },
  {
    title: "Function Meets Aesthetics",
    body: "Our spaces are designed to look exceptional while remaining practical for everyday use.",
  },
];

function Index() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Residential");
  const visible = projects.filter((p) => p.type === activeFilter);

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
            Designing Spaces.
            <br />
            Defining Experiences.
          </h1>
          <p className="mt-8 max-w-xl text-base tracking-wide text-brass-soft">
            Premium Interior Design &amp; Turnkey Interior Solutions
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-foreground/70">
            From concept to completion, we design and execute sophisticated residential, commercial
            and hospitality interiors with a focus on aesthetics, functionality and quality.
          </p>
          <p className="mt-8 text-[0.7rem] tracking-[0.28em] text-ink-foreground/50 uppercase">
            Lucknow, Uttar Pradesh | Across India
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-solid">
              View Our Projects
            </a>
            <a href="#contact" className="btn-outline text-ink-foreground">
              Get A Consultation
            </a>
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
              We offer complete interior design and turnkey solutions for homes, villas, offices,
              retail spaces and hospitality projects.
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
            Complete Interior Solutions. One Trusted Partner.
          </h2>
          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group bg-background p-9 transition-colors duration-500 hover:bg-ink"
              >
                <div className="rule-thin" />
                <h3 className="mt-7 text-lg tracking-[0.12em] uppercase transition-colors group-hover:text-ink-foreground">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-ink-foreground/65">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <p className="eyebrow">Featured Projects</p>
        <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">
          Spaces We Have Transformed
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Explore a selection of our residential, commercial, retail and hospitality projects.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={
                f === activeFilter
                  ? "btn-solid"
                  : "btn-outline border-border text-muted-foreground"
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {visible.map((p) => (
            <article key={p.name} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.type.toLowerCase()} interior project in ${p.location}`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-[26rem] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border py-6">
                <div>
                  <h3 className="text-xl tracking-[0.1em] uppercase">{p.name}</h3>
                  <p className="mt-2 text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
                    {p.location} | {p.type}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="text-[0.68rem] font-semibold tracking-[0.24em] text-brass uppercase"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
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
        <p className="eyebrow">Why Dimensions Designs</p>
        <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">Built Around Your Vision</h2>
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
            See how thoughtful design and professional execution can completely transform a space.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              { label: "Before", image: beforeRoom, alt: "Bare unfinished room before interior work" },
              {
                label: "After",
                image: afterRoom,
                alt: "Finished modular kitchen with island and brass fittings",
              },
            ].map((item) => (
              <figure key={item.label} className="relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-[24rem] w-full object-cover"
                />
                <figcaption className="absolute top-0 left-0 bg-ink px-5 py-3 text-[0.66rem] font-semibold tracking-[0.28em] text-brass uppercase">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12">
            <a href="#projects" className="btn-solid">
              Explore Transformations
            </a>
          </div>
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

      {/* TESTIMONIALS */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <p className="eyebrow">Client Testimonials</p>
          <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">What Our Clients Say</h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {[
              {
                quote:
                  "A professional approach from design to execution. The team understood our requirements and delivered a beautiful space.",
                author: "Residential Client",
              },
              {
                quote:
                  "The attention to detail and quality of execution made the entire experience smooth and professional.",
                author: "Commercial Client",
              },
            ].map((t) => (
              <blockquote key={t.author} className="bg-background p-10">
                <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                  “{t.quote}”
                </p>
                <footer className="mt-8 text-[0.68rem] tracking-[0.26em] text-brass uppercase">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

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
          <div className="mt-10 flex justify-center">
            <a href="tel:9670001155" className="btn-solid">
              Start Your Project
            </a>
          </div>
          <p className="mt-10 text-sm tracking-[0.2em] text-brass uppercase">
            <a href="mailto:info@iddimension.com">info@iddimension.com</a>
          </p>
          <p className="mt-2 text-sm tracking-[0.2em] text-brass uppercase">Call: 9670001155</p>
          <p className="mt-3 text-[0.7rem] tracking-[0.26em] text-ink-foreground/45 uppercase">
            Lucknow, Uttar Pradesh | Across India
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
