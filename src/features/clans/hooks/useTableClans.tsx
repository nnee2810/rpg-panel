import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { API } from "configs/api"
import { PaginationDto } from "dto"
import { PaginationResponse } from "interfaces"
import qs from "qs"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { IClan } from "../interfaces"

function useGetClans(query: PaginationDto) {
  const queryString = qs.stringify(query, {
    skipNulls: true,
  })

  return useQuery(
    ["get-clans", queryString],
    async () =>
      (await API.get<PaginationResponse<IClan>>(`/clans?${queryString}`)).data,
    { keepPreviousData: true }
  )
}

export default function useTableClans() {
  const [query, setQuery] = useState<PaginationDto>({})
  const { data, isLoading } = useGetClans(query)

  const columns = useMemo<ColumnDef<IClan>[]>(
    () => [
      {
        header: "Clan",
        cell: ({
          row: {
            original: { ID, Name, Tag },
          },
        }) => (
          <Link to={`/clans/${ID}`} className="text-emerald-500">
            {Name}
          </Link>
        ),
      },
      {
        header: "Tag",
        cell: ({
          row: {
            original: { Tag, Color },
          },
        }) => <div style={{ color: `#${Color}` }}>{Tag}</div>,
      },
      {
        header: "Chủ clan",
        cell: ({
          row: {
            original: { Owner },
          },
        }) => (
          <Link to={`/users/${Owner}`} className="text-emerald-500">
            {Owner}
          </Link>
        ),
      },
      {
        header: "Thành viên",
        accessorFn: ({ Members, Slots }) => `${Members}/${Slots}`,
      },
      {
        header: "Ngày thành lập",
        accessorKey: "RegisterDate",
      },
    ],
    []
  )
  const { getHeaderGroups, getRowModel } = useReactTable<IClan>({
    columns,
    data: data?.data || [],
    getCoreRowModel: getCoreRowModel(),
  })
  const handleChangePage = (page: number) => {
    setQuery({ ...query, page })
  }

  return { getHeaderGroups, getRowModel, data, isLoading, handleChangePage }
}
