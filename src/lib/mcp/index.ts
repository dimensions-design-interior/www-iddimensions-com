import { defineMcp } from "@lovable.dev/mcp-js";
import getStudioProfile from "./tools/get-studio-profile";
import listServices from "./tools/list-services";
import listProjects from "./tools/list-projects";
import getDesignProcess from "./tools/get-design-process";

export default defineMcp({
  name: "dream-spaces",
  title: "Dream Spaces",
  version: "0.1.0",
  instructions:
    "Public tools for Dimensions Designs Interior, an interior design and turnkey interiors studio. Use `get_studio_profile` for company, contact and positioning details, `list_services` for the service catalogue, `list_projects` for featured projects, and `get_design_process` for the project workflow.",
  tools: [getStudioProfile, listServices, listProjects, getDesignProcess],
});
