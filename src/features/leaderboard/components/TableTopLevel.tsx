import { Table } from "components"
import { useTableTopLevel } from "../hooks"

export default function TableTopLevel() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableTopLevel()
  return (
    <Table
      headerGroup={getHeaderGroups()}
      rowModel={getRowModel()}
      isLoading={isLoading}
    />
  )
}
