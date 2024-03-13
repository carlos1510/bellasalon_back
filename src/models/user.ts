import { z } from "zod";

export const userSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    username: z.string({
        required_error: "User Name is required",
        invalid_type_error: "User Name must be a string"
    }),
    email: z
    .string({
      required_error: "Email es requerido",
      invalid_type_error: "Email debe ser un string",
    })
    .email({
      message: "Email no es un email válido",
    }),
    password: z
    .string({
      required_error: "Password es requerido",
      invalid_type_error: "Password debe ser un string",
    })
    .min(6, "Password debe tener al menos 6 caracteres"),
});

export type UserParams = z.infer<typeof userSchema>;

export type User = UserParams & { id: number };