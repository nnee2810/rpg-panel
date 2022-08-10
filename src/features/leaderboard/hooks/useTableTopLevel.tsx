import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Ping } from "components/basic"
import { API } from "configs/api"
import { IUser } from "interfaces"
import { useMemo } from "react"
import { Link } from "react-router-dom"

export default function useTableTopLevel() {
  const { data = [], isLoading } = useQuery(
    ["get-statistic-top-level"],
    async () => (await API.get<IUser[]>("/statistic/top-level")).data
  )

  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
      {
        header: "Tên",
        cell: ({
          row: {
            original: { name, Status },
            index,
          },
        }) => (
          <div className="flex items-center space-x-2">
            <Ping online={!!Status} />
            <Link to={`/users/${name}`} className="text-emerald-500">
              {name} {index === 0 && <span>🥇</span>}
              {index === 1 && <span>🥈</span>}
              {index === 2 && <span>🥉</span>}
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

  return { getHeaderGroups, getRowModel, isLoading }
}
