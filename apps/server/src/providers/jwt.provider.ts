import { IJwtProvider } from '@/interfaces/jwt-provider.interface'
import { Payload } from '@/interfaces/payload'
import { VerifyTokenStatus } from '@/interfaces/verify-token-status'
import jwt from 'jsonwebtoken'

export class AuthProvider implements IJwtProvider {
  async generateToken(
    payload: Payload,
    key: string,
    opt: jwt.SignOptions,
  ): Promise<string> {
    const token = jwt.sign(payload, key, opt)

    return token
  }
  async verifyToken(
    token: string,
    key: string,
  ): Promise<Payload | VerifyTokenStatus> {
    try {
      const payload = jwt.verify(token, key) as Payload

      return payload
    } catch (error: unknown) {
      if (error instanceof jwt.TokenExpiredError) {
        return VerifyTokenStatus.EXPIRED
      }

      return VerifyTokenStatus.INVALID
    }
  }
  async decodeToken(token: string): Promise<Payload> {
    const payload = jwt.decode(token) as Payload

    return payload
  }
}
