import { useMemo, useState } from "react";

import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectRetail from "@/assets/project-retail.jpg";
import projectHospitality from "@/assets/project-hospitality.jpg";
import afterRoom from "@/assets/after-room.jpg";

export type ProjectCategory = "Residential" | "Commercial" | "Hospitality";

export type Project = {
  name: string;
  location: string;
  category: ProjectCategory;
  scope: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Gomti Nagar Residence",
    location: "Lucknow",
    category: "Residential",
    scope: "4 BHK turnkey interiors",
    image: projectResidential,
  },
  {
    name: "Golf City Villa",
    location: "Lucknow",
    category: "Residential",
    scope: "Living, dining & wardrobes",
    image: afterRoom,
  },
  {
    name: "Hazratganj Workspace",
    location: "Lucknow",
    category: "Commercial",
    scope: "Office fit-out",
    image: projectCommercial,
  },
  {
    name: "Aurum Showroom",
    location: "Lucknow",
    category: "Commercial",
    scope: "Retail & display design",
    image: projectRetail,
  },
  {
    name: "The Verandah Lounge",
    location: "Uttar Pradesh",
    category: "Hospitality",
    scope: "Lounge & bar interiors",
    image: projectHospitality,
  },
];

const categories = ["All", "Residential", "Commercial", "Hospitality"] as const;

export function ProjectsGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div>
      <div
        className="mt-12 flex flex-wrap gap-3"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((c) => (
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
        {visible.length} {visible.length === 1 ? "Project" : "Projects"}
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {visible.map((p) => (
          <article key={p.name} className="group">
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name} — ${p.category.toLowerCase()} interior project in ${p.location}`}
                loading="lazy"
                width={1200}
                height={900}
                className="h-[26rem] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
              />
              <span className="absolute top-0 left-0 bg-ink px-5 py-3 text-[0.62rem] font-semibold tracking-[0.28em] text-brass uppercase">
                {p.category}
              </span>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border py-6">
              <div>
                <h3 className="text-xl tracking-[0.1em] uppercase">{p.name}</h3>
                <p className="mt-2 text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {p.location} | {p.scope}
                </p>
              </div>
              <a
                href="#contact"
                className="text-[0.68rem] font-semibold tracking-[0.24em] text-brass uppercase"
              >
                Enquire
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
