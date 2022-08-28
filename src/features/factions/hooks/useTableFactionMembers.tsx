import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { UserLink } from "components/core"
import { API } from "configs/api"
import { IUser } from "features/users/interfaces"
import { PaginationData } from "interfaces"
import qs from "qs"
import { useMemo, useState } from "react"
import { GetFactionMembersDto } from "../dto"

function useGetFactionMembers({ id, ...query }: GetFactionMembersDto) {
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
  const [query, setQuery] = useState<GetFactionMembersDto>({ id })
  const { data, isLoading, isFetching } = useGetFactionMembers(query)

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
