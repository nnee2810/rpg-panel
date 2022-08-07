import { SignIn } from "features/auth/pages"
import { Home } from "features/home/pages"
import { AnimatePresence, motion } from "framer-motion"
import AuthLayout from "layouts/auth"
import MainLayout from "layouts/main"
import { RouteObject, useLocation, useRoutes } from "react-router-dom"

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
    ],
  },
]
export default function AppRoutes() {
  const location = useLocation()
  const element = useRoutes(routes)
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={{
          show: { scale: 1 },
          hide: { scale: 1.2 },
        }}
        transition={{ type: "tween", duration: 0.5 }}
        key={location.pathname}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  )
}
