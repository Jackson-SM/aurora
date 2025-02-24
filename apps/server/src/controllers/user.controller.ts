import { User } from '@/models/user'
import { UserRepository } from '@/repositories/user.repository'
import { createUserSchema } from '@/schemas/users/create-user.schema'
import { getUserByIdSchema } from '@/schemas/users/get-user-by-id.schema'
import { UserViewModel } from '@/view-model/user-view-model'
import { FastifyReply, FastifyRequest } from 'fastify'

export class UserController {
  constructor(private userRepository: UserRepository) {}

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { email, firstName, lastName, password } = createUserSchema.parse(
      request.body,
    )

    const user = new User({ email, firstName, lastName, password })

    await this.userRepository.createUser(user)

    reply.code(201).send()
  }

  async getUserById(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const { id } = getUserByIdSchema.parse(request.query)

    const user = await this.userRepository.getUser(id)

    reply.send(UserViewModel.toHttp(user))
  }

  async update(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    console.log(process.env.JWT_SECRET_KEY)
    reply.send(request.cookies['aurora-token'])
  }
}
