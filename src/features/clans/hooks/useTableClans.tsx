import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { PaginationDto } from "dto"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useGetClans } from "."
import { IClan } from "../interfaces"

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
          <Link to={`/users/profile/${Owner}`} className="text-emerald-500">
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
