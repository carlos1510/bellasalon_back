import { z } from "zod";

export const clientSchema = z.object({
    typeDoc: z.string({
        required_error: "Tipo Documento is required",
        invalid_type_error: "Tipo Documento must be a string"
    }),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    lastName: z.string({
        required_error: "Last Name is required",
        invalid_type_error: "Last Name must be a string"
    }),
    address: z.string(),
    reference: z.string(),
    phone: z.number(),
    occupation: z.string(),
    age: z.number().max(99),
    email: z.string()
    .email({
        message: "Email no es un email válido",
    }),
    state: z.number(),
});

export type ClientParams = z.infer<typeof clientSchema>;

export type Client = ClientParams & { id: number };