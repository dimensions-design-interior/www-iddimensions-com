import { Instagram, Mail, MapPin, MessageCircle, Phone, Globe } from "lucide-react";

import { GoogleReviewLink, GoogleVerifiedBusinessBadge } from "@/components/site/GoogleBusinessProfile";
import { STUDIO_ADDRESS, BUSINESS_PHONE, BUSINESS_TELEPHONE } from "@/lib/seo/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl tracking-[0.2em] uppercase">
              Dimensions Designs Interior
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
              Interior Design | Turnkey Projects | Residential | Commercial | Retail | Hospitality
            </p>
          </div>

          <div>
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-brass">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col items-start gap-3">
              <GoogleVerifiedBusinessBadge dark />
              <GoogleReviewLink dark />
            </div>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              <li>
                <a
                  href="https://wa.me/919670001155?text=Hi%2C%20I%27m%20interested%20in%20a%20consultation%20for%20my%20interior%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-brass"
                >
                  <MessageCircle aria-hidden="true" className="size-4 shrink-0 text-brass" />
                  WhatsApp: {BUSINESS_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_TELEPHONE}`}
                  className="flex items-center gap-3 transition-colors hover:text-brass"
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0 text-brass" />
                  {BUSINESS_PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@iddimensions.com"
                  className="flex items-center gap-3 transition-colors hover:text-brass"
                >
                  <Mail aria-hidden="true" className="size-4 shrink-0 text-brass" />
                  info@iddimensions.com
                </a>
              </li>
              <li>
                <a
                  href="https://iddimensions.com"
                  className="flex items-center gap-3 transition-colors hover:text-brass"
                  rel="noreferrer"
                >
                  <Globe aria-hidden="true" className="size-4 shrink-0 text-brass" />
                  iddimensions.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/iddimensions"
                  target="_blank"
                  className="flex items-center gap-3 transition-colors hover:text-brass"
                  rel="noreferrer"
                  aria-label="Instagram @iddimensions"
                >
                  <Instagram aria-hidden="true" className="size-4 shrink-0 text-brass" />
                  Instagram: @iddimensions
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2 leading-relaxed text-ink-foreground/50">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brass/70" />
                <span>{STUDIO_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-brass/15 pt-6 text-[0.7rem] tracking-[0.18em] text-ink-foreground/40 uppercase">
          © 2026 Dimensions Designs Interior. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
