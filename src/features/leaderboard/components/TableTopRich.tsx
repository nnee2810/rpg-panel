import { Table } from "components"
import { useTableTopRich } from "../hooks"

export default function TableTopRich() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableTopRich()
  return (
    <Table
      headerGroup={getHeaderGroups()}
      rowModel={getRowModel()}
      isLoading={isLoading}
    />
  )
}
