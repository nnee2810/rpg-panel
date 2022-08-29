import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { UserLink } from "components/core"
import { API } from "configs/api"
import { IUser } from "features/users/interfaces"
import { useMemo } from "react"

function useGetTopLevel() {
  return useQuery(
    ["get-statistic-top-level"],
    async () => (await API.get<IUser[]>("/statistic/top-level")).data
  )
}

export default function useTableTopLevel() {
  const { data = [], isLoading, isFetching } = useGetTopLevel()

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
        cell: ({ row: { original } }) => <UserLink data={original} />,
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
