import { IAuthProvider } from '@/interfaces/auth.provider'
import { makeHash } from '@/lib/argon2'
import { User } from '@/models/user'
import { AuthRepository } from '@/repositories/auth.repository'
import { UserRepository } from '@/repositories/user.repository'

export class AuthService implements AuthRepository {
  private userRepository: UserRepository
  private authProvider: IAuthProvider

  constructor(authProvider: IAuthProvider, userRepository: UserRepository) {
    this.userRepository = userRepository
    this.authProvider = authProvider
  }

  async login(email: string, password: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
  async signup(user: User): Promise<string> {
    const createdUser = await this.userRepository.createUser(user)

    const token = this.authProvider.generateToken(createdUser)

    return token
  }
  async logout(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async forgotPassword(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async resetPassword(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
