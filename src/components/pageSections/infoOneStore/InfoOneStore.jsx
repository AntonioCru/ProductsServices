/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react'
import Header from '../../header/Header'
import ContainerHeaderTitle from '../../containerHeaderTitle/ContainerHeaderTitle'

import './infoOneStore.css'
import Buton from '../../button/Buton'
import { navigate } from 'gatsby'
// import Map from '../../maps/Map'
import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'
import GenericTable from '../../table/GenericTable'

import { getStore } from '../../../services/getStore'
import { postGenericRequest } from '../../../services/postGenericRequest'

export default function InfoOneStore({ location }) {
  const [productsAndServices, setProductsAndServices] = useState()
  const [dataStore, setDataStore] = useState()
  useEffect(() => {
    getStore({
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'stores',
      data: location.state.id || localStorage.getItem('storeIdInfo'),
    }).then((data) => {
      if (data?.status === 200) {
        setDataStore(data.data)
      }
    })

    const payload = {
      storeId: location.state.id || localStorage.getItem('storeIdInfo'),
    }

    let products = []
    let services = []

    postGenericRequest({
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'products/findProductsByStore',
      data: payload,
    }).then((res) => {
      if (res?.status === 201 && Array.isArray(res.data)) {
        products = res.data
      }

      postGenericRequest({
        url: process.env.GATSBY_API_URL_ALLSERVICES,
        methodUrl: 'services/findServicesByStore',
        data: payload,
      }).then((res2) => {
        if (res2?.status === 201 && Array.isArray(res2.data)) {
          services = res2.data
        }

        const productsServices = [...products, ...services]
        setProductsAndServices(productsServices)
      })
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
                dataStore={location.state}
              />
            </div>
            {/* <img
              className="picture__info-one-store"
              src={saveValues?.image}
              alt="ImageStore"
            /> */}
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
                  title="Editar Tienda"
                  onClick={() =>
                    navigate('/app/CreateOrEditStore', { state: saveValues })
                  }
                />
                <Buton
                  type="button"
                  primaryOrSecondary="primary"
                  title="Nueva Tienda"
                  onClick={() =>
                    navigate('/app/CreateOrEditStore', { state: saveValues })
                  }
                />
              </div>
            </article>
            {/* <section className="container-map__select-target container-map_info-store">
              <Map
                latitude={saveValues?.latitude}
                length={saveValues?.length}
                otherclassName="containerbox-map_info-store"
              />
            </section> */}
          </section>
        </article>
      </ContainerAllBlackSection>
    </Header>
  )
}
