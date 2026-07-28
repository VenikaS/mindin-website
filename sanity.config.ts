import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Mind'in Wellness Studio",

  projectId,
  dataset,
  basePath: "/studio", // Renders Studio at /studio

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
