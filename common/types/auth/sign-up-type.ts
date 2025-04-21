// common/types/auth/sign-up-type.ts
import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignUpValues = z.infer<typeof signUpSchema>;
