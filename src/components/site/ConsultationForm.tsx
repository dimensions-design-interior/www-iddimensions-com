import { useId, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { submitConsultationLead } from "@/lib/leads.functions";
import { BUDGETS, PROJECT_TYPES, PROPERTY_TYPES, TIMELINES, leadSchema } from "@/lib/leads.schema";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/site/WhatsAppButton";

const emptyForm = { name: "", email: "", phone: "", city: "", propertyType: "", approximateArea: "", projectType: "", budget: "", timeline: "", message: "", website: "" };
const fieldClass = "mt-3 w-full min-w-0 border border-current/25 bg-transparent px-4 py-3 text-sm placeholder:opacity-50 focus:border-brass focus:outline-none";

export function ConsultationForm({ dark = true }: { dark?: boolean }) {
  const id = useId();
  const submit = useServerFn(submitConsultationLead);
  const openedAt = useRef(Date.now());
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [notice, setNotice] = useState<{ text: string; emailed: boolean } | null>(null);
  const [error, setError] = useState("");
  const update = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sending) return;
    setError("");
    setNotice(null);
    const parsed = leadSchema.safeParse({ ...form, elapsedMs: Date.now() - openedAt.current });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check your project details."); return; }
    setSending(true);
    try {
      const result = await submit({ data: parsed.data });
      const text = result.emailed
        ? "Your enquiry has been saved and email notification requested. To confirm receipt with our team, please call +91 96700 01155 or WhatsApp us."
        : "Your enquiry has been saved, but email notification was not sent. Please call +91 96700 01155 or WhatsApp us to confirm.";
      setNotice({ text, emailed: result.emailed });
      if (result.emailed) toast.success(text); else toast.warning(text);
      setForm(emptyForm);
      openedAt.current = Date.now();
    } catch {
      setError("Your enquiry could not be submitted. Please try again, call +91 96700 01155 or WhatsApp us.");
    } finally { setSending(false); }
  };

  const inputs = [
    { key: "name", label: "Name", type: "text", placeholder: "Your full name", autoComplete: "name", maxLength: 100 },
    { key: "phone", label: "Phone", type: "tel", placeholder: "+91 …", autoComplete: "tel", maxLength: 30 },
    { key: "email", label: "Email", type: "email", placeholder: "you@example.com", autoComplete: "email", maxLength: 255 },
    { key: "city", label: "Project city", type: "text", placeholder: "Lucknow", autoComplete: "address-level2", maxLength: 100 },
  ] as const;
  const selects = [
    { key: "propertyType", label: "Property type", options: PROPERTY_TYPES },
    { key: "projectType", label: "Service required", options: PROJECT_TYPES },
    { key: "budget", label: "Budget", options: BUDGETS },
    { key: "timeline", label: "Project timeline", options: TIMELINES },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className={`mt-10 space-y-5 text-left ${dark ? "text-ink-foreground" : "text-foreground"}`}>
      <fieldset disabled={sending} className="grid min-w-0 gap-5 sm:grid-cols-2">
        {inputs.map((field) => <div key={field.key}>
          <label htmlFor={`${id}-${field.key}`} className="eyebrow block text-[0.62rem]">{field.label}</label>
          <input id={`${id}-${field.key}`} name={field.key} required type={field.type} maxLength={field.maxLength} autoComplete={field.autoComplete} value={form[field.key]} onChange={update(field.key)} placeholder={field.placeholder} className={fieldClass} />
        </div>)}
        {selects.map((field) => <div key={field.key}>
          <label htmlFor={`${id}-${field.key}`} className="eyebrow block text-[0.62rem]">{field.label}</label>
          <select id={`${id}-${field.key}`} name={field.key} required value={form[field.key]} onChange={update(field.key)} className={fieldClass}>
            <option value="" className="bg-background text-foreground">Select {field.label.toLowerCase()}</option>
            {field.options.map((option) => <option key={option} value={option} className="bg-background text-foreground">{option}</option>)}
          </select>
        </div>)}
        <div>
          <label htmlFor={`${id}-area`} className="eyebrow block text-[0.62rem]">Approximate area (sq ft)</label>
          <input id={`${id}-area`} name="approximateArea" type="number" required min={1} max={1000000} step="any" value={form.approximateArea} onChange={update("approximateArea")} placeholder="e.g. 1500" className={fieldClass} />
        </div>
      </fieldset>
      <div>
        <label htmlFor={`${id}-message`} className="eyebrow block text-[0.62rem]">Project details (optional)</label>
        <textarea id={`${id}-message`} name="message" rows={4} maxLength={1000} disabled={sending} value={form.message} onChange={update("message")} placeholder="Your space, preferred style and scope of work…" className={`${fieldClass} resize-none`} />
      </div>
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} />
      </div>
      <p className="text-xs leading-relaxed opacity-70">We use these details to respond to your project enquiry. Based in Lucknow; accepting projects across India.</p>
      {error && <p role="alert" className="text-sm leading-relaxed">{error}</p>}
      {notice && <div role="status" className="border-l-2 border-brass pl-4 text-sm leading-relaxed"><p>{notice.text}</p>{!notice.emailed && <WhatsAppLink className="mt-3 inline-block underline underline-offset-4">Confirm on WhatsApp</WhatsAppLink>}</div>}
      <Button type="submit" disabled={sending} className="btn-solid h-auto max-w-full whitespace-normal rounded-none">{sending ? "Sending…" : "Request a Consultation"}</Button>
    </form>
  );
}
