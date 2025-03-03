import { authContainer } from '@/di/auth.container'
import { authenticate } from '@/middlewares/authenticate.middleware'
import { FastifyInstance } from 'fastify'

export function authRoutes(app: FastifyInstance) {
  const authController = authContainer.resolve('authController')

  app.post('/signup', authController.signup)
  app.post('/login', authController.login)
  app.post('/logout', { preHandler: authenticate }, authController.logout)
  app.get('/refresh-token', authController.refreshToken)

  app.post('/forgot-password', async (request, reply) => {
    reply.send({ message: 'forgot-password' })
  })

  app.post('/reset-password', async (request, reply) => {
    reply.send({ message: 'reset-password' })
  })
}
