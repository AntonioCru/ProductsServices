import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Header from '../components/header/Header'

import imgLogin from '../images/imgLogin.jpg'
import TextFieldInput from '../components/textField/TextFieldInput'
import InputError from '../components/inputError/InputError'
import Buton from '../components/button/Buton'
import { Link } from 'gatsby'

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
            <picture className="target-login-pictureLogin">
              <img className="img-login" src={imgLogin} alt="logo" />
            </picture>
            <article className="target-login">
              <section className="form__target-login">
                <div className="form__target-login__headerTitle">
                  <h1>Crear cuenta</h1>
                  <p>
                    Podrás tener acceso a los servicios birmdados por
                    proveedores registrados
                  </p>
                </div>
                <div className="target-login__inputs">
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
                  <TextFieldInput
                    type="password"
                    placeholder="Contraseña"
                    name="loginPassword"
                    minLength={3}
                    required
                  />
                  <InputError errors={errors} name="loginPassword" />
                </div>
                <div className="tarjet-login-buttons">
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
                <span>Cargando</span>
              </section>
            </article>
          </section>
        </div>
      </form>
    </FormProvider>
  )
}
