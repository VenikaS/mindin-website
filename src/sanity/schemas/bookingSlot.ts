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
      of: [
        {
          type: "string",
          options: {
            list: [
              "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", 
              "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
              "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
              "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", 
              "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"
            ],
          },
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
