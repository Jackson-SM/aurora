import { env } from '@/config/env'
import { redis } from '@/lib/redis'
import { NextFunction } from '@fastify/middie'
import { FastifyReply, FastifyRequest } from 'fastify'
import httpErrors from 'http-errors'
import jwt from 'jsonwebtoken'

export const authenticate = async (
  req: FastifyRequest,
  res: FastifyReply,
  done: NextFunction,
) => {
  const token = req.cookies['aurora-token']

  if (!token) {
    throw new httpErrors.Unauthorized('Unauthorized')
  }

  jwt.verify(token, env.JWT_SECRET_KEY, (err, decoded) => {
    if (err?.name == 'TokenExpiredError') {
      throw new httpErrors.Unauthorized('Expired Token')
    }

    if (err?.name == 'JsonWebTokenError') {
      throw new httpErrors.Unauthorized('Invalid Token')
    }

    return decoded
  })

  const blackListToken = await redis.get(token)

  if (blackListToken) {
    throw new httpErrors.Unauthorized('Token is blacklisted')
  }

  done()
}
