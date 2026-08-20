import { z } from "zod";

export const PROJECT_TYPE_OPTIONS = [
  "Residential Interiors",
  "Luxury Villa / Home",
  "Modular Kitchen",
  "Wardrobes",
  "Commercial / Office",
  "Retail / Showroom",
  "Hospitality",
  "Turnkey Project",
] as const;

export const reviewSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)." })
    .max(80, { message: "Name must be less than 80 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." }),
  location: z
    .string()
    .trim()
    .max(80, { message: "Location must be less than 80 characters." })
    .optional()
    .or(z.literal("")),
  projectType: z.enum(PROJECT_TYPE_OPTIONS, {
    message: "Please select the type of project.",
  }),
  rating: z
    .number()
    .int()
    .min(1, { message: "Please choose a star rating." })
    .max(5, { message: "Rating cannot be more than 5 stars." }),
  review: z
    .string()
    .trim()
    .min(30, { message: "Please write at least 30 characters about your experience." })
    .max(800, { message: "Review must be less than 800 characters." }),
  // Spam protection: honeypot must stay empty, elapsedMs guards instant bot submits.
  honeypot: z.string().max(0, { message: "Submission rejected." }).optional().or(z.literal("")),
  elapsedMs: z.number().int().nonnegative(),
});

export type ReviewInput = z.infer<typeof reviewSchema>;

export const MIN_FILL_MS = 4000;
export const MAX_REVIEW_LENGTH = 800;
