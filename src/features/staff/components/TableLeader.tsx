import { Pagination, Table } from "components/basic"
import { useTableLeader } from "../hooks"

export default function TableLeader() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableLeader()
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
