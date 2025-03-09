import { env } from '@/config/env'
import { IAuthProvider } from '@/interfaces/auth.provider'
import { Payload } from '@/interfaces/payload'
import jwt from 'jsonwebtoken'
import httpErrors from 'http-errors'

export class JwtAuthProvider implements IAuthProvider {
  async decode(token: string): Promise<Payload> {
    const decoded = jwt.decode(token)

    if (!decoded) {
      throw new httpErrors.Unauthorized('Invalid Token')
    }

    return decoded as Payload
  }

  async generateToken(payload: Payload): Promise<string> {
    const token = jwt.sign(
      { email: payload.email, id: payload.id },
      env.JWT_SECRET_KEY,
      {
        expiresIn: 20,
      },
    )

    return token
  }
  async verifyToken(token: string): Promise<Payload> {
    const payload = jwt.verify(token, env.JWT_SECRET_KEY)

    return payload as Payload
  }
}
