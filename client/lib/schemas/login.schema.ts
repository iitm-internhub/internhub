import { z } from "zod";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be field" })
    .email("This is not a valid email"),
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

export default loginFormSchema;
