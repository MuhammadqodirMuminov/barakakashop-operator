import { Layout } from "@/Layout"
import { Loader } from "@/components"
import { ROUTES } from "@/constants"
import { Dashboard } from "@/pages"
import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import { SignIn } from "./loadable"
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
