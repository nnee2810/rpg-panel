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
import { formatCurrency } from "utils/format"

interface IUserWithTotalMoney extends IUser {
  totalMoney: string
}

function useGetTopRich() {
  return useQuery(
    ["get-statistic-top-rich"],
    async () =>
      (await API.get<IUserWithTotalMoney[]>("/statistic/top-rich")).data
  )
}

export default function useTableTopRich() {
  const { data = [], isLoading, isFetching } = useGetTopRich()

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
        }) => <UserLink name={name} online={!!Status} />,
      },
      {
        header: "Tổng tài sản",
        accessorFn: ({ totalMoney }) => formatCurrency(totalMoney),
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

  return { getHeaderGroups, getRowModel, isLoading: isLoading || isFetching }
}
