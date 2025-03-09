import { Payload } from './payload'

export abstract class IAuthProvider {
  abstract generateToken(payload: Payload): Promise<string>
  abstract verifyToken(token: string): Promise<Payload>
  abstract decode(token: string): Promise<Payload>
}
