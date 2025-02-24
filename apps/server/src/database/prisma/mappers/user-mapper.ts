import { User } from '@/models/user'
import { User as PrismaUser } from '@prisma/client'

export class UserMapper {
  static toDomain(user: PrismaUser): User {
    return new User(
      {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      },
      user.id,
    )
  }

  static toPrisma(user: User): PrismaUser {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      active: user.active,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  }
}
