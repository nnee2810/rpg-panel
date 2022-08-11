import { Spin, Table } from "components/basic"
import { useTableTopRich } from "../hooks"

export default function TableTopRich() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableTopRich()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : (
    <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
  )
}
