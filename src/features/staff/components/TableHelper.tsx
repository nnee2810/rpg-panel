import { Pagination, Table } from "components"
import { useTableHelper } from "../hooks"

export default function TableHelper() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableHelper()

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
