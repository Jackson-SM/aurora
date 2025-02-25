import { createContainer, InjectionMode } from 'awilix'

export const newContainer = () => {
  return createContainer({
    injectionMode: InjectionMode.CLASSIC,
    strict: true,
  })
}
