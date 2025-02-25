import { AuthController } from "@/controllers/auth.controller";
import { authContainer } from "@/di/auth.container";
import { FastifyInstance } from "fastify";

export function authRoutes(app: FastifyInstance) {

  const authController = authContainer.resolve<AuthController>('authController')

  app.post('/signup', (req,res) => authController.signup(req,res))

  app.post('/login', async (request, reply) => {
    reply.send({ message: 'login' })
  })

  app.post('/logout', async (request, reply) => {
    reply.send({ message: 'logout' })
  })

  app.post('/forgot-password', async (request, reply) => {
    reply.send({ message: 'forgot-password' })
  })

  app.post('/reset-password', async (request, reply) => {
    reply.send({ message: 'reset-password' })
  })
}
