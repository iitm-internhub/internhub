import { z } from "zod";

const companyStudentFormSchema = z.object({
  companyName: z.string().min(1, { message: "Company name must be filled." }),
  companyEventConductDate: z.date(),
  companyEventConductType: z.enum(["Online", "Offline", "Hybrid"]),
  companyTotalStudentRegistered: z
    .number()
    .min(1, { message: "Registered student count must be greater than 0." }),
  companyTotalStudentAttended: z
    .number()
    .min(1, { message: "Attended student count must be greater than 0." }),
  companyTotalStudentAccepted: z
    .number()
    .min(1, { message: "Accepted student count must be greater than 0." }),
});

export default companyStudentFormSchema;
