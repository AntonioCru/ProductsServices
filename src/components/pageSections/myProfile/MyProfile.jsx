import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Header from '../../header/Header'
import ContainerAllBlack from '../../containerBlackGround/containerAllBlack'
import ContainerFormulary from '../../containerFormulary/ContainerFormulary'
import TextFieldInput from '../../textField/TextFieldInput'
import InputError from '../../inputError/InputError'

export default function MyProfile() {
  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Header />
      <ContainerAllBlack className="container-formulary-display">
        <ContainerFormulary className="container-formulary ">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextFieldInput
                type="text"
                placeholder="Nombre"
                name="nameUser"
                required
                minLength={3}
                maxLength={20}
              />
              <InputError errors={errors} name="nameUser" />
            </form>
          </FormProvider>
        </ContainerFormulary>
      </ContainerAllBlack>
    </>
  )
}
