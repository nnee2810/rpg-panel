import { Spin, Table } from "components/basic"
import { useTableTopConnectedTime } from "../hooks"

export default function TableTopConnectedTime() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableTopConnectedTime()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : (
    <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
  )
}
