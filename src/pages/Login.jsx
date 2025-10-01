import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
// ¡components
import Header from '../components/header/Header'
import Buton from '../components/button/Buton'
import TextFieldInput from '../components/textField/TextFieldInput'
import InputError from '../components/inputError/InputError'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

// ¡other files
import imgLogin from '../images/imgLogin.jpg'
// ¡file css
import '../components/pageSections/login/login.css'
// ¡services
import { handleLogin } from '../services/auth'
import { Link } from 'gatsby'
import StackBarMessage from '../components/snackBarMessage/StackBarMessage'

export default function Login() {
  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const [isOpenModalConfirmation, setIsOpenModalConfirmation] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [typeMesageInModalConfirmation, setTypeMesageInModalConfirmation] =
    useState({ message: '', type: '' })

  const onSubmit = (data) => {
    setIsLoading(true)
    const payload = {
      email: data.loginEmail,
      password: data.loginPassword,
    }
    handleLogin(payload).then((res) => {
      if (res.status === 200) {
        setIsLoading(false)
        setIsOpenModalConfirmation(true)
        setTypeMesageInModalConfirmation({
          message: 'Bienvenido',
          type: 'success',
        })
      } else if (res.request.status !== 200 || res.status !== 200) {
        setIsLoading(false)
        setIsOpenModalConfirmation(true)
        setTypeMesageInModalConfirmation({
          message: 'No esta autorizado',
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
                <div className="form__target-login__headerTitle">
                  <h1>Iniciar sesión</h1>
                  <p>Beneficios exclusivos de un usuario registrado</p>
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
                  {isLoading === true ? (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '180px',
                      }}
                    >
                      <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                      </Box>
                    </div>
                  ) : (
                    <div className="tarjet-login-button">
                      <Buton
                        type="submit"
                        title="Iniciar sesión"
                        primaryOrSecondary="primary"
                      />
                    </div>
                  )}
                  {/* <div className="tarjet-login-button">
                    <Link to="/RegisterAccount">
                      <Buton
                        type="button"
                        title="Registrarse"
                        primaryOrSecondary="secondary"
                      />
                    </Link>
                  </div> */}
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
          message={typeMesageInModalConfirmation.message}
          typeMessage={typeMesageInModalConfirmation.type}
        />
      )}
    </FormProvider>
  )
}
