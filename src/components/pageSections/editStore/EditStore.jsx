/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Header from '../../header/Header'
import { navigate } from 'gatsby'
import TextFieldInput from '../../textField/TextFieldInput'
import InputError from '../../inputError/InputError'

import ContainerHeaderTitle from '../../containerHeaderTitle/ContainerHeaderTitle'

import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'
import Buton from '../../button/Buton'
import ContainerEditSection from '../../containerEditSection/ContainerEditSection'

import './editStore.css'
// import EditPointMap from '../../maps/EditPointMap'
import { patchUpdateStore } from '../../../services/patchUpdateStore'

// import updateImage from '../../../images/icons/updateImage.png'
import StackBarMessage from '../../snackBarMessage/StackBarMessage'
import { postNewStore } from '../../../services/postNewStore'
import { getUser } from '../../../services/auth'

export default function EditStore({ location }) {
  const dataUserLogin = getUser()

  const [isOpenModalConfirmation, setIsOpenModalConfirmation] = useState(false)
  const [fetchPosition, setFetchPosition] = useState({ lat: '', lng: '' })
  const [fetchImage, setFetchImage] = useState(location.state.image || 'image')

  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  const onSubmit = (data) => {
    const payload = {
      name: data.nameUser,
      subName: data.nameLastName,
      description: data.nameLastSecondName,
      telephono: data.telephonoUser,
      address: data.addressUser,
      email: data.email,
      userId: dataUserLogin.id,
      latitude: fetchPosition.lat || 19.431143521411933,
      longitude: fetchPosition.lng || -99.13308131332649,
      image: fetchImage,
      idImage: '',
    }
    if (location.state.id) {
      patchUpdateStore({
        url: process.env.GATSBY_API_URL_ALLSERVICES,
        methodUrl: 'stores',
        data: location.state.id,
        newData: payload,
      }).then((res) => {
        if (res?.status === 200) {
          navigate('/app/myBusiness/')
        }
      })
    } else {
      postNewStore({
        url: process.env.GATSBY_API_URL_ALLSERVICES,
        methodUrl: 'stores',
        data: payload,
      }).then((res) => {
        if (res?.status === 201) {
          navigate('/app/myBusiness/')
        }
      })
    }
  }

  function changeImage(e) {
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event) => {
        e.preventDefault()
        setFetchImage(event.target.result)
      }
    }
  }
  return (
    <Header>
      <ContainerAllBlackSection className="container__products-services ">
        <ContainerHeaderTitle>
          <h1 className="title__store">{location.state?.name}</h1>
        </ContainerHeaderTitle>
        <ContainerEditSection>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="container-inputs-form-user"
            >
              {/* <div > */}
              <h1 className="title__products-services">Datos de Tienda</h1>
              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Nombre"
                  name="nameUser"
                  required
                  minLength={3}
                  maxLength={50}
                  value={location.state?.name}
                />
                <InputError errors={errors} name="nameUser" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Apodo"
                  name="nameLastName"
                  required
                  minLength={3}
                  maxLength={50}
                  value={location.state?.subName}
                />
                <InputError errors={errors} name="nameLastName" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Descripción"
                  name="nameLastSecondName"
                  minLength={3}
                  maxLength={50}
                  value={location.state?.description}
                />
                <InputError errors={errors} name="nameLastSecondName" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Teléfono"
                  name="telephonoUser"
                  minLength={10}
                  maxLength={10}
                  pattern={/^\+?[1-9]\d{1,14}$/}
                  patternMessage="El Teléfono solo puede contener números"
                  value={location.state?.telephono}
                />
                <InputError errors={errors} name="telephonoUser" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Dirección"
                  name="addressUser"
                  minLength={3}
                  maxLength={50}
                  value={location.state?.address}
                />
                <InputError errors={errors} name="addressUser" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Correo electrónico"
                  name="email"
                  required
                  pattern={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
                  patternMessage="El Correo electrónico deve ser valido"
                  value={location.state?.email}
                />
                <InputError errors={errors} name="email" />
              </div>

              <div className="container-buttons-footer flex gap-4 mt-3">
                <Buton
                  title="Regresar"
                  primaryOrSecondary="secondary"
                  type="button"
                  onClick={() =>
                    navigate('/app/infoOneStore/', {
                      state: { id: location.state.id },
                    })
                  }
                />
                <Buton
                  title="guardar"
                  primaryOrSecondary="primary"
                  type="submit"
                />
              </div>

              {/* <div className="mt-6 h-52 box-container-img">
                <div className="container__imagen-store">
                  <img src={fetchImage} alt="Image store" />
                  <div className="box_image-change">
                    <input
                      className="input_image-change"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        changeImage(e)
                      }}
                    ></input>
                    <img src={updateImage} alt="icon" />
                  </div>
                </div>
              </div> */}
              {/* <div className="pl-0 mt-6">
                <EditPointMap
                  latitude={location.state.latitude}
                  length={location.state.length}
                  changePosition={setFetchPosition}
                  modifyStyle
                />
              </div> */}
            </form>
          </FormProvider>
        </ContainerEditSection>
      </ContainerAllBlackSection>
      {isOpenModalConfirmation && (
        <StackBarMessage
          isOpen={isOpenModalConfirmation}
          setIsOpen={setIsOpenModalConfirmation}
          message="Verifique los datos. La imagen no debe ser mayor a 1mb"
          typeMessage="error"
        />
      )}
    </Header>
  )
}
