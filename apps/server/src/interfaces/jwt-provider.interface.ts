import jwt from 'jsonwebtoken'
import { Payload } from './payload'
import { VerifyTokenStatus } from './verify-token-status'

export interface IJwtProvider {
  generateToken(
    payload: Payload,
    key: string,
    opt: jwt.SignOptions,
  ): Promise<string>
  verifyToken(token: string, key: string): Promise<Payload | VerifyTokenStatus>
  decodeToken(token: string): Promise<Payload>
}
