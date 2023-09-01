import React from 'react'
import { Link } from 'gatsby'
import MenuHeaderCustomer from '../menu/MenuHeaderCustomer'

import Logo from '../../images/Logo.png'

import './header.css'

// eslint-disable-next-line react/prop-types
export default function Header({ dataUser }) {
  return (
    <header className="container-header">
      <Link to="/">
        <img className="logo-header" src={Logo} alt="log" />
      </Link>
      <MenuHeaderCustomer dataUser={dataUser} />
    </header>
  )
}
