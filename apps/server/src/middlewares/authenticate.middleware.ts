import { env } from '@/config/env'
import { VerifyTokenStatus } from '@/interfaces/verify-token-status'
import { redis } from '@/lib/redis'
import { AuthProvider } from '@/providers/jwt.provider'
import { NextFunction } from '@fastify/middie'
import axios from 'axios'
import { FastifyReply, FastifyRequest } from 'fastify'
import httpErrors from 'http-errors'

export const authenticate = async (
  req: FastifyRequest,
  reply: FastifyReply,
  done: NextFunction,
) => {
  const accessToken = req.cookies.accessToken
  const refreshToken = req.cookies.refreshToken

  if (!accessToken || !refreshToken) {
    throw new httpErrors.Unauthorized('Unauthorized')
  }

  const blackListToken = await redis.get(accessToken)

  if (blackListToken) {
    throw new httpErrors.Unauthorized('Token is blacklisted')
  }

  const authProvider = new AuthProvider()

  // Verifica ambos access e refresh tokens, os quais são tratados posteriormente.
  const accessPayload = await authProvider.verifyToken(
    accessToken,
    env.JWT_ACCESS_TOKEN,
  )
  const refreshPayload = await authProvider.verifyToken(
    refreshToken,
    env.JWT_REFRESH_TOKEN,
  )

  // Caso o token de refresh esteja expirado ou inválido, limpa os cookies e retorna erro
  if (
    refreshPayload === VerifyTokenStatus.EXPIRED ||
    refreshPayload === VerifyTokenStatus.INVALID
  ) {
    reply.clearCookie('accessToken')
    reply.clearCookie('refreshToken')
    throw new httpErrors.Unauthorized('Invalid token')
  }

  if (accessPayload === VerifyTokenStatus.INVALID) {
    throw new httpErrors.Unauthorized('Invalid token')
  }

  if (accessPayload === VerifyTokenStatus.EXPIRED) {
    const response = await axios.get(
      'http://localhost:3001/api/v1/auth/refresh-token',
      {
        withCredentials: true,
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      },
    )

    const newAccessToken = response.headers['set-cookie']?.[0]
      .split('=')[1]
      .split(';')[0]
      .trim()

    if (!newAccessToken) {
      reply.clearCookie('accessToken')
      reply.clearCookie('refreshToken')
      throw new httpErrors.Unauthorized('refresh token failed')
    }
    reply.setCookie('accessToken', newAccessToken)
  }

  done()
}
