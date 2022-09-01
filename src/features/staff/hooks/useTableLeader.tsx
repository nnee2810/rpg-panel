import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { UserLink } from "components"
import { factions } from "configs/constants"
import { GetUsersDto } from "features/users/dto"
import { useGetUsers } from "features/users/hooks"
import { IUser } from "features/users/interfaces"
import { useMemo, useState } from "react"

export default function useTableLeader() {
  const [query, setQuery] = useState<GetUsersDto>({
    isLeader: true,
  })
  const { data, isLoading, isFetching } = useGetUsers(query)

  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
      {
        header: "Tên",
        cell: ({ row: { original } }) => <UserLink data={original} />,
      },
      {
        header: "Faction",
        accessorFn: ({ Leader }) => factions[Leader - 1].name,
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

  return {
    getHeaderGroups,
    getRowModel,
    data,
    isLoading: isLoading || isFetching,
    handleChangePage,
  }
}
