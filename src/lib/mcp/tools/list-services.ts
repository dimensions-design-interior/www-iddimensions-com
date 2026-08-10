import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../content";
import { paginate, paginationInputSchema } from "../pagination";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the studio's interior design services with descriptions. Optionally filter by a keyword such as 'kitchen' or 'retail'. Results are paginated — use limit and offset (or the returned nextOffset) to page through them.",
  inputSchema: {
    query: z.string().trim().optional().describe("Optional keyword to filter services by title or description."),
    ...paginationInputSchema,
  },
  outputSchema: { services: z.unknown(), pagination: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit, offset }) => {
    const q = query?.toLowerCase();
    const all = q
      ? services.filter((s) => `${s.title} ${s.body}`.toLowerCase().includes(q))
      : services;
    const { items, pagination } = paginate(all, { limit, offset });
    return {
      content: [{ type: "text", text: JSON.stringify({ services: items, pagination }, null, 2) }],
      structuredContent: { services: items, pagination },
    };
  },
});
