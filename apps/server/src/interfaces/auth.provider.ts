import { Payload } from './payload'

export abstract class IAuthProvider {
  abstract generateToken(payload: any): Promise<string>
  abstract verifyToken(token: string): Promise<any>
}
