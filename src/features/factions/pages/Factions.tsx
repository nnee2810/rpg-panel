import { Pagination, Table } from "components/basic"
import { PageHeader } from "components/core"
import { useTableFactions } from "../hooks"

export default function Factions() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableFactions()

  return (
    <div className="space-y-4">
      <PageHeader>Faction</PageHeader>
      <Table
        headerGroup={getHeaderGroups()}
        rowModel={getRowModel()}
        isLoading={isLoading}
      />
      {data && (
        <Pagination
          currentPage={data.page}
          totalPage={Math.ceil(data.total / data.take)}
          onPageChange={handleChangePage}
        />
      )}
    </div>
  )
}
