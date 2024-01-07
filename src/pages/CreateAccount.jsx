/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Header from '../components/header/Header'

import TextFieldInput from '../components/textField/TextFieldInput'
import InputError from '../components/inputError/InputError'
import Buton from '../components/button/Buton'
import { Link, navigate } from 'gatsby'

import '../components/pageSections/createAccount/createAccount.css'
import { setNewUser } from '../services/setNewUser'
import StackBarMessage from '../components/snackBarMessage/StackBarMessage'

export default function CreateAccount() {
  const infoToken = window.sessionStorage.getItem('infoLogin')
  const objectInfoToken = JSON.parse(infoToken)

  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const [isOpenModalConfirmation, setIsOpenModalConfirmation] = useState(false)
  const [messageModalConfirmation, setMessageModalConfirmation] = useState({
    message: '',
    type: '',
  })
  const onSubmit = (data) => {
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'newUser',
      data: {
        name: data.name,
        lastName: data.lastName,
        lastSecondName: data.lastSecondName
          ? data.lastSecondName
          : 'Sin dato..',
        telephono: data.telephono ? data.telephono : 'Sin dato..',
        address: data.address ? data.address : 'Sin dato..',
        email: data.loginEmail,
        password: data.loginPassword,
        rolId: 1,
      },
      token: 'Bearer ' + objectInfoToken.token,
    }
    setNewUser(payload).then((res) => {
      if (res?.status === 201 || res?.status === 200) {
        setIsOpenModalConfirmation(true)
        setMessageModalConfirmation({
          message: 'Registrado correctamente',
          type: 'success',
        })
        setTimeout(() => {
          navigate('/Login')
        }, 3000)
      }
      if (res?.status !== 201 || res?.status !== 200) {
        setIsOpenModalConfirmation(true)
        setMessageModalConfirmation({
          message: 'Valide los datos',
          type: 'warning',
        })
      }
      if (res === undefined) {
        setIsOpenModalConfirmation(true)
        setMessageModalConfirmation({
          message: 'Error en la operacion',
          type: 'error',
        })
      }
    })
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header />
        <div className="containerAll-login">
          <section className="cotainer-login">
            <section className="section__create-account">
              <div className="text-white block container__header-text">
                <h1>Crea tu cuenta</h1>
              </div>
              <div className="block">
                <TextFieldInput
                  label="Nombre"
                  icon="user"
                  name="name"
                  type="text"
                  required
                  minLength={3}
                  maxLength={50}
                  pattern={/^[a-zA-Z\s]*$/}
                  patternMessage="El nombre solo puede contener letras"
                  placeholder="Nombre"
                />
                <InputError errors={errors} name="name" />
              </div>

              <div className="block">
                <TextFieldInput
                  label="Apellido Paterno"
                  icon="user"
                  name="lastName"
                  type="text"
                  required
                  minLength={3}
                  maxLength={50}
                  pattern={/^[a-zA-Z\s]*$/}
                  patternMessage="El nombre solo puede contener letras"
                  placeholder="Apellido Paterno"
                />
                <InputError errors={errors} name="lastName" />
              </div>

              <div className="block">
                <TextFieldInput
                  label="Apellido Materno"
                  icon="user"
                  name="lastSecondName"
                  type="text"
                  minLength={3}
                  maxLength={50}
                  pattern={/^[a-zA-Z\s]*$/}
                  patternMessage="El nombre solo puede contener letras"
                  placeholder="Apellido Materno"
                />
                <InputError errors={errors} name="lastSecondName" />
              </div>

              <div className="block">
                <TextFieldInput
                  label="Telefono"
                  icon="user"
                  name="telephono"
                  type="text"
                  minLength={8}
                  maxLength={10}
                  // pattern={/^[a-zA-Z\s]*$/}
                  // patternMessage="El nombre solo puede contener letras"
                  placeholder="Telefono"
                />
                <InputError errors={errors} name="telephono" />
              </div>

              <div className="block">
                <TextFieldInput
                  label="Direccion"
                  icon="user"
                  name="address"
                  type="text"
                  minLength={3}
                  maxLength={50}
                  // pattern={/^[a-zA-Z\s]*$/}
                  // patternMessage="El nombre solo puede contener letras"
                  placeholder="Direccion"
                />
                <InputError errors={errors} name="address" />
              </div>

              <div className="block">
                <TextFieldInput
                  disabled
                  value={objectInfoToken.email}
                  type="email"
                  placeholder="Correo"
                  name="loginEmail"
                  minLength={10}
                  maxLength={80}
                  // required
                  pattern={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
                />
                <InputError errors={errors} name="loginEmail" />
              </div>

              <div className="block">
                <TextFieldInput
                  type="password"
                  placeholder="Contraseña"
                  name="loginPassword"
                  minLength={3}
                  required
                />
                <InputError errors={errors} name="loginPassword" />
              </div>

              {/* <CustomSelect /> */}
              {/* </div> */}
              <div className="tarjet-login-buttons flex justify-start">
                <div className="tarjet-login-button">
                  <Buton
                    type="submit"
                    title="Registrar"
                    primaryOrSecondary="primary"
                  />
                </div>
                <div className="tarjet-login-button">
                  <Link to="/Login">
                    <Buton
                      type="button"
                      title="Iniciar sesión"
                      primaryOrSecondary="secondary"
                    />
                  </Link>
                </div>
              </div>
              {/* <span>Cargando</span> */}
            </section>
            {/* </article> */}
          </section>
        </div>
      </form>
      {isOpenModalConfirmation && (
        <StackBarMessage
          isOpen={isOpenModalConfirmation}
          setIsOpen={setIsOpenModalConfirmation}
          message={messageModalConfirmation.message}
          typeMessage={messageModalConfirmation.type}
        />
      )}
    </FormProvider>
  )
}
