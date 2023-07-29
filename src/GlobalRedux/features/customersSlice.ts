'use client'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/GlobalRedux/store'
import axios from 'axios'
import { CREATE_CUSTOMER_ENDPOINT, DELETE_CUSTOMER_ENDPOINT, GET_CUSTOMERS_ENDPOINT, UPDATE_CUSTOMER_ENDPOINT } from '@/utils/constants'
import { Replace } from '@/helpers/Replace'
import { ChangeEvent } from 'react'

export interface ICustomer {
  id: string
  name: string
  createdAt: Date
}

interface CustomersState {
  customers: ICustomer[]
  selectedCustomer?: ICustomer
}

const initialState: CustomersState = { customers: [] }

export const initializeCustomers = createAsyncThunk(
  'customers/initialize',
  async () => {
    const { data: { customers } } = await axios.get(GET_CUSTOMERS_ENDPOINT)

    return customers;
  }
);

export const createCustomer = createAsyncThunk<ICustomer, Replace<ICustomer, { id?: string, createdAt?: Date }>>(
  'customers/create',
  async (values: Replace<ICustomer, { id?: string, createdAt?: Date }>) => {
    try {
      const { data: { customer, message } } = await axios.post(CREATE_CUSTOMER_ENDPOINT, values)

      alert(message);

      return customer;
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const updateCustomer = createAsyncThunk(
  'customers/update',
  async (values: ICustomer) => {
    try {
      const { data: { customer, message } } = await axios.patch(UPDATE_CUSTOMER_ENDPOINT, values)

      alert(message)

      return customer;
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const deleteCustomer = createAsyncThunk(
  'customers/delete',
  async (id: string) => {
    try {
      const { data: { message } } = await axios.delete(DELETE_CUSTOMER_ENDPOINT, {
        data: { id }
      })

      alert(message)
      return { id }
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    handleSelectedCustomer: (state, action: PayloadAction<ICustomer>) => {
      state.selectedCustomer = action.payload
    },
    handleChange: (state, action: PayloadAction<ChangeEvent<HTMLInputElement>>) => {
      const { name: key, value } = action.payload.target
      const updateselectedCustomer = { ...state.selectedCustomer, [key]: value }
      state.selectedCustomer = updateselectedCustomer as ICustomer
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initializeCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
    })
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.customers.push(action.payload);
    })
    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.customers = state.customers.map(customer => {
        return customer.id === action.payload.id
          ? action.payload
          : customer
      })
    })
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.customers = state.customers.filter(customer => customer.id !== action.payload?.id)
    })
  },
})

export const { handleChange, handleSelectedCustomer } = customerSlice.actions

export const selectCustomers = (state: RootState) => state.customers.customers
export const selectSelectedCustomer = (state: RootState) => state.customers.selectedCustomer

export default customerSlice.reducer