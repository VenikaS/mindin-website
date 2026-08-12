import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Description (e.g. Clinical Psychologist or Age)",
      type: "string",
    }),
    defineField({
      name: "color",
      title: "Card Color Theme",
      type: "string",
      options: {
        list: [
          { title: "Peach", value: "peach" },
          { title: "Blue", value: "blue" },
        ],
      },
      initialValue: "peach",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "role",
    },
  },
});
