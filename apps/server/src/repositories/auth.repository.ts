import { User } from '@/models/user'

export interface AuthRepository {
  login(email: string, password: string): Promise<string>
  signup(user: User): Promise<string>
  logout(): Promise<void>
  refreshToken(): Promise<string>
  forgotPassword(): Promise<void>
  resetPassword(): Promise<void>
}
