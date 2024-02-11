import { z } from "zod";

const eventFormSchema = z.object({
  eventTitle: z.string().min(4, { message: "This field has to be filled" }),
  eventDescription: z
    .string()
    .min(20, { message: "Description cannot be empty" }),
  eventDate: z.date(),
  eventLocation: z.string().min(4, { message: "Location cannot be empty" }),
  eventSpeakers: z.string().min(4, { message: "Speaker name cannot be empty" }),
  eventRegistrationURL: z.string().url({ message: "Invalid URL" }),
});

export default eventFormSchema;
