import { makeHash } from '@/lib/argon2'
import { User } from '@/models/user'
import { AuthRepository } from '@/repositories/auth.repository'
import { loginSchema } from '@/schemas/auth/loginSchema'
import { signupSchema } from '@/schemas/auth/signupSchema'
import { FastifyReply, FastifyRequest } from 'fastify'

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

    return reply.code(201).cookie('aurora-token', token).send()
  }

  login = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = loginSchema.parse(request.body)

    const token = await this.authRepository.login(email, password)

    return reply.code(204).cookie('aurora-token', token).send()
  }
}
