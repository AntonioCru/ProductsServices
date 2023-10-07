import React from 'react'
import { Link } from 'gatsby'
import MenuHeaderCustomer from '../menu/MenuHeaderCustomer'

import Logo from '../../images/Logo.png'

import './header.css'

export default function Header({ dataUser, children }) {
  return (
    <header className="container-header">
      <section className="section-header">
        <Link to="/">
          <img className="logo-header" src={Logo} alt="log" />
        </Link>
        <MenuHeaderCustomer dataUser={dataUser} />
      </section>
      {children}
    </header>
  )
}
