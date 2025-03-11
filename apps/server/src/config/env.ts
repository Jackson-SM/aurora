import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_ACCESS_TOKEN: z.string(),
  JWT_REFRESH_TOKEN: z.string(),
})

export const env = envSchema.parse(process.env)
