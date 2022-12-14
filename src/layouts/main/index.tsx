import { PageLoading } from "components"
import { getProfile } from "features/auth/services"
import { useAppDispatch, useAppSelector, useBoolean } from "hooks"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import SimpleBar from "simplebar-react"
import { setUser, userSelector } from "store/reducers/user"
import { getToken, isValidToken } from "utils"
import { Header, Sidebar } from "./components"

export default function MainLayout() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { profile } = useAppSelector(userSelector)
  const [mounted, setMounted] = useBoolean()

  useEffect(() => {
    if (profile) return setMounted.on()
    const token = getToken()
    if (token && isValidToken(token))
      getProfile()
        .then((userProfile) => {
          dispatch(setUser({ profile: userProfile }))
          setMounted.on()
        })
        .catch(() => navigate("/auth/sign-in"))
    else navigate("/auth/sign-in")
  }, [profile, dispatch, navigate, setMounted])

  return mounted ? (
    <div className="h-screen bg-gray-900">
      <Header />
      <div className="flex" style={{ height: "calc(100vh - 64px)" }}>
        <Sidebar />
        <SimpleBar
          className="flex-1 px-8 py-6"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Outlet />
        </SimpleBar>
      </div>
    </div>
  ) : (
    <PageLoading />
  )
}
