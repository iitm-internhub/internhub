import { z } from "zod";

const podcastFormSchema = z.object({
  podcastTitle: z.string().min(8, { message: "This field has to be filled" }),
  podcastDescription: z
    .string()
    .min(20, { message: "Description cannot be empty" }),
  podcastDate: z.date().refine((date) => date > new Date(), {
    message: "podcast date cannot be a current or past date",
  }),
  podcastYouTubeURL: z.string().url({ message: "Invalid URL" }),
});

export default podcastFormSchema;
