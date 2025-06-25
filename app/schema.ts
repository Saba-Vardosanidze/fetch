import {z} from "zod";

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(6, "minimum 6 aso"),
});

export type LoginType = z.infer<typeof loginSchema>;
