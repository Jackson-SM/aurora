import { AuthController } from '@/controllers/auth.controller'
import { PrismaUserRepository } from '@/database/prisma/repositories/prisma-user.repository'
import { IAuthProvider } from '@/interfaces/auth.provider'
import { newContainer } from '@/lib/awilix-container'
import prisma from '@/lib/prisma-client'
import { JwtAuthProvider } from '@/providers/jwt-auth.provider'
import { AuthRepository } from '@/repositories/auth.repository'
import { UserRepository } from '@/repositories/user.repository'
import { AuthService } from '@/services/auth.service'
import { asClass, asValue } from 'awilix'

interface IAuthContainerCradle {
  prisma: typeof prisma
  userRepository: UserRepository
  authProvider: IAuthProvider
  authRepository: AuthRepository
  authController: AuthController
}

const authContainer = newContainer<IAuthContainerCradle>()

authContainer.register({
  prisma: asValue(prisma),
  userRepository: asClass(PrismaUserRepository).singleton(),
  authProvider: asClass(JwtAuthProvider).singleton(),
  authRepository: asClass(AuthService).singleton(),
  authController: asClass(AuthController).singleton(),
})

export { authContainer }
