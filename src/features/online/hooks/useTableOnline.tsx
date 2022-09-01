import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { UserLink } from "components"
import { factions, jobs } from "configs/constants"
import { GetUsersDto } from "features/users/dto"
import { useGetUsers } from "features/users/hooks"
import { IUser } from "features/users/interfaces"

import { useMemo, useState } from "react"

export default function useTableOnline() {
  const [query, setQuery] = useState<GetUsersDto>({
    Status: 1,
  })
  const { data, isLoading } = useGetUsers(query)

  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
      {
        header: "Tên người chơi",
        cell: ({ row: { original } }) => <UserLink data={original} />,
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
