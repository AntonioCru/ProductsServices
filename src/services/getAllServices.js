import { genericRequestGet } from './genericRequest'

export const getAllServices = (payload) => {
  return genericRequestGet(payload)
}
