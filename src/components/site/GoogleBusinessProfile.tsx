import { BadgeCheck, MapPin, Star } from "lucide-react";

import { GOOGLE_BUSINESS_URL, GOOGLE_REVIEW_URL } from "@/lib/seo/site";

export function GoogleVerifiedBusinessBadge({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={GOOGLE_BUSINESS_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 border px-4 py-3 text-left transition-colors ${
        dark
          ? "border-brass/35 text-ink-foreground hover:border-brass hover:text-brass-soft"
          : "border-border text-foreground hover:border-brass hover:text-brass"
      }`}
      aria-label="View Dimensions Design Interior on Google Maps"
    >
      <BadgeCheck aria-hidden="true" className="size-5 shrink-0 text-brass" />
      <span>
        <span className="block text-[0.66rem] font-semibold tracking-[0.2em] uppercase">
          Google Verified Business
        </span>
        <span className={`mt-1 block text-xs ${dark ? "text-ink-foreground/55" : "text-muted-foreground"}`}>
          Dimensions Design Interior · Lucknow
        </span>
      </span>
    </a>
  );
}

export function GoogleReviewLink({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noreferrer"
      className={dark ? "btn-outline text-ink-foreground" : "btn-outline text-foreground"}
    >
      <Star aria-hidden="true" className="size-4 fill-current" />
      Review Us On Google
    </a>
  );
}

export function StudioMap() {
  return (
    <div className="overflow-hidden border border-border bg-muted" aria-label="Studio location map">
      <iframe
        title="Dimensions Design Interior studio at Skylark Plaza, Lucknow"
        src="https://www.google.com/maps?q=26.784701%2C80.9909038&z=17&output=embed"
        className="h-[320px] w-full border-0 sm:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={GOOGLE_BUSINESS_URL}
        target="_blank"
        rel="noreferrer"
        className="flex items-start gap-3 border-t border-border bg-background px-5 py-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brass" />
        <span>
          Ground Floor Shop No. 09, Skylark Plaza, near Lulu Mall Road, Golf City, Lucknow,
          Uttar Pradesh 226030
        </span>
      </a>
    </div>
  );
}