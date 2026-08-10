import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { projects } from "@/lib/seo/catalog";
import { absoluteUrl, breadcrumbSchema, buildSeo } from "@/lib/seo/site";

export const Route = createFileRoute("/projects/")({
  head: () =>
    buildSeo({
      title: "Interior Design Projects & Portfolio",
      description:
        "Browse our completed residential, commercial and hospitality interior projects across Lucknow and Uttar Pradesh, from turnkey homes to showrooms and lounges.",
      path: "/projects",
      image: "/og/project-residential.jpg",
      imageAlt: "Completed residential interior project in Lucknow",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Interior Design Projects",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            url: absoluteUrl(`/projects/${p.slug}`),
          })),
        },
      ],
    }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <PageShell
      eyebrow="Featured Projects"
      title="Spaces We Have Designed & Delivered"
      intro="A selection of residential, commercial and hospitality interiors delivered from concept to completion."
    >
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug}>
            <img
              src={p.image}
              alt={`${p.name} — ${p.category.toLowerCase()} interior project in ${p.location}`}
              loading="lazy"
              width={1200}
              height={900}
              className="h-[24rem] w-full object-cover"
            />
            <div className="border-b border-border py-6">
              <h2 className="text-xl tracking-[0.1em] uppercase">{p.name}</h2>
              <p className="mt-2 text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
                {p.category} | {p.location} | {p.scope}
              </p>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="mt-4 inline-block text-[0.68rem] font-semibold tracking-[0.24em] text-brass uppercase"
              >
                View Project
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
