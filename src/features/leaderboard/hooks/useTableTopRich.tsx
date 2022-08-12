import { useQuery } from "@tanstack/react-query"
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Ping } from "components/basic"
import { API } from "configs/api"
import currency from "currency.js"
import { IUser } from "interfaces"
import { useMemo } from "react"
import { Link } from "react-router-dom"

interface IUserWithTotalMoney extends IUser {
  totalMoney: string
}

export default function useTableTopRich() {
  const { data = [], isLoading } = useQuery(
    ["get-statistic-top-rich"],
    async () =>
      (await API.get<IUserWithTotalMoney[]>("/statistic/top-rich")).data
  )

  const columns = useMemo<ColumnDef<IUserWithTotalMoney>[]>(
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
        header: "Tổng tài sản",
        accessorFn: ({ totalMoney }) =>
          currency(totalMoney, { precision: 0 }).format({ separator: "." }),
      },
      {
        header: "Đăng nhập lần cuối",
        accessorKey: "lastOn",
      },
    ],
    []
  )
  const { getHeaderGroups, getRowModel } = useReactTable<IUserWithTotalMoney>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return { getHeaderGroups, getRowModel, isLoading }
}