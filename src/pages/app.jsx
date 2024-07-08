import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'

import Dashboard from '../components/pageSections/dashboard/Dashboard'
import PrivateRoute from '../components/privateRoute/PrivateRoute'
import ProductsServices from '../components/pageSections/productsServices/ProductsServices'
import MyProfile from '../components/pageSections/myProfile/MyProfile'
import MyBusiness from '../components/pageSections/myBusiness/MyBusiness'
import SelectTarget from '../components/pageSections/selectTarget/SelectTarget'

import { store } from '../app/store'
import InfoOneStore from '../components/pageSections/infoOneStore/InfoOneStore'
import EditStore from '../components/pageSections/editStore/EditStore'
import EditproductOrService from '../components/pageSections/editProductOrService/EditproductOrService'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Dashboard path="/" />
        <PrivateRoute
          path="/app/ProductsServices"
          component={ProductsServices}
        />
        <PrivateRoute path="/app/selectTarget" component={SelectTarget} />
        <PrivateRoute path="/app/myProfile" component={MyProfile} />
        <PrivateRoute path="/app/myBusiness" component={MyBusiness} />
        <PrivateRoute path="/app/infoOneStore" component={InfoOneStore} />
        <PrivateRoute path="/app/CreateOrEditStore" component={EditStore} />
        <PrivateRoute
          path="/app/EditProductOrService"
          component={EditproductOrService}
        />
      </Router>
    </Provider>
  )
}
