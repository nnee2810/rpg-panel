import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Tag, Tooltip } from "components/basic"
import { UserLink } from "components/core"
import { useAppSelector } from "hooks"
import moment from "moment"
import { useMemo } from "react"
import { AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { userSelector } from "store/reducers/user"
import { GetTicketsDto } from "../dto"
import { ITicket, TicketStatus } from "../interfaces"
import useGetTickets from "./useGetTickets"

export default function useTableTickets(query: GetTicketsDto) {
  const { profile } = useAppSelector(userSelector)
  const { data, isLoading, isFetching } = useGetTickets(query)

  const columns = useMemo<ColumnDef<ITicket>[]>(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Người tạo",
        cell: ({
          row: {
            original: {
              user: { name, Status },
            },
          },
        }) => <UserLink name={name} online={!!Status} />,
      },
      {
        header: "Phân loại",
        accessorKey: "category",
      },
      {
        header: "Tiêu đề",
        accessorKey: "title",
      },
      {
        header: "Trạng thái",
        cell: ({
          row: {
            original: { status },
          },
        }) => (
          <div>
            {status === TicketStatus.OPEN && (
              <Tag scheme="primary">Đang mở</Tag>
            )}
            {status === TicketStatus.CLOSE && <Tag scheme="red">Đã đóng</Tag>}
          </div>
        ),
      },
      {
        header: "Ngày cập nhật",
        accessorFn: ({ updatedAt }) =>
          moment(updatedAt).format("DD/MM/YYYY HH:mm"),
      },
      {
        header: "Ngày tạo",
        accessorFn: ({ createdAt }) =>
          moment(createdAt).format("DD/MM/YYYY HH:mm"),
      },
      {
        header: "Hành động",
        cell: ({
          row: {
            original: { id, status },
          },
        }) => (
          <div className="flex space-x-2 text-xl">
            <Link to={`/tickets/${id}`}>
              <Tooltip content="Chi tiết">
                <div>
                  <AiOutlineEye />
                </div>
              </Tooltip>
            </Link>
          </div>
        ),
      },
    ],
    []
  )
  const { getHeaderGroups, getRowModel } = useReactTable<ITicket>({
    initialState: {
      columnVisibility: {
        "Người tạo": !!profile?.Admin,
      },
    },
    columns,
    data: data?.data || [],
    getCoreRowModel: getCoreRowModel(),
  })

  return {
    getHeaderGroups,
    getRowModel,
    data,
    isLoading: isLoading || isFetching,
  }
}