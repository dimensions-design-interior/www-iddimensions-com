import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { getService, services } from "@/lib/seo/catalog";
import { absoluteUrl, breadcrumbSchema, buildSeo } from "@/lib/seo/site";

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
        meta: [{ title: "Service Unavailable | Dimensions" }, { name: "robots", content: "noindex" }],
      };
    }
    return buildSeo({
      title: `${service.title} in Lucknow`,
      description: service.seoIntro,
      path: `/services/${params.slug}`,
      image: service.image,
      imageAlt: `${service.title} project by Dimensions Designs Interior`,
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
          areaServed: { "@type": "Place", name: "Lucknow, Uttar Pradesh, India" },
          provider: {
            "@type": "InteriorDesigner",
            name: "Dimensions Designs Interior",
            url: absoluteUrl("/"),
            email: "info@iddimension.com",
            telephone: "+91-9670001155",
          },
        },
      ],
    });
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <PageShell eyebrow="Service" title={service.title} intro={service.body}>
      <img
        src={service.image}
        alt={`${service.title} interior by Dimensions Designs Interior`}
        width={1600}
        height={1000}
        className="mt-12 h-[28rem] w-full object-cover"
      />

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
          <p className="mt-6 text-sm text-muted-foreground">{service.seoIntro}</p>
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
          <a href="/#contact" className="btn-solid mt-7 inline-block">
            Get A Consultation
          </a>
        </div>
      </div>

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
