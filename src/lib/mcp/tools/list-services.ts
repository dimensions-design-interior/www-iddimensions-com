import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the studio's interior design services with descriptions. Optionally filter by a keyword such as 'kitchen' or 'retail'.",
  inputSchema: {
    query: z.string().trim().optional().describe("Optional keyword to filter services by title or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const items = q
      ? services.filter((s) => `${s.title} ${s.body}`.toLowerCase().includes(q))
      : services;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
