import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog / Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description / Excerpt",
      type: "text",
      rows: 3,
      description: "Brief summary of the article used for cards and meta descriptions.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readingTime",
      title: "Reading Time (Minutes)",
      type: "number",
      description: "Estimated reading time in minutes.",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      title: "Content Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    // Marketing & SEO fields
    defineField({
      name: "metaTitle",
      title: "SEO Meta Title",
      type: "string",
      description: "Overrides default page title in search engines. Ideally 50-60 characters.",
    }),
    defineField({
      name: "metaDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 2,
      description: "Brief search engine summary. Ideally 150-160 characters.",
    }),
    defineField({
      name: "keywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Meta keywords specific to this post.",
    }),
    defineField({
      name: "localSeo",
      title: "Local SEO & Marketing Target",
      type: "object",
      description: "Add geographical targeting schema data to attract localized business searches (e.g. 'School ERP in Bangalore').",
      fields: [
        { name: "businessName", type: "string", title: "Target Business/Branch Name" },
        { name: "targetCity", type: "string", title: "Target City" },
        { name: "targetRegion", type: "string", title: "Target Region/State" },
        { name: "postalCode", type: "string", title: "Target Postal Code" },
        { name: "address", type: "string", title: "Target Full Address" },
        { name: "latitude", type: "number", title: "Latitude" },
        { name: "longitude", type: "number", title: "Longitude" },
      ]
    }),
  ],
});
