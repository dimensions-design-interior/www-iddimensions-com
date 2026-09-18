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
      title: "Interior Design Portfolio — Completed Project Photos",
      description:
        "Photo portfolio of completed interior projects in Lucknow — turnkey homes, villa interiors, modular kitchens, offices, showrooms and hospitality spaces.",
      path: "/portfolio",
      image: "/og/hero-interior.jpg",
      imageAlt: "Completed luxury living room interior by Dimensions Designs Interior",
      jsonLd: [
        homeAndConstructionBusinessSchema(),
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
      title="Photographs Of Completed Interiors"
      intro="A photo gallery of interiors we have designed and executed across Lucknow and Uttar Pradesh — homes, modular kitchens, offices, showrooms and hospitality spaces."
    >
      <PortfolioGallery />

      <PortfolioTestimonials />

      <div className="mt-16 flex flex-wrap gap-3">
        <Link to="/projects" className="btn-outline border-border text-muted-foreground">
          Project Case Studies
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
