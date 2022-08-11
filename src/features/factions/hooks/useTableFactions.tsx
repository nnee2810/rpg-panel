import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { API } from "configs/api"
import { useAppSelector } from "hooks"
import { IFaction } from "interfaces"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { userSelector } from "store/reducers/user"

export default function useTableFactions() {
  const { profile } = useAppSelector(userSelector)
  const { data = [], isLoading } = useQuery(
    ["get-factions"],
    async () => (await API.get<IFaction[]>("/factions")).data
  )

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
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return { getHeaderGroups, getRowModel, isLoading }
}
