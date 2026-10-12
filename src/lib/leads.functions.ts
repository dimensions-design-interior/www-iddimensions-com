import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "@/lib/leads.schema";
export type { LeadInput } from "@/lib/leads.schema";

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
        city: data.city,
        property_type: data.propertyType,
        approximate_area_sqft: data.approximateArea,
        project_type: data.projectType,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message || null,
        spam_check_passed: true,
        submission_elapsed_ms: data.elapsedMs,
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
          city: data.city,
          propertyType: data.propertyType,
          approximateArea: data.approximateArea,
          projectType: data.projectType,
          budget: data.budget,
          timeline: data.timeline,
          message: data.message,
        },
        idempotencyKey: `consultation-enquiry-${lead.id}`,
        replyTo: data.email,
      });

      return { saved: true as const, emailed: result.sent };
    } catch (emailError) {
      console.error("Failed to email consultation enquiry", emailError);
      return { saved: true as const, emailed: false };
    }
  });
