import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { company, reasons } from "../content";

export default defineTool({
  name: "get_studio_profile",
  title: "Get studio profile",
  description:
    "Get the studio's public profile: name, tagline, philosophy, service area, contact email, address, and reasons clients choose it.",
  inputSchema: {},
  outputSchema: { company: z.unknown(), reasons: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ company, reasons }, null, 2) }],
    structuredContent: { company, reasons },
  }),
});
