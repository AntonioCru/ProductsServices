/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react'
import Header from '../../header/Header'
import ContainerHeaderTitle from '../../containerHeaderTitle/ContainerHeaderTitle'

import './infoOneStore.css'
import Buton from '../../button/Buton'
import { navigate } from 'gatsby'
import Map from '../../maps/Map'
import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'
import { getStore } from '../../../services/getStore'
import GenericTable from '../../table/GenericTable'

export default function InfoOneStore({ location }) {
  const [productsAndServices, setProductsAndServices] = useState()
  const [dataStore, setDataStore] = useState()
  useEffect(() => {
    getStore({
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'stores',
      data: location.state.id || localStorage.getItem('storeIdInfo'),
    }).then((data) => {
      if (data?.status === 200 && data?.statusText === 'OK') {
        setDataStore(data.data)
        setProductsAndServices(
          data.data.storesProducts?.concat(data.data.storeService),
        )
      }
    })
  }, [location])

  const saveValues = useMemo(() => {
    return dataStore
  }, [dataStore])
  return (
    <Header>
      <ContainerAllBlackSection className="container__products-services containe-black_info-store">
        <ContainerHeaderTitle>
          <h1 className="title__store">Mi tienda</h1>
        </ContainerHeaderTitle>
        <article className="container__info-one-store">
          <section className="container__grid__info-one-store">
            <div className="container-targets_info-store">
              <GenericTable
                rows={productsAndServices}
                linkNavigation="/app/EditProductOrService"
              />
            </div>
            <img
              className="picture__info-one-store"
              src={saveValues?.image}
              alt="ImageStore"
            />
            <article className="information-target__one-tore">
              <h1>{saveValues?.name}</h1>
              <h2>{saveValues?.subName}</h2>
              <p>{saveValues?.description}</p>
              <h3>{saveValues?.telephono}</h3>
              <h3>{saveValues?.address}</h3>
              <h3>{saveValues?.email}</h3>
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
                    navigate('/app/CreateOrEditStore', { state: saveValues })
                  }
                />
                <Buton
                  type="button"
                  primaryOrSecondary="primary"
                  title="Nuevo"
                  onClick={() =>
                    navigate('/app/CreateOrEditStore', { state: saveValues })
                  }
                />
              </div>
            </article>
            <section className="container-map__select-target container-map_info-store">
              <Map
                latitude={saveValues?.latitude}
                length={saveValues?.length}
                otherclassName="containerbox-map_info-store"
              />
            </section>
          </section>
        </article>
      </ContainerAllBlackSection>
    </Header>
  )
}
