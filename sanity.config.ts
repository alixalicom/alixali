import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "alixali-studio",
  title: "Alixali Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Portfolio Work")
              .schemaType("work")
              .child(S.documentTypeList("work").title("Portfolio Work")),
            S.listItem()
              .title("About")
              .schemaType("about")
              .child(
                S.document()
                  .schemaType("about")
                  .documentId("about-singleton")
                  .title("About Content")
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
