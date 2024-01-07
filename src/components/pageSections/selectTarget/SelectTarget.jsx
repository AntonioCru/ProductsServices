/* eslint-disable react/prop-types */
import React from 'react'
import Header from '../../header/Header'

import './selectTarget.css'
import moment from 'moment/moment'
import Buton from '../../button/Buton'
import { navigate } from 'gatsby'
import Map from '../../maps/Map'
import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'

export default function SelectTarget({ location }) {
  return (
    <>
      <Header />
      <ContainerAllBlackSection className="container__products-services">
        <article className="target-article__info">
          <picture className="target-article__image">
            <img src={location.state.image} alt="image product-service" />
          </picture>
          <section className="target-article__description">
            <h2>{location.state.subname}</h2>
            <h2>{location.state.description}</h2>
            <h2>{`Precio $ ${location.state.price}`}</h2>
            <h3>
              {`Telefono: ${
                location.state.telephono ||
                location.state.productsStores.map((store) => store.telephono)
              }`}
            </h3>
            <div className="container-buttons__target-article-info">
              <Buton
                type="button"
                title="Regresar"
                primaryOrSecondary="secondary"
                onClick={() => navigate('/app/ProductsServices')}
              />
              <Buton
                type="button"
                title="Mas información"
                primaryOrSecondary="Primary"
                // onClick={() => navigate('/app/ProductsServices')}
              />
            </div>
          </section>
          <footer className="target-article__title-description">
            <div className="target-article__footer-container">
              <h1>{location.state.name}</h1>
              <h1>
                {moment(location.state.createdAt).format('DD/MM/YYYY HH:MM')}
              </h1>
              <h1>{`Tipo de servicio: ${
                location.state.serviceType?.name ||
                location.state.productsCategories.name
              }`}</h1>
            </div>
          </footer>
        </article>
        <section className="container-map__select-target">
          <Map location={location} />
        </section>
      </ContainerAllBlackSection>
    </>
  )
}
