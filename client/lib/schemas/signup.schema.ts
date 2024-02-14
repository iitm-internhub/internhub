import { z } from "zod";

const signupFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  college: z.string().refine(() => ["IITM", "IINTM", "IPITM"]),
  batch: z.string().refine(() => ["BCA", "BBA", "B.COM", "B.TECH"]),
  semester: z
    .string()
    .refine(() => [
      "SEM_1",
      "SEM_2",
      "SEM_3",
      "SEM_4",
      "SEM_5",
      "SEM_6",
      "SEM_7",
      "SEM_8",
    ]),
  phone_number: z.string().min(10, { message: "Must be valid phone number" }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email"),
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

export default signupFormSchema;
