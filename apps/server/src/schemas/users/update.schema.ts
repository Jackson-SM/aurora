import { z } from 'zod'

export const updateSchema = z.object({
  firstName: z.string().min(2).max(255).nullable(),
  lastName: z.string().min(2).max(255).nullable(),
  active: z.boolean().nullable(),
})
