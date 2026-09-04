import { CreateProductPayload, Product, ProductDetail, ProductListResponse, UpdateProductRequest } from "@/entities/product/model/productTypes";
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
    }),

    updateProduct: builder.mutation<Product, UpdateProductRequest>({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          const { data: updateProduct } = await queryFulfilled

          dispatch(
            baseApi.util.updateQueryData(
              'getProducts',
              undefined,
              (draft) => {
                const index = draft.products.findIndex(
                  (product) => product.id === updateProduct.id
                )

                if (index !== -1) {
                  draft.products[index] = updateProduct
                }
              }
            ),
          ),

            dispatch(
              baseApi.util.updateQueryData(
                'getProductById',
                String(id),
                (draft) => {
                  draft.title = updateProduct.title
                  draft.price = updateProduct.price
                  draft.description = updateProduct.description
                  draft.category = updateProduct.category
                  draft.brand = updateProduct.brand
                }
              )
            )

        } catch (error) {

        }
      },
    }),
  })
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation
} = baseApi