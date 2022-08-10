import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Ping } from "components/basic"
import { factions, jobs } from "configs/constants"
import { useGetUsers } from "features/admin/hooks"
import { IUser } from "interfaces"
import { useMemo } from "react"
import { Link } from "react-router-dom"

export default function useTableOnline() {
  const { data = [], isLoading } = useGetUsers({ Status: 1 })

  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
      {
        header: "Tên người chơi",
        cell: ({
          row: {
            original: { name },
          },
        }) => (
          <div className="flex items-center space-x-2">
            <Ping online />
            <Link to={`/users/${name}`} className="text-emerald-500">
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
        header: "Tổ chức",
        accessorFn: ({ Member }) => (Member ? factions[Member].name : "-"),
      },
      {
        header: "Công việc",
        accessorFn: ({ Job }) => (Job ? jobs[Job].name : "-"),
      },
      {
        header: "Thời gian chơi",
        accessorFn: ({ ConnectedTime }) =>
          `${Math.floor(ConnectedTime)} giờ ${Math.round(
            (ConnectedTime - Math.floor(ConnectedTime)) * 60
          )} phút`,
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
