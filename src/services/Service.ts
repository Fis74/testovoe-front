import { Product } from '@/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@/constants/api'

export const API = createApi({
  reducerPath: 'API',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getData: builder.query<Product[], void>({
      query: () => 'divany/',
    }),
    getDataById: builder.query<Product, number>({
      query: (id) => `divany/${id}`,
    }),
  }),
})

export const { useGetDataQuery, useGetDataByIdQuery } = API
export const { getData, getDataById } = API.endpoints
