import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

import { ConsultationForm } from "@/components/site/ConsultationForm";
import { DesignBriefTool } from "@/components/site/DesignBriefTool";
import {
  GoogleReviewLink,
  GoogleVerifiedBusinessBadge,
  StudioMap,
} from "@/components/site/GoogleBusinessProfile";
import { PageShell } from "@/components/site/PageShell";
import {
  GOOGLE_BUSINESS_URL,
  GOOGLE_DIRECTIONS_URL,
  breadcrumbSchema,
  buildSeo,
  homeAndConstructionBusinessSchema,
} from "@/lib/seo/site";

const ADDRESS =
  "Ground Floor Shop No. 09, Skylark Plaza, near Lulu Mall Road, Golf City, Lucknow, Hariharpur, Uttar Pradesh 226030, India";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeo({
      title: "Contact Interior Designers in Lucknow",
      description:
        "Contact Dimensions Designs Interior at Skylark Plaza, Lucknow. Book a consultation for home interiors, luxury villas, modular kitchens or commercial spaces.",
      path: "/contact",
      imageAlt: "Dimensions Designs Interior studio in Lucknow",
      jsonLd: [
        homeAndConstructionBusinessSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact · Lucknow"
      title="Contact Dimensions Designs Interior"
      intro="Discuss your home, villa, modular kitchen, office, retail or hospitality interior project with our Lucknow design team."
    >
      <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <section aria-labelledby="studio-details">
          <h2 id="studio-details" className="text-xl tracking-[0.1em] uppercase">
            Visit Our Lucknow Studio
          </h2>
          <div className="mt-7 space-y-6 border-t border-border pt-7 text-sm text-muted-foreground">
            <div className="flex items-start gap-4">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brass" />
              <address className="not-italic leading-relaxed">{ADDRESS}</address>
            </div>
            <a href="tel:+919670001155" className="flex items-center gap-4 hover:text-foreground">
              <Phone aria-hidden="true" className="size-5 shrink-0 text-brass" />
              +91 96700 01155
            </a>
            <a
              href="mailto:info@iddimension.com"
              className="flex items-center gap-4 hover:text-foreground"
            >
              <Mail aria-hidden="true" className="size-5 shrink-0 text-brass" />
              info@iddimension.com
            </a>
            <div className="flex items-start gap-4">
              <Clock3 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brass" />
              <p>Monday–Sunday, 9:00 AM–5:00 PM</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={GOOGLE_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-solid inline-flex items-center gap-2"
            >
              <Navigation aria-hidden="true" className="size-4 shrink-0" />
              Get Directions
            </a>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 border-border text-muted-foreground"
            >
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              View Google Profile
            </a>
            <a
              href="https://wa.me/919670001155?text=Hi%2C%20I%27d%20like%20to%20book%20an%20interior%20design%20consultation."
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 border-border text-muted-foreground"
            >
              <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
              WhatsApp
            </a>
            <GoogleReviewLink />
          </div>

          <div className="mt-8">
            <GoogleVerifiedBusinessBadge />
          </div>

          <div className="mt-10 border-l-2 border-brass pl-5">
            <p className="text-[0.68rem] tracking-[0.24em] text-brass uppercase">Service Area</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Lucknow and surrounding areas, including Golf City, Gomti Nagar, Shaheed Path,
              Sushant Golf City and across Uttar Pradesh.
            </p>
          </div>
        </section>

        <section aria-labelledby="consultation-form" className="bg-ink px-6 py-9 text-ink-foreground sm:px-10">
          <p className="eyebrow">Start A Project</p>
          <h2 id="consultation-form" className="font-display mt-4 text-2xl tracking-[0.06em] uppercase">
            Book A Design Consultation
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/65">
            Share your property type, city, area, budget and timeline to request a consultation or project quote.
          </p>
          <ConsultationForm />
        </section>
      </div>

      <section className="mt-16" aria-labelledby="design-brief-title">
        <p className="eyebrow">AI Design Brief</p>
        <h2 id="design-brief-title" className="font-display mt-4 mb-6 text-2xl tracking-[0.06em] uppercase sm:text-3xl">
          Get Your Tailored Consultation Brief
        </h2>
        <DesignBriefTool />
      </section>


      <section className="mt-16" aria-labelledby="studio-map-title">
        <p className="eyebrow">Find Our Studio</p>
        <h2 id="studio-map-title" className="font-display mt-4 text-2xl tracking-[0.06em] uppercase sm:text-3xl">
          Skylark Plaza, Lucknow
        </h2>
        <div className="mt-7">
          <StudioMap />
        </div>
      </section>
    </PageShell>
  );
}