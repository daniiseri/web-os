'use client'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/GlobalRedux/store'
import axios from 'axios'
import { GET_SERVICES_ENDPOINT } from '@/utils/constants'


interface IService {
  id: string
  name: string
  description?: string
  price: number
}

interface ServicesState {
  services: IService[]
}

const initialState: ServicesState = { services: [] }

export const initializeServices = createAsyncThunk(
  'services/initialize',
  async () => {
    const { data: { services } } = await axios.get(GET_SERVICES_ENDPOINT)

    return services;
  }
);

export const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IService>) => {
      state.services.push(action.payload)
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.services.filter(({ id }) => {
        return id !== action.payload
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeServices.fulfilled, (state, action) => {
      state.services = action.payload;
    });
  },
})

export const { increment, decrement } = serviceSlice.actions

export const selectServices = (state: RootState) => state.services.services

export default serviceSlice.reducer