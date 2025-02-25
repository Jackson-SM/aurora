import { userContainer } from '@/di/user.container'
import { UserController } from '@/controllers/user.controller'
import { authenticate } from '@/middlewares/authenticate.middleware'
import { FastifyInstance } from 'fastify'

export const usersRoutes = function (fastify: FastifyInstance) {
  const userController = userContainer.resolve<UserController>('userController')

  fastify.addHook('onRequest', authenticate)

  fastify.get(':email', async (req, res) =>
    userController.findByEmail(req, res),
  )

  fastify.put(':id', (req, res) => userController.update(req, res))
}
