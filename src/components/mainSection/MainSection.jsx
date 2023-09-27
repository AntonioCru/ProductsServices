import React from 'react'
import Stack from '@mui/material/Stack'

import imgDashboard from '../../images/productosservicio.jpg'

import './mainSection.css'
import { Link } from 'gatsby'
import Buton from '../button/Buton'

export default function MainSection() {
  return (
    <article className="container-image-dashboard">
      <section>
        <div className="container-description__main-section">
          <h1 className="title__main-section">
            Productos y Servicios en cualquier lugar
          </h1>
          <p className="paragraph__main-section">
            Conoce a proveedores, presonas y/o negocios que brindan productos o
            servicios y que pueden ser de utilidad a tus necesidades
          </p>
          <div className="buttons__main-section">
            <Stack spacing={3} direction="row">
              <Link to="/Login">
                <Buton title="Iniciar sesión" primaryOrSecondary="primary" />
              </Link>
              <Link to="/RegisterUser">
                <Buton title="Registrarse" primaryOrSecondary="secondary" />
              </Link>
            </Stack>
          </div>
        </div>
        <img
          className="image-dashboard"
          src={imgDashboard}
          alt="imgPrincipal"
        />
      </section>
    </article>
  )
}
