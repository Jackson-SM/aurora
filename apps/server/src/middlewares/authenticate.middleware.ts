import { NextFunction } from '@fastify/middie'
import { FastifyReply, FastifyRequest } from 'fastify'

export const authenticate = (
  req: FastifyRequest,
  res: FastifyReply,
  done: NextFunction,
) => {
  console.log('Authenticate middleware')
  done()
}
