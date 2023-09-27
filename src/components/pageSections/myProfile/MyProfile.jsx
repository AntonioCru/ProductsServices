/* eslint-disable react/prop-types */
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Header from '../../header/Header'
import ContainerAllBlack from '../../containerBlackGround/containerAllBlack'
import ContainerFormulary from '../../containerFormulary/ContainerFormulary'
import TextFieldInput from '../../textField/TextFieldInput'
import InputError from '../../inputError/InputError'

import './myProfile.css'
import { getUser } from '../../../services/auth'
import Buton from '../../button/Buton'
import { navigate } from 'gatsby'

// eslint-disable-next-line react/prop-types
export default function MyProfile() {
  const infoUser = getUser()

  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  // ¡update dateUser
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <Header dataUser={location.state}>
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
                    value={infoUser.name}
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
                    value={infoUser.lastName}
                  />
                  <InputError errors={errors} name="nameLastName" />
                </div>

                <div className="input__profile-user">
                  <TextFieldInput
                    type="text"
                    placeholder="Segundo Apellido"
                    name="nameLastSecondName"
                    minLength={3}
                    maxLength={20}
                    value={infoUser.lastSecondName}
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
                    value={infoUser.telephono}
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
                    value={infoUser.address}
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
                    value={infoUser.email}
                    disabled
                  />
                  <InputError errors={errors} name="emailUser" />
                </div>

                <Buton
                  title="Regresar"
                  primaryOrSecondary="secondary"
                  type="button"
                  onClick={() => navigate('/app/ProductsServices/')}
                />
                <Buton
                  title="Guardar"
                  primaryOrSecondary="primary"
                  type="submit"
                />
              </form>
            </FormProvider>
          </ContainerFormulary>
        </ContainerAllBlack>
      </Header>
    </>
  )
}
