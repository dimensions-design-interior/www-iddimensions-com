import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { services } from "@/lib/seo/catalog";
import { absoluteUrl, breadcrumbSchema, buildSeo, homeAndConstructionBusinessSchema } from "@/lib/seo/site";

export const Route = createFileRoute("/services/")({
  head: () =>
    buildSeo({
      title: "Interior Design Services in Lucknow",
      description:
        "Explore our interior design services — residential and villa interiors, modular kitchens, wardrobes, commercial, retail and hospitality interiors, and turnkey projects.",
      path: "/services",
      image: "/og/hero-interior.jpg",
      imageAlt: "Premium interior designed by Dimensions Designs Interior",
      jsonLd: [
        homeAndConstructionBusinessSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Interior Design Services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: absoluteUrl(`/services/${s.slug}`),
          })),
        },
      ],
    }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <PageShell
      eyebrow="Our Services"
      title="Complete Interior Solutions. One Trusted Partner."
      intro="From single-room upgrades to complete turnkey fit-outs, every service is delivered by one team — design, materials, execution and handover."
    >
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.slug} className="border border-border">
            <img
              src={s.image}
              alt={`${s.title} by Dimensions Designs Interior`}
              loading="lazy"
              width={1200}
              height={900}
              className="h-56 w-full object-cover"
            />
            <div className="p-7">
              <h2 className="text-xl tracking-[0.1em] uppercase">{s.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="mt-5 inline-block text-[0.68rem] font-semibold tracking-[0.24em] text-brass uppercase"
              >
                View Service
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
