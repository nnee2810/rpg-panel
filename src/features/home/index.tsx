import { Card, Spin } from "components/basic"
import { PageTitle } from "components/core"
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineWifi,
} from "react-icons/ai"
import { BsBuilding } from "react-icons/bs"
import { News, RecentActions } from "./components"
import { useGetStatisticOverview } from "./hooks"

export default function Home() {
  const { data, isLoading } = useGetStatisticOverview()

  return (
    <div>
      <PageTitle>Trang chính</PageTitle>
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
            <Card
              icon={<AiOutlineHome />}
              label="House"
              value={data.apartaments}
            />
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
        <div className="text-center">Không có dữ liệu</div>
      )}
    </div>
  )
}
