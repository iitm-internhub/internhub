import { z } from "zod";

const EnquiryFormSchema = z.object({
  enquirerName: z.string().min(4, { message: "This field has to be filled" }),
  enquirerEmail: z
    .string()
    .min(8, { message: "Email cannot be empty" }),
  enquirerDate: z.date(),
  enquirerReason: z.string(),
  enquirerType: z.string(),
  enquirerQuery: z.string().min(10, { message: "Query cannot be empty" }),

});

export default EnquiryFormSchema;
