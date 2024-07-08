import { genericRequestGet } from './genericRequest'

export const getStore = (payload) => {
  return genericRequestGet(payload)
}
