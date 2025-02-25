import 'dotenv/config'
import Fastify from 'fastify'
import { usersRoutes } from './routes/users.routes'
import fastifyCookie from '@fastify/cookie'
import fastifyMiddie from '@fastify/middie'
import { authRoutes } from './routes/auth.routes'

const fastify = Fastify({
  logger: false,
})

fastify.register(fastifyCookie, {
  secret: process.env.JWT_SECRET_KEY,
  hook: 'onRequest',
  parseOptions: { httpOnly: true, secure: true },
})

fastify.register(fastifyMiddie)

fastify.register(
  (app) => {
    app.register(usersRoutes, { prefix: '/users' })
    app.register(authRoutes, {prefix: '/auth'})
  },
  { prefix: '/api/v1' },
)
fastify.listen({ port: 3001 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
