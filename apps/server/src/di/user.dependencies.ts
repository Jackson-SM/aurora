import { UserController } from '@/controllers/user.controller'
import { PrismaUserRepository } from '@/database/prisma/repositories/prisma-user.repository'
import { newContainer } from '@/lib/awilix-container'
import prisma from '@/lib/prisma-client'
import { UserRepository } from '@/repositories/user.repository'
import { asClass, asValue } from 'awilix'

interface IUserSetupCradle {
  prisma: typeof prisma
  userRepository: UserRepository
  userController: UserController
}

const setupUserDependencies = newContainer<IUserSetupCradle>()

setupUserDependencies.register({
  prisma: asValue(prisma),
  userRepository: asClass(PrismaUserRepository).singleton(),
  userController: asClass(UserController).singleton(),
})

export { setupUserDependencies }
