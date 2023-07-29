'use client'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/GlobalRedux/store'
import axios from 'axios'
import { CREATE_PRODUCT_ENDPOINT, DELETE_PRODUCT_ENDPOINT, GET_PRODUCTS_ENDPOINT, UPDATE_PRODUCT_ENDPOINT } from '@/utils/constants'
import { Replace } from '@/helpers/Replace'
import { ChangeEvent } from 'react'

export interface IProduct {
  id: string
  description: string
  purchasePrice: number
  salePrice: number
  stock: number
}

interface ProductsState {
  products: IProduct[]
  selectedProduct?: IProduct
}

const initialState: ProductsState = { products: [] }

export const initializeProducts = createAsyncThunk<IProduct[]>(
  'products/initialize',
  async () => {
    const { data: { products } } = await axios.get(GET_PRODUCTS_ENDPOINT)

    return products;
  }
);

export const createProduct = createAsyncThunk<IProduct, Replace<IProduct, { id?: string }>>(
  'products/create',
  async (values: Replace<IProduct, { id?: string }>) => {
    try {
      const { data: { product, message } } = await axios.post(CREATE_PRODUCT_ENDPOINT, {
        ...values,
        purchasePrice: Number(values.purchasePrice),
        salePrice: Number(values.salePrice),
        stock: Number(values.stock)
      })

      alert(message)

      return product;
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const updateProduct = createAsyncThunk(
  'products/update',
  async (values: IProduct) => {
    try {
      const { data: { product, message } } = await axios.put(UPDATE_PRODUCT_ENDPOINT, {
        ...values,
        purchasePrice: Number(values.purchasePrice),
        salePrice: Number(values.salePrice),
        stock: Number(values.stock)
      })

      alert(message)

      return product
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async (id: string) => {
    try {
      const { data: { message } } = await axios.delete(DELETE_PRODUCT_ENDPOINT, {
        data: { id }
      })

      alert(message)

      return { id }
    } catch (err: any) {
      alert(err.message)
    }
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleSelectedProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload
    },
    handleChange: (state, action: PayloadAction<ChangeEvent<HTMLInputElement>>) => {
      const { name: key, value } = action.payload.target

      const updateSelectedProduct = { ...state.selectedProduct, [key]: value }

      state.selectedProduct = updateSelectedProduct as IProduct
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initializeProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    })
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products = state.products.map(product => {
        return product.id === action.payload.id
          ? action.payload
          : product
      })
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload?.id)
    })
  },
})

export const { handleSelectedProduct, handleChange } = productSlice.actions

export const selectProducts = (state: RootState) => state.products.products
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct

export default productSlice.reducer