import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { getProject, getService } from "./catalog";
import { buildSeo } from "./site";

describe("requested short search titles", () => {
  const pages = [
    ["projects", "aurum-showroom"],
    ["projects", "golf-city-villa"],
    ["projects", "gomti-nagar-residence"],
    ["projects", "hazratganj-workspace"],
    ["projects", "the-verandah-lounge"],
    ["services", "hospitality-interiors"],
    ["services", "luxury-villas-and-homes"],
    ["services", "modular-kitchens"],
  ] as const;

  for (const [section, slug] of pages) {
    test(`${section}/${slug} emits a title strictly under 55 characters`, () => {
      const entry = section === "projects" ? getProject(slug) : getService(slug);
      if (!entry?.seoTitle) throw new Error(`Missing explicit search title: ${slug}`);
      const head = buildSeo({ title: entry.seoTitle, description: "", path: `/${section}/${slug}` });
      const title = head.meta.find((tag) => tag.title)?.title;
      if (!title) throw new Error(`Missing emitted title: ${slug}`);
      assert.ok(title.length < 55, `Title has ${title.length} characters; expected fewer than 55`);
    });
  }
});