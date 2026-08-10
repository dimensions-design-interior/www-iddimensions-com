import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

import { submitConsultationLead } from "@/lib/leads.functions";

const WHATSAPP_NUMBER = "919670001155";

const PROJECT_TYPES = [
  "Residential Interiors",
  "Luxury Villa / Home",
  "Modular Kitchen",
  "Wardrobes",
  "Commercial / Office",
  "Retail / Showroom",
  "Hospitality",
];

const BUDGETS = [
  "Under ₹5 Lakhs",
  "₹5 – 15 Lakhs",
  "₹15 – 30 Lakhs",
  "₹30 – 50 Lakhs",
  "Above ₹50 Lakhs",
];

const TIMELINES = ["Immediately", "Within 1 month", "1 – 3 months", "3 – 6 months", "Just exploring"];

const fieldClass =
  "w-full border border-ink-foreground/20 bg-transparent px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:border-brass focus:outline-none";

export function ConsultationForm() {
  const submit = useServerFn(submitConsultationLead);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await submit({ data: form });

      const text = [
        "New consultation request",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone ? `Phone: ${form.phone}` : null,
        `Project Type: ${form.projectType}`,
        `Budget: ${form.budget}`,
        `Preferred Timeline: ${form.timeline}`,
        form.message ? `Details: ${form.message}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      toast.success("Request received — opening WhatsApp to confirm.");
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noreferrer",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="eyebrow block text-[0.62rem]">
            Name
          </label>
          <input
            id="lead-name"
            required
            maxLength={100}
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={`${fieldClass} mt-3`}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="eyebrow block text-[0.62rem]">
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            required
            maxLength={255}
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={`${fieldClass} mt-3`}
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="eyebrow block text-[0.62rem]">
            Phone (optional)
          </label>
          <input
            id="lead-phone"
            maxLength={30}
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 ..."
            className={`${fieldClass} mt-3`}
          />
        </div>
        <div>
          <label htmlFor="lead-type" className="eyebrow block text-[0.62rem]">
            Project Type
          </label>
          <select
            id="lead-type"
            required
            value={form.projectType}
            onChange={update("projectType")}
            className={`${fieldClass} mt-3`}
          >
            <option value="">Select project type</option>
            {PROJECT_TYPES.map((o) => (
              <option key={o} value={o} className="text-foreground">
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-budget" className="eyebrow block text-[0.62rem]">
            Budget
          </label>
          <select
            id="lead-budget"
            required
            value={form.budget}
            onChange={update("budget")}
            className={`${fieldClass} mt-3`}
          >
            <option value="">Select budget range</option>
            {BUDGETS.map((o) => (
              <option key={o} value={o} className="text-foreground">
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-timeline" className="eyebrow block text-[0.62rem]">
            Preferred Timeline
          </label>
          <select
            id="lead-timeline"
            required
            value={form.timeline}
            onChange={update("timeline")}
            className={`${fieldClass} mt-3`}
          >
            <option value="">Select timeline</option>
            {TIMELINES.map((o) => (
              <option key={o} value={o} className="text-foreground">
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lead-message" className="eyebrow block text-[0.62rem]">
          Tell us about your space (optional)
        </label>
        <textarea
          id="lead-message"
          rows={4}
          maxLength={1000}
          value={form.message}
          onChange={update("message")}
          placeholder="Location, carpet area, scope of work..."
          className={`${fieldClass} mt-3 resize-none`}
        />
      </div>

      <button type="submit" disabled={sending} className="btn-solid disabled:opacity-60">
        {sending ? "Sending..." : "Send & Continue On WhatsApp"}
      </button>
    </form>
  );
}
