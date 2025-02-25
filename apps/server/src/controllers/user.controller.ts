import { UserResponseDTO } from '@/dtos/user-response.dto'
import { UserRepository } from '@/repositories/user.repository'
import { findUserByEmailSchema } from '@/schemas/users/find-user-by-email'
import { FastifyReply, FastifyRequest } from 'fastify'

export class UserController {
  constructor(private userRepository: UserRepository) {}

  async findByEmail(request: FastifyRequest, reply: FastifyReply) {
    const { email } = findUserByEmailSchema.parse(request.query)

    console.log(email, 'hello')

    const user = await this.userRepository.findByEmail(email)

    return reply.code(200).send(UserResponseDTO.toHttp(user))
  }

  async update(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    console.log(process.env.JWT_SECRET_KEY)
    reply.send(request.cookies['aurora-token'])
  }
}
