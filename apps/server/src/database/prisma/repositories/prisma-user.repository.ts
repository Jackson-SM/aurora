import { User } from '@/models/user'
import { UserRepository } from '@/repositories/user.repository'
import { PrismaClient } from '@prisma/client'
import httpErrors from 'http-errors'
import { UserMapper } from '../mappers/user-mapper'

export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}
  async createUser(user: User): Promise<User> {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    })

    if (userExists) {
      throw new httpErrors.Conflict('User already exists')
    }

    const createdUser = await this.prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    })

    return UserMapper.toDomain(createdUser)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new httpErrors.NotFound('User not found')
    }

    return UserMapper.toDomain(user)
  }

  async updateUser(user: User): Promise<void> {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    })

    if (!userExists) {
      throw new httpErrors.NotFound('User not found')
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: UserMapper.toPrisma(user),
    })
  }
  async deleteUser(id: string): Promise<void> {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (!userExists) {
      throw new httpErrors.NotFound('User not found')
    }

    await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        active: false,
      },
    })
  }
}
