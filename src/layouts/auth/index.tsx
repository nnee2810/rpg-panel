import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <div className="relative h-screen flex justify-center items-center bg-auth bg-cover">
      <div className="w-128 p-6 bg-gray-800 rounded-lg">
        <Outlet />
      </div>
    </div>
  )
}
