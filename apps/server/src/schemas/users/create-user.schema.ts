import { z } from 'zod'

export const createUserSchema = z.object({
  firstName: z
    .string()
    .min(3, 'First name should have 3 characters at least')
    .max(255)
    .nonempty(),
  lastName: z
    .string()
    .min(3, 'Last name should have 3 characters at least')
    .max(255)
    .nonempty(),
  email: z.string().email('it is not a valid email').nonempty(),
  password: z
    .string()
    .min(8, 'password should have 8 characters at least')
    .max(255)
    .nonempty(),
})
