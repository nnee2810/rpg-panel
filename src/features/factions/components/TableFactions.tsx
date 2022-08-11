import { Spin, Table } from "components/basic"
import { useTableFactions } from "../hooks"

export default function TableFactions() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableFactions()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : (
    <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
  )
}
