import { Table } from "components"
import { useTableTopConnectedTime } from "../hooks"

export default function TableTopConnectedTime() {
  const { getHeaderGroups, getRowModel, isLoading } = useTableTopConnectedTime()
  return (
    <Table
      headerGroup={getHeaderGroups()}
      rowModel={getRowModel()}
      isLoading={isLoading}
    />
  )
}
