import { UserResponseDTO } from '@/dtos/user-response.dto'
import { UserRepository } from '@/repositories/user.repository'
import { findUserByEmailSchema } from '@/schemas/users/find-user-by-email.schema'
import { FastifyReply, FastifyRequest } from 'fastify'

export class UserController {
  constructor(private userRepository: UserRepository) {}

  findByEmail = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email } = findUserByEmailSchema.parse(request.query)

    const user = await this.userRepository.findByEmail(email)

    return reply.code(200).send(UserResponseDTO.toHttp(user))
  }

  update = async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send('update')
  }
}
