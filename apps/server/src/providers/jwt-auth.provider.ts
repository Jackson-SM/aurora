import { env } from '@/config/env'
import { IAuthProvider } from '@/interfaces/auth.provider'
import { Payload } from '@/interfaces/payload'
import jwt, { JwtPayload } from 'jsonwebtoken'

export class JwtAuthProvider implements IAuthProvider {
  async generateToken(payload: Payload): Promise<string> {
    const token = jwt.sign(
      { email: payload.email, id: payload.id },
      env.JWT_SECRET_KEY,
      {
        expiresIn: '1h',
      },
    )

    return token
  }
  async verifyToken(token: string): Promise<JwtPayload | string> {
    const payload = jwt.verify(token, env.JWT_SECRET_KEY)

    console.log(payload)

    return payload
  }
}
