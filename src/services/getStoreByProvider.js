import { genericRequestGet } from './genericRequest'

export const getStoreByProvider = (payload) => {
  return genericRequestGet(payload)
}
