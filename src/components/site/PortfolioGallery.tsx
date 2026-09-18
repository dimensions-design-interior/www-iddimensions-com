import { useEffect, useMemo, useState } from "react";

import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  portfolioCategories,
  portfolioPhotos,
  type PortfolioCategory,
} from "@/lib/portfolio";

export function PortfolioGallery() {
  const [active, setActive] = useState<PortfolioCategory>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      active === "All"
        ? portfolioPhotos
        : portfolioPhotos.filter((p) => p.category === active),
    [active],
  );

  const selectedIndex = visible.findIndex((photo) => photo.id === selectedId);
  const selected = selectedIndex >= 0 ? visible[selectedIndex] : null;

  useEffect(() => {
    if (selectedId && !visible.some((photo) => photo.id === selectedId)) {
      setSelectedId(null);
    }
  }, [selectedId, visible]);

  function move(direction: -1 | 1) {
    if (selectedIndex < 0) return;
    const nextIndex = (selectedIndex + direction + visible.length) % visible.length;
    setSelectedId(visible[nextIndex]?.id ?? null);
  }

  return (
    <div>
      <div
        className="mt-12 flex flex-wrap gap-3"
        role="group"
        aria-label="Filter portfolio photos by category"
      >
        {portfolioCategories.map((c) => (
          <Button
            key={c}
            type="button"
            aria-pressed={c === active}
            onClick={() => setActive(c)}
            variant={c === active ? "default" : "outline"}
            className="h-11 rounded-none px-5 text-[0.65rem] tracking-[0.16em] uppercase"
          >
            {c}
          </Button>
        ))}
      </div>

      <p className="mt-6 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
        {visible.length} {visible.length === 1 ? "Photo" : "Photos"}
      </p>

      <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <figure key={p.id} className="group bg-background">
            <button
              type="button"
              onClick={() => setSelectedId(p.id)}
              className="relative block w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              aria-label={`View ${p.title} full size`}
            >
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
              <span className="absolute right-4 bottom-4 grid size-10 place-items-center bg-background/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                <Expand aria-hidden="true" className="size-4" />
              </span>
            </button>
            <figcaption className="px-1 py-6">
              <h2 className="text-base tracking-[0.12em] uppercase">{p.title}</h2>
              <p className="mt-2 text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
                {p.location} | {p.scope}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelectedId(null)}>
        {selected ? (
          <DialogContent className="max-h-[94vh] max-w-[min(94vw,80rem)] overflow-y-auto rounded-none border-border bg-ink p-0 text-ink-foreground">
            <DialogTitle className="sr-only">{selected.title}</DialogTitle>
            <DialogDescription className="sr-only">{selected.alt}</DialogDescription>
            <div className="grid lg:grid-cols-[1fr_20rem]">
              <div className="relative flex min-h-[60vh] items-center bg-ink">
                <img
                  src={selected.image}
                  alt={selected.alt}
                  width={1600}
                  height={1200}
                  className="max-h-[82vh] w-full object-contain"
                />
                {visible.length > 1 ? (
                  <>
                    <Button
                      type="button"
                      size="icon"
                      variant="secondary"
                      onClick={() => move(-1)}
                      className="absolute left-4 size-11 rounded-none"
                      aria-label="Previous project photo"
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant="secondary"
                      onClick={() => move(1)}
                      className="absolute right-4 size-11 rounded-none"
                      aria-label="Next project photo"
                    >
                      <ChevronRight />
                    </Button>
                  </>
                ) : null}
              </div>
              <div className="flex flex-col justify-end border-t border-ink-foreground/15 p-8 lg:border-t-0 lg:border-l">
                <p className="text-[0.62rem] tracking-[0.24em] text-brass uppercase">{selected.category}</p>
                <p className="font-display mt-4 text-3xl leading-tight">{selected.title}</p>
                <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">{selected.scope}</p>
                <div className="mt-10 flex items-center justify-between border-t border-ink-foreground/15 pt-5 text-[0.62rem] tracking-[0.18em] text-ink-foreground/60 uppercase">
                  <span>{selected.location}</span>
                  <span>{selectedIndex + 1} / {visible.length}</span>
                </div>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </div>
  );
}
