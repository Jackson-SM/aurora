import 'dotenv/config'
import Fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'
import fastifyMiddie from '@fastify/middie'
import { fastifyAwilixPlugin } from '@fastify/awilix'
import fjwt from '@fastify/jwt'
import { authRoutes, usersRoutes } from './routes'
import { initRedis } from './lib/redis'
import cors from '@fastify/cors'
import { env } from './config/env'
import { Payload } from './interfaces/payload'

const fastify = Fastify({
  logger: false,
})
fastify.register(cors, {
  origin: true,
  credentials: true,
})
fastify.register(fjwt, {
  secret: env.JWT_ACCESS_TOKEN,
  cookie: {
    cookieName: 'accessToken',
    signed: false,
  },
})

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: Payload
  }
}

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
    sameSite: 'strict',
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
