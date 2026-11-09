export type ServiceEntry = {
  slug: string;
  title: string;
  /** Short marketing summary shown on the page */
  body: string;
  /** Keyword-focused sentence used to build the meta description */
  seoIntro: string;
  /** Page-specific search metadata, independent of visible copy. */
  seoTitle: string;
  seoDescription: string;
  image: string;
  highlights: string[];
  heading?: string;
  details?: { title: string; text: string }[];
  imageAlt?: string;
};

export type ProjectEntry = {
  slug: string;
  seoTitle?: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Hospitality";
  scope: string;
  summary: string;
  image: string;
  /** True only for owner-confirmed completed client projects. */
  completed?: boolean;
  seoDescription?: string;
  sections?: { title: string; text: string }[];
};

const OG = "/og";

export const services: ServiceEntry[] = [
  {
    slug: "interior-designer-lucknow",
    seoTitle: "Interior Designer Lucknow | Dimensions Designs & Interior",
    seoDescription: "Interior designers in Lucknow for home and commercial spaces. Discuss layouts, material selection, project budgets and coordinated execution with our studio.",
    title: "Interior Designer in Lucknow",
    body: "Interior planning and design guidance for homes and businesses in Lucknow, from layouts to material selection.",
    seoIntro: "Interior designer in Lucknow for space planning, material selection and coordinated execution of homes, apartments, villas and commercial interiors.",
    image: `${OG}/after-room.jpg`,
    highlights: ["Space planning", "Design and finish selection", "Budget-led specifications", "Execution coordination"],
    details: [
      { title: "Design around your space", text: "A consultation starts with the property layout, how each room is used and your priorities. Discuss circulation, storage, lighting and furniture requirements before choosing finishes. We work across Lucknow — Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, Golf City, Sushant Golf City and Vrindavan Yojna — and accept projects in other cities across India." },
      { title: "Materials with a practical purpose", text: "Compare boards, laminates, hardware and surface finishes for daily use, maintenance and budget. Material selection should follow the agreed design and the conditions at your site." },
      { title: "From drawings to execution", text: "Choose design assistance or a complete turnkey scope. Agree what is included, who coordinates the work and how decisions will be approved before execution starts." },
    ],
  },
  {
    slug: "residential-interiors",
    seoTitle: "Home Interiors Lucknow | Dimensions Designs & Interior",
    seoDescription: "Premium residential interior design in Lucknow for homes and apartments. Plan living spaces, wardrobes, kitchens, lighting and finishes with turnkey execution.",
    title: "Home & Apartment Interiors",
    body: "Elegant and functional interiors designed around your lifestyle, space and personal taste.",
    seoIntro:
      "Residential interior design in Lucknow — layouts, finishes and furniture designed around how you live, executed end to end.",
    image: `${OG}/project-residential.jpg`,
    highlights: ["Space planning & layouts", "Custom furniture design", "Lighting & finishes", "Turnkey execution"],
    details: [{"title": "Layouts for everyday living", "text": "Plan apartments and independent homes around family routines, storage needs and usable circulation — from Gomti Nagar apartments to independent homes in Aliganj and Indira Nagar. Discuss room dimensions, existing services and any changes to the layout before finalising furniture."}, {"title": "A coordinated home interior", "text": "Bring kitchen cabinetry, wardrobes, lighting and finishes into one material palette. Prioritise high-use areas and agree a room-by-room scope that fits your budget."}, {"title": "Planning your home enquiry", "text": "Share your city, property type, approximate area, floor plan and handover date. A project quote follows the agreed scope and site requirements, not a generic per-square-foot promise."}],
  },
  {
    slug: "luxury-villas-and-homes",
    seoTitle: "Luxury Villa Interiors Lucknow | Dimensions",
    seoDescription: "Luxury villa interior design in Lucknow with bespoke joinery, premium materials and statement lighting. Coordinate every room from design to execution.",
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
    seoTitle: "Modular Kitchens Lucknow | Dimensions",
    seoDescription: "Modular kitchen design and installation in Lucknow. Plan ergonomic layouts, cabinet storage, durable finishes and branded hardware for everyday cooking.",
    title: "Modular Kitchens",
    body: "Contemporary kitchens designed for efficient storage, seamless functionality and timeless aesthetics.",
    seoIntro:
      "Modular kitchen design and installation in Lucknow with ergonomic layouts, durable hardware and finishes built for daily use.",
    image: `${OG}/project-residential.jpg`,
    highlights: ["Ergonomic work triangle", "Soft-close hardware", "Moisture-resistant finishes", "Appliance integration"],
    details: [{"title": "Cabinetry and storage selection", "text": "Choose base units, wall units, tall storage and corner solutions around the available kitchen dimensions and cooking habits — whether a compact apartment kitchen in Gomti Nagar or a larger villa kitchen in Golf City. Appliance dimensions and service points affect the cabinet plan."}, {"title": "Installation scope", "text": "Review the selected core, shutter finish, countertop and hardware before production. Confirm which plumbing, electrical and appliance tasks are included in the quotation."}],
  },
  {
    slug: "wardrobes",
    seoTitle: "Custom Wardrobes Lucknow | Dimensions Designs & Interior",
    seoDescription: "Custom wardrobe design in Lucknow: sliding, walk-in and built-in storage with refined shutters, practical interiors and precision installation for your home.",
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
    seoTitle: "Office Interiors Lucknow | Dimensions Designs & Interior",
    seoDescription: "Office and commercial interior design in Lucknow. Plan workstations, reception, lighting, acoustics and fit-out execution around your business requirements.",
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
    seoTitle: "Retail Interiors Lucknow | Dimensions Designs & Interior",
    seoDescription: "Retail and showroom interior design in Lucknow with customer-flow planning, product displays, accent lighting and brand-led finishes for your business.",
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
    seoTitle: "Hospitality Interiors Lucknow | Dimensions",
    seoDescription: "Hotel, restaurant and lounge interior design in Lucknow. Balance guest experience, durable materials, custom joinery and phased hospitality execution.",
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
    seoTitle: "Turnkey Interiors Lucknow | Dimensions Designs & Interior",
    seoDescription: "Turnkey interior projects in Lucknow: design, material selection and supply, installation and supervised execution through handover within your agreed scope.",
    title: "Turnkey Interior Solutions",
    body: "Complete interior design, material selection and supply, and supervised execution from concept to handover, within the agreed project scope.",
    seoIntro:
      "Turnkey interior projects in Lucknow managed end to end — design, materials, vendors, execution and handover under one team.",
    image: `${OG}/hero-interior.jpg`,
    highlights: ["Single point of contact", "Transparent estimation", "Vendor coordination", "Agreed handover schedule"],
    details: [{"title": "One coordinated design-to-execution scope", "text": "Our turnkey interior service brings space planning and design, material selection and supply, installation, finishing and supervised execution into one agreed project scope. This can cover apartments, homes, villas, offices and commercial premises."}, {"title": "Know what the estimate covers", "text": "Review a line-item estimate with the proposed boards, finishes, hardware and work packages. Record material specifications, inclusions, exclusions and approval steps; civil, plumbing, electrical and appliance work must be confirmed in the quotation rather than assumed."}, {"title": "Execution and handover", "text": "Agree a site-specific schedule and who will supervise each stage. At handover, review the completed scope and any outstanding items together. Based at our Lucknow studio, we accept projects in other cities across India. Materials and execution are included according to the agreed project scope."}],
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: "gomti-nagar-residence",
    seoTitle: "Gomti Nagar Residence Interior | Dimensions",
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
    seoTitle: "Golf City Villa Interior | Dimensions",
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
    seoTitle: "Hazratganj Office Interior | Dimensions",
    seoDescription: "Turnkey executive office fit-out in Hazratganj, Lucknow: MD cabins, workstations, acoustic conference room, fluted glass partitions and BOQ-led execution.",
    name: "Executive Workspace, Hazratganj",
    location: "Hazratganj, Lucknow",
    category: "Commercial",
    scope: "Turnkey office fit-out",
    completed: true,
    summary:
      "A corporate office in Hazratganj, Lucknow, delivered as a complete turnkey interior fit-out by Dimensions Designs Interior.",
    image: `${OG}/project-commercial.jpg`,
    sections: [
      { title: "Project Overview: Executive Workspace, Hazratganj, Lucknow", text: "Located in the prime commercial corridor of Hazratganj, Lucknow, this corporate office space was envisioned and delivered as a complete turnkey interior fit-out by Dimensions Designs Interior. The core objective was to blend modern architectural efficiency with refined corporate aesthetics, optimizing every square foot for high-density collaboration, private leadership discussions, and seamless workflow management." },
      { title: "Architectural Layout & Material Specifications", text: "The workspace features a balanced spatial layout comprising executive MD cabins, collaborative team workstations, an acoustic-paneled conference room, and a welcoming client reception lounge. To ensure privacy without compromising natural light, precision-engineered fluted glass partitions and acoustic wall paneling were integrated across meeting zones. High-traffic surfaces were finished with durable 1mm premium decorative laminates, complemented by clean brass-accent profile details and custom-fabricated storage credenzas. Ceiling designs incorporate seamless architectural false ceilings with glare-free linear profile lighting, creating an ergonomic, well-illuminated professional environment tailored for extended working hours." },
      { title: "Turnkey Execution & Handover", text: "Dimensions Designs Interior executed the entire project scope end-to-end, managing structural space planning, electrical and network conduit cabling, HVAC duct alignment, custom modular millwork, and final paint finishes. Delivered with a strict itemized Bill of Quantities (BOQ) and disciplined on-site supervision, the facility was handed over on schedule, fully operational and move-in ready for the client team." },
    ],
  },
  {
    slug: "aurum-showroom",
    seoTitle: "Aurum Showroom Interior | Dimensions",
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
    seoTitle: "Verandah Lounge Interior | Dimensions",
    name: "Lounge Interior Concept",
    location: "Uttar Pradesh",
    category: "Hospitality",
    scope: "Lounge & bar interiors",
    summary:
      "An illustrative hospitality interior with an intimate, atmospheric character — custom bar joinery, textured surfaces and dramatic lighting.",
    image: `${OG}/project-hospitality.jpg`,
  },
  {
    slug: "wine-spirits-boutique",
    name: "Wine & Spirits Boutique Concept",
    location: "Lucknow",
    category: "Commercial",
    scope: "Retail fit-out & display joinery",
    summary:
      "An illustrative premium wine and spirits boutique with floor-to-ceiling illuminated display shelving, brass rolling ladders, central display islands and a mezzanine tasting lounge.",
    image: "/__l5e/assets-v1/d97c992a-673a-4452-b806-d97ae6df1aaf/IMG-20261017-WA0011.jpg",
  },
];

export const projectCategories = ["Residential", "Commercial", "Hospitality"] as const;

/** Lucknow neighbourhoods the studio serves — shared by the homepage and service pages. */
export const lucknowAreas = [
  "Gomti Nagar",
  "Gomti Nagar Extension",
  "Hazratganj",
  "Aliganj",
  "Indira Nagar",
  "Golf City",
  "Sushant Golf City",
  "Vrindavan Yojna",
  "Jankipuram",
  "Mahanagar",
  "Shaheed Path",
  "Faizabad Road",
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Lucknow-specific planning notes per service. Factual, no invented prices or completed-project claims. */
export const lucknowServiceNotes: Record<string, { heading: string; paragraphs: string[]; faqs: { q: string; a: string }[] }> = {
  "interior-designer-lucknow": {
    heading: "Working With Interior Designers In Lucknow",
    paragraphs: [
      "Choosing interior designers in Lucknow is easier when design, materials and execution sit with one team. Our Golf City studio near Lulu Mall Road plans each space, prepares a line-item estimate and supervises work on site, so you are not coordinating separate carpenters, suppliers and installers.",
      "Lucknow homes range from compact apartments in Gomti Nagar Extension to independent houses in Aliganj and Mahanagar. We start with a site visit, measure the space and discuss how your family actually uses each room before proposing layouts, finishes and storage.",
    ],
    faqs: [
      { q: "Do you visit sites across Lucknow?", a: "Yes. We meet clients at our Golf City studio and visit sites across Lucknow, including Gomti Nagar, Hazratganj, Indira Nagar, Jankipuram and Faizabad Road." },
      { q: "How is the cost of an interior project in Lucknow decided?", a: "Cost depends on area, scope, materials and hardware. We share a detailed line-item estimate after understanding your requirements, so you can see where every rupee goes." },
    ],
  },
  "modular-kitchens": {
    heading: "Modular Kitchens In Lucknow, Planned For Indian Cooking",
    paragraphs: [
      "A modular kitchen in Lucknow has to handle daily tadka, heavy utensils and seasonal humidity. We plan the work triangle around your hob, sink and refrigerator, then select boards, laminates and branded hardware suited to heat and moisture.",
      "Whether it is an L-shaped kitchen in a Gomti Nagar apartment or a parallel kitchen in a Golf City villa, the estimate lists carcass material, shutter finish, countertop, hardware and accessories separately, so you can compare options clearly.",
    ],
    faqs: [
      { q: "Which kitchen layouts work best in Lucknow apartments?", a: "L-shaped and parallel layouts suit most apartment kitchens; U-shaped and island layouts fit larger homes and villas. We recommend a layout after measuring your site." },
      { q: "What affects modular kitchen price in Lucknow?", a: "Kitchen size, board and shutter material, countertop, hardware brand and accessories. Your quotation itemises each of these." },
    ],
  },
  "residential-interiors": {
    heading: "Home And Apartment Interiors Across Lucknow",
    paragraphs: [
      "New apartments in Gomti Nagar Extension, Sushant Golf City and Vrindavan Yojna often need complete interiors — wardrobes, kitchen, TV units, false ceilings and lighting. We plan these together so finishes stay consistent from room to room.",
      "For older homes in Aliganj, Mahanagar or Indira Nagar, we work with existing layouts and confirm any civil, plumbing or electrical changes in the quotation rather than assuming them.",
    ],
    faqs: [
      { q: "Can you handle interiors for a ready-to-move apartment in Lucknow?", a: "Yes. We plan and execute full apartment interiors, coordinating with your society's work rules and timings." },
    ],
  },
  "luxury-villas-and-homes": {
    heading: "Villa Interiors In Lucknow",
    paragraphs: [
      "Villas and independent houses around Golf City, Shaheed Path and Faizabad Road give room for double-height living areas, staircases, home bars and larger kitchens. We plan lighting, materials and joinery across floors so the home feels like one design.",
    ],
    faqs: [
      { q: "Do you design multi-floor villas in Lucknow?", a: "Yes. We plan and supervise interiors across all floors, with each floor's scope listed in the estimate." },
    ],
  },
  "commercial-interiors": {
    heading: "Office Interior Design In Lucknow",
    paragraphs: [
      "Offices in Hazratganj, Gomti Nagar and along Shaheed Path need durable finishes, good acoustics and planned cabling. We design workstations, cabins, meeting rooms and reception areas, and schedule execution to limit disruption to your business.",
    ],
    faqs: [
      { q: "Can work happen while our Lucknow office is operational?", a: "We discuss phasing and work hours before starting so execution can fit around your operations where possible." },
    ],
  },
};
