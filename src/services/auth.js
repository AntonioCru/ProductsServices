/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import axios from 'axios'
import { navigate } from 'gatsby'
import { useDispatch } from 'react-redux'

const urlLogin = process.env.GATSBY_API_URL_LOGIN

export const isBrowser = () => typeof window !== 'undefined'
export const getUser = () =>
  isBrowser() && window.localStorage.getItem('gatsbyUserProductsServiceAc')
    ? JSON.parse(window.localStorage.getItem('gatsbyUserProductsServiceAc'))
    : {}

const setUser = (user) =>
  window.localStorage.setItem(
    'gatsbyUserProductsServiceAc',
    JSON.stringify(user),
  )

const removeUser = () => {
  window.localStorage.removeItem('gatsbyUserProductsServiceAc')
}

export const handleLogin = ({ email, password }) => {
  axios
    .post(urlLogin, {
      email,
      password,
    })
    .then((res) => {
      if (res.status === 200) {
        setUser({
          token: res.data.token,
          id: res.data.user.id,
          name: res.data.user.name,
          lastName: res.data.user.lastName,
          lastSecondName: res.data.user.lastSecondName,
          rolId: res.data.user.rolId,
          email: res.data.user.email,
          telephono: res.data.user.telephono,
          address: res.data.user.address,
          createAt: res.data.user.createAt,
        })
        const dataUser = res.data.user
        navigate('/app/ProductsServices', { state: dataUser })
      }
    })
    .catch((error) => console.log(error))
}

export const handleLogout = () => {
  setUser(null)
  removeUser()
  navigate('/')
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.token
}

export const userTokenHeader = () => {
  const user = getUser()
  const token = user.token ? user.token : ''
  return `Bearer ${token}`
}
