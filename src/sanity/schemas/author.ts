export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
      description: "e.g., Licensed Psychotherapist (M.Sc)",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
