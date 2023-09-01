/* eslint-disable react/prop-types */
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Header from '../../header/Header'
import ContainerAllBlack from '../../containerBlackGround/containerAllBlack'
import ContainerFormulary from '../../containerFormulary/ContainerFormulary'
import TextFieldInput from '../../textField/TextFieldInput'
import InputError from '../../inputError/InputError'

import './myProfile.css'

// eslint-disable-next-line react/prop-types
export default function MyProfile({ location }) {
  console.log(location.state.dataUser.dataUser)

  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  // ¡request dataUser
  const dataUser = location.state.dataUser.dataUser

  // ¡update dateUser
  const onSubmit = (data) => {
    console.log(data)
  }
  console.log(dataUser)
  return (
    <>
      <Header />
      <ContainerAllBlack className="container-formulary-display">
        <ContainerFormulary className="container-formulary">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="container-inputs-form-user"
            >
              {/* <div > */}
              <h1 className="title__products-services">Mis Datos</h1>
              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Nombre"
                  name="nameUser"
                  required
                  minLength={3}
                  maxLength={20}
                  value={dataUser.name}
                />
                <InputError errors={errors} name="nameUser" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Primer Apellido"
                  name="nameLastName"
                  required
                  minLength={3}
                  maxLength={20}
                  value={dataUser.lastName}
                />
                <InputError errors={errors} name="nameLastName" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Segundo Apellido"
                  name="nameLastSecondName"
                  required
                  minLength={3}
                  maxLength={20}
                  value={dataUser.lastSecondName}
                />
                <InputError errors={errors} name="nameLastSecondName" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Telefono"
                  name="telephonoUser"
                  required
                  minLength={3}
                  maxLength={20}
                  value={dataUser.telephono}
                />
                <InputError errors={errors} name="telephonoUser" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Dirección"
                  name="addressUser"
                  required
                  minLength={3}
                  maxLength={20}
                  value={dataUser.address}
                />
                <InputError errors={errors} name="addressUser" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="email"
                  placeholder="Correo"
                  name="emailUser"
                  required
                  minLength={3}
                  maxLength={20}
                  value={dataUser.email}
                  disabled
                />
                <InputError errors={errors} name="emailUser" />
              </div>
              {/* </div> */}
            </form>
          </FormProvider>
        </ContainerFormulary>
      </ContainerAllBlack>
    </>
  )
}
