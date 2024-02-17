import { z } from "zod";

const SupportFormSchema = z.object({
  supportUserName: z.string().min(4, { message: "This field cannot be empty" }),
  supportUserEmail: z
    .string()
    .min(8, { message: "Email cannot be empty" }),
  supportUserDate: z.date(),
  supportUserSubject: z.string(),
  supportUserType: z.string(),
  supportUserMessage: z.string().min(10, { message: "Message cannot be empty" }),
  
});

export default SupportFormSchema;
