import { createContainer, InjectionMode } from 'awilix'

export const newContainer = <T extends object>() => {
  return createContainer<T>({
    injectionMode: InjectionMode.CLASSIC,
    strict: true,
  })
}
