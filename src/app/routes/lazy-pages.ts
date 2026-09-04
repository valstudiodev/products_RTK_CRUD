import { lazy } from "react";

export const LazyHomePage = lazy(() => import('@/pages/HomePage/ui/HomePage'))
export const LazyPage404 = lazy(() => import('@/pages/Page404/ui/Page404'))
export const LazyErrorPage = lazy(() => import('@/pages/ErrorPage/ui/ErrorPage'))
export const LazyProductsPage = lazy(() => import('@/pages/ProductsPage/ui/ProductsPage'))
export const LazyProductDetailPage = lazy(() => import('@/pages/Product-details/ui/ProductDetailsPage'))
export const LazyProductCreatePage = lazy(() => import('@/pages/Product-create/ui/ProductCreatePage'))
export const LazyProductEdit = lazy(() => import('@/pages/Product-edit/ui/ProductEditPage'))