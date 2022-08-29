import { Empty, Pagination, Tag } from "components/basic"
import { Loading } from "components/core"
import { PaginationDto } from "dto"
import { useState } from "react"
import { TicketComment, TicketCreateComment } from "."
import { useGetTicketComments } from "../hooks"

interface TicketCommentsProps {
  id: string
}

export default function TicketComments({ id }: TicketCommentsProps) {
  const [query, setQuery] = useState<PaginationDto>({})
  const { data, isLoading } = useGetTicketComments(id, query)

  const updateQuery = (values: PaginationDto) => {
    setQuery({
      ...query,
      ...values,
    })
  }

  return (
    <div className="p-4 space-y-4 bg-gray-800 rounded-md">
      <div className="flex items-center space-x-2">
        <div className="text-md font-medium">Phản hồi</div>
        <Tag scheme="primary">{data?.total || 0}</Tag>
      </div>
      {isLoading ? (
        <Loading />
      ) : data?.total ? (
        <>
          {data.data.map((comment) => (
            <TicketComment data={comment} key={comment.id} />
          ))}
          <Pagination
            currentPage={data.page}
            totalPage={Math.ceil(data.total / data.take)}
            onPageChange={(page) => updateQuery({ page })}
          />
          <TicketCreateComment id={id} />
        </>
      ) : (
        <Empty />
      )}
    </div>
  )
}
