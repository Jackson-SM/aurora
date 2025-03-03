import { User } from '@/models/user'

export interface AuthRepository {
  login(email: string, password: string): Promise<string>
  signup(user: User): Promise<string>
  logout(token: string): Promise<void>
  refreshToken(token: string): Promise<string>
  forgotPassword(): Promise<void>
  resetPassword(): Promise<void>
}
