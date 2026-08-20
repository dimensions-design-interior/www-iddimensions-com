import { Star } from "lucide-react";

export function StarRating({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "md";
}) {
  const cls = size === "md" ? "size-5" : "size-3.5";
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={
            i < rating ? `${cls} fill-brass text-brass` : `${cls} text-muted-foreground/40`
          }
        />
      ))}
    </div>
  );
}

export function StarInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-2" role="radiogroup" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onClick={() => onChange(n)}
          className="p-1 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-1 focus-visible:ring-brass"
        >
          <Star
            aria-hidden="true"
            className={
              n <= value ? "size-6 fill-brass text-brass" : "size-6 text-muted-foreground/40"
            }
          />
        </button>
      ))}
    </div>
  );
}
