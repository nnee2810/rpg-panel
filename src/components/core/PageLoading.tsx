import { Spin } from "components/basic"

export default function PageLoading() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-800">
      <Spin className="text-4xl" />
    </div>
  )
}
