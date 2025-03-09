import { env } from '@/config/env'
import { redis } from '@/lib/redis'
import { NextFunction } from '@fastify/middie'
import axios from 'axios'
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

  const blackListToken = await redis.get(token)

  if (blackListToken) {
    throw new httpErrors.Unauthorized('Token is blacklisted')
  }

  jwt.verify(token, env.JWT_SECRET_KEY, async (err) => {
    if (err?.name == 'TokenExpiredError') {
      await axios.get('http://localhost:3001/api/v1/auth/refresh-token', {
        withCredentials: true,
      })

      done()
    }

    if (err?.name == 'JsonWebTokenError') {
      throw new httpErrors.Unauthorized('Invalid Token')
    }
  })

  done()
}
