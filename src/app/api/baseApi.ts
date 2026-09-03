import { CreateProductPayload, Product, ProductDetail, ProductListResponse } from "@/entities/product/model/productTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductListResponse, void>({
      query: () => ({
        url: '/products'
      })
    }),

    getProductById: builder.query<ProductDetail, string>({
      query: (id) => ({
        url: `/products/${id}`
      })
    }),

    addProduct: builder.mutation<Product, CreateProductPayload>({
      query: (payload) => ({
        url: '/products/add',
        method: 'POST',
        body: payload,
      })
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation
} = baseApi