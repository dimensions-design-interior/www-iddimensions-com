import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projectTypes, projects } from "../content";
import { paginate, paginationInputSchema } from "../pagination";

export default defineTool({
  name: "list_projects",
  title: "List featured projects",
  description:
    "List the studio's featured interior projects, optionally filtered by project type. Results are paginated — use limit and offset (or the returned nextOffset) to page through them.",
  inputSchema: {
    type: z.enum(projectTypes).optional().describe("Optional project type filter."),
    ...paginationInputSchema,
  },
  outputSchema: { projects: z.unknown(), pagination: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ type, limit, offset }) => {
    const all = type ? projects.filter((p) => p.type === type) : projects;
    const { items, pagination } = paginate(all, { limit, offset });
    return {
      content: [{ type: "text", text: JSON.stringify({ projects: items, pagination }, null, 2) }],
      structuredContent: { projects: items, pagination },
    };
  },
});
