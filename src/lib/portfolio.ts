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

/** Photographs of completed interior projects shown on /portfolio. */
export const portfolioPhotos: PortfolioPhoto[] = [
  {
    id: "gomti-nagar-residence",
    title: "Gomti Nagar Residence",
    location: "Lucknow",
    category: "Residential",
    scope: "4 BHK turnkey interiors",
    image: "/og/project-residential.jpg",
    alt: "Completed 4 BHK residential interior in Gomti Nagar, Lucknow with warm neutral finishes",
  },
  {
    id: "golf-city-villa",
    title: "Golf City Villa",
    location: "Lucknow",
    category: "Residential",
    scope: "Living, dining & wardrobes",
    image: "/og/after-room.jpg",
    alt: "Villa living and dining interior in Golf City, Lucknow with custom joinery and layered lighting",
  },
  {
    id: "hero-living-room",
    title: "Oak & Brass Living Room",
    location: "Lucknow",
    category: "Residential",
    scope: "Living room design & execution",
    image: "/og/hero-interior.jpg",
    alt: "Luxury living room interior with oak paneling, brass accents and warm lighting",
  },
  {
    id: "kitchen-island",
    title: "Island Modular Kitchen",
    location: "Lucknow",
    category: "Modular Kitchens",
    scope: "Island layout, quartz counters",
    image: "/og/kitchen-island.jpg",
    alt: "Island modular kitchen in Lucknow with quartz countertops and integrated appliances",
  },
  {
    id: "kitchen-l-shaped",
    title: "L-Shaped Modular Kitchen",
    location: "Lucknow",
    category: "Modular Kitchens",
    scope: "L-shaped layout, tall storage",
    image: "/og/kitchen-l-shaped.jpg",
    alt: "L-shaped modular kitchen with tall storage units and soft-close hardware",
  },
  {
    id: "kitchen-parallel",
    title: "Parallel Modular Kitchen",
    location: "Lucknow",
    category: "Modular Kitchens",
    scope: "Parallel layout, acrylic finish",
    image: "/og/kitchen-parallel.jpg",
    alt: "Parallel modular kitchen with acrylic shutters and efficient work triangle",
  },
  {
    id: "hazratganj-workspace",
    title: "Hazratganj Workspace",
    location: "Lucknow",
    category: "Commercial",
    scope: "Office fit-out",
    image: "/og/project-commercial.jpg",
    alt: "Completed office interior fit-out in Hazratganj, Lucknow",
  },
  {
    id: "aurum-showroom",
    title: "Aurum Showroom",
    location: "Lucknow",
    category: "Commercial",
    scope: "Retail & display design",
    image: "/og/project-retail.jpg",
    alt: "Retail showroom interior with accent lighting and premium display joinery",
  },
  {
    id: "the-verandah-lounge",
    title: "The Verandah Lounge",
    location: "Uttar Pradesh",
    category: "Hospitality",
    scope: "Lounge & bar interiors",
    image: "/og/project-hospitality.jpg",
    alt: "Hospitality lounge and bar interior with textured surfaces and dramatic lighting",
  },
];
