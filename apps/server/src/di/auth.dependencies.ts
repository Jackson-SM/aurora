import { AuthController } from '@/controllers/auth.controller'
import { PrismaUserRepository } from '@/database/prisma/repositories/prisma-user.repository'
import { IJwtProvider } from '@/interfaces/jwt-provider.interface'
import { newContainer } from '@/lib/awilix-container'
import prisma from '@/lib/prisma-client'
import { AuthProvider } from '@/providers/jwt.provider'
import { AuthRepository } from '@/repositories/auth.repository'
import { UserRepository } from '@/repositories/user.repository'
import { AuthService } from '@/services/auth.service'
import { asClass, asValue } from 'awilix'

interface IAuthSetupCradle {
  prisma: typeof prisma
  jwtProvider: IJwtProvider
  userRepository: UserRepository
  authService: AuthRepository
  authController: AuthController
}

const setupAuthDependencies = newContainer<IAuthSetupCradle>()

setupAuthDependencies.register({
  jwtProvider: asClass(AuthProvider).singleton(),
  prisma: asValue(prisma),
  userRepository: asClass(PrismaUserRepository).singleton(),
  authService: asClass(AuthService).singleton(),
  authController: asClass(AuthController).singleton(),
})

export { setupAuthDependencies }
