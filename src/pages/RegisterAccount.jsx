import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Header from '../components/header/Header'
import TextFieldInput from '../components/textField/TextFieldInput'
import InputError from '../components/inputError/InputError'
import Buton from '../components/button/Buton'
import { Link, navigate } from 'gatsby'
import { sendMailNewUser } from '../services/setsendMailNewUser'
import StackBarMessage from '../components/snackBarMessage/StackBarMessage'

import imgLogin from '../images/imgLogin.jpg'

export default function RegisterAccount() {
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
      methodUrl: 'newUser/sendMailNewUser',
      data: { email: data.loginEmail },
    }
    sendMailNewUser(payload).then((res) => {
      if (res.status === 200 && res.data.message !== 'The email exists') {
        const info = {
          email: data.loginEmail,
          token: res.data.token,
        }
        window.localStorage.setItem('infoLogin', JSON.stringify(info))
        setIsOpenModalConfirmation(true)
        setMessageModalConfirmation({
          message: 'Correo enviado',
          type: 'success',
        })
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
      if (res.status === 200 && res.data.message === 'The email exists') {
        setIsOpenModalConfirmation(true)
        setMessageModalConfirmation({
          message: 'El correo ya existe',
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
            <picture className="target-login-pictureLogin">
              <img className="img-login" src={imgLogin} alt="logo" />
            </picture>
            <article className="target-login">
              <section className="form__target-login">
                <div className="text-white block container__header-text">
                  <h1>Validar Correo electronico</h1>
                  <p>
                    Vrificaremos que el correo no este registrado para poder
                    realizar el registro
                  </p>
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
                      title="Enviar correo"
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
            </article>
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
