import { useEffect, useState } from "react";

import { useServerFn } from "@tanstack/react-start";
import { ExternalLink, Star } from "lucide-react";

import { getGoogleReviewSnapshot, type GoogleReviewSnapshot } from "@/lib/google-reviews.functions";
import { GOOGLE_BUSINESS_URL } from "@/lib/seo/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" className={index < Math.round(rating) ? "size-4 fill-brass text-brass" : "size-4 text-muted-foreground"} />
      ))}
    </div>
  );
}

export function PortfolioTestimonials() {
  const [snapshot, setSnapshot] = useState<GoogleReviewSnapshot | null>(null);
  const fetchSnapshot = useServerFn(getGoogleReviewSnapshot);

  useEffect(() => {
    let active = true;
    fetchSnapshot().then((data) => {
      if (active && data) setSnapshot(data);
    }).catch(() => { /* Do not invent fallback ratings. */ });
    return () => {
      active = false;
    };
  }, [fetchSnapshot]);

  if (!snapshot || snapshot.reviews.length === 0) return null;

  return (
    <section className="mt-24 border-y border-border py-20" aria-labelledby="portfolio-reviews-title">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="eyebrow">Google Reviews</p>
          <h2 id="portfolio-reviews-title" className="display-xl mt-6 text-3xl sm:text-4xl">
            What Clients Say On Google.
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <span className="font-display text-5xl text-foreground">{snapshot.rating.toFixed(1)}</span>
            <div>
              <Stars rating={snapshot.rating} />
              <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                {snapshot.reviewCount} reviews on Google
              </p>
            </div>
          </div>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-outline mt-8 inline-flex items-center gap-2 border-border text-muted-foreground"
          >
            Read All Google Reviews
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2">
          {snapshot.reviews.map((review, index) => (
            <blockquote key={`${review.author}-${index}`} className="flex min-h-72 flex-col bg-background p-8">
              <Stars rating={review.rating} />
              <p className="font-display mt-6 whitespace-pre-line text-xl leading-relaxed text-foreground">
                “{review.quote}”
              </p>
              <footer className="mt-auto pt-8">
                <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-brass uppercase">
                  {review.author}
                </p>
                <p className="mt-2 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                  Google Review{review.relativeTime ? ` · ${review.relativeTime}` : ""}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}