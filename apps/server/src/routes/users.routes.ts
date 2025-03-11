import { setupUserDependencies } from '@/di/user.dependencies'
import { FastifyInstance } from 'fastify'
import { authenticate } from '@/middlewares/authenticate.middleware'
import Decimal from 'decimal.js'

export const usersRoutes = function (fastify: FastifyInstance) {
  const userController = setupUserDependencies.resolve('userController')

  fastify.get(':email', userController.findByEmail)

  fastify.put(':id', { preHandler: authenticate }, userController.update)

  fastify.delete('', { preHandler: authenticate }, async (request, reply) => {
    const first_number = Decimal(0.1)
    const second_number = Decimal(0.2)
    console.log(Decimal.add(first_number, second_number))
    reply.send('delete')
  })
}
