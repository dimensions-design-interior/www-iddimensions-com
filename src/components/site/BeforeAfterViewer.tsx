import { useMemo, useState } from "react";

import beforeRoom from "@/assets/before-room.jpg";
import afterRoom from "@/assets/after-room.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import projectRetail from "@/assets/project-retail.jpg";

type Transformation = {
  name: string;
  category: "Residential" | "Commercial" | "Hospitality";
  location: string;
  keywords: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

const transformations: Transformation[] = [
  {
    name: "Golf City Modular Kitchen",
    category: "Residential",
    location: "Lucknow",
    keywords: "kitchen modular island storage",
    before: beforeRoom,
    after: afterRoom,
    beforeAlt: "Bare unfinished room before interior work",
    afterAlt: "Finished modular kitchen with island and brass fittings",
  },
  {
    name: "Gomti Nagar Living Room",
    category: "Residential",
    location: "Lucknow",
    keywords: "living room sofa panelling lighting",
    before: beforeRoom,
    after: projectResidential,
    beforeAlt: "Empty living room shell before renovation",
    afterAlt: "Completed living room with oak panelling and warm lighting",
  },
  {
    name: "Hazratganj Workspace",
    category: "Commercial",
    location: "Lucknow",
    keywords: "office workstation cabin meeting",
    before: beforeRoom,
    after: projectCommercial,
    beforeAlt: "Bare commercial floor plate before fit-out",
    afterAlt: "Finished office interior with workstations and glass cabins",
  },
  {
    name: "Aurum Showroom",
    category: "Commercial",
    location: "Lucknow",
    keywords: "retail showroom display shopfront",
    before: beforeRoom,
    after: projectRetail,
    beforeAlt: "Empty retail shell before showroom design",
    afterAlt: "Completed showroom with backlit display units",
  },
  {
    name: "The Verandah Lounge",
    category: "Hospitality",
    location: "Uttar Pradesh",
    keywords: "lounge bar restaurant hospitality seating",
    before: beforeRoom,
    after: projectHospitality,
    beforeAlt: "Unfinished hospitality space before design",
    afterAlt: "Finished lounge interior with intimate seating and warm accents",
  },
];

export function BeforeAfterViewer() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [position, setPosition] = useState(50);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase().slice(0, 80);
    if (!q) return transformations;
    return transformations.filter((t) =>
      `${t.name} ${t.category} ${t.location} ${t.keywords}`.toLowerCase().includes(q),
    );
  }, [query]);

  const active = results[Math.min(selected, Math.max(results.length - 1, 0))];

  return (
    <div className="mt-12">
      <label htmlFor="ba-search" className="sr-only">
        Search transformations
      </label>
      <input
        id="ba-search"
        type="search"
        value={query}
        placeholder="Search transformations — kitchen, office, lounge…"
        onChange={(e) => {
          setQuery(e.target.value);
          setSelected(0);
        }}
        className="w-full max-w-md border border-border bg-background px-5 py-3 text-sm tracking-wide text-foreground outline-none placeholder:text-muted-foreground focus:border-brass"
      />

      {results.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          No transformations match “{query}”. Try “kitchen”, “office” or “lounge”.
        </p>
      ) : (
        <>
          <div className="mt-8 flex flex-wrap gap-3">
            {results.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-pressed={t.name === active?.name}
                onClick={() => {
                  setSelected(i);
                  setPosition(50);
                }}
                className={
                  t.name === active?.name
                    ? "btn-solid"
                    : "btn-outline border-border text-muted-foreground"
                }
              >
                {t.name}
              </button>
            ))}
          </div>

          {active && (
            <figure className="mt-10">
              <div className="relative h-[22rem] w-full overflow-hidden select-none sm:h-[32rem]">
                <img
                  src={active.after}
                  alt={active.afterAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${position}%` }}
                >
                  <img
                    src={active.before}
                    alt={active.beforeAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  className="pointer-events-none absolute top-0 bottom-0 w-px bg-brass"
                  style={{ left: `${position}%` }}
                />
                <span className="absolute top-0 left-0 bg-ink px-4 py-2 text-[0.62rem] font-semibold tracking-[0.28em] text-brass uppercase">
                  Before
                </span>
                <span className="absolute top-0 right-0 bg-ink px-4 py-2 text-[0.62rem] font-semibold tracking-[0.28em] text-brass uppercase">
                  After
                </span>
              </div>

              <label htmlFor="ba-slider" className="sr-only">
                Reveal before and after
              </label>
              <input
                id="ba-slider"
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className="mt-6 w-full accent-brass"
              />

              <figcaption className="mt-4 text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
                {active.name} | {active.location} | {active.category}
              </figcaption>
            </figure>
          )}
        </>
      )}
    </div>
  );
}
