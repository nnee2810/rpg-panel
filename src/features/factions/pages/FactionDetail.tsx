import { Empty, Spin, Tabs } from "components/basic"
import { PageHeader } from "components/core"
import {
  AiOutlineAudit,
  AiOutlineHistory,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai"
import { useParams } from "react-router-dom"
import { FactionOverview, TableFactionMembers } from "../components"
import { useGetFactionOverview } from "../hooks"

export default function FactionDetail() {
  const { id = "" } = useParams()
  const { data, isLoading } = useGetFactionOverview(id)

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Spin className="text-4xl" />
      </div>
    )

  return data ? (
    <div>
      <PageHeader>
        Faction <span className="text-emerald-500">{data?.Name}</span>
      </PageHeader>
      <div className="grid grid-cols-3 gap-4">
        <FactionOverview data={data} />
        <div className="col-span-2">
          <Tabs
            tabs={[
              {
                label: "Thành viên",
                icon: <AiOutlineUser />,
              },
              { label: "Tuyển dụng", icon: <AiOutlineUsergroupAdd /> },
              { label: "Khiếu nại", icon: <AiOutlineAudit /> },
              { label: "Nhật ký", icon: <AiOutlineHistory /> },
            ]}
          >
            <TableFactionMembers id={id} />
          </Tabs>
        </div>
      </div>
    </div>
  ) : (
    <Empty />
  )
}
