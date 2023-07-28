export const CLIENT_ID = process.env.CLIENT_ID
export const SECRET_KEY = process.env.SECRET_KEY
export const REDIRECT_URI = process.env.REDIRECT_URI

const BASE_URL = process.env.BASE_URL ?? ''

export const GET_PRODUCTS_ENDPOINT = `${BASE_URL}/api/get-products`
export const GET_CUSTOMERS_ENDPOINT = `${BASE_URL}/api/get-customers`
export const GET_SERVICES_ENDPOINT = `${BASE_URL}/api/get-services`

export const CREATE_PRODUCT_ENDPOINT = `${BASE_URL}/api/create-product`
export const CREATE_CUSTOMER_ENDPOINT = `${BASE_URL}/api/create-customer`
export const CREATE_SERVICE_ENDPOINT = `${BASE_URL}/api/create-service`