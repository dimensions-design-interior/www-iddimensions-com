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
];
