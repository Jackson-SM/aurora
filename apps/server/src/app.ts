import 'dotenv/config'
import Fastify from 'fastify'
import { usersRoutes } from './routes/users.route'
import fastifyCookie from '@fastify/cookie'

const fastify = Fastify({
  logger: true,
})
fastify.register(fastifyCookie, {
  secret: process.env.JWT_SECRET_KEY,
  hook: 'onRequest',
  parseOptions: { httpOnly: true, secure: true },
})

fastify.register(usersRoutes, { prefix: '/api/v1' })

fastify.listen({ port: 3001 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
