import { genericRequestPath } from './genericRequest'

export const patchUpdateProductsOrServices = (payload) => {
  console.log(payload)
  return genericRequestPath(payload)
}
