import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
// ¡components
import Header from '../components/header/Header'
import Buton from '../components/button/Buton'
import TextFieldInput from '../components/textField/TextFieldInput'
import InputError from '../components/inputError/InputError'
// ¡other files
import imgLogin from '../images/imgLogin.jpg'
// ¡file css
import '../components/pageSections/login/login.css'
// ¡services
import { handleLoginProviders } from '../services/auth'

export default function LoginProviders() {
  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const onSubmit = (data) => {
    const payload = {
      email: data.loginEmail,
      password: data.loginPassword,
    }
    handleLoginProviders(payload)
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
                  <h1>Iniciar sesión como Proveedor</h1>
                  <p>Veneficios exclusivos de un usuario registrado</p>
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
                      title="Iniciar sesión"
                      primaryOrSecondary="primary"
                    />
                  </div>
                  <div className="tarjet-login-button">
                    <Buton
                      type="button"
                      title="Crear cuenta"
                      primaryOrSecondary="secondary"
                    />
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
