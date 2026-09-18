import { createServerFn } from "@tanstack/react-start";

const GATEWAY = "https://connector-gateway.lovable.dev/google_maps";
const PLACE_ID = "ChIJfdLZH3blmzkRF9YmT7a3E14";
const CACHE_TTL_MS = 60 * 60 * 1000;

export type GoogleReview = {
  author: string;
  rating: number;
  quote: string;
  role: string;
  relativeTime?: string | undefined;
};

export type GoogleReviewSnapshot = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
};

let cache: { at: number; data: GoogleReview[] | null } | null = null;
let snapshotCache: { at: number; data: GoogleReviewSnapshot | null } | null = null;

async function fetchGoogleReviewSnapshot(): Promise<GoogleReviewSnapshot | null> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  const connKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!apiKey || !connKey) return null;

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

    if (!response.ok) {
      console.error(`Google reviews request failed [${response.status}]`);
      return null;
    }

    const data = (await response.json()) as {
      rating?: number;
      userRatingCount?: number;
      reviews?: Array<{
        rating?: number;
        relativePublishTimeDescription?: string;
        text?: { text?: string };
        authorAttribution?: { displayName?: string };
      }>;
    };

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .filter((review) => (review.text?.text ?? "").trim().length > 0)
      .map((review) => ({
        author: review.authorAttribution?.displayName ?? "Google reviewer",
        rating: Math.round(review.rating ?? 5),
        quote: review.text?.text ?? "",
        role: "Google Review",
        relativeTime: review.relativePublishTimeDescription,
      }));

    return {
      rating: data.rating ?? 5,
      reviewCount: data.userRatingCount ?? reviews.length,
      reviews,
    };
  } catch (error) {
    console.error("Google reviews fetch failed", error);
    return null;
  }
}

export const getGoogleReviewSnapshot = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewSnapshot | null> => {
    if (snapshotCache && Date.now() - snapshotCache.at < CACHE_TTL_MS) {
      return snapshotCache.data;
    }

    const data = await fetchGoogleReviewSnapshot();
    snapshotCache = { at: Date.now(), data };
    return data;
  },
);

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReview[] | null> => {
    if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
      return cache.data;
    }

    const snapshot = await fetchGoogleReviewSnapshot();
    const reviews = snapshot?.reviews ?? null;
    cache = { at: Date.now(), data: reviews };
    return reviews;
  },
);
