'use client'

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/GlobalRedux/store'
import axios from 'axios'
import { CREATE_SERVICE_ENDPOINT, DELETE_SERVICE_ENDPOINT, GET_SERVICES_ENDPOINT, UPDATE_SERVICE_ENDPOINT } from '@/utils/constants'
import { Replace } from '@/helpers/Replace'
import { ChangeEvent } from 'react'
export interface IService {
  id: string
  name: string
  description?: string
  price: number
}

interface ServicesState {
  services: IService[]
  selectedService?: IService
}

const initialState: ServicesState = { services: [] }

export const initializeServices = createAsyncThunk(
  'services/initialize',
  async () => {
    const { data: { services } } = await axios.get(GET_SERVICES_ENDPOINT)

    return services;
  }
);

export const createService = createAsyncThunk<IService, Replace<IService, { id?: string }>>(
  'sevices/create',
  async (values: Replace<IService, { id?: string }>) => {
    try {
      const { data: { service, message } } = await axios.post(CREATE_SERVICE_ENDPOINT, {
        ...values,
        price: Number(values.price)
      })

      alert(message)

      return service;
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const updateService = createAsyncThunk(
  'services/update',
  async (values: IService) => {
    try {
      const { data: { service, message } } = await axios.put(UPDATE_SERVICE_ENDPOINT, values)

      alert(message)

      return service
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const deleteService = createAsyncThunk(
  'sevices/delete',
  async (id: string) => {
    try {
      const { data: { message } } = await axios.delete(DELETE_SERVICE_ENDPOINT, {
        data: { id }
      })

      alert(message)

      return { id }
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    handleSelectedService: (state, action: PayloadAction<IService>) => {
      state.selectedService = action.payload
    },
    handleChange: (state, action: PayloadAction<ChangeEvent<HTMLInputElement>>) => {
      const { name: key, value } = action.payload.target
      const updateselectedService = { ...state.selectedService, [key]: value }
      state.selectedService = updateselectedService as IService
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initializeServices.fulfilled, (state, action) => {
      state.services = action.payload;
    })
    builder.addCase(createService.fulfilled, (state, action) => {
      state.services.push(action.payload)
    })
    builder.addCase(updateService.fulfilled, (state, action) => {
      state.services = state.services.map(service => {
        return service.id === action.payload.id
          ? action.payload
          : service
      })
    })
    builder.addCase(deleteService.fulfilled, (state, action) => {
      state.services = state.services.filter(service => service.id !== action.payload?.id)
    })
  },
})

export const { handleChange, handleSelectedService } = serviceSlice.actions

export const selectServices = (state: RootState) => state.services.services
export const selectSelectedService = (state: RootState) => state.services.selectedService

export default serviceSlice.reducer