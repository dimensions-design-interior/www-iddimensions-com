export type ServiceEntry = {
  slug: string;
  title: string;
  /** Short marketing summary shown on the page */
  body: string;
  /** Keyword-focused sentence used to build the meta description */
  seoIntro: string;
  image: string;
  highlights: string[];
};

export type ProjectEntry = {
  slug: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Hospitality";
  scope: string;
  summary: string;
  image: string;
};

const OG = "/og";

export const services: ServiceEntry[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interiors",
    body: "Elegant and functional interiors designed around your lifestyle, space and personal taste.",
    seoIntro:
      "Residential interior design in Lucknow — layouts, finishes and furniture designed around how you live, executed end to end.",
    image: `${OG}/project-residential.jpg`,
    highlights: ["Space planning & layouts", "Custom furniture design", "Lighting & finishes", "Turnkey execution"],
  },
  {
    slug: "luxury-villas-and-homes",
    title: "Luxury Villas & Homes",
    body: "Bespoke interior concepts that bring sophistication, comfort and individuality to every room.",
    seoIntro:
      "Luxury villa and home interior design with bespoke detailing, premium materials and coordinated execution across every room.",
    image: `${OG}/after-room.jpg`,
    highlights: ["Bespoke design concepts", "Premium material palettes", "Statement lighting", "Site supervision"],
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    body: "Contemporary kitchens designed for efficient storage, seamless functionality and timeless aesthetics.",
    seoIntro:
      "Modular kitchen design and installation with ergonomic layouts, durable hardware and finishes built for daily use.",
    image: `${OG}/project-residential.jpg`,
    highlights: ["Ergonomic work triangle", "Soft-close hardware", "Moisture-resistant finishes", "Appliance integration"],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    body: "Customized wardrobe solutions combining intelligent storage with refined finishes.",
    seoIntro:
      "Custom wardrobe design with intelligent internal storage, refined shutters and finishes matched to your interiors.",
    image: `${OG}/after-room.jpg`,
    highlights: ["Walk-in & sliding options", "Internal storage planning", "Mirror & lighting details", "Precision installation"],
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    body: "Professional, productive and visually compelling spaces designed for modern businesses.",
    seoIntro:
      "Commercial interior design and office fit-outs that balance brand presence, productivity and practical service planning.",
    image: `${OG}/project-commercial.jpg`,
    highlights: ["Workspace planning", "Brand-led design", "Acoustics & lighting", "Fit-out management"],
  },
  {
    slug: "retail-and-showrooms",
    title: "Retail & Showrooms",
    body: "Strategic interior environments designed to enhance customer experience and strengthen your brand presence.",
    seoIntro:
      "Retail and showroom interior design focused on customer flow, product display and a strong, consistent brand experience.",
    image: `${OG}/project-retail.jpg`,
    highlights: ["Customer journey planning", "Display & merchandising", "Accent lighting", "Fast-track execution"],
  },
  {
    slug: "hospitality-interiors",
    title: "Hospitality Interiors",
    body: "Distinctive hospitality spaces designed to create memorable guest experiences.",
    seoIntro:
      "Hospitality interior design for lounges, restaurants and hotels — atmosphere, durability and guest experience in balance.",
    image: `${OG}/project-hospitality.jpg`,
    highlights: ["Concept & mood development", "Durable specifications", "Custom joinery", "Phased execution"],
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Projects",
    body: "Complete design-to-execution solutions with professional project coordination from concept to handover.",
    seoIntro:
      "Turnkey interior projects managed end to end — design, materials, vendors, execution and handover under one team.",
    image: `${OG}/hero-interior.jpg`,
    highlights: ["Single point of contact", "Transparent estimation", "Vendor coordination", "On-time handover"],
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: "gomti-nagar-residence",
    name: "Gomti Nagar Residence",
    location: "Lucknow",
    category: "Residential",
    scope: "4 BHK turnkey interiors",
    summary:
      "A warm, contemporary family home with layered lighting, custom joinery and a calm neutral material palette delivered as a complete turnkey project.",
    image: `${OG}/project-residential.jpg`,
  },
  {
    slug: "golf-city-villa",
    name: "Golf City Villa",
    location: "Lucknow",
    category: "Residential",
    scope: "Living, dining & wardrobes",
    summary:
      "Living, dining and bedroom interiors for a villa in Golf City, combining bespoke wardrobes with refined finishes and considered lighting.",
    image: `${OG}/after-room.jpg`,
  },
  {
    slug: "hazratganj-workspace",
    name: "Hazratganj Workspace",
    location: "Lucknow",
    category: "Commercial",
    scope: "Office fit-out",
    summary:
      "A professional workspace fit-out with efficient planning, acoustic comfort and a brand-aligned material and lighting scheme.",
    image: `${OG}/project-commercial.jpg`,
  },
  {
    slug: "aurum-showroom",
    name: "Aurum Showroom",
    location: "Lucknow",
    category: "Commercial",
    scope: "Retail & display design",
    summary:
      "Showroom interiors designed around customer flow and product display, using accent lighting and premium display joinery.",
    image: `${OG}/project-retail.jpg`,
  },
  {
    slug: "the-verandah-lounge",
    name: "The Verandah Lounge",
    location: "Uttar Pradesh",
    category: "Hospitality",
    scope: "Lounge & bar interiors",
    summary:
      "A hospitality interior with an intimate, atmospheric character — custom bar joinery, textured surfaces and dramatic lighting.",
    image: `${OG}/project-hospitality.jpg`,
  },
];

export const projectCategories = ["Residential", "Commercial", "Hospitality"] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
