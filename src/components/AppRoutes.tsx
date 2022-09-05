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
const Shop = lazy(() => import("features/shop/pages/Shop"))
const Topup = lazy(() => import("features/topup/pages/Topup"))
const TxnLogs = lazy(() => import("features/topup/pages/TxnLogs"))
const TxnResult = lazy(() => import("features/topup/pages/TxnResult"))
const Complaints = lazy(() => import("features/complaints/pages/Complaints"))
const Tickets = lazy(() => import("features/tickets/pages/Tickets"))
const TicketDetail = lazy(() => import("features/tickets/pages/TicketDetail"))
const Bans = lazy(() => import("features/bans/pages/Bans"))

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
        children: [
          {
            path: ":name",
            element: <UserProfile />,
          },
        ],
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
        path: "shop",
        children: [
          {
            path: "",
            element: <Shop />,
          },
        ],
      },
      {
        path: "topup",
        children: [
          {
            path: "",
            element: <Topup />,
          },
          {
            path: "txn",
            children: [
              {
                path: "",
                element: <TxnLogs />,
              },
              {
                path: ":txnRef",
                element: <TxnResult />,
              },
            ],
          },
        ],
      },
      {
        path: "complaints",
        children: [
          {
            path: "",
            element: <Complaints />,
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
      {
        path: "bans",
        children: [
          {
            path: "",
            element: <Bans />,
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
  return useRoutes(routes)
}
