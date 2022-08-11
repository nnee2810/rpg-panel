import { Spin, Table } from "components/basic"
import { useTableTopLevel } from "../hooks"

export default function TableTopLevel() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableTopLevel()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : (
    <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
  )
}
