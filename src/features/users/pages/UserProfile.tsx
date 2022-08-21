import { Empty, Tabs } from "components/basic"
import { Loading, PageHeader } from "components/core"
import {
  AiOutlineHistory,
  AiOutlineSkin,
  AiOutlineUserSwitch,
} from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"
import { useParams } from "react-router-dom"
import { ProfileOverview, ProfileProperties } from "../components"
import { useGetUserProfile } from "../hooks"

export default function UserProfile() {
  const { name = "" } = useParams()
  const { data, isLoading } = useGetUserProfile(name)

  if (isLoading) return <Loading />

  return data ? (
    <div>
      <PageHeader>
        Hồ sơ của <span className="text-emerald-500">{name}</span>
      </PageHeader>
      <div className="grid grid-cols-3 items-start gap-4">
        <ProfileOverview data={data} />
        <div className="col-span-2">
          <Tabs
            tabs={[
              { label: "Tài sản", icon: <BsCurrencyDollar /> },
              { label: "Trang phục", icon: <AiOutlineSkin /> },
              { label: "Kĩ năng công việc", icon: <AiOutlineUserSwitch /> },
              { label: "Nhật ký", icon: <AiOutlineHistory /> },
            ]}
          >
            <ProfileProperties name="name" />
          </Tabs>
        </div>
      </div>
    </div>
  ) : (
    <Empty />
  )
}
