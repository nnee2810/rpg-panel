import AuthLayout from "layouts/auth"
import MainLayout from "layouts/main"
import { lazy } from "react"
import { RouteObject, useRoutes } from "react-router-dom"

const SignIn = lazy(() => import("features/auth/pages/SignIn"))
const Home = lazy(() => import("features/home"))
const Online = lazy(() => import("features/online"))
const Staff = lazy(() => import("features/staff"))

const routes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/online",
        element: <Online />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
    ],
  },
]
export default function AppRoutes() {
  const element = useRoutes(routes)
  return element
}
