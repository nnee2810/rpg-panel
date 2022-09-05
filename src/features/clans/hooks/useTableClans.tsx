import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Tooltip, UserLink } from "components"
import { API } from "configs/api"
import { PaginationDto } from "dto"
import { PaginationData } from "interfaces"
import qs from "query-string"
import { useMemo, useState } from "react"
import { AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { IClan } from "../interfaces"

function useGetClans(query: PaginationDto) {
  const queryString = qs.stringify(query, {
    skipEmptyString: true,
    skipNull: true,
  })

  return useQuery(
    ["get-clans", queryString],
    async () =>
      (await API.get<PaginationData<IClan>>(`/clans?${queryString}`)).data
  )
}

export default function useTableClans() {
  const [query, setQuery] = useState<PaginationDto>({})
  const { data, isLoading } = useGetClans(query)

  const columns = useMemo<ColumnDef<IClan>[]>(
    () => [
      {
        header: "Clan",
        accessorKey: "Name",
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
        }) => <UserLink data={Owner} />,
      },
      {
        header: "Thành viên",
        accessorFn: ({ Members, Slots }) => `${Members}/${Slots}`,
      },
      {
        header: "Ngày thành lập",
        accessorKey: "RegisterDate",
      },
      {
        header: "Hành động",
        cell: ({
          row: {
            original: { ID },
          },
        }) => (
          <div className="flex space-x-2 text-xl">
            <Tooltip content="Chi tiết">
              <Link to={`/clans/${ID}`}>
                <AiOutlineEye />
              </Link>
            </Tooltip>
          </div>
        ),
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
