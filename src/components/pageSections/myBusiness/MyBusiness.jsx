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

export default function MyBusiness() {
  const dispatch = useDispatch()
  const dataUserLogin = getUser()
  // console.log(dataUserLogin)
  useEffect(() => {
    const payload = {
      url: process.env.GATSBY_API_URL_ALLSERVICES,
      methodUrl: 'users',
      data: dataUserLogin.id,
    }
    getOneUser(payload).then((res) => {
      // console.log(res?.data)
      if (res?.status === 200) {
        // console.log(res.data.store)
        dispatch(saveStoresByProvider(res.data.store))
      }
    })
  }, [])

  const getAllStoresByProvider = useSelector((state) => state.storesByProvider)
  // console.log(getAllStoresByProvider.allStoresByProvider)
  return (
    <Header>
      <ContainerAllBlackSection className="container__products-services">
        <ContainerHeaderTitle>
          <h1 className="title__products-services">Mis Tiendas</h1>
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
