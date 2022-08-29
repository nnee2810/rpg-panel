import { Empty, Tabs } from "components/basic"
import { Loading, PageHeader } from "components/core"
import { AiOutlineUser } from "react-icons/ai"
import { MdAirplanemodeActive } from "react-icons/md"
import { useParams } from "react-router-dom"
import { ClanOverview, TableClanMembers } from "../components"
import { useGetClanOverview } from "../hooks"

export default function ClanDetail() {
  const { id = "" } = useParams()
  const { data, isLoading } = useGetClanOverview(id)

  if (isLoading) return <Loading />

  return data ? (
    <div className="space-y-4">
      <PageHeader>
        Clan <span style={{ color: `#${data.Color}` }}>{data.Name}</span>
      </PageHeader>

      <div className="grid grid-cols-3 gap-4">
        <ClanOverview data={data} />
        <div className="col-span-2">
          <Tabs
            tabs={[
              {
                label: "Thành viên",
                icon: <AiOutlineUser />,
              },
              { label: "Phương tiện", icon: <MdAirplanemodeActive /> },
            ]}
          >
            <TableClanMembers id={id} />
          </Tabs>
        </div>
      </div>
    </div>
  ) : (
    <Empty />
  )
}
