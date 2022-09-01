import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { UserLink } from "components"
import { API } from "configs/api"
import { PaginationDto } from "dto"
import { IUser } from "features/users/interfaces"
import { PaginationData } from "interfaces"
import qs from "qs"
import { useMemo, useState } from "react"

function useGetFactionMembers(id: string, query: PaginationDto) {
  const queryString = qs.stringify(query, {
    skipNulls: true,
  })

  return useQuery(
    ["get-faction-members", queryString],
    async () =>
      (
        await API.get<PaginationData<IUser>>(
          `/factions/${id}/members?${queryString}`
        )
      ).data
  )
}

export default function useTableFactionMembers(id: string) {
  const [query, setQuery] = useState<PaginationDto>({})
  const { data, isLoading, isFetching } = useGetFactionMembers(id, query)

  const updateQuery = (values: PaginationDto) => {
    setQuery({
      ...query,
      ...values,
    })
  }
  const columns = useMemo<ColumnDef<IUser>[]>(
    () => [
      {
        header: "Tên",
        cell: ({ row: { original } }) => <UserLink data={original} />,
      },
      {
        header: "Rank",
        accessorKey: "Rank",
      },
      {
        header: "Cảnh cáo",
        accessorFn: (user) => `${user.FWarn}/3`,
      },
      {
        header: "Đã tham gia",
        accessorFn: (user) => `${user.Days} ngày`,
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

  return {
    getHeaderGroups,
    getRowModel,
    data,
    isLoading: isLoading || isFetching,
    updateQuery,
  }
}
