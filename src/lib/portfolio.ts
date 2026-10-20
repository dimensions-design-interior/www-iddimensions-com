export const portfolioCategories = [
  "All",
  "Residential",
  "Modular Kitchens",
  "Commercial",
  "Hospitality",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioPhoto = {
  id: string;
  title: string;
  location: string;
  category: Exclude<PortfolioCategory, "All">;
  scope: string;
  image: string;
  alt: string;
};

/** Illustrative interior design concepts shown on /portfolio; not completed client work. */
export const portfolioPhotos: PortfolioPhoto[] = [
  {
    id: "gomti-nagar-residence",
    title: "Apartment Interior Concept",
    location: "Illustrative concept",
    category: "Residential",
    scope: "4 BHK turnkey interiors",
    image: "/og/project-residential.jpg",
    alt: "Illustrative apartment interior with warm neutral finishes",
  },
  {
    id: "golf-city-villa",
    title: "Villa Living Concept",
    location: "Illustrative concept",
    category: "Residential",
    scope: "Living, dining & wardrobes",
    image: "/og/after-room.jpg",
    alt: "Illustrative villa living and dining interior with custom joinery and layered lighting",
  },
  {
    id: "hero-living-room",
    title: "Oak & Brass Living Room",
    location: "Illustrative concept",
    category: "Residential",
    scope: "Living room design & execution",
    image: "/og/hero-interior.jpg",
    alt: "Luxury living room interior with oak paneling, brass accents and warm lighting",
  },
  {
    id: "kitchen-island",
    title: "Island Modular Kitchen",
    location: "Illustrative concept",
    category: "Modular Kitchens",
    scope: "Island layout, quartz counters",
    image: "/og/kitchen-island.jpg",
    alt: "Illustrative island modular kitchen with quartz countertops and integrated appliances",
  },
  {
    id: "kitchen-l-shaped",
    title: "L-Shaped Modular Kitchen",
    location: "Illustrative concept",
    category: "Modular Kitchens",
    scope: "L-shaped layout, tall storage",
    image: "/og/kitchen-l-shaped.jpg",
    alt: "L-shaped modular kitchen with tall storage units and soft-close hardware",
  },
  {
    id: "kitchen-parallel",
    title: "Parallel Modular Kitchen",
    location: "Illustrative concept",
    category: "Modular Kitchens",
    scope: "Parallel layout, acrylic finish",
    image: "/og/kitchen-parallel.jpg",
    alt: "Parallel modular kitchen with acrylic shutters and efficient work triangle",
  },
  {
    id: "hazratganj-workspace",
    title: "Office Interior Concept",
    location: "Illustrative concept",
    category: "Commercial",
    scope: "Office fit-out",
    image: "/og/project-commercial.jpg",
    alt: "Illustrative office interior with workstations and meeting spaces",
  },
  {
    id: "aurum-showroom",
    title: "Showroom Interior Concept",
    location: "Illustrative concept",
    category: "Commercial",
    scope: "Retail & display design",
    image: "/og/project-retail.jpg",
    alt: "Retail showroom interior with accent lighting and premium display joinery",
  },
  {
    id: "the-verandah-lounge",
    title: "Lounge Interior Concept",
    location: "Illustrative concept",
    category: "Hospitality",
    scope: "Lounge & bar interiors",
    image: "/og/project-hospitality.jpg",
    alt: "Hospitality lounge and bar interior with textured surfaces and dramatic lighting",
  },
  {
    id: "wine-boutique-wide",
    title: "Wine & Spirits Boutique",
    location: "Illustrative concept",
    category: "Commercial",
    scope: "Retail fit-out, display joinery",
    image: "/__l5e/assets-v1/d97c992a-673a-4452-b806-d97ae6df1aaf/IMG-20261017-WA0011.jpg",
    alt: "Wine and spirits boutique interior with dark wood display shelving, central display islands and track lighting",
  },
  {
    id: "wine-boutique-wall",
    title: "Boutique Display Wall",
    location: "Illustrative concept",
    category: "Commercial",
    scope: "Wall shelving & brass ladders",
    image: "/__l5e/assets-v1/e01ed7cd-d499-4d29-ab25-97bbbe8988da/IMG-20261017-WA0008.jpg",
    alt: "Floor-to-ceiling wine display wall with illuminated shelves, brass rolling ladders and category signage",
  },
  {
    id: "wine-boutique-shelving",
    title: "Illuminated Bottle Shelving",
    location: "Illustrative concept",
    category: "Commercial",
    scope: "LED-lit display shelving",
    image: "/__l5e/assets-v1/d7e667b6-569c-449a-a015-1f002e5b1c88/IMG-20261017-WA0009.jpg",
    alt: "Close-up of LED-illuminated wooden bottle shelving with a brass and steel rolling ladder",
  },
  {
    id: "wine-boutique-mezzanine",
    title: "Boutique Mezzanine Lounge",
    location: "Illustrative concept",
    category: "Commercial",
    scope: "Mezzanine tasting lounge",
    image: "/__l5e/assets-v1/b002e996-85eb-4085-afd5-0557bb01472e/IMG-20261017-WA0010.jpg",
    alt: "Wine boutique with a glass-fronted mezzanine tasting lounge above illuminated display shelving",
  },
];
