/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Header from '../../header/Header'
import { navigate } from 'gatsby'
import TextFieldInput from '../../textField/TextFieldInput'
import InputError from '../../inputError/InputError'

import ContainerHeaderTitle from '../../containerHeaderTitle/ContainerHeaderTitle'

import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'
import Buton from '../../button/Buton'
import ContainerEditSection from '../../containerEditSection/ContainerEditSection'

import './editStore.css'
import EditPointMap from '../../maps/EditPointMap'

export default function EditStore({ location }) {
  console.log(location)

  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const [fetchPosition, setFetchPosition] = useState({ lat: '', lng: '' })
  const onSubmit = (data) => {
    console.log(fetchPosition, data)
  }
  return (
    <Header>
      <ContainerAllBlackSection className="container__products-services ">
        <ContainerHeaderTitle>
          <h1 className="title__store">{location.state.state.state?.name}</h1>
        </ContainerHeaderTitle>
        <ContainerEditSection>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="container-inputs-form-user"
            >
              {/* <div > */}
              <h1 className="title__products-services">Datos de Tienda</h1>
              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Nombre"
                  name="nameUser"
                  required
                  minLength={3}
                  maxLength={50}
                  value={location.state.state?.name}
                />
                <InputError errors={errors} name="nameUser" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Apodo"
                  name="nameLastName"
                  required
                  minLength={3}
                  maxLength={50}
                  value={location.state.state?.subName}
                />
                <InputError errors={errors} name="nameLastName" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Descripción"
                  name="nameLastSecondName"
                  minLength={3}
                  maxLength={50}
                  value={location.state.state?.description}
                />
                <InputError errors={errors} name="nameLastSecondName" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Telefono"
                  name="telephonoUser"
                  minLength={3}
                  maxLength={20}
                  value={location.state.state?.telephono}
                />
                <InputError errors={errors} name="telephonoUser" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Dirección"
                  name="addressUser"
                  minLength={3}
                  maxLength={50}
                  value={location.state.state?.address}
                />
                <InputError errors={errors} name="addressUser" />
              </div>

              <div className="container-buttons-footer flex gap-4">
                <Buton
                  title="Regresar"
                  primaryOrSecondary="secondary"
                  type="button"
                  onClick={() => navigate('/app/myBusiness/')}
                />
                <Buton
                  title="guardar"
                  primaryOrSecondary="primary"
                  type="submit"
                />
              </div>

              <div className="container__imagen-store">
                <img src={location.state.state.image} alt="Image store" />
              </div>
              <div className="pl-0">
                <EditPointMap
                  latitude={location.state.state.latitude}
                  length={location.state.state.length}
                  changePosition={setFetchPosition}
                  modifyStyle
                />
              </div>
            </form>
          </FormProvider>
        </ContainerEditSection>
      </ContainerAllBlackSection>
    </Header>
  )
}
