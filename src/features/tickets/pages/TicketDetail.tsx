import { Empty } from "components/basic"
import { Loading, PageHeader } from "components/core"
import { useParams } from "react-router-dom"
import { TicketComments, TicketOverview } from "../components"
import { useGetTicket } from "../hooks"

export default function TicketDetail() {
  const { id = "" } = useParams()
  const { data, isLoading } = useGetTicket(id)

  if (isLoading) return <Loading />

  return data ? (
    <div className="space-y-4">
      <PageHeader>Phiếu hỗ trợ #{id}</PageHeader>
      <div className="grid grid-cols-2 items-start gap-4">
        <TicketOverview data={data} />
        <TicketComments id={id} />
      </div>
    </div>
  ) : (
    <Empty />
  )
}
