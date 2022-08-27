import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { UserLink } from "components/core"
import { GetUsersDto } from "features/users/dto"
import { useGetUsers } from "features/users/hooks"
import { IUser } from "features/users/interfaces"
import { useMemo, useState } from "react"

export default function useTableHelper() {
  const [query, setQuery] = useState<GetUsersDto>({
    isHelper: true,
  })
  const { data, isLoading, isFetching } = useGetUsers(query)

  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
      {
        header: "Tên",
        cell: ({
          row: {
            original: { name, Status },
          },
        }) => <UserLink name={name} online={!!Status} />,
      },
      {
        header: "Helper",
        accessorKey: "Helper",
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
