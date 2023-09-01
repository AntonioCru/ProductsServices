/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'

import Header from '../../header/Header'
import Target from '../../target/Target'

import './productsServices.css'

import { getAllServices } from '../../../services/getAllServices'
import ContainerAllBlack from '../../containerBlackGround/containerAllBlack'

export default function ProductsServices({ location }) {
  console.log(location.state)
  const [allServices, setAllServices] = useState([])

  useEffect(() => {
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'services',
    }
    getAllServices(payload).then((res) => {
      if (res) {
        setAllServices(res.data)
      } else {
        navigate('/Login')
      }
    })
  }, [])

  return (
    <>
      <Header dataUser={location.state} />
      <ContainerAllBlack className="container__products-services">
        {/* <section className="container__products-services"> */}
        <div className="titlesubtitle__products-services">
          <h1 className="title__products-services">
            Productos y Servicios registrados
          </h1>
          <p className="paragraph__products-services">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            asperiores fugit optio similique unde alias voluptates voluptatibus
            enim itaque nam porro nobis tempore consequuntur sapiente deleniti,
            non culpa consectetur! Vel.
          </p>
        </div>
        <article className="section__targets__products-services">
          {allServices.map((service) => (
            <Target service={service} key={service.id} />
          ))}
        </article>
        {/* </section> */}
      </ContainerAllBlack>
    </>
  )
}
