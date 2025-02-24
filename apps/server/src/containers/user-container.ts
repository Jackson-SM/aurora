import { UserController } from '@/controllers/user.controller'
import { PrismaUserRepository } from '@/database/prisma/repositories/prisma-user.repository'
import prisma from '@/lib/prisma-client'
import { asClass, asValue, createContainer, InjectionMode } from 'awilix'

const userContainer = createContainer({
  injectionMode: InjectionMode.CLASSIC,
  strict: true,
})

userContainer.register({
  prisma: asValue(prisma),
  userRepository: asClass(PrismaUserRepository).singleton(),
  userController: asClass(UserController).singleton(),
})

export { userContainer }
