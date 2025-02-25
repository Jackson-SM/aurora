import { AuthController } from '@/controllers/auth.controller'
import { PrismaUserRepository } from '@/database/prisma/repositories/prisma-user.repository'
import { newContainer } from '@/lib/awilix-container'
import prisma from '@/lib/prisma-client'
import { JwtAuthProvider } from '@/providers/jwt-auth.provider'
import { AuthService } from '@/services/auth.service'
import { asClass, asValue } from 'awilix'

const authContainer = newContainer()

authContainer.register({
  prisma: asValue(prisma),
  userRepository: asClass(PrismaUserRepository).singleton(),
  authProvider: asClass(JwtAuthProvider).singleton(),
  authRepository: asClass(AuthService).singleton(),
  authController: asClass(AuthController).singleton()
})

export {
  authContainer
}
