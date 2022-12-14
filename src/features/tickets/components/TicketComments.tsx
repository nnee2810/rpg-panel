import { Empty, Loading, Pagination, Tag } from "components"
import { PaginationDto } from "dto"
import { useState } from "react"
import { TicketComment } from "."
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
    <>
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
        </>
      ) : (
        <Empty />
      )}
    </>
  )
}
