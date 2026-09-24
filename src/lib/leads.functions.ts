import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const projectTypes = [
  "Residential Interiors",
  "Luxury Villa / Home",
  "Modular Kitchen",
  "Wardrobes",
  "Commercial / Office",
  "Retail / Showroom",
  "Hospitality",
] as const;

const budgets = [
  "Under ₹5 Lakhs",
  "₹5 – 15 Lakhs",
  "₹15 – 30 Lakhs",
  "₹30 – 50 Lakhs",
  "Above ₹50 Lakhs",
] as const;

const timelines = ["Immediately", "Within 1 month", "1 – 3 months", "3 – 6 months", "Just exploring"] as const;

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100).regex(/^[\p{L}\p{M} .'-]+$/u, "Please enter a valid name."),
  email: z.string().trim().toLowerCase().email().max(255),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine((value) => value === "" || /^[0-9+()\-\s]{7,30}$/.test(value), "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(projectTypes),
  budget: z.enum(budgets),
  timeline: z.enum(timelines),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
  elapsedMs: z.number().int().min(0).max(86_400_000),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitConsultationLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    if (data.website || data.elapsedMs < 1500) {
      throw new Error("Submission rejected. Please try again.");
    }

    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("consultation_leads")
      .select("id", { count: "exact", head: true })
      .eq("email", data.email)
      .gte("created_at", since);

    if (countError) {
      console.error("Consultation rate-limit check failed", countError.message);
      throw new Error("Could not submit your request. Please try again.");
    }

    if ((count ?? 0) >= 3) {
      throw new Error("You have already sent several requests today. Please call or WhatsApp us instead.");
    }

    const { data: lead, error } = await supabaseAdmin
      .from("consultation_leads")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        project_type: data.projectType,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Failed to store consultation lead", error.message);
      throw new Error("Could not save your request. Please try again.");
    }

    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      const result = await sendTemplateEmail("consultation-enquiry", "info@iddimension.com", {
        templateData: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          projectType: data.projectType,
          budget: data.budget,
          timeline: data.timeline,
          message: data.message,
        },
        idempotencyKey: `consultation-enquiry-${lead.id}`,
        replyTo: data.email,
      });

      return { ok: true, emailed: result.sent };
    } catch (emailError) {
      console.error("Failed to email consultation enquiry", emailError);
      throw new Error("Your request was saved, but the email could not be sent. Please call or WhatsApp us.");
    }
  });
