import { useEffect, useState } from "react";

import { useServerFn } from "@tanstack/react-start";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

import { ReviewForm } from "@/components/site/ReviewForm";
import { getGoogleReviews } from "@/lib/google-reviews.functions";


type Review = {
  quote: string;
  author: string;
  role: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    quote:
      "A professional approach from design to execution. The team understood our requirements and delivered a beautiful space that works perfectly for our family.",
    author: "Ankit Srivastava",
    role: "Residence, Gomti Nagar",
    rating: 5,
  },
  {
    quote:
      "The attention to detail and quality of execution made the entire experience smooth. Our office now reflects exactly the brand we wanted to present.",
    author: "Neha Kapoor",
    role: "Office, Hazratganj",
    rating: 5,
  },
  {
    quote:
      "Our modular kitchen was delivered on time with excellent finishes. Storage planning was thoughtful and every inch is used well.",
    author: "Rohit Mehra",
    role: "Modular Kitchen, Golf City",
    rating: 5,
  },
  {
    quote:
      "From concept drawings to the final handover, communication was clear and timelines were respected. Highly recommended for turnkey work.",
    author: "Sana Qureshi",
    role: "Showroom, Lucknow",
    rating: 4,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={
            i < rating
              ? "size-3.5 fill-brass text-brass"
              : "size-3.5 text-muted-foreground/40"
          }
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [clientReviews, setClientReviews] = useState<Review[]>([]);
  const [googleReviews, setGoogleReviews] = useState<Review[]>([]);
  const fetchGoogle = useServerFn(getGoogleReviews);

  useEffect(() => {
    let active = true;

    supabase
      .from("site_reviews")
      .select("name, location, project_type, rating, review")
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .limit(12)
      .then(({ data }) => {
        if (!active || !data) return;
        setClientReviews(
          data.map((r) => ({
            quote: r.review,
            author: r.name,
            role: [r.project_type, r.location].filter(Boolean).join(", "),
            rating: r.rating,
          })),
        );
      });

    fetchGoogle().then((data) => {
      if (!active || !data) return;
      setGoogleReviews(
        data.map((r) => ({
          quote: r.quote,
          author: r.author,
          role: r.relativeTime ? `Google Review · ${r.relativeTime}` : r.role,
          rating: r.rating,
        })),
      );
    });

    return () => {
      active = false;
    };
  }, [fetchGoogle]);


  const allReviews = [...googleReviews, ...clientReviews, ...reviews];
  const average =
    Math.round((allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length) * 10) / 10;

  return (
    <section id="reviews" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <p className="eyebrow">Client Reviews</p>
        <h2 className="display-xl mt-6 text-3xl sm:text-4xl lg:text-5xl">
          What Our Clients Say
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Stars rating={Math.round(average)} />
          <p className="text-[0.7rem] tracking-[0.26em] text-muted-foreground uppercase">
            {average.toFixed(1)} average from {reviews.length} client reviews
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
          {reviews.map((r) => (
            <blockquote key={r.author} className="flex flex-col bg-background p-10">
              <Stars rating={r.rating} />
              <p className="font-display mt-6 text-xl leading-relaxed text-foreground sm:text-2xl">
                “{r.quote}”
              </p>
              <footer className="mt-8">
                <p className="text-[0.68rem] tracking-[0.26em] text-brass uppercase">
                  {r.author}
                </p>
                <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {r.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16" id="write-review">
          <ReviewForm />
        </div>

      </div>
    </section>
  );
}
