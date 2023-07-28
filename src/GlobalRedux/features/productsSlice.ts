'use client'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/GlobalRedux/store'
import axios from 'axios'
import { GET_PRODUCTS_ENDPOINT } from '@/utils/constants'

export interface IProduct {
  id: string
  description: string
  purchasePrice: number
  salePrice: number
  stock: number
}

interface ProductsState {
  products: IProduct[]
}

const initialState: ProductsState = { products: [] }

export const initializeProducts = createAsyncThunk<IProduct[]>(
  'products/initialize',
  async () => {
    const { data: { products } } = await axios.get(GET_PRODUCTS_ENDPOINT)

    return products;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload)
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.products.filter(({ id }) => {
        return id !== action.payload
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
  },
})

export const { increment, decrement } = productSlice.actions

export const selectProducts = (state: RootState) => state.products.products

export default productSlice.reducer