import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import post from "./sanity/schemas/post";
import author from "./sanity/schemas/author";
import category from "./sanity/schemas/category";

export default defineConfig({
  name: "default",
  title: "AKA Innovations CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "no-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: [post, author, category],
  },
});
