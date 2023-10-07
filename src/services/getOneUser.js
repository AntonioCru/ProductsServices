import { genericRequestGet } from './genericRequest'

export const getOneUser = (payload) => {
  return genericRequestGet(payload)
}
