import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Tag, Tooltip, UserLink } from "components"
import { useAppSelector } from "hooks"
import moment from "moment"
import { useMemo } from "react"
import { AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { userSelector } from "store/reducers/user"
import { formatCurrency } from "utils"
import { ITxn } from "../interfaces"

export default function useTableTxnLogs(data: ITxn[]) {
  const { profile } = useAppSelector(userSelector)

  const columns = useMemo<ColumnDef<ITxn>[]>(
    () => [
      {
        header: "Mã giao dịch",
        accessorFn: ({ transactionNo }) =>
          transactionNo !== "0" ? transactionNo : "-",
      },
      {
        header: "Mã tham chiếu",
        accessorKey: "txnRef",
      },
      {
        header: "Tên",
        cell: ({
          row: {
            original: { user },
          },
        }) => <UserLink data={user} />,
      },
      {
        header: "Trạng thái",
        cell: ({
          row: {
            original: { responseCode },
          },
        }) =>
          responseCode === "00" ? (
            <Tag scheme="primary">Thành công</Tag>
          ) : (
            <Tag scheme="red">Không thành công</Tag>
          ),
      },
      {
        header: "Đơn giá",
        accessorFn: ({ amount }) => formatCurrency(amount, ""),
      },
      {
        header: "Xu nhận được",
        accessorKey: "received",
      },
      {
        header: "Số xu mới",
        accessorKey: "newBalance",
      },
      {
        header: "Ngày giao dịch",
        accessorFn: ({ createdAt }) =>
          moment(createdAt).format("DD/MM/YYYY HH:mm:ss"),
      },
      {
        header: "Hành động",
        cell: ({
          row: {
            original: { txnRef },
          },
        }) => (
          <div className="flex space-x-2 text-xl">
            <Tooltip content="Chi tiết">
              <Link to={`/topup/txn/${txnRef}`}>
                <AiOutlineEye />
              </Link>
            </Tooltip>
          </div>
        ),
      },
    ],
    []
  )
  const { getHeaderGroups, getRowModel } = useReactTable<ITxn>({
    initialState: {
      columnVisibility: {
        Tên: !!profile?.Admin,
      },
    },
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return { headerGroup: getHeaderGroups(), rowModel: getRowModel() }
}
