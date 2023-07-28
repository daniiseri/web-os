'use client'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/GlobalRedux/store'
import axios from 'axios'
import { GET_CUSTOMERS_ENDPOINT } from '@/utils/constants'

export interface ICustomer {
  id: string
  name: string
  createdAt: Date
}

interface CustomersState {
  customers: ICustomer[]
}

const initialState: CustomersState = { customers: [] }

export const initializeCustomers = createAsyncThunk(
  'customers/initialize',
  async () => {
    const { data: { customers } } = await axios.get(GET_CUSTOMERS_ENDPOINT)

    return customers;
  }
);

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<ICustomer>) => {
      state.customers.push(action.payload)
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.customers.filter(({ id }) => {
        return id !== action.payload
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
    });
  },
})

export const { increment, decrement } = customerSlice.actions

export const selectCustomers = (state: RootState) => state.customers.customers

export default customerSlice.reducer