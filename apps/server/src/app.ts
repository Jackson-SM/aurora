import 'dotenv/config'
import Fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'
import fastifyMiddie from '@fastify/middie'
import { fastifyAwilixPlugin } from '@fastify/awilix'
import { authRoutes, usersRoutes } from './routes'
import { initRedis } from './lib/redis'

const fastify = Fastify({
  logger: false,
})

fastify.register(fastifyAwilixPlugin, {
  disposeOnClose: true,
  disposeOnResponse: true,
  strictBooleanEnforced: true,
  asyncInit: true,
  asyncDispose: true,
})
fastify.register(fastifyCookie, {
  secret: process.env.JWT_SECRET_KEY,
  hook: 'onRequest',
  parseOptions: {
    httpOnly: true,
    secure: true,
    path: '/',
  },
})

fastify.register(fastifyMiddie)

fastify.register(
  (app) => {
    app.register(usersRoutes, { prefix: '/users' })
    app.register(authRoutes, { prefix: '/auth' })
  },
  { prefix: '/api/v1' },
)

initRedis()
fastify.listen({ port: 3001 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
