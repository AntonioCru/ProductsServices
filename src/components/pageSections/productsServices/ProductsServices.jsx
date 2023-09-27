/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
// import { useDispatch } from 'react-redux'  // ¡Actualizar el estado
import { useDispatch, useSelector } from 'react-redux' // ¡traer info del redux store

import Header from '../../header/Header'
import Target from '../../target/Target'

import './productsServices.css'

import { getAllServices } from '../../../services/getAllServices'
import ContainerAllBlack from '../../containerBlackGround/containerAllBlack'
import {
  allProductsServices,
  saveDataLoginUser,
  saveProductsServices,
} from '../../../features/tasks/infoUserLoginSlice'

export default function ProductsServices({ location }) {
  console.log(location)
  const dispatch = useDispatch()
  // dispatch(saveDataLoginUser(location.state))

  useEffect(() => {
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'services',
    }
    getAllServices(payload).then((res) => {
      if (res?.status === 200 && res?.statusText === 'OK') {
        console.log(res.data)
        const services = res.data
        getAllServices({
          url: process.env.GATSBY_API_URL_ALLSERVICES,
          methodUrl: 'products',
        }).then((resProducts) => {
          if (resProducts?.status === 200 && res?.statusText === 'OK') {
            console.log(resProducts.data)
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
  // console.log(infoUserLogin)

  const allDataProductsServices = useSelector((state) => state.productsServices)
  console.log(allDataProductsServices)
  return (
    <>
      <Header dataUser={location.state}>
        <ContainerAllBlack className="container__products-services">
          {/* <section className="container__products-services"> */}
          <div className="titlesubtitle__products-services">
            <h1 className="title__products-services">
              Productos y Servicios registrados
            </h1>
            <p className="paragraph__products-services">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              asperiores fugit optio similique unde alias voluptates
              voluptatibus enim itaque nam porro nobis tempore consequuntur
              sapiente deleniti, non culpa consectetur! Vel.
            </p>
          </div>
          <article className="section__targets__products-services">
            {allDataProductsServices.allProductsServices?.map((service) => (
              <Target
                service={service}
                key={service.id}
                onClick={() => {
                  navigate('/app/selectTarget', { state: service })
                }}
              />
            ))}
          </article>
          {/* </section> */}
        </ContainerAllBlack>
      </Header>
    </>
  )
}
