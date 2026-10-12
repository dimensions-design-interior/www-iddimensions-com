import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { projects } from "@/lib/seo/catalog";
import { absoluteUrl, breadcrumbSchema, buildSeo, homeAndConstructionBusinessSchema } from "@/lib/seo/site";

export const Route = createFileRoute("/projects/")({
  head: () =>
    buildSeo({
      title: "Interior Design Concepts & Inspiration",
      description:
        "Explore illustrative residential, commercial and hospitality interior concepts. Discuss your project with our Lucknow studio, serving cities across India.",
      path: "/projects",
      image: "/og/project-residential.jpg",
      imageAlt: "Illustrative residential interior with warm finishes",
      jsonLd: [
        homeAndConstructionBusinessSchema(),
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
      eyebrow="Design Inspiration"
      title="Interior Design Concepts"
      intro="Illustrative design examples for homes, offices and hospitality spaces. These are not completed client projects."
    >
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug}>
            <img
              src={p.image}
              alt={`Illustrative ${p.category.toLowerCase()} concept: ${p.name}`}
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
                View Concept
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
