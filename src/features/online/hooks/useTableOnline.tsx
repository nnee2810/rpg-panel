import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Ping } from "components/basic"
import { factions, jobs } from "configs/constants"
import { GetUsersDto } from "features/users/dto"
import { useGetUsers } from "features/users/hooks"
import { IUser } from "features/users/interfaces"

import { useMemo, useState } from "react"
import { Link } from "react-router-dom"

export default function useTableOnline() {
  const [query, setQuery] = useState<GetUsersDto>({
    Status: 1,
  })
  const { data, isLoading } = useGetUsers(query)

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
        header: "Faction",
        accessorFn: ({ Member }) => (Member ? factions[Member - 1].name : "-"),
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
    data: data?.data || [],
    getCoreRowModel: getCoreRowModel(),
  })
  const handleChangePage = (page: number) => {
    setQuery({ ...query, page })
  }

  return { getHeaderGroups, getRowModel, data, isLoading, handleChangePage }
}
