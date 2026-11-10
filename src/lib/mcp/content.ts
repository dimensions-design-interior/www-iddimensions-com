import { STUDIO_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE, SITE_NAME } from "../seo/site";

export const company = {
  name: SITE_NAME,
  tagline: "Designing Spaces. Defining Experiences.",
  summary:
    "Premium interior design and turnkey interior solutions for residential, commercial and hospitality spaces, delivered from concept to completion.",
  philosophy: "Design. Detail. Execution.",
  serviceArea: "Lucknow and cities across India; physical studio in Lucknow",
  email: BUSINESS_EMAIL,
  phone: BUSINESS_PHONE,
  address: STUDIO_ADDRESS,
  website: "https://www.iddimensions.com",
};

export const services = [
  { title: "Residential Interiors", body: "Elegant and functional interiors designed around your lifestyle, space and personal taste." },
  { title: "Luxury Villas & Homes", body: "Bespoke interior concepts that bring sophistication, comfort and individuality to every room." },
  { title: "Modular Kitchens", body: "Contemporary kitchens designed for efficient storage, seamless functionality and timeless aesthetics." },
  { title: "Wardrobes", body: "Customized wardrobe solutions combining intelligent storage with refined finishes." },
  { title: "Commercial Interiors", body: "Professional, productive and visually compelling spaces designed for modern businesses." },
  { title: "Retail & Showrooms", body: "Strategic interior environments designed to enhance customer experience and strengthen your brand presence." },
  { title: "Hospitality Interiors", body: "Distinctive hospitality spaces designed to create memorable guest experiences." },
  { title: "Turnkey Projects", body: "Complete design-to-execution solutions with professional project coordination from concept to handover." },
];

export const projectTypes = ["Residential", "Commercial", "Retail", "Hospitality"] as const;

// Illustrative design concepts, not completed client work.
export const projects = [
  { name: "Illustrative Apartment Concept", location: "Lucknow", type: "Residential" },
  { name: "Illustrative Office Concept", location: "Lucknow", type: "Commercial" },
  { name: "Illustrative Showroom Concept", location: "Lucknow", type: "Retail" },
  { name: "Illustrative Lounge Concept", location: "Uttar Pradesh", type: "Hospitality" },
];

export const process = [
  { step: 1, title: "Consultation", body: "We understand your requirements, lifestyle, business objectives, budget and vision." },
  { step: 2, title: "Concept & Design", body: "Our designers transform your ideas into a cohesive design concept with detailed planning." },
  { step: 3, title: "Material & Estimation", body: "We finalize materials, finishes and project specifications with transparent cost planning." },
  { step: 4, title: "Execution", body: "Our execution team coordinates every stage of the project with attention to detail and quality." },
  { step: 5, title: "Final Handover", body: "We complete the finishing touches and deliver a space that is ready to experience." },
];

export const reasons = [
  { title: "Design That Is Personal", body: "Every project is developed around the client's requirements—not a one-size-fits-all template." },
  { title: "End-To-End Execution", body: "From design to installation and finishing, we provide a complete turnkey experience." },
  { title: "Attention To Detail", body: "From lighting and materials to furniture, finishes and spatial planning, every detail matters." },
  { title: "Quality-Focused", body: "We carefully select materials, finishes and execution methods to achieve lasting results." },
  { title: "Professional Project Management", body: "A coordinated approach keeps design, vendors, execution and timelines aligned." },
  { title: "Function Meets Aesthetics", body: "Our spaces are designed to look exceptional while remaining practical for everyday use." },
];
