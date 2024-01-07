/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
// import { useDispatch } from 'react-redux'  // ¡Actualizar el estado
import { useDispatch, useSelector } from 'react-redux' // ¡traer info del redux store

import Header from '../../header/Header'
import Target from '../../target/Target'

import './productsServices.css'

import { getAllServices } from '../../../services/getAllServices'
import { saveProductsServices } from '../../../features/tasks/infoUserLoginSlice'
import ContainerTarget from '../../target/ContainerTarget'
import ContainerHeaderTitle from '../../containerHeaderTitle/ContainerHeaderTitle'
import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'

export default function ProductsServices({ location }) {
  const dispatch = useDispatch()
  // dispatch(saveDataLoginUser(location.state))

  useEffect(() => {
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'services',
    }
    getAllServices(payload).then((res) => {
      if (res?.status === 200 && res?.statusText === 'OK') {
        const services = res.data
        getAllServices({
          url: process.env.GATSBY_API_URL_ALLSERVICES,
          methodUrl: 'products',
        }).then((resProducts) => {
          if (resProducts?.status === 200 && res?.statusText === 'OK') {
            const products = resProducts.data
            const allProductsServices = services.concat(products)
            dispatch(saveProductsServices(allProductsServices))
          }
        })
      } else {
        navigate('/Login')
      }
    })
    return () => {}
  }, [])
  // const infoUserLogin = useSelector((state) => state.infoUserLogin) // ¡se ubica en los slices, que es el reducer

  const allDataProductsServices = useSelector((state) => state.productsServices)
  return (
    <>
      <Header dataUser={location.state}>
        <ContainerAllBlackSection className="container__products-services">
          {/* <section className="container__products-services"> */}
          <ContainerHeaderTitle>
            <h1 className="title__products-services">
              Productos y Servicios registrados
            </h1>
            <p className="paragraph__products-services">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              asperiores fugit optio similique unde alias voluptates
              voluptatibus enim itaque nam porro nobis tempore consequuntur
              sapiente deleniti, non culpa consectetur! Vel.
            </p>
          </ContainerHeaderTitle>
          <ContainerTarget>
            {allDataProductsServices.allProductsServices?.map((service) => (
              <Target
                data={service}
                key={service.id}
                onClick={() => {
                  navigate('/app/selectTarget', { state: service })
                }}
              />
            ))}
          </ContainerTarget>
          {/* </section> */}
        </ContainerAllBlackSection>
      </Header>
    </>
  )
}
