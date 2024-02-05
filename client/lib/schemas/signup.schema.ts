import { z } from "zod";

const signupFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone_number: z.string().min(10, { message: "Must be valid phone number" }),
  email: z
    .string()
    .min(1, { message: "This field has to be field" })
    .email("This is not a valid email"),
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

export default signupFormSchema;
