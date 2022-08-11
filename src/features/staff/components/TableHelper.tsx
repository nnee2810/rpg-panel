import { Spin, Table } from "components/basic"
import { useTableHelper } from "../hooks"

export default function TableAdmin() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableHelper()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : (
    <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
  )
}
