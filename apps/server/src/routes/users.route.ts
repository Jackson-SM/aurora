import { userContainer } from '@/containers/user-container'
import { FastifyInstance } from 'fastify'

export const usersRoutes = function (fastify: FastifyInstance) {
  const userController = userContainer.resolve('userController')

  fastify.get('/users:id', async (req, res) =>
    userController.getUserById(req, res),
  )

  fastify.post('/users', (req, res) => userController.create(req, res))

  fastify.put('/users:id', (req, res) => userController.update(req, res))
}
