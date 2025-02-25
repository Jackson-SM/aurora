import { makeHash } from '@/lib/argon2';
import { User } from '@/models/user';
import { AuthRepository } from '@/repositories/auth.repository'
import { signupSchema } from '@/schemas/auth/signupSchema';
import { FastifyReply, FastifyRequest } from 'fastify';

export class AuthController {
  constructor(private authRepository: AuthRepository) {}

  async signup(request: FastifyRequest, reply: FastifyReply) {
    const { email, firstName, lastName, password } = signupSchema.parse(request.body)
    const passwordHash = await makeHash(password)

    const user = new User({email, firstName, lastName, password: passwordHash})

    const token = await this.authRepository.signup(user)
    console.log(token)

    reply.send({ token, passwordHash })
  }
}
