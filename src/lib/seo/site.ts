export const SITE_URL = "https://www.iddimensions.com";
export const SITE_NAME = "Dimensions Designs Interior";
export const BRAND_SHORT = "Dimensions";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const CONSULTATION_URL = `${SITE_URL}/contact`;
export const GOOGLE_PLACE_ID = "ChIJfdLZH3blmzkRF9YmT7a3E14";
export const STUDIO_COORDINATES = "26.784701,80.9909038";
export const GOOGLE_DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STUDIO_COORDINATES)}&destination_place_id=${GOOGLE_PLACE_ID}`;
export const GOOGLE_BUSINESS_URL =
  "https://maps.google.com/maps?cid=6778963857762604567";
export const GOOGLE_REVIEW_URL =
  `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function clamp(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : `${clean.slice(0, max - 1).trimEnd()}…`;
}

type HeadMeta = { title?: string; name?: string; property?: string; content?: string };

export type SeoTemplateInput = {
  /** Page title without the brand suffix */
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "product";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Builds a complete, consistent head() payload (title, meta description,
 * canonical, Open Graph and Twitter tags) for any page.
 */
export function buildSeo({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  jsonLd,
}: SeoTemplateInput) {
  const fullTitle = `${title} | ${BRAND_SHORT}`;
  const desc = clamp(description);
  const url = absoluteUrl(path);
  const ogImage = image ? (image.startsWith("https://") ? image : absoluteUrl(image)) : undefined;

  const meta: HeadMeta[] = [
    { title: fullTitle },
    { name: "description", content: desc },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: desc },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_IN" },
    ...(ogImage ? [{ property: "og:image", content: ogImage }, { property: "og:image:alt", content: imageAlt ?? title }] : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: desc },
    ...(ogImage ? [{ name: "twitter:image", content: ogImage }] : []),
  ];

  const scripts = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      }))
    : undefined;

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    ...(scripts ? { scripts } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function homeAndConstructionBusinessSchema(
  offers?: { name: string; areaServed?: string }[],
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Dimensions Design Interior",
    url: SITE_URL,
    hasMap: GOOGLE_BUSINESS_URL,
    telephone: "+919670001155",
    email: "info@iddimension.com",
    sameAs: [GOOGLE_BUSINESS_URL, "https://instagram.com/iddimensions"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ground Floor Shop No. 09, Skylark Plaza, near Lulu Mall Road, Golf City, Hariharpur",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226030",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.784701",
      longitude: "80.9909038",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Lucknow" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Interior Design in Lucknow",
      "Turnkey Interior Projects in Lucknow",
      "Residential Interiors in Lucknow",
      "Luxury Villa Interiors in Lucknow",
      "Modular Kitchens in Lucknow",
      "Commercial and Office Fit-outs in Lucknow",
    ],
    makesOffer: [
      "Interior Design",
      "Turnkey Interior Projects",
      "Residential Interiors",
      "Luxury Villa Interiors",
      "Modular Kitchens",
      "Commercial Interiors",
      "Retail and Showroom Interiors",
      "Hospitality Interiors",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book an interior design consultation",
      target: {
        "@type": "EntryPoint",
        urlTemplate: CONSULTATION_URL,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
    },
  };

  if (offers?.length) {
    schema["hasOfferCatalog"] = {
      "@type": "OfferCatalog",
      name: "Turnkey Design and Build Services",
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offer.name,
          areaServed: offer.areaServed ?? "Lucknow",
        },
      })),
    };
  }

  return schema;
}
