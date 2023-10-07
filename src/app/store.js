import { configureStore } from '@reduxjs/toolkit'
import {
  infoUserLoginReducer,
  allProductsServices,
  infoStoresByProviderReducer,
} from '../features/tasks/infoUserLoginSlice' // ¡nombre general del slice

export const store = configureStore({
  reducer: {
    infoUserLogin: infoUserLoginReducer, // ¡nombre del name del slice : importacion del nombreReducer de la accion en el reducer
    productsServices: allProductsServices,
    storesByProvider: infoStoresByProviderReducer,
  },
})
