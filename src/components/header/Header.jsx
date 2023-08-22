import React from 'react'
import { Link } from 'gatsby'
import MenuHeaderCustomer from '../menu/MenuHeaderCustomer'

import Logo from '../../images/Logo.png'

import './header.css'

export default function Header() {
  return (
    <header className="container-header">
      <Link to="/">
        <img className="logo-header" src={Logo} alt="log" />
      </Link>
      <MenuHeaderCustomer />
    </header>
  )
}
