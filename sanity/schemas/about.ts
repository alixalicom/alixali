import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "bio",
      title: "Bio (Paragraph 1)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "bio2",
      title: "Bio (Paragraph 2)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "yearsExperience",
      title: "Years of Experience",
      type: "string",
      initialValue: "7+",
    }),
    defineField({
      name: "brandsCount",
      title: "Brands & Startups",
      type: "string",
      initialValue: "30+",
    }),
    defineField({
      name: "location",
      title: "Based In",
      type: "string",
      initialValue: "Qatar",
    }),
    defineField({
      name: "currentRole",
      title: "Current Role",
      type: "string",
    }),
    defineField({
      name: "currentCompany",
      title: "Current Company",
      type: "string",
    }),
    defineField({
      name: "currentPeriod",
      title: "Current Period",
      type: "string",
      description: "e.g. Aug 2025 – Present",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "text",
      rows: 2,
      description: "Main headline shown in the hero section",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare: () => ({ title: "About Content" }),
  },
});
