import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { process } from "../content";
import { paginate, paginationInputSchema } from "../pagination";

export default defineTool({
  name: "get_design_process",
  title: "Get design process",
  description:
    "Get the studio's five-step design and execution process, from consultation to final handover. Results are paginated — use limit and offset (or the returned nextOffset) to page through them.",
  inputSchema: { ...paginationInputSchema },
  outputSchema: { process: z.unknown(), pagination: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ limit, offset }) => {
    const { items, pagination } = paginate(process, { limit, offset });
    return {
      content: [{ type: "text", text: JSON.stringify({ process: items, pagination }, null, 2) }],
      structuredContent: { process: items, pagination },
    };
  },
});
