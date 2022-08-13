import { Pagination, Table } from "components/basic"
import { useTableAdmin } from "../hooks"

export default function TableAdmin() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableAdmin()
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
