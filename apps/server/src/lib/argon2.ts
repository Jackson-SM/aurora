import * as argon2 from 'argon2'

export const makeHash = async (password: string): Promise<string> => {
  const hash = await argon2.hash(password)

  return hash
}

export const verifyHash = async (
  hash: string,
  password: string,
): Promise<boolean> => {
  const isValid = await argon2.verify(hash, password)

  return isValid
}
