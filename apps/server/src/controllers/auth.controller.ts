import { User } from '@/models/user'
import { AuthRepository } from '@/repositories/auth.repository'
import { loginSchema } from '@/schemas/auth/loginSchema'
import { signupSchema } from '@/schemas/auth/signupSchema'
import { FastifyReply, FastifyRequest } from 'fastify'
import httpErrors from 'http-errors'

export class AuthController {
  constructor(private authService: AuthRepository) {}

  login = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = loginSchema.parse(request.body)

    const { accessToken, refreshToken } = await this.authService.login(
      email,
      password,
    )

    reply.setCookie('refreshToken', refreshToken)
    reply.setCookie('accessToken', accessToken)

    return reply.code(204).send()
  }

  signup = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, firstName, lastName, password } = signupSchema.parse(
      request.body,
    )

    const user = new User({ email, firstName, lastName, password })

    const { accessToken, refreshToken } = await this.authService.signup(user)

    reply.setCookie('refreshToken', refreshToken)
    reply.setCookie('accessToken', accessToken)

    return reply.code(201).send()
  }

  refreshToken = async (request: FastifyRequest, reply: FastifyReply) => {
    const refreshToken = request.cookies.refreshToken

    if (!refreshToken) {
      throw new httpErrors.Unauthorized('refreshToken not found')
    }

    const newAccessToken = await this.authService.refreshToken(refreshToken)

    return reply.code(204).setCookie('accessToken', newAccessToken).send()
  }
}
