import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { API } from "configs/api"
import { PaginationDto } from "dto"
import { useAppSelector } from "hooks"
import { PaginationData } from "interfaces"
import qs from "qs"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { userSelector } from "store/reducers/user"
import { IFaction } from "../interfaces"

function useGetFactions(query: PaginationDto) {
  const queryString = qs.stringify(query, {
    skipNulls: true,
  })

  return useQuery(
    ["get-factions", queryString],
    async () =>
      (await API.get<PaginationData<IFaction>>(`/factions?${queryString}`))
        .data,
    { keepPreviousData: true }
  )
}

export default function useTableFactions() {
  const { profile } = useAppSelector(userSelector)
  const [query, setQuery] = useState<PaginationDto>({})
  const { data, isLoading, isFetching } = useGetFactions(query)

  const columns = useMemo<ColumnDef<IFaction>[]>(
    () => [
      {
        header: "Faction",
        cell: ({
          row: {
            original: { ID, Name },
          },
        }) => (
          <Link to={`/factions/${ID}`} className="text-emerald-500">
            {Name}
          </Link>
        ),
      },
      {
        header: "Thành viên",
        accessorFn: ({ Members, Slots }) => `${Members} / ${Slots}`,
      },
      {
        header: "Level tối thiểu",
        accessorKey: "Level",
      },
      {
        header: "Tuyển dụng",
        cell({
          row: {
            original: { Level, App },
          },
        }) {
          if (!profile) return ""
          if (App) {
            if (profile.Level >= Level)
              return (
                <div className="text-emerald-500">Đủ điều kiện ứng tuyển</div>
              )
            return (
              <div className="text-red-500">Không đủ điều kiện ứng tuyển</div>
            )
          }
          return <div>Không tuyển dụng</div>
        },
      },
    ],
    [profile]
  )
  const { getHeaderGroups, getRowModel } = useReactTable<IFaction>({
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
