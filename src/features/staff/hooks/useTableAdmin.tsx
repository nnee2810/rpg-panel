import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Ping } from "components/basic"
import { GetUsersDto } from "features/admin/dto"
import { useGetUsers } from "features/admin/hooks"
import { IUser } from "interfaces"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"

export default function useTableAdmin() {
  const [query, setQuery] = useState<GetUsersDto>({
    isAdmin: true,
    page: 1,
  })
  const { data, isLoading } = useGetUsers(query)

  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
      {
        header: "Tên",
        cell: ({
          row: {
            original: { name, Status },
          },
        }) => (
          <div className="flex items-center space-x-2">
            <Ping online={!!Status} />
            <Link to={`/users/${name}`} className="text-emerald-500">
              {name}
            </Link>
          </div>
        ),
      },
      {
        header: "Admin",
        accessorKey: "Admin",
      },
      {
        header: "Đăng nhập lần cuối",
        accessorKey: "lastOn",
      },
    ],
    []
  )
  const { getHeaderGroups, getRowModel } = useReactTable<IUser>({
    columns,
    data: data?.data || [],
    getCoreRowModel: getCoreRowModel(),
  })
  const handleChangePage = (page: number) => {
    setQuery({ ...query, page })
  }

  return { getHeaderGroups, getRowModel, data, isLoading, handleChangePage }
}
