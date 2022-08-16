import { Spin, Tabs } from "components/basic"
import { PageTitle } from "components/core"
import {
  AiOutlineClockCircle,
  AiOutlineSkin,
  AiOutlineUserSwitch,
} from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"
import { useParams } from "react-router-dom"
import { ProfileOverview } from "../components"
import { useGetUserProfile } from "../hooks"

export default function UserProfile() {
  const { name = "" } = useParams()
  const { data, isLoading } = useGetUserProfile(name)

  return (
    <div>
      <PageTitle>
        Hồ sơ của <span className="text-emerald-500">{name}</span>
      </PageTitle>
      {isLoading ? (
        <div className="flex justify-center">
          <Spin className="text-4xl" />
        </div>
      ) : data ? (
        <div className="grid grid-cols-2 items-start gap-4">
          <ProfileOverview data={data} />
          <Tabs
            tabs={[
              { label: "Tài sản", icon: <BsCurrencyDollar /> },
              { label: "Trang phục", icon: <AiOutlineSkin /> },
              { label: "Kĩ năng công việc", icon: <AiOutlineUserSwitch /> },
              { label: "Nhật ký faction", icon: <AiOutlineClockCircle /> },
            ]}
          >
            <div></div>
          </Tabs>
        </div>
      ) : (
        <div className="text-center">Không có dữ liệu</div>
      )}
    </div>
  )
}
