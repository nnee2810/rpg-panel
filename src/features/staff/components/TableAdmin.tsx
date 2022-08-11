import { Spin, Table } from "components/basic"
import { useTableAdmin } from "../hooks"

export default function TableAdmin() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableAdmin()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : (
    <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
  )
}
