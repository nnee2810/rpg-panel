import { Spin } from "components/basic"
import { useGetStatisticOverview } from "./hooks"

export default function Home() {
  const { data, isLoading } = useGetStatisticOverview()

  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : data ? (
    <div></div>
  ) : (
    <div className="text-center">Không có dữ liệu</div>
  )
}
