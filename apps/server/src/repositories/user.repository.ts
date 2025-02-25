import { User } from '@/models/user'

export interface UserRepository {
  createUser(user: User): Promise<User>
  findByEmail(email: string): Promise<User>
  updateUser(user: User): Promise<void>
  deleteUser(id: string): Promise<void>
}
