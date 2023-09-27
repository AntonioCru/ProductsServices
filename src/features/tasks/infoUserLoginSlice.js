// /funciones que hacer para cambiar el estado
// +creacion de los slices

import { createSlice } from '@reduxjs/toolkit'

export const infoUser = createSlice({
  // ¡esto es similar al useState
  name: 'infoUserLogin', // *se utiliza en el store
  initialState: {}, // ¡esta parte es el inicio del estado, un array un string etc
  reducers: {
    saveDataLoginUser: (state, action) => {
      // *seutiliza al hacer el dispatch
      return {
        ...state,
        infoUserLogin: action.payload,
      }
    },
  },
})
export const dataProductsServices = createSlice({
  name: 'productsServices',
  initialState: {},
  reducers: {
    saveProductsServices: (state, action) => {
      console.log(state, action)
      return {
        ...state,
        allProductsServices: action.payload,
      }
    },
  },
})

export const { saveDataLoginUser } = infoUser.actions
export const { saveProductsServices } = dataProductsServices.actions
export const infoUserLoginReducer = infoUser.reducer
export const allProductsServices = dataProductsServices.reducer
