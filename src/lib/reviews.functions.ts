import { createServerFn } from "@tanstack/react-start";

import { reviewSchema } from "@/lib/reviews.schema";

export const submitReview = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => reviewSchema.parse(data))
  .handler(async ({ data }) => {
    const { MIN_FILL_MS } = await import("@/lib/reviews.schema");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    if (data.honeypot) {
      throw new Error("Submission rejected.");
    }

    if (data.elapsedMs < MIN_FILL_MS) {
      throw new Error("That was submitted a bit too fast. Please try again.");
    }

    // Contact-level rate limit: max 3 reviews per email per 24 hours.
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("site_reviews")
      .select("id", { count: "exact", head: true })
      .eq("email", data.email)
      .gte("created_at", since);

    if (countError) {
      console.error("Review rate-limit check failed", countError.message);
      throw new Error("Could not submit your review. Please try again.");
    }

    if ((count ?? 0) >= 3) {
      throw new Error("You have already submitted a review recently. Thank you!");
    }

    const { error } = await supabaseAdmin.from("site_reviews").insert({
      name: data.name,
      email: data.email,
      location: data.location || null,
      project_type: data.projectType,
      rating: data.rating,
      review: data.review,
    });

    if (error) {
      console.error("Failed to store review", error.message);
      throw new Error("Could not submit your review. Please try again.");
    }

    return { ok: true };
  });
