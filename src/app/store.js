import { configureStore } from '@reduxjs/toolkit'
import {
  allProductsServices,
  infoUserLoginReducer,
} from '../features/tasks/infoUserLoginSlice' // ¡nombre general del slice

export const store = configureStore({
  reducer: {
    infoUserLogin: infoUserLoginReducer,
    productsServices: allProductsServices,
  },
})
