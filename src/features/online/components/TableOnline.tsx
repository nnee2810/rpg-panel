import { Spin, Table } from "components/basic"
import { useTableOnline } from "../hooks"

export default function TableOnline() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableOnline()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : (
    <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
  )
}
