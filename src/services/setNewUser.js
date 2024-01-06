import { genericRequestPost } from './genericRequest'

export const setNewUser = (payload) => {
  return genericRequestPost(payload)
}
