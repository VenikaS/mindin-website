import { defineField, defineType } from "sanity";

export default defineType({
  name: "bookingSlot",
  title: "Booking Slots",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "times",
      title: "Available Time Slots",
      type: "array",
      description: "Define available time slots as intervals (e.g. '10:00 AM - 11:00 AM' or '10am-11am').",
      of: [
        {
          type: "string",
          placeholder: "e.g. 10:00 AM - 11:00 AM",
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "time",
      title: "Time Slot (Legacy)",
      type: "string",
      description: "Deprecated: Used in the old slot format. Please migrate to the times list above and clear this field.",
    }),
    defineField({
      name: "status",
      title: "Status (Legacy)",
      type: "string",
      description: "Deprecated: Used in the old slot format.",
    }),
  ],
  preview: {
    select: {
      date: "date",
      times: "times",
    },
    prepare(selection) {
      const { date, times } = selection;
      const count = times ? times.length : 0;
      return {
        title: `${date}`,
        subtitle: `${count} slot(s) available`,
      };
    },
  },
});
