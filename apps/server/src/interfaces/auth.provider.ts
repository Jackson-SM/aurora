export abstract class IAuthProvider {
  abstract generateToken(payload: unknown): Promise<string>
  abstract verifyToken(token: string): Promise<unknown>
}
