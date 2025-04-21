import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, "The password must be at least 5 characters long."),
});

export type SiginType = z.infer<typeof signInSchema>;
