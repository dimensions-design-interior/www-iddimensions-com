import { useMemo, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

import { StarRating, StarInput } from "@/components/site/StarRating";
import { submitReview } from "@/lib/reviews.functions";
import {
  MAX_REVIEW_LENGTH,
  PROJECT_TYPE_OPTIONS,
  reviewSchema,
} from "@/lib/reviews.schema";

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brass focus:outline-none";

const emptyForm = {
  name: "",
  email: "",
  location: "",
  projectType: "",
  rating: 0,
  review: "",
  honeypot: "",
};

type Errors = Partial<Record<keyof typeof emptyForm, string>>;

export function ReviewForm() {
  const send = useServerFn(submitReview);
  const startedAt = useRef(Date.now());
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const parsed = useMemo(
    () =>
      reviewSchema.safeParse({
        ...form,
        elapsedMs: 999999,
      }),
    [form],
  );

  const clearError = (key: keyof typeof emptyForm) =>
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });

  const update =
    (key: keyof typeof emptyForm) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      clearError(key);
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const payload = {
      ...form,
      elapsedMs: Date.now() - startedAt.current,
    };
    const result = reviewSchema.safeParse(payload);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof typeof emptyForm;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSending(true);
    try {
      await send({ data: result.data });
      setSubmitted(true);
      setForm(emptyForm);
      startedAt.current = Date.now();
      toast.success("Thank you — your review was submitted for approval.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-border bg-background p-10">
        <p className="eyebrow">Review Received</p>
        <p className="font-display mt-5 text-2xl leading-snug text-foreground">
          Thank you for sharing your experience.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Your review is with our team for a quick review and will appear on this page once
          approved.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-outline mt-8"
        >
          Write Another Review
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-px bg-border lg:grid-cols-[1.15fr_0.85fr]">
      <form onSubmit={handleSubmit} noValidate className="bg-background p-8 sm:p-10">
        <p className="eyebrow">Share Your Review</p>
        <h3 className="font-display mt-4 text-2xl tracking-[0.08em] uppercase">
          Tell Us About Your Project
        </h3>

        <div className="mt-8 space-y-5">
          <div>
            <span className="eyebrow block text-[0.62rem]">Your Rating</span>
            <div className="mt-3">
              <StarInput
                value={form.rating}
                onChange={(rating) => {
                  setForm((f) => ({ ...f, rating }));
                  clearError("rating");
                }}
              />
            </div>
            {errors.rating && <p className="mt-2 text-xs text-destructive">{errors.rating}</p>}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="review-name" className="eyebrow block text-[0.62rem]">
                Name
              </label>
              <input
                id="review-name"
                maxLength={80}
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className={`${fieldClass} mt-3`}
              />
              {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="review-email" className="eyebrow block text-[0.62rem]">
                Email (not published)
              </label>
              <input
                id="review-email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className={`${fieldClass} mt-3`}
              />
              {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="review-location" className="eyebrow block text-[0.62rem]">
                Location (optional)
              </label>
              <input
                id="review-location"
                maxLength={80}
                value={form.location}
                onChange={update("location")}
                placeholder="Gomti Nagar, Lucknow"
                className={`${fieldClass} mt-3`}
              />
              {errors.location && (
                <p className="mt-2 text-xs text-destructive">{errors.location}</p>
              )}
            </div>
            <div>
              <label htmlFor="review-type" className="eyebrow block text-[0.62rem]">
                Project Type
              </label>
              <select
                id="review-type"
                value={form.projectType}
                onChange={update("projectType")}
                className={`${fieldClass} mt-3`}
              >
                <option value="">Select project type</option>
                {PROJECT_TYPE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="mt-2 text-xs text-destructive">{errors.projectType}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="review-text" className="eyebrow block text-[0.62rem]">
              Your Review
            </label>
            <textarea
              id="review-text"
              rows={5}
              maxLength={MAX_REVIEW_LENGTH}
              value={form.review}
              onChange={update("review")}
              placeholder="What did we design for you, and how was the experience from concept to handover?"
              className={`${fieldClass} mt-3 resize-none`}
            />
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span className="text-destructive">{errors.review ?? ""}</span>
              <span>
                {form.review.trim().length}/{MAX_REVIEW_LENGTH}
              </span>
            </div>
          </div>

          {/* Spam honeypot — hidden from real users */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="review-website">Website</label>
            <input
              id="review-website"
              tabIndex={-1}
              autoComplete="off"
              value={form.honeypot}
              onChange={update("honeypot")}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="btn-solid disabled:opacity-60"
          >
            {sending ? "Submitting..." : "Submit Review"}
          </button>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Reviews are checked by our team before they appear on the site. Your email is never
            published.
          </p>
        </div>
      </form>

      <aside className="bg-secondary p-8 sm:p-10">
        <p className="eyebrow">Live Preview</p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          This is how your review will appear once approved.
        </p>

        <blockquote className="mt-8 border border-border bg-background p-7">
          <StarRating rating={form.rating} size="md" />
          <p className="font-display mt-5 text-lg leading-relaxed text-foreground">
            “
            {form.review.trim() ||
              "Your review will appear here as you type — share what we designed and how the process felt."}
            ”
          </p>
          <footer className="mt-6">
            <p className="text-[0.68rem] tracking-[0.26em] text-brass uppercase">
              {form.name.trim() || "Your Name"}
            </p>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {[form.projectType, form.location.trim()].filter(Boolean).join(" · ") ||
                "Project · Location"}
            </p>
          </footer>
        </blockquote>

        <p
          className={`mt-6 text-[0.68rem] tracking-[0.22em] uppercase ${
            parsed.success ? "text-brass" : "text-muted-foreground"
          }`}
        >
          {parsed.success ? "Ready to submit" : "Complete the form to submit"}
        </p>
      </aside>
    </div>
  );
}
