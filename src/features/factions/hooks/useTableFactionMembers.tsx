import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Ping } from "components/basic"
import { API } from "configs/api"
import { IUser } from "features/users/interfaces"
import { PaginationResponse } from "interfaces"
import qs from "qs"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { GetFactionMembersDto } from "../dto"

function useGetFactionMembers({ id, ...query }: GetFactionMembersDto) {
  const queryString = qs.stringify(query, {
    skipNulls: true,
  })

  return useQuery(
    ["get-faction-members", queryString],
    async () =>
      (
        await API.get<PaginationResponse<IUser>>(
          `/factions/${id}/members?${queryString}`
        )
      ).data,
    {
      keepPreviousData: true,
    }
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
        }) => (
          <div className="flex items-center space-x-2">
            <Ping online={!!Status} />
            <Link to={`/users/${name}`} className="text-emerald-500">
              {name}
            </Link>
          </div>
        ),
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
