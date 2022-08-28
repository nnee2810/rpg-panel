import AuthLayout from "layouts/auth"
import MainLayout from "layouts/main"
import { lazy } from "react"
import { Navigate, RouteObject, useRoutes } from "react-router-dom"

const SignIn = lazy(() => import("features/auth/pages/SignIn"))
const Home = lazy(() => import("features/home"))
const UserProfile = lazy(() => import("features/users/pages/UserProfile"))
const Leaderboard = lazy(() => import("features/leaderboard"))
const Online = lazy(() => import("features/online"))
const Staff = lazy(() => import("features/staff"))
const Factions = lazy(() => import("features/factions/pages/Factions"))
const FactionDetail = lazy(
  () => import("features/factions/pages/FactionDetail")
)
const Clans = lazy(() => import("features/clans/pages/Clans"))
const ClanDetail = lazy(() => import("features/clans/pages/ClanDetail"))
const Tickets = lazy(() => import("features/tickets/pages/Tickets"))
const TicketDetail = lazy(() => import("features/tickets/pages/TicketDetail"))

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
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        children: [{ path: ":name", element: <UserProfile /> }],
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
        children: [
          {
            path: "",
            element: <Factions />,
          },
          {
            path: ":id",
            element: <FactionDetail />,
          },
        ],
      },
      {
        path: "clans",
        children: [
          {
            path: "",
            element: <Clans />,
          },
          {
            path: ":id",
            element: <ClanDetail />,
          },
        ],
      },
      {
        path: "tickets",
        children: [
          {
            path: "",
            element: <Tickets />,
          },
          {
            path: ":id",
            element: <TicketDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]
export default function AppRoutes() {
  const element = useRoutes(routes)
  return element
}
