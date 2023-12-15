import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Header from '../components/header/Header'

import TextFieldInput from '../components/textField/TextFieldInput'
import InputError from '../components/inputError/InputError'
import Buton from '../components/button/Buton'
import { Link } from 'gatsby'
import CustomSelect from '../components/cutomSelect/CustomSelect'

import '../components/pageSections/createAccount/createAccount.css'

export default function CreateAccount() {
  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header />
        <div className="containerAll-login">
          <section className="cotainer-login">
            {/* <picture className="target-login-pictureLogin">
              <img className="img-login" src={imgLogin} alt="logo" />
            </picture> */}
            {/* <article className=" col-start-1 row-start-1 row-end-2 border-yellow-500 border-solid"> */}
            <section className="section__create-account">
              <div className="text-white block container__header-text">
                <h1>Crea tu cuenta</h1>
                <p>
                  Podrás tener acceso a los servicios brindados por proveedores
                  registrados
                </p>
              </div>
              {/* <div className="target-login__inputs"> */}
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
                  required
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
                  required
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
                  required
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
