import { z } from "zod";

const companyFormSchema = z.object({
  companyName: z.string().min(1, { message: "Company name must be filled." }),
  companyDescription: z
    .string()
    .min(20, { message: "Description cannot be less than 20 characters." }),
  companyJobDate: z.date().refine((date) => date > new Date(), {
    message: "company date cannot be a current or past date",
  }),
  companyJobRegistrationLink:z.string().url({message:"URL must be provided for additional details."}),
  companyLocation: z.string().min(8, { message: "Location cannot be empty / less than 8 characters" }),
  companyJobType: z.enum(["Remote", "On-Site", "Hybrid"]),
  companyJobTitle: z.string().min(4, { message: "Job title cannot be empty / less than 4 characters." }),
  companyJobDescription: z
    .string()
    .min(10, { message: "Job Description cannot be less than 10 characters." }),
    companyJobStipend:z.string().min(1,{message:"Stipend cannot be less than 0."}),

  
});

export default companyFormSchema;
