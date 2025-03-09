import { makeHash } from '@/lib/argon2'
import { User } from '@/models/user'
import { AuthRepository } from '@/repositories/auth.repository'
import { loginSchema } from '@/schemas/auth/loginSchema'
import { signupSchema } from '@/schemas/auth/signupSchema'
import { FastifyReply, FastifyRequest } from 'fastify'
import httpErrors from 'http-errors'

export class AuthController {
  constructor(private authRepository: AuthRepository) {}

  signup = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, firstName, lastName, password } = signupSchema.parse(
      request.body,
    )
    const passwordHash = await makeHash(password)

    const user = new User({
      email,
      firstName,
      lastName,
      password: passwordHash,
    })

    const token = await this.authRepository.signup(user)

    const expiresIn = new Date()
    expiresIn.setDate(expiresIn.getDate() + 7)

    return reply
      .code(204)
      .setCookie('aurora-token', token, {
        expires: expiresIn,
      })
      .send()
  }

  login = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = loginSchema.parse(request.body)

    const token = await this.authRepository.login(email, password)

    return reply.code(204).setCookie('aurora-token', token).send()
  }

  logout = async (request: FastifyRequest, reply: FastifyReply) => {
    const token = request.cookies['aurora-token']

    if (!token) {
      throw new httpErrors.Unauthorized('Unauthorized')
    }

    await this.authRepository.logout(token)

    return reply.code(204).send()
  }

  refreshToken = async (request: FastifyRequest, reply: FastifyReply) => {
    const tokenExists = request.cookies['aurora-token']

    if (!tokenExists) {
      throw new httpErrors.Unauthorized('Unauthorized')
    }

    const token = await this.authRepository.refreshToken(tokenExists)

    const expiresIn = new Date()
    expiresIn.setDate(expiresIn.getDate() + 7)

    return reply
      .code(204)
      .setCookie('aurora-token', token, {
        expires: expiresIn,
      })
      .send()
  }
}
