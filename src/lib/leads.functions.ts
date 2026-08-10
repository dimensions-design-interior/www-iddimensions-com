import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  projectType: z.string().trim().min(1).max(80),
  budget: z.string().trim().min(1).max(80),
  timeline: z.string().trim().min(1).max(80),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitConsultationLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("consultation_leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      project_type: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      message: data.message || null,
    });

    if (error) {
      console.error("Failed to store consultation lead", error.message);
      throw new Error("Could not save your request. Please try again.");
    }

    return { ok: true };
  });
