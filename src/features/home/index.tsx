import { Empty, Spin } from "components/basic"
import { PageHeader } from "components/core"
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineWifi,
} from "react-icons/ai"
import { BsBuilding } from "react-icons/bs"
import { Card, News, RecentActions } from "./components"
import { useGetStatisticOverview } from "./hooks"

export default function Home() {
  const { data, isLoading } = useGetStatisticOverview()

  return (
    <div>
      <PageHeader>Trang chính</PageHeader>
      {isLoading ? (
        <div className="flex justify-center">
          <Spin className="text-4xl" />
        </div>
      ) : data ? (
        <>
          <div className="grid grid-cols-4 gap-4">
            <Card
              icon={<AiOutlineWifi />}
              label="Đang chơi"
              value={`${data.online}/1000`}
            />
            <Card
              icon={<AiOutlineUsergroupAdd />}
              label="Đã đăng ký"
              value={data.registered}
            />
            <Card icon={<AiOutlineHome />} label="House" value={data.houses} />
            <Card icon={<BsBuilding />} label="Bizz" value={data.bizz} />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4 items-start">
            <div className="col-span-3">
              <RecentActions data={data.faction_logs} />
            </div>
            <News />
          </div>
        </>
      ) : (
        <Empty />
      )}
    </div>
  )
}
