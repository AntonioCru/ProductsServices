/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'
import Header from '../../header/Header'
import ContainerHeaderTitle from '../../containerHeaderTitle/ContainerHeaderTitle'
import ContainerEditSection from '../../containerEditSection/ContainerEditSection'
import { FormProvider, useForm } from 'react-hook-form'
import TextFieldInput from '../../textField/TextFieldInput'
import InputError from '../../inputError/InputError'
import Buton from '../../button/Buton'
import { navigate } from 'gatsby'

// import updateImage from '../../../images/icons/updateImage.png'
import { patchUpdateProductsOrServices } from '../../../services/patchUpdateProductOrService'

// eslint-disable-next-line react/prop-types
export default function EditproductOrService({ location }) {
  const methods = useForm({ mode: 'onBlur' })
  const { handleSubmit } = methods
  const { errors } = methods.formState

  // const [fetchImage, setFetchImage] = useState(location.state.image)
  // function changeImage(e) {
  //   if (e.target.files[0] !== undefined) {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(e.target.files[0])
  //     reader.onload = (event) => {
  //       e.preventDefault()
  //       setFetchImage(event.target.result)
  //     }
  //   }
  // }

  const handleNavigate = () => {
    navigate('/app/infoOneStore', {
      state: { id: location?.state?.dataStore?.id },
    })
  }
  const onSubmit = (data) => {
    let payload
    let methodDescription
    if (location?.state?.row?.categorieId) {
      payload = {
        name: data.name,
        // image: fetchImage,
        price: data.price,
        description: data.description,
        categorieId: data.categorie,
        subname: data.subname,
        storeId: location?.state?.dataStore?.id,
      }
      methodDescription = 'products'
    } else if (location.state.typeServiceId) {
      payload = {
        name: data.name,
        // image: fetchImage,
        price: data.price,
        description: data.description,
        typeServiceId: data.categorie,
        subname: data.subname,
        storeId: location?.state?.dataStore?.id,
      }
      methodDescription = 'services'
    }

    patchUpdateProductsOrServices({
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: methodDescription,
      data: location?.state?.row?.id,
      newData: payload,
    }).then((res) => {
      if (res.status === 200) {
        navigate('/app/infoOneStore', {
          state: { id: location?.state?.dataStore?.id },
        })
      }
    })
  }
  return (
    <>
      <Header />
      <ContainerAllBlackSection className="container__products-services ">
        <ContainerHeaderTitle>
          <h1 className="title__store text-white"></h1>
        </ContainerHeaderTitle>
        <ContainerEditSection>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="container-inputs-form-user"
            >
              {/* <div > */}
              <h1 className="title__products-services">
                Datos de {location.state.name}
              </h1>
              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  required
                  minLength={3}
                  maxLength={50}
                  value={location.state?.row?.name}
                />
                <InputError errors={errors} name="name" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Segundo nombre"
                  name="subname"
                  required
                  minLength={3}
                  maxLength={50}
                  value={location.state?.row?.subname}
                />
                <InputError errors={errors} name="subname" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Precio"
                  name="price"
                  minLength={1}
                  maxLength={7}
                  value={location.state?.row?.price}
                />
                <InputError errors={errors} name="price" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Descripción"
                  name="description"
                  minLength={3}
                  maxLength={50}
                  value={location.state?.row?.description}
                />
                <InputError errors={errors} name="description" />
              </div>

              <div className="input__profile-user">
                <TextFieldInput
                  type="text"
                  placeholder="Categoria"
                  name="categorie"
                  minLength={1}
                  maxLength={50}
                  value={
                    location.state?.row?.categorieId ||
                    location.state?.row?.typeServiceId
                  }
                />
                <InputError errors={errors} name="categorie" />
              </div>

              <div className="container-buttons-footer flex gap-4 mt-3">
                <Buton
                  title="Regresar"
                  primaryOrSecondary="secondary"
                  type="button"
                  onClick={handleNavigate}
                />
                <Buton
                  title="Editar"
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
            </form>
          </FormProvider>
        </ContainerEditSection>
      </ContainerAllBlackSection>
    </>
  )
}
