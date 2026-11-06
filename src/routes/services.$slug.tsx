import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { getService, lucknowAreas, lucknowServiceNotes, services } from "@/lib/seo/catalog";
import { absoluteUrl, breadcrumbSchema, buildSeo, businessRef, homeAndConstructionBusinessSchema } from "@/lib/seo/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData?.service;
    if (!service) {
      return {
        meta: [{ title: "Service Unavailable | Dimensions Designs & Interior" }, { name: "robots", content: "noindex" }],
      };
    }
    return buildSeo({
      title: service.slug === "interior-designer-lucknow" ? service.title : `${service.title} in Lucknow`,
      description: service.seoIntro,
      path: `/services/${params.slug}`,
      image: service.image,
      imageAlt: `Illustrative ${service.title.toLowerCase()} design concept`,
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description: service.seoIntro,
          url: absoluteUrl(`/services/${service.slug}`),
          areaServed: [{ "@type": "City", name: "Lucknow" }, { "@type": "Country", name: "India" }],
          provider: businessRef,
        },
      ],
    });
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <PageShell eyebrow="Interior Design Service · Lucknow" title={service.slug === "interior-designer-lucknow" ? service.title : `${service.title} In Lucknow`} intro={service.seoIntro}>
      <img
        src={service.image}
        alt={`Illustrative ${service.title.toLowerCase()} design concept`}
        width={1600}
        height={1000}
        className="mt-12 h-[28rem] w-full object-cover"
      />

      <p className="mt-3 text-xs text-muted-foreground">Illustrative design concept; not a photograph of completed client work.</p>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl tracking-[0.1em] uppercase">What's Included</h2>
          <ul className="mt-6 space-y-3">
            {service.highlights.map((h) => (
              <li key={h} className="border-b border-border pb-3 text-sm text-muted-foreground">
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl tracking-[0.1em] uppercase">Start Your Project</h2>
          <p className="mt-6 text-sm text-muted-foreground">Our Lucknow studio accepts projects in cities across India. Share your city, property type, approximate area, budget and timeline. Our team will discuss the materials, execution scope and site arrangements before providing a project-specific quote.</p>
          {service.slug === "modular-kitchens" && (
            <p className="mt-4 text-sm text-muted-foreground">
              See layouts, shutter finishes and project pricing on our{" "}
              <Link
                to="/modular-kitchen-lucknow"
                className="text-foreground underline underline-offset-4"
              >
                modular kitchen Lucknow page
              </Link>
              .
            </p>
          )}
          <Link to="/contact" className="btn-solid mt-7">Request a Consultation</Link>
          <Link to="/contact" hash="consultation-form" className="btn-outline mt-3 border-border text-muted-foreground">Get a Project Quote</Link>
        </div>
      </div>

      <section className="mt-16 grid gap-10 md:grid-cols-3">
        {service.details?.map((section) => <div key={section.title} className="border-t border-border pt-6"><h2 className="text-xl">{section.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{section.text}</p></div>)}
      </section>
      {lucknowServiceNotes[service.slug] && (
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl tracking-[0.1em] uppercase">{lucknowServiceNotes[service.slug]!.heading}</h2>
          {lucknowServiceNotes[service.slug]!.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">{p}</p>
          ))}
          <h3 className="mt-10 text-lg">Common Questions From Lucknow Clients</h3>
          <dl className="mt-4 space-y-5">
            {lucknowServiceNotes[service.slug]!.faqs.map((f) => (
              <div key={f.q} className="border-b border-border pb-4">
                <dt className="text-sm text-foreground">{f.q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      <p className="mt-12 text-sm text-muted-foreground">
        Serving {lucknowAreas.slice(0, 8).join(", ")} and neighbourhoods across Lucknow, with projects accepted in other cities across India.
      </p>
      <div className="mt-12 flex flex-wrap gap-4"><Link to="/portfolio" className="text-sm underline underline-offset-4">Explore interior design inspiration</Link><Link to="/projects" className="text-sm underline underline-offset-4">View design concepts</Link></div>
      <h2 className="mt-20 text-xl tracking-[0.1em] uppercase">Other Services</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {services
          .filter((s) => s.slug !== service.slug)
          .map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="btn-outline border-border text-muted-foreground"
            >
              {s.title}
            </Link>
          ))}
      </div>
    </PageShell>
  );
}
