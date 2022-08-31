import { Card } from "components/basic"
import { Loading } from "components/core"
import { BiCommentCheck, BiCommentDetail, BiCommentError } from "react-icons/bi"
import { useGetTicketsStatistic } from "../hooks"

export default function TicketsStatistic() {
  const { data, isLoading } = useGetTicketsStatistic()

  if (isLoading) return <Loading />

  return data ? (
    <div className="grid grid-cols-3 gap-4">
      <Card
        icon={<BiCommentError />}
        label="Đang mở"
        value={data.openTickets}
      />
      <Card
        icon={<BiCommentCheck />}
        label="Đã hoàn thành"
        value={data.closeTickets}
      />
      <Card
        icon={<BiCommentDetail />}
        label="Tổng"
        value={data.openTickets + data.closeTickets}
      />
    </div>
  ) : null
}
