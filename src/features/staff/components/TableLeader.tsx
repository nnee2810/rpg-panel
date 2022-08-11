import { Spin, Table } from "components/basic"
import { useTableLeader } from "../hooks"

export default function TableLeader() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableLeader()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : (
    <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
  )
}
