import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Ping } from "components/basic"
import { API } from "configs/api"
import { IUser } from "features/users/interfaces"
import { useMemo } from "react"
import { Link } from "react-router-dom"

export default function useTableTopLevel() {
  const {
    data = [],
    isLoading,
    isFetching,
  } = useQuery(
    ["get-statistic-top-level"],
    async () => (await API.get<IUser[]>("/statistic/top-level")).data
  )

  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
      {
        header: "Hạng",
        cell: ({ row: { index } }) => (
          <>
            <span className="text-xl">
              {index === 0 && "🥇"}
              {index === 1 && "🥈"}
              {index === 2 && "🥉"}
            </span>
            {index > 2 && <span className="pl-2">{index + 1}</span>}
          </>
        ),
      },
      {
        header: "Tên",
        cell: ({
          row: {
            original: { name, Status },
          },
        }) => (
          <div className="flex items-center space-x-2">
            <Ping online={!!Status} />
            <Link to={`/users/profile/${name}`} className="text-emerald-500">
              {name}
            </Link>
          </div>
        ),
      },
      {
        header: "Level",
        accessorKey: "Level",
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
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return { getHeaderGroups, getRowModel, isLoading: isLoading || isFetching }
}
