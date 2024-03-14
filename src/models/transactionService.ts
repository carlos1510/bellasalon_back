import { z } from "zod";

export const transactionServiceSchema = z.object({
    clientId: z.number(),
    userId: z.number(),
    dateActivity: z.date({
        required_error: "Date Activity is requerid",
        invalid_type_error: "That's not a date!",
    }),
    isPregnant: z.number()
    .int(),
    isAllergic: z.number()
    .int(),
    isCoagulation: z.number()
    .int(),
    isNervous: z.number()
    .int(),
    isHepatitis: z.number()
    .int(),
    isPigmentation: z.number()
    .int(),
    isFur: z.number()
    .int(),
    isCicatrization: z.number()
    .int(),
    isSurgical: z.number()
    .int(),
    surgicalTime: z.string(),
    isPreviouslyPermanent: z.number()
    .int(),
    isTatto: z.number()
    .int(),
    informativeMedium:  z.string().optional(),
    eyebrows: z.number()
    .int().optional(),
    upperEyes: z.number()
    .int().optional(),
    lowerEyes: z.number()
    .int().optional(),
    lips: z.number()
    .int().optional(),
    eyelashes: z.number()
    .int().optional(),
    others: z.string().optional(),
    pigments: z.string().optional(),
    retouch: z.string().optional(),
    payDay: z.date({
        invalid_type_error: "That's not a date!",
    }),
    amount: z.number(),
    observations: z.string()
    .optional(),
    state: z.number().int(),
    createAt: z.string().datetime(),
    updateAt: z.string().datetime(),
});

export type TransactionServiceParams = z.infer<typeof transactionServiceSchema>;

export type TransactionService = TransactionServiceParams & { id: number };