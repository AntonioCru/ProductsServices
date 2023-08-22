import React from 'react'
import { Router } from '@reach/router'

import Dashboard from '../components/pageSections/dashboard/Dashboard'
import PrivateRoute from '../components/privateRoute/PrivateRoute'
import ProductsServices from '../components/pageSections/productsServices/ProductsServices'
import MyProfile from '../components/pageSections/myProfile/MyProfile'
import MyBusiness from '../components/pageSections/myBusiness/MyBusiness'

export default function App() {
  return (
    <Router>
      <Dashboard path="/" />
      <PrivateRoute path="/app/ProductsServices" component={ProductsServices} />
      <PrivateRoute path="/app/myProfile" component={MyProfile} />
      <PrivateRoute path="/app/myBusiness" component={MyBusiness} />
    </Router>
  )
}
