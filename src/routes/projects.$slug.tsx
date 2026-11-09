import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { getProject, projects } from "@/lib/seo/catalog";
import { absoluteUrl, breadcrumbSchema, buildSeo, businessRef, homeAndConstructionBusinessSchema } from "@/lib/seo/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData?.project;
    if (!project) {
      return {
        meta: [{ title: "Project Unavailable | Dimensions Designs & Interior" }, { name: "robots", content: "noindex" }],
      };
    }
    return buildSeo({
      title: project.seoTitle ?? `${project.name} in Lucknow`,
      description: `Explore this illustrative ${project.category.toLowerCase()} interior concept: ${project.scope.toLowerCase()}. Discuss layouts, materials and execution with our Lucknow studio.`,
      path: `/projects/${params.slug}`,
      image: project.image,
      imageAlt: `Illustrative ${project.category.toLowerCase()} concept: ${project.name}`,
      type: "article",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          genre: `Illustrative ${project.category} interior design concept`,
          description: `${project.summary} Illustrative design concept, not a completed client project.`,
          url: absoluteUrl(`/projects/${project.slug}`),
          image: absoluteUrl(project.image),
          creator: businessRef,
        },
      ],
    });
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <PageShell eyebrow={`${project.category} Design Concept`} title={project.name} intro={project.summary}>
      <img
        src={project.image}
        alt={`Illustrative ${project.category.toLowerCase()} concept: ${project.name}`}
        width={1600}
        height={1000}
        className="mt-12 h-[28rem] w-full object-cover"
      />

      <p className="mt-4 text-sm text-muted-foreground">Illustrative example only. The name, location and scope describe a concept, not a completed client commission.</p>
      <dl className="mt-12 grid gap-8 border-y border-border py-8 sm:grid-cols-3">
        {[
          ["Category", project.category],
          ["Location", project.location],
          ["Scope", project.scope],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-[0.62rem] tracking-[0.28em] text-brass uppercase">{label}</dt>
            <dd className="mt-3 text-sm tracking-[0.1em] uppercase">{value}</dd>
          </div>
        ))}
      </dl>

      <a href="/contact" className="btn-solid mt-10 inline-block">
        Plan A Similar Project
      </a>

      <h2 className="mt-20 text-xl tracking-[0.1em] uppercase">Related Service</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/services/$slug"
          params={{ slug: project.category === "Commercial" ? "commercial-interiors" : project.category === "Hospitality" ? "hospitality-interiors" : "residential-interiors" }}
          className="btn-outline border-border text-muted-foreground"
        >
          {project.category === "Commercial" ? "Office & Commercial Interiors" : project.category === "Hospitality" ? "Hotel & Hospitality Interiors" : "Home & Apartment Interiors"}
        </Link>
        <Link to="/services/$slug" params={{ slug: "turnkey-projects" }} className="btn-outline border-border text-muted-foreground">
          Turnkey Interior Solutions
        </Link>
      </div>

      <h2 className="mt-20 text-xl tracking-[0.1em] uppercase">More Design Concepts</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {projects
          .filter((p) => p.slug !== project.slug)
          .map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="btn-outline border-border text-muted-foreground"
            >
              {p.name}
            </Link>
          ))}
      </div>
    </PageShell>
  );
}
