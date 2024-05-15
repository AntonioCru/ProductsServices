/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Header from '../../header/Header'
import ContainerFormulary from '../../containerFormulary/ContainerFormulary'
import TextFieldInput from '../../textField/TextFieldInput'
import InputError from '../../inputError/InputError'

import './myProfile.css'
import { getUser } from '../../../services/auth'
import Buton from '../../button/Buton'
import { navigate } from 'gatsby'
import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'
import { setUser } from '../../../services/setUser'
import StackBarMessage from '../../snackBarMessage/StackBarMessage'

// eslint-disable-next-line react/prop-types
export default function MyProfile() {
  const infoUser = getUser()

  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  // ¡update dateUser
  const [isOpenModalConfirmation, setIsOpenModalConfirmation] = useState(false)
  const [messageModalConfirmation, setMessageModalConfirmation] = useState({
    message: '',
    type: '',
  })
  const onSubmit = (data) => {
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'users',
      data: getUser().id,
      newData: {
        name: data.nameUser,
        lastName: data.nameLastName,
        lastSecondName: data.nameLastSecondName
          ? data.nameLastSecondName
          : 'Sin dato..',
        telephono: data.telephonoUser ? data.telephonoUser : 'Sin dato..',
        address: data.addressUser ? data.addressUser : 'Sin dato..',
        email: infoUser.email,
        password: data.loginPassword,
        rolId: 1,
      },
    }
    setUser(payload).then((res) => {
      if (res.status === 200) {
        setIsOpenModalConfirmation(true)
        setMessageModalConfirmation({ message: 'Actualizado', type: 'success' })
        setTimeout(() => {
          navigate('/app/ProductsServices/')
        }, 3000)
      } else if (res.status !== 200) {
        setIsOpenModalConfirmation(true)
        setMessageModalConfirmation({
          message: 'Verifique los datos',
          type: 'warning',
        })
      } else {
        setIsOpenModalConfirmation(true)
        setMessageModalConfirmation({
          message: 'Error en la operacion',
          type: 'error',
        })
      }
    })
  }
  return (
    <>
      <Header dataUser={location.state}>
        <ContainerAllBlackSection className="container-formulary-display">
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
                    minLength={3}
                    maxLength={20}
                    value={infoUser.email}
                    disabled
                  />
                  <InputError errors={errors} name="emailUser" />
                </div>

                <div className="input__profile-user">
                  <TextFieldInput
                    type="password"
                    placeholder="Contraseña"
                    name="loginPassword"
                    minLength={3}
                    required
                  />
                  <InputError errors={errors} name="loginPassword" />
                </div>

                <div className="container-buttons-footer">
                  <Buton
                    title="Regresar"
                    primaryOrSecondary="secondary"
                    type="button"
                    onClick={() => navigate('/app/ProductsServices/')}
                  />
                  <Buton
                    title="Editar"
                    primaryOrSecondary="primary"
                    type="submit"
                  />
                </div>
              </form>
            </FormProvider>
            {isOpenModalConfirmation && (
              <StackBarMessage
                isOpen={isOpenModalConfirmation}
                setIsOpen={setIsOpenModalConfirmation}
                message={messageModalConfirmation.message}
                typeMessage={messageModalConfirmation.type}
              />
            )}
          </ContainerFormulary>
        </ContainerAllBlackSection>
      </Header>
    </>
  )
}
