import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { PortfolioGallery } from "@/components/site/PortfolioGallery";
import { PortfolioTestimonials } from "@/components/site/PortfolioTestimonials";
import { portfolioPhotos } from "@/lib/portfolio";
import { absoluteUrl, breadcrumbSchema, buildSeo, homeAndConstructionBusinessSchema } from "@/lib/seo/site";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    buildSeo({
      title: "Interior Design Inspiration — Homes, Kitchens & Offices",
      description:
        "Explore illustrative home, villa, kitchen, office and commercial design ideas. Plan your project with our Lucknow studio, serving cities across India.",
      path: "/portfolio",
      image: "/og/hero-interior.jpg",
      imageAlt: "Illustrative oak-and-brass living room interior",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Dimensions Designs Interior Portfolio",
          url: absoluteUrl("/portfolio"),
          image: portfolioPhotos.map((p) => absoluteUrl(p.image)),
        },
      ],
    }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Interior Design Inspiration"
      intro="Illustrative design examples for homes, kitchens, offices and hospitality spaces — not photographs of completed client projects."
    >
      <PortfolioGallery />

      <section className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl tracking-[0.1em] uppercase">Design Ideas For Lucknow Homes</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            As interior designers in Lucknow, we use these concepts to start conversations about layout, materials and
            mood. Apartments in Gomti Nagar and Sushant Golf City often suit warm oak, brass accents and built-in storage,
            while villas around Golf City and Shaheed Path can carry double-height living rooms and statement lighting.
          </p>
        </div>
        <div>
          <h2 className="text-xl tracking-[0.1em] uppercase">Modular Kitchens And Workspaces</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            The kitchen ideas here show the finishes we plan for modular kitchens in Lucknow — moisture-resistant boards,
            durable laminates and branded hardware. Office and retail concepts reflect the practical needs of workspaces
            in Hazratganj and Gomti Nagar. Every project is designed from your own site measurements and estimate.
          </p>
        </div>
      </section>

      <PortfolioTestimonials />


      <div className="mt-16 flex flex-wrap gap-3">
        <Link to="/projects" className="btn-outline border-border text-muted-foreground">
          Design Concepts
        </Link>
        <Link
          to="/modular-kitchen-lucknow"
          className="btn-outline border-border text-muted-foreground"
        >
          Modular Kitchens In Lucknow
        </Link>
        <a
          href="https://wa.me/919670001155?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20a%20consultation."
          target="_blank"
          rel="noreferrer"
          className="btn-solid inline-flex items-center gap-2"
        >
          <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
          Get A Consultation
        </a>
        <Link to="/contact" className="btn-outline border-border text-muted-foreground">
          Contact The Studio
        </Link>
      </div>
    </PageShell>
  );
}
