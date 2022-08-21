import { PageLoading } from "components/core"
import { getProfile } from "features/auth/services"
import { useAppDispatch, useAppSelector, useBoolean } from "hooks"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import SimpleBar from "simplebar-react"
import { setUser, userSelector } from "store/reducers/user"
import { getToken, isValidToken } from "utils/token"
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
        .then((profile) => {
          dispatch(setUser({ profile }))
          setMounted.on()
        })
        .catch(() => navigate("/auth/sign-in"))
    else navigate("/auth/sign-in")
  }, [profile, dispatch, navigate, setMounted])

  return mounted ? (
    <div className="h-screen bg-gray-900">
      <Header />
      <SimpleBar style={{ maxHeight: "calc(100vh - 64px)" }}>
        <div className="flex" style={{ minHeight: "calc(100vh - 64px)" }}>
          <Sidebar />
          <div className="flex-1 px-8 py-6">
            <Outlet />
          </div>
        </div>
      </SimpleBar>
    </div>
  ) : (
    <PageLoading />
  )
}
