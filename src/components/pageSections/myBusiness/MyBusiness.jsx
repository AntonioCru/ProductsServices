import React, { useEffect } from 'react'
import Header from '../../header/Header'
import { navigate } from 'gatsby'
import { useDispatch, useSelector } from 'react-redux'

import { saveStoresByProvider } from '../../../features/tasks/infoUserLoginSlice'
import Target from '../../target/Target'
import ContainerTarget from '../../target/ContainerTarget'
import ContainerHeaderTitle from '../../containerHeaderTitle/ContainerHeaderTitle'

import { getUser } from '../../../services/auth'
import { getOneUser } from '../../../services/getOneUser'
import ContainerAllBlackSection from '../../containerBlackGround/ContainerAllBlackSection'
import Buton from '../../button/Buton'

export default function MyBusiness() {
  const dispatch = useDispatch()
  const dataUserLogin = getUser()
  useEffect(() => {
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'users',
      data: dataUserLogin.id,
    }
    getOneUser(payload).then((res) => {
      if (res?.status === 200) {
        dispatch(saveStoresByProvider(res.data.store))
      }
    })
  }, [])

  const getAllStoresByProvider = useSelector((state) => state.storesByProvider)
  return (
    <Header>
      <ContainerAllBlackSection className="container__products-services">
        <ContainerHeaderTitle>
          <h1 className="title__products-services">Mis Tiendas</h1>
          <div className="absolute top-4 right-14">
            <Buton
              type="button"
              primaryOrSecondary="primary"
              title="Crear tienda"
              onClick={() => navigate('/app/CreateOrEditStore')}
            />
          </div>
        </ContainerHeaderTitle>
        <ContainerTarget>
          {getAllStoresByProvider.allStoresByProvider?.map((store) => (
            <Target
              data={store}
              key={store.id}
              onClick={() => {
                navigate('/app/infoOneStore', { state: store })
              }}
            />
          ))}
        </ContainerTarget>
      </ContainerAllBlackSection>
    </Header>
  )
}
