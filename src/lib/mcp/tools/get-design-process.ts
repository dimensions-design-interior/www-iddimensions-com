import { defineTool } from "@lovable.dev/mcp-js";
import { process } from "../content";

export default defineTool({
  name: "get_design_process",
  title: "Get design process",
  description: "Get the studio's five-step design and execution process, from consultation to final handover.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(process, null, 2) }],
    structuredContent: { process },
  }),
});
