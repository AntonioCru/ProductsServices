/* eslint-disable react/prop-types */
import React from 'react'
import Header from '../../header/Header'
import ContainerAllBlack from '../../containerBlackGround/containerAllBlack'

import './selectTarget.css'
import moment from 'moment/moment'

export default function SelectTarget({ location }) {
  //   console.log(location)
  return (
    <>
      <Header />
      <ContainerAllBlack className="container__products-services">
        <article className="target-article__info">
          <picture className="target-article__image">
            <img src={location.state.image} alt="image product-service" />
          </picture>
          <section className="target-article__description">
            <h2>{location.state.description}</h2>
            <h3>Telefono: {location.state.telephono}</h3>
          </section>
          <footer className="target-article__title-description">
            <div className="target-article__footer-container">
              <h2>{location.state.name}</h2>
              <h3>
                {moment(location.state.createdAt).format('DD/MM/YYYY HH:MM')}
              </h3>
              <h3>Tipo de servicio: {location.state.serviceType.name}</h3>
            </div>
          </footer>
        </article>
      </ContainerAllBlack>
    </>
  )
}
