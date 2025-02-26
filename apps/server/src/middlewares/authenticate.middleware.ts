import { env } from '@/config/env'
import { NextFunction } from '@fastify/middie'
import { FastifyReply, FastifyRequest } from 'fastify'
import httpErrors from 'http-errors'
import jwt from 'jsonwebtoken'

export const authenticate = (
  req: FastifyRequest,
  res: FastifyReply,
  done: NextFunction,
) => {
  const token = req.cookies['aurora-token']

  if (!token) {
    throw new httpErrors.Unauthorized('Unauthorized')
  }

  const payload = jwt.verify(token, env.JWT_SECRET_KEY)

  console.log(payload)

  done()
}
