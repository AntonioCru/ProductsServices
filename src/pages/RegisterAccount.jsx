import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Header from '../components/header/Header'
import TextFieldInput from '../components/textField/TextFieldInput'
import InputError from '../components/inputError/InputError'
import Buton from '../components/button/Buton'
import { Link } from 'gatsby'
import { sendMailNewUser } from '../services/setsendMailNewUser'

export default function RegisterAccount() {
  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const onSubmit = (data) => {
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'newUser/sendMailNewUser',
      data: { email: data.loginEmail },
    }
    sendMailNewUser(payload).then((res) => {
      console.log(res)
      if (res.status === 200) {
        window.sessionStorage.setItem('validateEmail', data.loginEmail)
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
                <h1>Validar Correo electronico</h1>
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
