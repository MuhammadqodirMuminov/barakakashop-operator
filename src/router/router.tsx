import { Layout } from "@/Layout"
import { Loader } from "@/components"
import { ROUTES } from "@/constants"
import { Dashboard } from "@/pages"
import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import { Market, Payment, SignIn, Statistics } from "./loadable"
import { ProtectedRoutes } from "./protected.routes"
import { PublicRoutes } from "./public.routes"

export const Routes = ({ isAuth }: { isAuth: boolean }) =>
  useRoutes([
    {
      element: <ProtectedRoutes isAuth={isAuth} />,
      children: [
        {
          path: ROUTES.home,
          element: <Layout />,
          children: [
            {
              path: ROUTES.dashboard,
              element: (
                <Suspense fallback={<Loader />}>
                  <Dashboard />
                </Suspense>
              )
            },
            {
              path: ROUTES.shop,
              element: (
                <Suspense fallback={<Loader />}>
                  <Market />
                </Suspense>
              )
            },
            {
              path: ROUTES.statistics,
              element: (
                <Suspense fallback={<Loader />}>
                  <Statistics />
                </Suspense>
              )
            },
            {
              path: ROUTES.payment,
              element: (
                <Suspense fallback={<Loader />}>
                  <Payment />
                </Suspense>
              )
            }
          ]
        }
      ]
    },
    {
      element: <PublicRoutes isAuth={isAuth} />,
      children: [
        {
          index: true,
          path: ROUTES.signIn,
          element: (
            <Suspense fallback={<Loader />}>
              <SignIn />
            </Suspense>
          )
        }
      ]
    }
  ])
