import { AuthenticatedResponse } from '@/interfaces/authenticated-response.interface'
import { User } from '@/models/user'

export interface AuthRepository {
  signup(user: User): Promise<AuthenticatedResponse>
  login(email: string, password: string): Promise<AuthenticatedResponse>
  refreshToken(refreshToken: string): Promise<string>
}
