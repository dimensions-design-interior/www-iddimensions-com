import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projectTypes, projects } from "../content";

export default defineTool({
  name: "list_projects",
  title: "List featured projects",
  description: "List the studio's featured interior projects, optionally filtered by project type.",
  inputSchema: {
    type: z.enum(projectTypes).optional().describe("Optional project type filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ type }) => {
    const items = type ? projects.filter((p) => p.type === type) : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
