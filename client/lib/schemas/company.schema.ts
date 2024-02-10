import { z } from "zod";

const companyFormSchema = z.object({
  companyName: z.string().min(8, { message: "This field has to be filled" }),
  companyDescription: z
    .string()
    .min(20, { message: "Description cannot be empty" }),
  companyJobDate: z.date().refine((date) => date > new Date(), {
    message: "company date cannot be a current or past date",
  }),
  companyLocation: z.string().min(8, { message: "Location cannot be empty" }),
  companyJobType: z.enum(["Remote", "On-site", "Hybrid"]),
  companyJobTitle: z.string().min(4, { message: "Job title cannot be empty" }),
  companyJobDescription: z
    .string()
    .min(10, { message: "Job Description cannot be empty" }),

  companyBanner: z.object({
    type: z
      .string()
      .refine(
        (type) =>
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(type),
        "File type should be jpeg, png, jpg, or webp"
      ),
    size: z.number().max(2000, { message: "Banner size cannot more than 2MB" }),
  }),
  companyLogo: z.object({
    type: z
      .string()
      .refine(
        (type) =>
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(type),
        "File type should be jpeg, png, jpg, or webp"
      ),
    size: z.number().max(2000, { message: "Logo size cannot more than 2MB" }),
  }),
});

export default companyFormSchema;
