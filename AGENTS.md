<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use the canonical Google Business CID and Place ID constants for profile links, reviews, maps, and structured data so listing signals stay consistent.
- Keep studio coordinates and directions URL in the shared site constants; homepage and Contact maps and directions must use the same pin.
- Keep public studio addresses, phone/email and PostalAddress schema in shared site constants; UI, chat and MCP content reuse them to prevent conflicting location signals.
- Render studio maps with the shared standard Google Maps embed iframe; keep the separate server-side Google reviews integration intact.
- Use the shared lead schema for browser and server validation; keep enquiry writes and fixed-recipient emails server-side so customer data stays private.
- Extend existing service slugs through the shared catalog rather than duplicating landing pages; the catalog drives internal links and the sitemap.
- Use leaf-route SEO metadata with the shared canonical domain; only emit social images for explicit page-relevant images and do not create self-serving LocalBusiness rating markup.
- Keep service search titles and descriptions in the shared catalog, independent of visible service copy, and render head tags through TanStack route head() rather than a separate HTML entry or Helmet provider to preserve SSR and navigation consistency.
- Keep explicit project search titles in the shared catalog, independent of concept names, so metadata can change without altering visible project content.
