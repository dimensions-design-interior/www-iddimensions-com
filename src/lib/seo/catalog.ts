export type ServiceEntry = {
  slug: string;
  title: string;
  /** Short marketing summary shown on the page */
  body: string;
  /** Keyword-focused sentence used to build the meta description */
  seoIntro: string;
  image: string;
  highlights: string[];
  heading?: string;
  details?: { title: string; text: string }[];
  imageAlt?: string;
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
    slug: "interior-designer-lucknow",
    title: "Interior Designer in Lucknow",
    body: "Interior planning and design guidance for homes and businesses in Lucknow, from layouts to material selection.",
    seoIntro: "Interior designer in Lucknow for space planning, material selection and coordinated execution of homes, apartments, villas and commercial interiors.",
    image: `${OG}/after-room.jpg`,
    highlights: ["Space planning", "Design and finish selection", "Budget-led specifications", "Execution coordination"],
    details: [
      { title: "Design around your space", text: "A consultation starts with the property layout, how each room is used and your priorities. Discuss circulation, storage, lighting and furniture requirements before choosing finishes." },
      { title: "Materials with a practical purpose", text: "Compare boards, laminates, hardware and surface finishes for daily use, maintenance and budget. Material selection should follow the agreed design and the conditions at your site." },
      { title: "From drawings to execution", text: "Choose design assistance or a complete turnkey scope. Agree what is included, who coordinates the work and how decisions will be approved before execution starts." },
    ],
  },
  {
    slug: "residential-interiors",
    title: "Home & Apartment Interiors",
    body: "Elegant and functional interiors designed around your lifestyle, space and personal taste.",
    seoIntro:
      "Residential interior design in Lucknow — layouts, finishes and furniture designed around how you live, executed end to end.",
    image: `${OG}/project-residential.jpg`,
    highlights: ["Space planning & layouts", "Custom furniture design", "Lighting & finishes", "Turnkey execution"],
    details: [{"title": "Layouts for everyday living", "text": "Plan apartments and independent homes around family routines, storage needs and usable circulation. Discuss room dimensions, existing services and any changes to the layout before finalising furniture."}, {"title": "A coordinated home interior", "text": "Bring kitchen cabinetry, wardrobes, lighting and finishes into one material palette. Prioritise high-use areas and agree a room-by-room scope that fits your budget."}, {"title": "Planning your home enquiry", "text": "Share your city, property type, approximate area, floor plan and handover date. A project quote follows the agreed scope and site requirements, not a generic per-square-foot promise."}],
  },
  {
    slug: "luxury-villas-and-homes",
    title: "Luxury Villa Interiors",
    body: "Bespoke interior concepts that bring sophistication, comfort and individuality to every room.",
    seoIntro:
      "Luxury villa interiors in Lucknow with bespoke detailing, premium materials and coordinated turnkey execution across every room.",
    image: `${OG}/after-room.jpg`,
    highlights: ["Bespoke design concepts", "Premium material palettes", "Statement lighting", "Site supervision"],
    details: [{"title": "A whole-villa design approach", "text": "Coordinate living, dining, bedrooms and transition spaces rather than treating every room separately. Review how the household uses the villa and where privacy, daylight and storage matter most."}, {"title": "Detail and material selection", "text": "Discuss custom joinery, lighting, surface finishes and hardware together. Match specifications to maintenance needs and approve samples before execution."}, {"title": "Managing the execution scope", "text": "A villa can involve multiple rooms and work packages. Agree responsibilities, material approvals and a phased schedule so design intent stays clear through handover."}],
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    body: "Contemporary kitchens designed for efficient storage, seamless functionality and timeless aesthetics.",
    seoIntro:
      "Modular kitchen design and installation in Lucknow with ergonomic layouts, durable hardware and finishes built for daily use.",
    image: `${OG}/project-residential.jpg`,
    highlights: ["Ergonomic work triangle", "Soft-close hardware", "Moisture-resistant finishes", "Appliance integration"],
    details: [{"title": "Cabinetry and storage selection", "text": "Choose base units, wall units, tall storage and corner solutions around the available kitchen dimensions and cooking habits. Appliance dimensions and service points affect the cabinet plan."}, {"title": "Installation scope", "text": "Review the selected core, shutter finish, countertop and hardware before production. Confirm which plumbing, electrical and appliance tasks are included in the quotation."}],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    body: "Customized wardrobe solutions combining intelligent storage with refined finishes.",
    seoIntro:
      "Custom wardrobe design in Lucknow with intelligent internal storage, refined shutters and finishes matched to your interiors.",
    image: `${OG}/after-room.jpg`,
    highlights: ["Walk-in & sliding options", "Internal storage planning", "Mirror & lighting details", "Precision installation"],
    details: [{"title": "Storage planned around your routine", "text": "Compare hanging space, drawers, shelves and overhead storage against what you need to store. Check door movement and access alongside the bedroom furniture layout."}, {"title": "Finishes and installation", "text": "Choose shutters, internal finishes and hardware as part of the room design. Confirm site dimensions and wall conditions before manufacturing custom storage."}],
  },
  {
    slug: "commercial-interiors",
    title: "Office & Commercial Interior Design",
    body: "Professional, productive and visually compelling spaces designed for modern businesses.",
    seoIntro:
      "Commercial interior design and office fit-outs in Lucknow that balance brand presence, productivity and practical service planning.",
    image: `${OG}/project-commercial.jpg`,
    highlights: ["Workspace planning", "Brand-led design", "Acoustics & lighting", "Fit-out management"],
    details: [{"title": "Office planning for your team", "text": "Arrange workstations, meeting rooms, reception and storage around team size and daily movement. Discuss acoustics, task lighting and access to electrical and data services."}, {"title": "Fit-outs for an operating business", "text": "For offices and commercial premises, consider site access, working hours and disruption before committing to a programme. Agree which activities can be phased and which need vacant space."}, {"title": "A clear commercial brief", "text": "Share your premises area, city, headcount or customer use, brand requirements and opening target. The estimate should separate furniture, finishes and execution tasks."}],
  },
  {
    slug: "retail-and-showrooms",
    title: "Retail & Showrooms",
    body: "Strategic interior environments designed to enhance customer experience and strengthen your brand presence.",
    seoIntro:
      "Retail and showroom interior design in Lucknow focused on customer flow, product display and a strong, consistent brand experience.",
    image: `${OG}/project-retail.jpg`,
    highlights: ["Customer journey planning", "Display & merchandising", "Accent lighting", "Fast-track execution"],
    details: [{"title": "Customer flow and product display", "text": "Plan entry, circulation, display and transaction points around your product range and customer journey. Leave practical access for staff, deliveries and replenishment."}, {"title": "Brand-led finishes", "text": "Coordinate lighting, display joinery and finishes with your brand. Discuss durability, maintenance and opening targets before agreeing the retail fit-out scope."}],
  },
  {
    slug: "hospitality-interiors",
    title: "Hotel & Hospitality Interiors",
    body: "Distinctive hospitality spaces designed to create memorable guest experiences.",
    seoIntro:
      "Hospitality interior design in Lucknow for lounges, restaurants and hotels — atmosphere, durability and guest experience in balance.",
    image: `${OG}/project-hospitality.jpg`,
    highlights: ["Concept & mood development", "Durable specifications", "Custom joinery", "Phased execution"],
    details: [{"title": "Guest experience and operations", "text": "Plan hotel, restaurant and lounge interiors around guest flow, seating or room use, staff movement and cleaning. Durable materials are as important as atmosphere."}, {"title": "Coordinating commercial interiors", "text": "Reception, guest areas, back-of-house interfaces and lighting need a joined-up scope. Discuss the property requirements and any specialist approvals with the appropriate professionals."}, {"title": "Phasing and project budgets", "text": "Clarify which areas will remain open, the intended opening date and the priority work packages. Confirm specifications and the execution sequence before agreeing a quote."}],
  },
  {
    slug: "turnkey-projects",
    title: "Turnkey Interior Solutions",
    body: "Complete design-to-execution solutions with professional project coordination from concept to handover.",
    seoIntro:
      "Turnkey interior projects in Lucknow managed end to end — design, materials, vendors, execution and handover under one team.",
    image: `${OG}/hero-interior.jpg`,
    highlights: ["Single point of contact", "Transparent estimation", "Vendor coordination", "Agreed handover schedule"],
    details: [{"title": "One coordinated design-to-execution scope", "text": "Turnkey interior solutions bring space planning, material selection, estimation and execution coordination into one agreed project scope. This can cover apartments, homes, villas, offices and commercial premises."}, {"title": "Know what the estimate covers", "text": "Review a line-item estimate with the proposed boards, finishes, hardware and work packages. Record inclusions, exclusions and approval steps so changes can be discussed before they affect cost."}, {"title": "Execution and handover", "text": "Agree a site-specific schedule and who will supervise each stage. At handover, review the completed scope and any outstanding items together. Projects are available in Lucknow and Uttar Pradesh."}],
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: "gomti-nagar-residence",
    name: "Apartment Interior Concept",
    location: "Lucknow",
    category: "Residential",
    scope: "4 BHK turnkey interiors",
    summary:
      "A warm, contemporary family home with layered lighting, custom joinery and a calm neutral material palette shown as an illustrative design concept.",
    image: `${OG}/project-residential.jpg`,
  },
  {
    slug: "golf-city-villa",
    name: "Villa Living Concept",
    location: "Lucknow",
    category: "Residential",
    scope: "Living, dining & wardrobes",
    summary:
      "An illustrative living, dining and bedroom design for a villa, combining bespoke wardrobes with refined finishes and considered lighting.",
    image: `${OG}/after-room.jpg`,
  },
  {
    slug: "hazratganj-workspace",
    name: "Office Interior Concept",
    location: "Lucknow",
    category: "Commercial",
    scope: "Office fit-out",
    summary:
      "An illustrative professional workspace design with efficient planning, acoustic comfort and a brand-aligned material and lighting scheme.",
    image: `${OG}/project-commercial.jpg`,
  },
  {
    slug: "aurum-showroom",
    name: "Showroom Interior Concept",
    location: "Lucknow",
    category: "Commercial",
    scope: "Retail & display design",
    summary:
      "An illustrative showroom design around customer flow and product display, using accent lighting and premium display joinery.",
    image: `${OG}/project-retail.jpg`,
  },
  {
    slug: "the-verandah-lounge",
    name: "Lounge Interior Concept",
    location: "Uttar Pradesh",
    category: "Hospitality",
    scope: "Lounge & bar interiors",
    summary:
      "An illustrative hospitality interior with an intimate, atmospheric character — custom bar joinery, textured surfaces and dramatic lighting.",
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
