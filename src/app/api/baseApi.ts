import { CreateProductPayload, Product, ProductDetail, ProductListResponse } from "@/entities/product/model/productTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductListResponse, void>({
      query: () => ({
        url: '/products'
      }),
      providesTags: ['Products'],
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
      }),
      // invalidatesTags: ['Products'],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data: createdProduct } = await queryFulfilled

          dispatch(
            baseApi.util.updateQueryData(
              'getProducts',
              undefined,
              (draft) => {
                draft.products.push(createdProduct)
              }
            )
          )
        } catch (error) {

        }
      }
    }),

    deleteProduct: builder.mutation<Product, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled

          dispatch(
            baseApi.util.updateQueryData(
              'getProducts',
              undefined,
              (draft) => {
                const index = draft.products.findIndex(
                  (product) => product.id === id
                )

                if (index !== -1) {
                  draft.products.splice(index, 1)
                }
              }
            )
          )
        } catch (error) {
          console.error('Failed to delete product:', error)
        }
      }
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation
} = baseApi