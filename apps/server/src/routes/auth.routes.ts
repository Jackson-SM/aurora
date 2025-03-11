import { setupAuthDependencies } from '@/di/auth.dependencies'
import { FastifyInstance } from 'fastify'

export const authRoutes = function (fastify: FastifyInstance) {
  const authController = setupAuthDependencies.resolve('authController')

  fastify.post('/login', authController.login)

  fastify.post('/signup', authController.signup)

  fastify.get('/refresh-token', authController.refreshToken)
}
