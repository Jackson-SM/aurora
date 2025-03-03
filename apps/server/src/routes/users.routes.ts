import { userContainer } from '@/di/user.container'
import { FastifyInstance } from 'fastify'
import { authenticate } from '@/middlewares/authenticate.middleware'

export const usersRoutes = function (fastify: FastifyInstance) {
  const userController = userContainer.resolve('userController')

  fastify.get(':email', userController.findByEmail)

  fastify.put(':id', { preHandler: authenticate }, userController.update)
}
