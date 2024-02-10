import { z } from "zod";

const eventFormSchema = z.object({
  eventTitle: z.string().min(8, { message: "This field has to be filled" }),
  eventDescription: z
    .string()
    .min(20, { message: "Description cannot be empty" }),
  eventDate: z.date().refine((date) => date > new Date(), {
    message: "Event date cannot be a current or past date",
  }),
  eventLocation: z.string().min(4, { message: "Location cannot be empty" }),
  eventSpeakers: z.string().min(4, { message: "Speaker name cannot be empty" }),
  eventBanner: z.object({
    type: z
      .string()
      .refine(
        (type) =>
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(type),
        "File type should be jpeg, png, jpg, or webp"
      ),
    size: z.number().max(2000, { message: "Banner size cannot more than 2MB" }),
  }),
  eventRegistratonURL: z.string().url({ message: "Invalid URL" }),
});

export default eventFormSchema;
