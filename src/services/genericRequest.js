import axios from 'axios'
import { userTokenHeader } from './auth'

export const genericRequestPost = ({ url, methodUrl, data }) => {
  return axios
    .post(`${url}${methodUrl}`, data, {
      headers: {
        Authorization: userTokenHeader(),
      },
    })
    .catch((error) => {
      if (error) {
        window.localStorage.removeItem('gatsbyUserProductsServiceAc')
      }
    })
}

export const genericRequestGet = ({ url, methodUrl, data }) => {
  if (data) {
    return axios
      .get(`${url}${methodUrl}/${data}`, {
        headers: {
          Authorization: userTokenHeader(),
        },
      })
      .catch((error) => {
        if (error) {
          window.localStorage.removeItem('gatsbyUserProductsServiceAc')
        }
      })
  } else if (!data) {
    return axios
      .get(`${url}${methodUrl}`, {
        headers: {
          Authorization: userTokenHeader(),
        },
      })
      .catch((error) => {
        if (error) {
          window.localStorage.removeItem('gatsbyUserProductsServiceAc')
        }
      })
  }
}

export const genericRequestPath = ({ url, methodUrl, data, newData }) => {
  return axios
    .patch(`${url}${methodUrl}/${data}`, {
      headers: {
        Authorization: userTokenHeader(),
      },
    })
    .catch((error) => {
      if (error) {
        window.localStorage.removeItem('gatsbyUserProductsServiceAc')
      }
    })
}
export const genericRequestDelete = ({ url, methodUrl, data }) => {
  return axios
    .delete(`${url}${methodUrl}/${data}`, {
      headers: {
        Authorization: userTokenHeader(),
      },
    })
    .catch((error) => {
      if (error) {
        window.localStorage.removeItem('gatsbyUserProductsServiceAc')
      }
    })
}
