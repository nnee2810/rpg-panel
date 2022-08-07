import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <div className="relative h-screen flex justify-center items-center bg-auth">
      <div className="w-128 p-6 bg-gray-700/95 rounded-lg">
        <Outlet />
      </div>
    </div>
  )
}
