import { Suspense } from "react";
import { LazyHomePage, LazyPage404, LazyProductCreatePage, LazyProductDetailPage, LazyProductsPage } from "./lazy-pages";
import { createBrowserRouter } from "react-router";
import MainLayout from "@/widgets/MainLayout/ui/MainLayout";
import ErrorPage from "@/pages/ErrorPage/ui/ErrorPage";


export const routes = [
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: 'home-page',
        element: (
          <Suspense>
            <LazyHomePage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Home',
        }
      },
      {
        path: 'products',
        id: 'products-page',
        element: (
          <Suspense>
            <LazyProductsPage />
          </Suspense>
        ),
        meta: {
          isInMenu: true,
          title: 'Products',
        }
      },
      {
        path: '/products/create',
        id: 'product-create',
        element: (
          <Suspense>
            <LazyProductCreatePage />
          </Suspense>
        ),
      },
      {
        path: '/products/:id',
        id: 'product-details',
        element: (
          <Suspense>
            <LazyProductDetailPage />
          </Suspense>
        ),
        meta: {
          isInMenu: false,
          title: 'Product-detail'
        }
      },
      {
        path: '*',
        element: (
          <Suspense>
            <LazyPage404 />
          </Suspense>
        ),
        meta: {
          id: 'page-404'
        }
      }
    ]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, ''),
})

export default router