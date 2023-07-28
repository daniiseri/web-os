'use client'

import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/productsSlice'
import customersReducer from './features/customersSlice'
import servicesReducer from './features/servicesSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    services: servicesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch