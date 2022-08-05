import { SignIn } from "features/auth/pages"
import { Dashboard } from "features/dashboard/pages"
import MainLayout from "layouts/main"
import { Navigate, RouteObject, useRoutes } from "react-router-dom"

const routes: RouteObject[] = [
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]
export default function AppRoutes() {
  const element = useRoutes(routes)
  return element
}
