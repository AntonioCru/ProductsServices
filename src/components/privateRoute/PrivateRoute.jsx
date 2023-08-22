/* eslint-disable react/prop-types */
import React from 'react'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../../services/auth'

export default function PrivateRoute({
  component: Component,
  location,
  ...rest
}) {
  if (!isLoggedIn() && location.pathname !== '/Login') {
    navigate('/Login')
    return null
  }

  return <Component location={location} {...rest} />
}
