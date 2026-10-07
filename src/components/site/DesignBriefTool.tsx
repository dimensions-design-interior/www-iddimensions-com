import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { generateDesignBrief } from "@/lib/design-brief.functions";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function DesignBriefTool() {
  const run = useServerFn(generateDesignBrief);
  const [space, setSpace] = useState("");
  const [style, setStyle] = useState("");
  const [budget, setBudget] = useState("");
  const [brief, setBrief] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBrief("");
    if (space.trim().length < 10 || style.trim().length < 3 || budget.trim().length < 2) {
      setError("Please describe your space, style and budget in a little more detail.");
      return;
    }
    setLoading(true);
    try {
      const res = await run({ data: { space, style, budget } });
      if (res.ok) setBrief(res.brief);
      else setError(res.error);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="brief-space">Your space</Label>
          <Textarea id="brief-space" rows={4} maxLength={1500} value={space} onChange={(e) => setSpace(e.target.value)}
            placeholder="e.g. 3BHK apartment in Gomti Nagar, open living-dining, small kitchen, two kids' rooms" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="brief-style">Style you love</Label>
          <Input id="brief-style" maxLength={600} value={style} onChange={(e) => setStyle(e.target.value)}
            placeholder="e.g. warm modern, wood and brass, easy to maintain" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="brief-budget">Budget</Label>
          <Input id="brief-budget" maxLength={200} value={budget} onChange={(e) => setBudget(e.target.value)}
            placeholder="e.g. ₹12–15 lakh" />
        </div>
        <Button type="submit" disabled={loading} className="w-full sm:w-auto">
          {loading ? "Creating your brief…" : "Create My Design Brief"}
        </Button>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      </form>
      <div aria-live="polite" className="border border-border bg-card p-6 text-card-foreground">
        {brief ? (
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{brief}</pre>
        ) : (
          <p className="text-sm text-muted-foreground">
            {loading ? "Our design assistant is preparing your tailored brief…" :
              "Your tailored consultation brief will appear here. Bring it to your consultation or share it with our team."}
          </p>
        )}
      </div>
    </div>
  );
}
