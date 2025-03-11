import { env } from '@/config/env'
import { AuthenticatedResponse } from '@/interfaces/authenticated-response.interface'
import { IJwtProvider } from '@/interfaces/jwt-provider.interface'
import { Payload } from '@/interfaces/payload'
import { VerifyTokenStatus } from '@/interfaces/verify-token-status'
import { verifyHash } from '@/lib/argon2'
import { User } from '@/models/user'
import { AuthRepository } from '@/repositories/auth.repository'
import { UserRepository } from '@/repositories/user.repository'
import httpErrors from 'http-errors'

export class AuthService implements AuthRepository {
  constructor(
    private userRepository: UserRepository,
    private jwtProvider: IJwtProvider,
  ) {}

  private accessTokenExpiresIn = 10 * 6 * 60 // 10 seconds x 6 x 60 = 60 minutes / 1 hour
  private refreshTokenExpiresIn = 10 * 6 * 60 * 24 * 7 // 10 seconds x 6 x 60 x 24 x 7 = 7 days

  async signup(user: User): Promise<AuthenticatedResponse> {
    const userCreated = await this.userRepository.createUser(user)

    const payload: Payload = {
      email: userCreated.email,
      id: userCreated.id,
    }

    const accessToken = await this.jwtProvider.generateToken(
      payload,
      env.JWT_ACCESS_TOKEN,
      { expiresIn: this.accessTokenExpiresIn },
    )
    const refreshToken = await this.jwtProvider.generateToken(
      payload,
      env.JWT_REFRESH_TOKEN,
      { expiresIn: this.refreshTokenExpiresIn },
    )

    return {
      accessToken,
      refreshToken,
    }
  }
  async login(email: string, password: string): Promise<AuthenticatedResponse> {
    const user = await this.userRepository.findByEmail(email)

    const isValidPassword = await verifyHash(user.password, password)

    if (!isValidPassword) {
      throw new httpErrors.Unauthorized('Invalid email or password')
    }

    const payload: Payload = {
      email: user.email,
      id: user.id,
    }

    const accessToken = await this.jwtProvider.generateToken(
      payload,
      env.JWT_ACCESS_TOKEN,
      { expiresIn: this.accessTokenExpiresIn },
    )
    const refreshToken = await this.jwtProvider.generateToken(
      payload,
      env.JWT_REFRESH_TOKEN,
      { expiresIn: this.refreshTokenExpiresIn },
    )

    return {
      accessToken,
      refreshToken,
    }
  }
  async refreshToken(refreshToken: string): Promise<string> {
    const payload = await this.jwtProvider.verifyToken(
      refreshToken,
      env.JWT_REFRESH_TOKEN,
    )

    if (
      payload === VerifyTokenStatus.INVALID ||
      payload === VerifyTokenStatus.EXPIRED
    ) {
      throw new httpErrors.Unauthorized('Invalid or expired token')
    }

    const accessToken = await this.jwtProvider.generateToken(
      { email: payload.email, id: payload.id },
      env.JWT_ACCESS_TOKEN,
      { expiresIn: this.accessTokenExpiresIn },
    )

    return accessToken
  }
}
