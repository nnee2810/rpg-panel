import AuthLayout from "layouts/auth"
import MainLayout from "layouts/main"
import { lazy } from "react"
import { RouteObject, useRoutes } from "react-router-dom"

const SignIn = lazy(() => import("features/auth/pages/SignIn"))
const Home = lazy(() => import("features/home"))
const Leaderboard = lazy(() => import("features/leaderboard"))
const Online = lazy(() => import("features/online"))
const Staff = lazy(() => import("features/staff"))
const Factions = lazy(() => import("features/factions/pages/Factions"))
const Clans = lazy(() => import("features/clans/pages/Clans"))
const UserProfile = lazy(() => import("features/users/pages/UserProfile"))

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
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "online",
        element: <Online />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "factions",
        element: <Factions />,
      },
      {
        path: "clans",
        element: <Clans />,
      },
      {
        path: "users",
        children: [{ path: "profile/:name", element: <UserProfile /> }],
      },
    ],
  },
]
export default function AppRoutes() {
  const element = useRoutes(routes)
  return element
}
