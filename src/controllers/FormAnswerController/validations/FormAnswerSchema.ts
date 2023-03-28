import { z } from "zod"

export const formAnswerSchema = z.object({
  name: z.string()
    .min(3, 'Name must have at least 3 characters')
    .nonempty('Name is required'),
  email: z.string()
    .email('Email must be a valid email address')
    .nonempty('Email is required'),
  cpf: z.string()
    .min(11, 'CPF must have exactly 11 characters')
    .max(11, 'CPF must have exactly 11 characters')
    .nonempty('CPF is required'),
  phone: z.string()
    .min(10, 'Phone number must have at least 10 digits')
    .max(11, 'Phone number must have at most 11 digits')
    .nonempty('Phone number is required'),
  createdAt: z.date().optional()
})
