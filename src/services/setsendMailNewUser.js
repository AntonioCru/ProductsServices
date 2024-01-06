import { genericRequestPost } from './genericRequest'

export const sendMailNewUser = (payload) => {
  return genericRequestPost(payload)
}
