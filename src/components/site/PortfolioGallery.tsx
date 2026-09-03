import { useMemo, useState } from "react";

import {
  portfolioCategories,
  portfolioPhotos,
  type PortfolioCategory,
} from "@/lib/portfolio";

export function PortfolioGallery() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? portfolioPhotos
        : portfolioPhotos.filter((p) => p.category === active),
    [active],
  );

  return (
    <div>
      <div
        className="mt-12 flex flex-wrap gap-3"
        role="group"
        aria-label="Filter portfolio photos by category"
      >
        {portfolioCategories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={c === active}
            onClick={() => setActive(c)}
            className={
              c === active ? "btn-solid" : "btn-outline border-border text-muted-foreground"
            }
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
        {visible.length} {visible.length === 1 ? "Photo" : "Photos"}
      </p>

      <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <figure key={p.id} className="group bg-background">
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]"
              />
              <span className="absolute top-0 left-0 bg-ink px-4 py-2.5 text-[0.6rem] font-semibold tracking-[0.26em] text-brass uppercase">
                {p.category}
              </span>
            </div>
            <figcaption className="px-1 py-6">
              <h2 className="text-base tracking-[0.12em] uppercase">{p.title}</h2>
              <p className="mt-2 text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
                {p.location} | {p.scope}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
