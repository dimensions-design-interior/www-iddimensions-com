# SEO Audit — iddimensions.com (Dimensions Designs & Interior)

## Audit results (all 21 pages in the sitemap crawled)

Pages checked: Home, Services, 9 service pages, Projects, 6 project pages, Portfolio, Contact, Modular Kitchen Lucknow. Every page loads correctly.

**Already in good shape**
- Each page has its own title and description (123–158 characters), with no duplicates.
- Each page has exactly one H1, and no heading levels are skipped.
- Each page has a canonical link pointing to its own www.iddimensions.com address.
- Open Graph and Twitter card tags are on every page.
- Every image has alt text, and images further down the page load lazily.
- robots.txt allows all crawlers and points to the sitemap.
- sitemap.xml lists all 21 pages on the correct domain. Google has accepted it in Search Console.
- Internal links: no broken links, and every page can be reached from the menu, footer or service catalog.
- Pages adjust correctly on phones (checked in earlier rounds).

**Gaps found**
1. **Brand name varies across titles.** Titles end in "| Dimensions" or "| ID Dimensions" instead of "Dimensions Designs & Interior".
2. **Structured data is missing in places:**
   - There is no WebSite schema anywhere.
   - There is no ProfessionalService type. The business is only marked as HomeAndConstructionBusiness.
   - Service pages, Portfolio and project pages don't link back to the business.
   - Service schema doesn't name the provider or the area served (Lucknow, India).
3. **Images on the homepage:** 2 images have no width/height set, which can make the page shift while loading. The main homepage image should also be loaded first.
4. **Wardrobes, Retail and Hospitality service pages** have only H2 headings and no H3 sub-sections. Other service pages have both.
5. **Internal links:** project pages and service pages could link to each other more (for example, project → matching service → Contact).
6. **Core Web Vitals:** I haven't pulled real-visitor speed data yet. I'll check it during implementation and report only what the numbers show.

## Proposed changes (nothing changes visually)

1. Update title endings to "| Dimensions Designs & Interior", shortening where needed to stay under about 60 characters. The homepage title you approved stays as it is unless you say otherwise.
2. Add WebSite schema on the homepage. Add the ProfessionalService type next to the existing business type, using only the verified details: name, Golf City address, +91 96700 01155, info@iddimensions.com, hours, map location, Google profile. No ratings, awards or credentials will be added.
3. Add provider and area served (Lucknow, India) to the Service schema on each service page. Link the Portfolio and project pages to the business entry.
4. Mark the project pages as illustrative design concepts in their data, never as completed work.
5. Add width/height to the 2 homepage images and load the main image first.
6. Add H3 sub-headings to the Wardrobes, Retail and Hospitality pages. These use existing text, with the same styling.
7. Add "Related service" and "Related concepts" links between project and service pages, using the existing link style.
8. Re-check the sitemap and robots.txt (they need no changes), crawl all pages again, and report Core Web Vitals.
9. Keep all URLs unchanged. Nothing will be published until you approve.

## Needs your confirmation
- Should the homepage title also switch to the "Dimensions Designs & Interior" brand, or stay as previously approved?
- Business hours and the opening year: I will only use what is already on your Google listing.

## Technical details
- Changes go in src/lib/seo/site.ts (shared schema and title helper), src/lib/seo/catalog.ts, services.$slug.tsx, projects.$slug.tsx, portfolio.tsx and index.tsx.
- Canonical links stay on the individual pages only, and title tags stay inside the meta array.
