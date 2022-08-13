import { Pagination, Table } from "components/basic"
import { useTableFactions } from "../hooks"

export default function TableFactions() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableFactions()

  return (
    <div>
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
