import { Pagination, Table } from "components/basic"
import { useTableOnline } from "../hooks"

export default function TableOnline() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableOnline()

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
