import { Spin } from "components/basic"
import { PageTitle } from "components/core"
import { useParams } from "react-router-dom"
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
        <div></div>
      ) : (
        <div className="text-center">Không có dữ liệu</div>
      )}
    </div>
  )
}
