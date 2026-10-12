import { z } from "zod";

export const PROJECT_TYPES = ["Residential Interiors", "Luxury Villa / Home", "Modular Kitchen", "Wardrobes", "Commercial / Office", "Retail / Showroom", "Hospitality"] as const;
export const PROPERTY_TYPES = ["Apartment", "Independent Home", "Villa", "Office", "Hotel / Hospitality", "Commercial / Retail"] as const;
export const BUDGETS = ["Under ₹5 Lakhs", "₹5 – 15 Lakhs", "₹15 – 30 Lakhs", "₹30 – 50 Lakhs", "Above ₹50 Lakhs"] as const;
export const TIMELINES = ["Immediately", "Within 1 month", "1 – 3 months", "3 – 6 months", "Just exploring"] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(100).regex(/^[\p{L}\p{M} .'-]+$/u, "Please enter a valid name."),
  email: z.string().trim().toLowerCase().email().max(255),
  phone: z.string().trim().max(30).regex(/^[0-9+()\-\s]+$/, "Please enter a valid phone number.").refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }, "Enter a phone number with 10–15 digits."),
  city: z.string().trim().min(2).max(100).regex(/^[\p{L}\p{M} .'-]+$/u, "Please enter a valid city."),
  propertyType: z.enum(PROPERTY_TYPES),
  approximateArea: z.coerce.number().finite().min(1).max(1_000_000),
  projectType: z.enum(PROJECT_TYPES),
  budget: z.enum(BUDGETS),
  timeline: z.enum(TIMELINES),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
  elapsedMs: z.number().int().min(0).max(86_400_000),
});

export type LeadInput = z.infer<typeof leadSchema>;