import { genericRequestPost } from './genericRequest'

export const postNewStore = (payload) => {
  return genericRequestPost(payload)
}
