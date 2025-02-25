import { UserController } from '@/controllers/user.controller'
import { PrismaUserRepository } from '@/database/prisma/repositories/prisma-user.repository'
import { newContainer } from '@/lib/awilix-container'
import prisma from '@/lib/prisma-client'
import { asClass, asValue } from 'awilix'

const userContainer = newContainer()

userContainer.register({
  prisma: asValue(prisma),
  userRepository: asClass(PrismaUserRepository).singleton(),
  userController: asClass(UserController).singleton(),
})

export { userContainer }
