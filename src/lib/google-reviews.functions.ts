import { createServerFn } from "@tanstack/react-start";

const GATEWAY = "https://connector-gateway.lovable.dev/google_maps";
const PLACE_ID = "ChIJfdLZH3blmzkRF9YmT7a3E14";
const CACHE_TTL_MS = 60 * 60 * 1000;

export type GoogleReview = {
  author: string;
  rating: number;
  quote: string;
  role: string;
  relativeTime?: string;
};

let cache: { at: number; data: GoogleReview[] | null } | null = null;

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReview[] | null> => {
    if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
      return cache.data;
    }

    const apiKey = process.env["LOVABLE_API_KEY"];
    const connKey = process.env["GOOGLE_MAPS_API_KEY"];
    if (!apiKey || !connKey) {
      return null;
    }

    try {
      const response = await fetch(
        `${GATEWAY}/places/v1/places/${encodeURIComponent(PLACE_ID)}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "X-Connection-Api-Key": connKey,
            "X-Goog-FieldMask": "rating,userRatingCount,reviews",
          },
        },
      );

      if (response.status === 403) {
        console.error("Google reviews request denied (403) — check the Maps server key restrictions.");
        cache = { at: Date.now(), data: null };
        return null;
      }

      if (!response.ok) {
        console.error(`Google reviews request failed [${response.status}]`);
        cache = { at: Date.now(), data: null };
        return null;
      }

      const data = (await response.json()) as {
        reviews?: Array<{
          rating?: number;
          relativePublishTimeDescription?: string;
          text?: { text?: string };
          authorAttribution?: { displayName?: string };
        }>;
      };

      const reviews: GoogleReview[] = (data.reviews ?? [])
        .filter((r) => (r.text?.text ?? "").trim().length > 0)
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? "Google reviewer",
          rating: Math.round(r.rating ?? 5),
          quote: r.text?.text ?? "",
          role: "Google Review",
          relativeTime: r.relativePublishTimeDescription,
        }));

      cache = { at: Date.now(), data: reviews };
      return reviews;
    } catch (error) {
      console.error("Google reviews fetch failed", error);
      return null;
    }
  },
);
