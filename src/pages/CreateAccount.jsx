import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Header from '../components/header/Header'

import TextFieldInput from '../components/textField/TextFieldInput'
import InputError from '../components/inputError/InputError'
import Buton from '../components/button/Buton'
import { Link } from 'gatsby'

import '../components/pageSections/createAccount/createAccount.css'
import { setNewUser } from '../services/setNewUser'

export default function CreateAccount() {
  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const onSubmit = (data) => {
    console.log(data)
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'newUser',
      data: {
        name: data.name,
        lastName: data.lastName,
        lastSecondName: data.lastSecondName,
        telephono: data.telephono,
        address: data.address,
        email: data.loginEmail,
        password: data.loginPassword,
        rolId: 1,
      },
    }
    setNewUser(payload).then((res) => {
      console.log(res)
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
                  type="email"
                  placeholder="Correo"
                  name="loginEmail"
                  minLength={10}
                  maxLength={80}
                  required
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
    </FormProvider>
  )
}
