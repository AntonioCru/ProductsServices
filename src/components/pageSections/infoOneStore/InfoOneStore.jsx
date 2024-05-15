/* eslint-disable react/prop-types */
import React from 'react'
import Header from '../../header/Header'
import ContainerHeaderTitle from '../../containerHeaderTitle/ContainerHeaderTitle'

import './infoOneStore.css'
import Buton from '../../button/Buton'
import { navigate } from 'gatsby'
import Map from '../../maps/Map'
import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'

export default function InfoOneStore({ location }) {
  return (
    <Header>
      <ContainerAllBlackSection className="container__products-services sizeHeigth__containerBlack">
        <ContainerHeaderTitle>
          <h1 className="title__store">Mi tienda</h1>
        </ContainerHeaderTitle>
        <article className="container__info-one-store">
          <section className="container__grid__info-one-store">
            <img
              className="picture__info-one-store"
              src={location.state.image}
              alt="ImageStore"
            />
            <article className="information-target__one-tore">
              <h1>{location.state.name}</h1>
              <h2>{location.state.subName}</h2>
              <p>{location.state.description}</p>
              <h3>{location.state.telephono}</h3>
              <h3>{location.state.address}</h3>
              <h3>{location.state.email}</h3>
              <div className="container-button__one-target">
                <Buton
                  type="button"
                  primaryOrSecondary="secondary"
                  title="Regresar"
                  onClick={() => navigate('/app/myBusiness')}
                />
                <Buton
                  type="button"
                  primaryOrSecondary="primary"
                  title="Editar"
                  onClick={() =>
                    navigate('/app/EditStore', { state: location })
                  }
                />
              </div>
            </article>
          </section>
        </article>
        <section className="container-map__select-target">
          <Map
            latitude={location.state.latitude}
            length={location.state.length}
          />
        </section>
      </ContainerAllBlackSection>
    </Header>
  )
}
